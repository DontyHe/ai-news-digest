import json
import re

# Read the new JSON data
new_papers_path = 'src/data/papers_2026-06-28.json'
with open(new_papers_path, 'r', encoding='utf-8') as f:
    new_papers = json.load(f)

print(f"Loaded {len(new_papers)} new papers")

# Read the existing papers.ts file
papers_ts_path = 'src/data/papers.ts'
with open(papers_ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Generate new paper entries
new_entries = []
for paper in new_papers:
    entry = f"""  {{
    id: "{paper['id']}",
    title: "{paper['title'].replace('"', '\\"')}",
    authors: "{paper['authors'].replace('"', '\\"')}",
    date: "{paper['date']}",
    institution: "{paper['institution'].replace('"', '\\"')}",
    category: "{paper['category']}" as const,
    summary: "{paper['summary'].replace('"', '\\"')}",
    background: "{paper['background'].replace('"', '\\"')}",
    architecture: "{paper['architecture'].replace('"', '\\"')}",
    innovations: "{paper['innovations'].replace('"', '\\"')}",
    inspiration: "{paper['inspiration'].replace('"', '\\"')}",
    pdfUrl: "{paper['pdfUrl']}",
    htmlUrl: "{paper['htmlUrl']}",
    figures: {json.dumps(paper['figures'])}
  }},"""
    new_entries.append(entry)

# Insert new papers after the export line
content = re.sub(
    r'(export const papers: Paper\[\] = \[)',
    r'\n' + '\n'.join(new_entries) + '\n',
    content,
    flags=re.DOTALL
)

# Write back to file
with open(papers_ts_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated papers.ts with {len(new_papers)} new papers")