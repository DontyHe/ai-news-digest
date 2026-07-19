#!/usr/bin/env python3
import json
import os
from datetime import datetime, timedelta
import re

def create_recent_digest():
    """Create a digest based on recent papers"""
    
    # Papers directory
    papers_dir = '/home/Hebin/project/paper_digest'
    today = datetime.now().strftime('%Y-%m-%d')
    
    # Get recent files
    recent_files = []
    for file in os.listdir(papers_dir):
        if file.startswith('2026-07-') and file.endswith('.md'):
            file_date = file.replace('.md', '')
            try:
                file_datetime = datetime.strptime(file_date, '%Y-%m-%d')
                if (datetime.now() - file_datetime).days <= 7:
                    recent_files.append(file)
            except:
                continue
    
    # Sort by date (newest first)
    recent_files.sort(reverse=True)
    print(f"Found {len(recent_files)} recent files")
    
    # Read the most recent file to extract papers
    papers = []
    if recent_files:
        latest_file = os.path.join(papers_dir, recent_files[0])
        print(f"Reading: {latest_file}")
        
        with open(latest_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract paper sections - look for proper paper titles
        sections = content.split('## ')[1:]  # Skip the title
        
        for section in sections:
            if not section.strip():
                continue
                
            # Extract basic info
            lines = section.split('\n')
            title_line = lines[0].strip()
            
            # Skip non-paper sections
            if title_line in ['论文信息', '摘要', '架构分析', '实验结果', '创新点', '今日暂无新论文']:
                continue
                
            print(f"Processing paper: {title_line[:50]}...")
            
            # Extract arXiv ID
            arxiv_match = re.search(r'arXiv ID:\s*\[([^\]]+)\]', section)
            arxiv_id = arxiv_match.group(1) if arxiv_match else "Unknown"
            
            # Extract authors
            authors_match = re.search(r'作者[:：]\s*(.+)', section)
            authors = authors_match.group(1).strip() if authors_match else "Unknown"
            
            # Extract date
            date_match = re.search(r'发表日期[:：]\s*(\d{4}-\d{2}-\d{2})', section)
            pub_date = date_match.group(1) if date_match else "Unknown"
            
            # Extract summary (look for the actual summary section)
            summary_lines = []
            found_summary = False
            
            for line in lines:
                line = line.strip()
                if line == '摘要':
                    found_summary = True
                    continue
                elif found_summary and line.startswith('**'):
                    break
                elif found_summary and line:
                    summary_lines.append(line)
            
            summary = '\n'.join(summary_lines).strip() if summary_lines else "No summary available"
            if len(summary) > 200:
                summary = summary[:200] + "..."
            
            # Check for top institution
            top_institutions = ["NVIDIA", "Meta", "Google", "OpenAI", "Stanford", "MIT", "Berkeley", "CMU", "Tesla", "小米"]
            has_top_institution = any(inst in authors for inst in top_institutions)
            
            paper_info = {
                "id": arxiv_id,
                "title": title_line,
                "authors": authors,
                "institutions": authors.split(',')[0] if ',' in authors else authors,
                "publication_date": pub_date,
                "summary": summary,
                "has_top_institution": has_top_institution
            }
            papers.append(paper_info)
            print(f"  -> Added paper with ID: {arxiv_id}")
    
    # Generate digest markdown
    digest_content = f"""# arXiv 具身智能/VLA/世界模型 论文日报

**日期**: {today}  
**周期**: 过去7天（{today} 至 {(datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')}）  
**关键词**: world model, embodied AI, VLA, robotics foundation model, end-to-end robotics, visual language action, sim2real

---

"""
    
    if papers:
        for i, paper in enumerate(papers[:5], 1):  # Include top 5 papers
            digest_content += f"""## {i}. {paper['title']}

**一句话概括**: {paper['summary']}

**论文信息**
- **标题**: {paper['title']}
- **作者**: {paper['authors']}
- **机构**: {paper['institutions']}
- **arXiv ID**: [{paper['id']}](https://arxiv.org/abs/{paper['id']})
- **发表日期**: {paper['publication_date']}

**摘要**
{paper['summary']}

### 架构分析
（需要详细读取论文原文获取架构信息）

### 实验结果
（需要详细读取论文原文获取实验数据）

### 创新点
（需要详细读取论文原文获取创新点）

### 对具身智能算法工程师的启发
（需要详细分析论文价值）

---

"""
    else:
        digest_content += "## 今日暂无新论文\n\n在过去7天中未找到符合条件的具身智能/VLA/世界模型论文。\n\n"
    
    # Save digest for today
    today_digest_path = os.path.join(papers_dir, f'{today}.md')
    with open(today_digest_path, 'w', encoding='utf-8') as f:
        f.write(digest_content)
    
    print(f"✅ Created digest: {today_digest_path}")
    return today_digest_path

if __name__ == "__main__":
    create_recent_digest()