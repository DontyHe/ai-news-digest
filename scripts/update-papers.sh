#!/bin/bash
# Script to update website data from paper digest markdown files
# Run this after cron job generates new markdown files

set -e

PAPER_DIR="$HOME/project/paper_digest"
WEBSITE_DIR="$HOME/project/ai-news-digest"
TODAY=$(date +%Y-%m-%d)

echo "Updating website data..."

cd "$PAPER_DIR"

# Parse all paper markdown files and generate fullPapers.json
python3 << 'EOF'
import json
import re
import os
from datetime import datetime

all_papers = []

# Files to process
md_files = sorted([f for f in os.listdir('.') if re.match(r'\d{4}-\d{2}-\d{2}\.md$', f)])

for filename in md_files:
    with open(filename, 'r') as f:
        content = f.read()
    
    # Extract date
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', filename)
    date = date_match.group(1) if date_match else datetime.now().strftime('%Y-%m-%d')
    
    # Split by paper titles (## or ### with number)
    papers_in_file = re.split(r'\n(?=###?\s*\d+[\.\)])', content)
    
    for paper_block in papers_in_file:
        if not paper_block.strip() or '## 总结' in paper_block or '具身智能与世界模型' in paper_block:
            continue
            
        # Get title
        title_match = re.search(r'###?\s*\d+[\.\)]\s+(.+)$', paper_block.strip(), re.MULTILINE)
        if not title_match:
            continue
            
        title = title_match.group(1).strip()
        
        # Get arXiv ID
        arxiv_match = re.search(r'arXiv[:#]?\s*(\d+\.\d+)', paper_block)
        
        if arxiv_match:
            arxiv_id = arxiv_match.group(1)
            paper_id = f"paper-{arxiv_id.replace('.', '')}"
        else:
            # Generate ID from title keywords
            first_word = title.split(':')[0].lower().replace(' ', '-')[:25]
            paper_id = f"{first_word}-{date}"
        
        paper = {
            'id': paper_id,
            'title': title,
            'date': date,
            'content': paper_block.strip(),
            'pdfUrl': f"https://arxiv.org/pdf/{arxiv_id}" if arxiv_match else '',
            'htmlUrl': f"https://arxiv.org/abs/{arxiv_id}" if arxiv_match else ''
        }
        
        all_papers.append(paper)

# Deduplicate by ID
seen = set()
unique_papers = []
for p in all_papers:
    if p['id'] not in seen:
        seen.add(p['id'])
        unique_papers.append(p)

# Sort by date (newest first)
unique_papers.sort(key=lambda x: x['date'], reverse=True)

# Save
with open('/home/Hebin/project/ai-news-digest/src/data/fullPapers.json', 'w') as f:
    json.dump(unique_papers, f, ensure_ascii=False, indent=2)

print(f"Generated {len(unique_papers)} papers")
for p in unique_papers[:5]:
    print(f"  - {p['id']}: {p['title'][:40]}...")
EOF

# Regenerate papers.ts
python3 << 'EOF'
import json

# Load fullPapers
with open('/home/Hebin/project/ai-news-digest/src/data/fullPapers.json') as f:
    full_papers = json.load(f)

lines = []
lines.append("// 论文数据 - 由 cron 任务每日更新")
lines.append("// 更新路径: /home/Hebin/project/ai-news-digest/src/data/papers.json")
lines.append("")
lines.append("export interface Paper {")
lines.append("  id: string;")
lines.append("  title: string;")
lines.append("  authors: string;")
lines.append("  date: string;")
lines.append("  institution: string;")
lines.append('  category: "embodied" | "vla" | "worldmodel" | "ai";')
lines.append("  summary: string;")
lines.append("  background: string;")
lines.append("  architecture: string;")
lines.append("  innovations: string;")
lines.append("  inspiration: string;")
lines.append("  pdfUrl: string;")
lines.append("  htmlUrl: string;")
lines.append("  figures: string[];")
lines.append("}")
lines.append("")
lines.append("export const papers: Paper[] = [")

for fp in full_papers:
    lines.append("  {")
    lines.append(f'    id: "{fp["id"]}",')
    lines.append(f'    title: "{fp["title"]}",')
    lines.append('    authors: "et al.",')
    lines.append('    institution: "",')
    lines.append(f'    date: "{fp["date"]}",')
    lines.append('    category: "embodied",')
    summary = fp.get('content', '')[:200].replace('"', '\\"').replace('\n', ' ')
    lines.append(f'    summary: "{summary}",')
    lines.append('    background: "",')
    lines.append('    architecture: "",')
    lines.append('    innovations: "",')
    lines.append('    inspiration: "",')
    lines.append(f'    pdfUrl: "{fp.get("pdfUrl", "")}",')
    lines.append(f'    htmlUrl: "{fp.get("htmlUrl", "")}",')
    lines.append("    figures: []")
    lines.append("  },")

lines.append("];")
lines.append("")
lines.append("export default papers;")

with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'w') as f:
    f.write('\n'.join(lines))

print(f"Generated papers.ts with {len(full_papers)} papers")
EOF

# Git push
cd "$WEBSITE_DIR"
git add -A
git commit -m "update: papers $(date +%Y-%m-%d)"
git push origin main

echo "Done! Website updated."
