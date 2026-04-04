#!/usr/bin/env bash
# sync-fullpapers.sh - Parse paper_digest markdown files and sync content into fullPapers.json
# Idempotent: can be run multiple times safely; only updates content where it finds a match.
#
# Usage: bash scripts/sync-fullpapers.sh
#
# Matching logic:
#   - Extracts arxiv IDs from markdown (e.g. 2603.16861)
#   - Converts to paper ID format: paper-260316861 (remove dot, prepend paper-)
#   - Looks up matching entry in fullPapers.json and replaces its content field

set -euo pipefail

DIGEST_DIR="$HOME/project/paper_digest"
JSON_FILE="$HOME/project/ai-news-digest/src/data/fullPapers.json"
TMP_FILE="${JSON_FILE}.tmp"

if [ ! -f "$JSON_FILE" ]; then
  echo "ERROR: $JSON_FILE not found"
  exit 1
fi

# Create a Python script for the heavy lifting (jq can't handle multi-line markdown well)
python3 << 'PYEOF'
import json
import re
import os
import sys
import glob

digest_dir = os.path.expanduser("~/project/paper_digest")
json_file = os.path.expanduser("~/project/ai-news-digest/src/data/fullPapers.json")

# Load existing JSON
with open(json_file, 'r', encoding='utf-8') as f:
    papers = json.load(f)

# Build lookup: paper_id -> index
paper_lookup = {}
for i, p in enumerate(papers):
    paper_lookup[p['id']] = i

# Also build arxiv_id -> paper_id mapping from existing URLs
arxiv_to_paperid = {}
for p in papers:
    pdf_url = p.get('pdfUrl', '')
    html_url = p.get('htmlUrl', '')
    # Extract arxiv ID from URLs like https://arxiv.org/abs/2603.16861 or https://arxiv.org/pdf/2603.16861
    m = re.search(r'arxiv\.org/(?:abs|pdf|html)/(\d{4}\.\d{4,5})', pdf_url + ' ' + html_url)
    if m:
        arxiv_to_paperid[m.group(1)] = p['id']

updated_count = 0
added_count = 0

# Process all markdown files in digest directory
md_files = sorted(glob.glob(os.path.join(digest_dir, '*.md')))

for md_file in md_files:
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the date from the filename
    basename = os.path.basename(md_file)
    file_date = basename.replace('.md', '')

    # Split into individual paper sections by looking for "## N." pattern or "### N." pattern
    # Each paper section starts with ## N. Title or ### N. Title
    # The content runs until the next ## or ### that starts a new paper, or --- separator

    # Find all arxiv IDs in the file and their positions
    # Pattern: arXiv:XXXX.XXXXX
    arxiv_pattern = re.compile(r'arXiv:(\d{4}\.\d{4,5})')

    # Split content by "---" separators between papers, or by "## " headers
    # More robust: split by ## N. or ### N. patterns
    sections = re.split(r'\n(?=## \d+\.|### \d+\.)', content)

    for section in sections:
        if not section.strip():
            continue

        # Find arxiv ID in this section
        arxiv_match = arxiv_pattern.search(section)
        if not arxiv_match:
            continue

        arxiv_id = arxiv_match.group(1)

        # Convert arxiv ID to paper ID format: 2603.16861 -> paper-260316861
        paper_id = 'paper-' + arxiv_id.replace('.', '')

        # Extract the full section content (everything from the ## header to the next ---)
        # Clean up: take from the section header to the --- separator
        section_content = section.strip()

        # Remove trailing --- if present
        if section_content.endswith('---'):
            section_content = section_content[:-3].strip()

        # Also remove the last line if it's just "---"
        lines = section_content.split('\n')
        while lines and lines[-1].strip() == '---':
            lines.pop()
        section_content = '\n'.join(lines).strip()

        # Check if we have a matching paper in the JSON
        if paper_id in paper_lookup:
            idx = paper_lookup[paper_id]
            old_content = papers[idx].get('content', '')
            papers[idx]['content'] = section_content
            updated_count += 1
        elif arxiv_id in arxiv_to_paperid:
            # Match via URL mapping
            pid = arxiv_to_paperid[arxiv_id]
            idx = paper_lookup[pid]
            old_content = papers[idx].get('content', '')
            papers[idx]['content'] = section_content
            updated_count += 1

# Write back
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(papers, f, ensure_ascii=False, indent=2)

print(f"Updated {updated_count} papers in fullPapers.json")
print(f"Total papers in file: {len(papers)}")
PYEOF

echo "Sync complete."
