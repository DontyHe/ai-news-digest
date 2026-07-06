import json
import re
from datetime import datetime, timedelta

# Read the papers.ts file
print("Reading papers.ts file...")
with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract papers between June 21-27, 2026
print("Extracting papers from June 21-27, 2026...")

# Find all paper objects
paper_pattern = r'(\{[^}]+id: "([^"]+)",[^}]+\})'
papers = re.findall(paper_pattern, content, re.DOTALL)

recent_papers = []
for paper_match in papers:
    paper_text = paper_match[0]
    paper_id = paper_match[1]
    
    # Extract date
    date_match = re.search(r'date: "([^"]+)"', paper_text)
    if date_match:
        date_str = date_match.group(1)
        try:
            paper_date = datetime.strptime(date_str, '%Y-%m-%d')
            start_date = datetime(2026, 6, 21)
            end_date = datetime(2026, 6, 27)
            
            if start_date <= paper_date <= end_date:
                # Extract title
                title_match = re.search(r'title: "([^"]+)"', paper_text)
                title = title_match.group(1) if title_match else "Unknown"
                
                # Extract authors
                authors_match = re.search(r'authors: "([^"]+)"', paper_text)
                authors = authors_match.group(1) if authors_match else "Unknown"
                
                # Extract category
                category_match = re.search(r'category: "([^"]+)"', paper_text)
                category = category_match.group(1) if category_match else "unknown"
                
                # Extract summary
                summary_match = re.search(r'summary: "([^"]+)"', paper_text)
                summary = summary_match.group(1) if summary_match else "No summary available"
                
                recent_papers.append({
                    'id': paper_id,
                    'date': date_str,
                    'title': title,
                    'authors': authors,
                    'category': category,
                    'summary': summary
                })
                
                print(f"Found: {paper_id} - {title[:50]}...")
                
        except ValueError:
            continue

print(f"\nTotal papers found: {len(recent_papers)}")

# Generate markdown digest
print("\nGenerating markdown digest...")
current_date = datetime.now().strftime('%Y-%m-%d')

markdown_content = f"""# ArXiv 论文摘要 - 具身智能/VLA/世界模型
**生成日期**: {current_date}
**时间范围**: 2026年6月21日 - 2026年6月27日
**搜索关键词**: world model, embodied AI, VLA, robotics foundation model, end-to-end robotics, visual language action, sim2real

---

## 论文列表 ({len(recent_papers)}篇)

"""

for i, paper in enumerate(recent_papers, 1):
    markdown_content += f"""
### {i}. {paper['title']}

**论文ID**: arXiv:{paper['id'].split('-')[0]}.{paper['id'].split('-')[1] if '-' in paper['id'] else paper['id'][4:]}  
**日期**: {paper['date']}  
**类别**: {paper['category']}  
**作者**: {paper['authors']}  

**一句话概括**: {paper['summary'].split('**')[1].replace('**', '') if '**' in paper['summary'] else paper['summary'][:200]}...

---

"""

# Save the digest
output_file = f'/home/Hebin/project/paper_digest/{current_date}.md'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(markdown_content)

print(f"Digest saved to: {output_file}")

# Create a simplified JSON version for the ai-news-digest project
json_output = []
for paper in recent_papers:
    json_output.append({
        'id': paper['id'],
        'title': paper['title'],
        'authors': paper['authors'],
        'date': paper['date'],
        'institution': '',  # Would need to extract from actual papers
        'category': paper['category'],
        'summary': paper['summary'],
        'background': '',  # Would need extraction
        'architecture': '',  # Would need extraction
        'innovations': '',  # Would need extraction
        'inspiration': '',  # Would need extraction
        'pdfUrl': f'https://arxiv.org/pdf/{paper["id"].split("-")[0]}.{paper["id"].split("-")[1] if "-" in paper["id"] else paper["id"][4:]}.pdf',
        'htmlUrl': f'https://arxiv.org/abs/{paper["id"].split("-")[0]}.{paper["id"].split("-")[1] if "-" in paper["id"] else paper["id"][4:]}',
        'figures': []
    })

# Save JSON version
json_file = f'/home/Hebin/project/ai-news-digest/src/data/papers_{current_date}.json'
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(json_output, f, indent=2, ensure_ascii=False)

print(f"JSON data saved to: {json_file}")