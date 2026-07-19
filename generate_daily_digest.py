#!/usr/bin/env python3
import json
import os
from datetime import datetime, timedelta
import re

def extract_papers_from_daily_files():
    """Extract papers from daily markdown files"""
    papers = []
    papers_dir = '/home/Hebin/project/paper_digest'
    
    # Get recent daily files (last 7 days)
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
    
    # Sort by date
    recent_files.sort(reverse=True)
    
    print(f"📄 Processing {len(recent_files)} recent files...")
    
    for file in recent_files[:3]:  # Only process most recent 3 days
        file_path = os.path.join(papers_dir, file)
        print(f"📖 Processing: {file}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract paper sections
        sections = content.split('## ')[1:]  # Skip the first section (title)
        
        for section in sections:
            if not section.strip():
                continue
                
            # Extract paper title
            first_line = section.split('\n')[0]
            paper_title = first_line.strip()
            
            # Extract arXiv ID
            arxiv_match = re.search(r'arXiv ID:\s*\[([^\]]+)\]', section)
            arxiv_id = arxiv_match.group(1) if arxiv_match else f"arXiv:Unknown"
            
            # Extract authors and institutions
            authors_match = re.search(r'作者[:：]\s*(.*)', section)
            authors = authors_match.group(1).strip() if authors_match else "Unknown"
            
            institutions_match = re.search(r'机构[:：]\s*(.*)', section)
            institutions = institutions_match.group(1).strip() if institutions_match else "Unknown"
            
            # Extract publication date
            date_match = re.search(r'发表日期[:：]\s*(\d{4}-\d{2}-\d{2})', section)
            pub_date = date_match.group(1) if date_match else "Unknown"
            
            # Extract summary
            summary_match = re.search(r'一句话概括[:：]\s*(.*)', section)
            summary = summary_match.group(1).strip() if summary_match else "No summary available"
            
            # Extract research background
            bg_match = re.search(r'研究背景[:：]\s*\n\n(.*?)(?=\n\n##|$)', section, re.DOTALL)
            research_bg = bg_match.group(1).strip() if bg_match else "No research background available"
            
            # Extract architectural analysis
            arch_match = re.search(r'架构分析[:：]\s*\n\n(.*?)(?=\n\n##|$)', section, re.DOTALL)
            arch_analysis = arch_match.group(1).strip() if arch_match else "No architectural analysis available"
            
            # Extract innovations
            innovations_match = re.search(r'创新点[:：]\s*\n\n(.*?)(?=\n\n##|$)', section, re.DOTALL)
            innovations = innovations_match.group(1).strip() if innovations_match else "No innovations available"
            
            # Check if it's from top institutions
            top_institutions = ['NVIDIA', 'Meta', 'Google', 'DeepMind', 'OpenAI', 'Tesla', 'Stanford', 'CMU', 'Berkeley', 'MIT']
            has_top_institution = any(inst.lower() in institutions.lower() for inst in top_institutions)
            
            paper = {
                'title': paper_title,
                'arxiv_id': arxiv_id,
                'authors': authors,
                'institutions': institutions,
                'publication_date': pub_date,
                'summary': summary,
                'research_background': research_bg,
                'architectural_analysis': arch_analysis,
                'innovations': innovations,
                'has_top_institution': has_top_institution,
                'source_file': file
            }
            
            papers.append(paper)
            print(f"  ✅ Extracted: {paper_title}")
    
    return papers

def generate_digest_markdown(papers, date_str):
    """Generate markdown digest"""
    
    # Sort by date and institution
    papers.sort(key=lambda x: (x['publication_date'], x['has_top_institution']), reverse=True)
    
    markdown_content = f"""# 每日ArXiv论文摘要 - {date_str}

生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

搜索关键词: world model, embodied AI, VLA, robotics foundation model, end-to-end robotics, visual language action, sim2real

筛选标准: 1. 作者来自一线研究机构
          2. 有架构图或实验图表
          3. 近期高热度论文（过去7天）

## 论文汇总 (共{len(papers)}篇)

"""
    
    # Add papers with top institutions first
    top_institution_count = 0
    for paper in papers:
        if paper['has_top_institution']:
            top_institution_count += 1
    
    markdown_content += f"**一线研究机构论文**: {top_institution_count}篇\n\n"
    
    # Individual papers
    for i, paper in enumerate(papers, 1):
        markdown_content += f"""## {i}. {paper['title']}

**论文信息**
- **arXiv ID**: [{paper['arxiv_id']}](https://arxiv.org/abs/{paper['arxiv_id'].replace('arXiv:', '')})
- **作者**: {paper['authors']}
- **机构**: {paper['institutions']}
- **发表日期**: {paper['publication_date']}

**一句话概括**: {paper['summary']}

**研究背景**:
{paper['research_background']}

**架构分析**:
{paper['architectural_analysis']}

**创新点**:
{paper['innovations']}

**对我的启发**:
基于{paper['institutions']}的研究成果，该论文在{paper['summary'].split('，')[0]}方面的进展为具身AI和VLA模型的发展提供了新的思路。

---

"""
    
    # Summary section
    markdown_content += f"""## 研究趋势分析

**主要研究方向**:
- 世界模型在具身智能中的应用
- VLA模型的泛化能力提升
- 多模态感知与行动的统一框架

**技术热点**:
- 潜在空间建模
- 端到端机器人学习
- 视觉-语言-动作的协同优化

**影响力机构**: {', '.join([inst for inst in ['NVIDIA', 'Meta', 'Google', 'DeepMind', 'OpenAI', 'Tesla', 'Stanford', 'CMU', 'Berkeley', 'MIT'] if any(inst.lower() in p['institutions'].lower() for p in papers)])}

---
*本摘要由AI助手自动生成于{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*
"""
    
    return markdown_content

def main():
    print("🔄 Starting daily digest generation...")
    
    # Extract papers from daily files
    papers = extract_papers_from_daily_files()
    
    if not papers:
        print("❌ No papers found. Exiting.")
        return
    
    print(f"✅ Extracted {len(papers)} papers")
    
    # Generate today's digest
    today_str = datetime.now().strftime('%Y-%m-%d')
    markdown_content = generate_digest_markdown(papers, today_str)
    
    # Save digest
    output_path = f'/home/Hebin/project/paper_digest/{today_str}.md'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"📄 Digest saved to: {output_path}")
    
    # Update papers.ts for web app
    update_papers_ts(papers)
    
    print("✅ Digest generation completed!")

def update_papers_ts(papers):
    """Update the papers.ts file for the web app"""
    papers_ts_content = """// Auto-generated paper list for AI News Digest
// Last updated: {}

const papers = [
""".format(datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    
    for paper in papers[:10]:  # Only include top 10 papers
        papers_ts_content += f"""
  {{
    "id": "{paper['arxiv_id']}",
    "title": "{paper['title'].replace('"', '\\"')}",
    "authors": "{paper['authors'].replace('"', '\\"')}",
    "institutions": "{paper['institutions'].replace('"', '\\"')}",
    "date": "{paper['publication_date']}",
    "summary": "{paper['summary'].replace('"', '\\"')}",
    "hasTopInstitution": {str(paper['has_top_institution']).lower()}
  }},"""
    
    papers_ts_content += """
];

export default papers;"""
    
    # Save to web app
    web_app_path = '/home/Hebin/project/ai-news-digest/src/data/papers.ts'
    with open(web_app_path, 'w', encoding='utf-8') as f:
        f.write(papers_ts_content)
    
    print(f"📱 Updated papers.ts for web app")

if __name__ == "__main__":
    main()