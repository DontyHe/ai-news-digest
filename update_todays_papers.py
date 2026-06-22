#!/usr/bin/env python3
"""
Extract papers from today's digest and update papers.ts
"""
import re
import json
from datetime import datetime

def extract_papers_from_todays_digest():
    """Extract paper information from today's digest file"""
    papers = []
    
    # Today's digest file
    digest_file = '/home/Hebin/project/paper_digest/2026-04-09.md'
    
    with open(digest_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract paper sections - adapted for current format
    pattern = r'## \d+\.\s*(.+?)\n\n\|\s*属性\s*\|\s*内容\s*\|\n\|\s*--\s*\|\s*--\s*\|\n\|\s*\*\*论文ID\*\*\s*\|\s*([0-9]+\.[0-9]+)\s*\|\n\|\s*\*\*作者\*\*\s*\|\s*(.+?)\s*\|\n\|\s*\*\*机构\*\*\s*\|\s*(.+?)\s*\|\n\|\s*\*\*日期\*\*\s*\|\s*(.+?)\s*\|\n\|\s*\*\*类别\*\*\s*\|\s*(.+?)\s*\|\n\|\s*\*\*链接\*\*\s*\|\s*\[arXiv\]\((.+?)\s*\|\s*\[(.+?)\]\((.+?)\)\s*\|\n\n### 一句话概括\n(.+?)\n\n### 研究背景\n(.+?)\n\n### 架构分析\n(.+?)\n\n### 创新点\n(.+?)\n\n### 启发\n(.+?)(?=\n\n## \d+\.|\n## 本周趋势总结)'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    for title_en, arxiv_id, authors, institution, date, categories, arxiv_link, _, summary_zh, background, architecture, innovations, inspiration in matches:
        # Extract category
        category = "ai"  # default
        if "VLA" in title_en or "视觉语言动作" in title_en:
            category = "vla"
        elif "world model" in title_en.lower() or "世界模型" in title_en:
            category = "worldmodel"
        elif "embodied" in title_en.lower() or "具身" in title_en:
            category = "embodied"
        
        # Generate paper ID
        paper_id = f"paper-{arxiv_id}"
        
        # Extract figure URLs (simplified)
        figures = []
        
        paper = {
            "id": paper_id,
            "title": title_en,
            "authors": authors,
            "date": date,
            "institution": institution,
            "category": category,
            "summary": summary_zh,
            "background": background.strip(),
            "architecture": architecture.strip(),
            "innovations": innovations.strip(),
            "inspiration": inspiration.strip(),
            "pdfUrl": f"https://arxiv.org/pdf/{arxiv_id}",
            "htmlUrl": f"https://arxiv.org/abs/{arxiv_id}",
            "figures": figures
        }
        papers.append(paper)
    
    return papers

def update_papers_ts(new_papers):
    """Update papers.ts with new papers"""
    # Read existing papers.ts
    with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing papers array
    start_marker = 'export const papers: Paper[] = ['
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker, start_idx) + len(end_marker)
    
    # Generate new papers content
    new_papers_content = []
    for paper in new_papers:
        paper_str = f'''  {{
    id: "{paper["id"]}",
    title: "{paper["title"]}",
    authors: "{paper["authors"]}",
    date: "{paper["date"]}",
    institution: "{paper["institution"]}",
    category: "{paper["category"]}",
    summary: "{paper["summary"]}",
    background: "{paper["background"]}",
    architecture: "{paper["architecture"]}",
    innovations: "{paper["innovations"]}",
    inspiration: "{paper["inspiration"]}",
    pdfUrl: "{paper["pdfUrl"]}",
    htmlUrl: "{paper["htmlUrl"]}",
    figures: {json.dumps(paper["figures"])},
  }}'''
        new_papers_content.append(paper_str)
    
    # Insert new papers after the first few existing papers
    existing_papers = content[start_idx + len(start_marker):end_idx - len(end_marker)]
    lines = existing_papers.split('\n')
    
    # Insert after first 5 papers
    insert_pos = 0
    for i, line in enumerate(lines):
        if '}, {' in line and i > 4:
            insert_pos = i + 1
            break
    
    # Combine papers
    updated_papers = lines[:insert_pos] + new_papers_content + lines[insert_pos:]
    updated_papers_str = '\n'.join(updated_papers)
    
    # Reconstruct the file
    new_content = content[:start_idx + len(start_marker)] + updated_papers_str + content[end_idx:]
    
    # Write back
    with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated papers.ts with {len(new_papers)} new papers")

def main():
    """Main function"""
    # Extract papers from today's digest
    papers = extract_papers_from_todays_digest()
    
    if papers:
        print(f"Extracted {len(papers)} papers from 2026-04-09.md")
        
        # Update papers.ts
        update_papers_ts(papers)
        print(f"Successfully updated papers.ts with {len(papers)} new papers")
    else:
        print("No papers extracted from today's digest")

if __name__ == "__main__":
    main()