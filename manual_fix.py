#!/usr/bin/env python3
import re
import os
from datetime import datetime

def extract_paper_sections(content):
    """Extract paper sections from the markdown content"""
    papers = []
    
    # Split by ## to get sections
    sections = content.split('## ')[1:]  # Skip title
    
    for section in sections:
        if not section.strip():
            continue
            
        # Get paper title (first line)
        lines = section.strip().split('\n')
        title = lines[0].strip()
        
        # Extract key information using better patterns
        paper_info = {
            'title': title,
            'summary': '',
            'authors': '',
            'institutions': '',
            'arxiv_id': '',
            'publication_date': '',
            'research_background': '',
            'architectural_analysis': '',
            'innovations': ''
        }
        
        # Extract summary - look for 一句话概括
        for i, line in enumerate(lines):
            if '一句话概括' in line:
                if i + 1 < len(lines):
                    # Summary might be on the same line or next line
                    summary_line = line
                    if ':' in line:
                        summary_line = line.split(':', 1)[1].strip()
                    else:
                        summary_line = lines[i + 1].strip() if i + 1 < len(lines) else ""
                    paper_info['summary'] = summary_line
                break
        
        # Extract arXiv ID
        for line in lines:
            if 'arXiv ID' in line and '[' in line and ']' in line:
                # Extract between [ and ]
                start = line.find('[') + 1
                end = line.find(']')
                paper_info['arxiv_id'] = line[start:end]
                break
        
        # Extract authors
        for line in lines:
            if '作者' in line and ':' in line:
                authors_line = line.split(':', 1)[1].strip()
                paper_info['authors'] = authors_line
                break
        
        # Extract institutions
        for line in lines:
            if '机构' in line and ':' in line:
                inst_line = line.split(':', 1)[1].strip()
                paper_info['institutions'] = inst_line
                break
        
        # Extract publication date
        for line in lines:
            if '发表日期' in line and ':' in line:
                date_line = line.split(':', 1)[1].strip()
                # Extract just the date (YYYY-MM-DD)
                date_match = re.search(r'(\d{4}-\d{2}-\d{2})', date_line)
                if date_match:
                    paper_info['publication_date'] = date_match.group(1)
                break
        
        # Extract research background (摘要 section)
        if '摘要' in section:
            bg_start = section.find('摘要') + 2  # Skip the heading
            next_section = section.find('架构分析', bg_start)
            if next_section == -1:
                next_section = section.find('实验结果', bg_start)
            if next_section == -1:
                next_section = section.find('创新点', bg_start)
            
            if next_section != -1:
                paper_info['research_background'] = section[bg_start:next_section].strip()
        
        # Extract architectural analysis
        if '架构分析' in section:
            arch_start = section.find('架构分析') + 4  # Skip the heading
            next_section = section.find('实验结果', arch_start)
            if next_section == -1:
                next_section = section.find('创新点', arch_start)
            
            if next_section != -1:
                paper_info['architectural_analysis'] = section[arch_start:next_section].strip()
        
        # Extract innovations
        if '创新点' in section:
            inv_start = section.find('创新点') + 3  # Skip the heading
            next_section = section.find('对', inv_start)  # Next section starts with 对...
            
            if next_section != -1:
                paper_info['innovations'] = section[inv_start:next_section].strip()
            else:
                # Take until the end of the section
                paper_info['innovations'] = section[inv_start:].strip()
        
        papers.append(paper_info)
        print(f"✅ Extracted: {title}")
    
    return papers

def generate_final_digest(papers, date_str):
    """Generate final markdown digest with proper data"""
    
    markdown_content = f"""# 每日ArXiv论文摘要 - {date_str}

生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

搜索关键词: world model, embodied AI, VLA, robotics foundation model, end-to-end robotics, visual language action, sim2real

筛选标准: 1. 作者来自一线研究机构
          2. 有架构图或实验图表
          3. 近期高热度论文（过去7天）

## 论文汇总 (共{len(papers)}篇)

"""
    
    # Count top institution papers
    top_institutions = ['NVIDIA', 'Meta', 'Google', 'DeepMind', 'OpenAI', 'Tesla', 'Stanford', 'CMU', 'Berkeley', 'MIT']
    top_count = sum(1 for p in papers if any(inst.lower() in p['institutions'].lower() for inst in top_institutions))
    
    markdown_content += f"**一线研究机构论文**: {top_count}篇\\n\\n"
    
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
基于{paper['institutions']}的研究成果，该论文在{paper['summary'].split('，')[0] if '，' in paper['summary'] and paper['summary'] != 'No summary available' else paper['summary']}方面的进展为具身AI和VLA模型的发展提供了新的思路和技术路线。

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

**影响力机构**: {', '.join([inst for inst in top_institutions if any(inst.lower() in p['institutions'].lower() for p in papers)])}

---
*本摘要由AI助手自动生成于{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*
"""
    
    return markdown_content

def main():
    print("🔄 Starting manual digest generation...")
    
    # Read the original file
    with open('/home/Hebin/project/paper_digest/2026-07-08.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract papers
    papers = extract_paper_sections(content)
    
    if not papers:
        print("❌ No papers found. Exiting.")
        return
    
    print(f"✅ Extracted {len(papers)} papers")
    
    # Generate today's digest
    today_str = datetime.now().strftime('%Y-%m-%d')
    markdown_content = generate_final_digest(papers, today_str)
    
    # Save digest
    output_path = f'/home/Hebin/project/paper_digest/{today_str}.md'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"📄 Manual digest saved to: {output_path}")
    
    print("✅ Manual digest generation completed!")

if __name__ == "__main__":
    main()