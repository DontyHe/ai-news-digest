#!/usr/bin/env python3
"""
Extract papers from daily digests and update papers.ts
"""
import re
import json
from datetime import datetime

def extract_papers_from_digest(file_path):
    """Extract paper information from markdown digest file"""
    papers = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all paper sections
    paper_pattern = r'## \d+\.(.+?)\n\n\*\*一句话概括\*\*: (.+?)\n\n\*\*论文信息\*\*\n- \*\*标题\*\*: (.+?)\n- \*\*作者\*\*: (.+?)\n- \*\*机构\*\*: (.+?)\n- \*\*arXiv ID\*\*: \[(.+?)\]\((.+?)\)\n- \*\*发表日期\*\*: (.+?)\n- \*\*类别\*\*: (.+?)\n\n\*\*摘要\*\*\n(.+?)\n\n\*\*研究背景\*\*\n(.+?)\n\n\*\*架构分析\*\*\n(.+?)\n\n\*\*创新点\*\*\n(.+?)\n\n\*\*对你的启发\*\*\n(.+?)'
    
    matches = re.findall(paper_pattern, content, re.DOTALL)
    
    for i, (title_en, summary_zh, title_zh, authors, institution, arxiv_id, arxiv_url, date, categories, abstract, background, architecture, innovations, inspiration) in enumerate(matches):
        # Extract category
        category = "ai"  # default
        if "VLA" in title_en or "视觉语言动作" in title_zh:
            category = "vla"
        elif "world model" in title_en.lower() or "世界模型" in title_zh:
            category = "worldmodel"
        elif "embodied" in title_en.lower() or "具身" in title_zh:
            category = "embodied"
        
        # Generate paper ID
        paper_id = f"paper-{arxiv_id.split('/')[-1]}"
        
        # Extract figure URLs (simplified)
        figures = []
        
        paper = {
            "id": paper_id,
            "title": title_zh,
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
    
    # Insert after first 3 papers (or adjust as needed)
    insert_pos = 0
    for i, line in enumerate(lines):
        if '}, {' in line and i > 0:
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
    # Extract papers from recent digests
    recent_dates = ['2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29']
    all_papers = []
    
    for date in recent_dates:
        digest_file = f'/home/Hebin/project/paper_digest/{date}.md'
        try:
            papers = extract_papers_from_digest(digest_file)
            all_papers.extend(papers)
            print(f"Extracted {len(papers)} papers from {date}.md")
        except Exception as e:
            print(f"Error processing {date}.md: {e}")
    
    # Update papers.ts
    if all_papers:
        update_papers_ts(all_papers)
        print(f"Successfully updated papers.ts with {len(all_papers)} new papers")
    else:
        print("No papers extracted")

if __name__ == "__main__":
    main()