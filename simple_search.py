#!/usr/bin/env python3
"""
简单的arXiv论文搜索脚本
搜索过去7天的具身AI/VLA/世界模型论文
"""

import requests
import json
from datetime import datetime, timedelta
import xml.etree.ElementTree as ET
import time

def search_arxiv_papers():
    # 定义搜索关键词
    keywords = [
        'world model', 'embodied AI', 'VLA', 
        'robotics foundation model', 'end-to-end robotics',
        'visual language action', 'sim2real'
    ]
    
    # 计算7天前的日期
    seven_days_ago = (datetime.now() - timedelta(days=7)).strftime('%Y%m%d')
    today = datetime.now().strftime('%Y%m%d')
    
    print(f"搜索时间段: {seven_days_ago} - {today}")
    print(f"搜索关键词: {', '.join(keywords)}")
    
    # 构建查询URL
    base_url = 'http://export.arxiv.org/api/query'
    
    # 组合查询
    keyword_query = ' OR '.join([f'ti:"{kw}"' for kw in keywords])
    date_query = f'submittedDate:[{seven_days_ago}0000 TO {today}2359]'
    full_query = f'({keyword_query}) AND ({date_query})'
    
    params = {
        'search_query': full_query,
        'start': 0,
        'max_results': 20  # 限制返回数量
    }
    
    print(f"查询语句: {full_query}")
    
    try:
        # 发送请求
        print("正在搜索arXiv...")
        response = requests.get(base_url, params=params, timeout=30)
        response.raise_for_status()
        
        # 解析XML
        root = ET.fromstring(response.content)
        namespace = {'atom': 'http://www.w3.org/2005/Atom', 'arxiv': 'http://arxiv.org/schemas/atom'}
        
        papers = []
        entries = root.findall('atom:entry', namespace)
        
        print(f"找到 {len(entries)} 篇论文")
        
        for entry in entries:
            title_elem = entry.find('atom:title', namespace)
            title = title_elem.text.strip() if title_elem is not None else "Unknown"
            
            # 提取arXiv ID
            id_elem = entry.find('atom:id', namespace)
            if id_elem is not None:
                arxiv_id = id_elem.text.split('/')[-1].split('v')[0]
            else:
                arxiv_id = "unknown"
            
            # 提取作者
            authors = []
            author_elems = entry.findall('atom:author', namespace)
            for author_elem in author_elems:
                name_elem = author_elem.find('atom:name', namespace)
                if name_elem is not None:
                    authors.append(name_elem.text)
            
            # 判断类别 (基于标题关键词)
            category = 'ai'
            title_lower = title.lower()
            if 'world model' in title_lower or 'worldmodel' in title_lower:
                category = 'worldmodel'
            elif 'vla' in title_lower or 'visual language action' in title_lower:
                category = 'vla'
            elif 'embodied' in title_lower or 'robotic' in title_lower:
                category = 'embodied'
            
            # 创建论文信息
            paper_info = {
                'id': arxiv_id,
                'title': title,
                'authors': ', '.join(authors),
                'institution': '',  # 需要进一步分析
                'date': datetime.now().strftime('%Y-%m-%d'),
                'category': category,
                'summary': f"{title[:100]}..." if len(title) > 100 else title,
                'background': '',
                'architecture': '',
                'innovations': '',
                'inspiration': '',
                'pdfUrl': f'https://arxiv.org/pdf/{arxiv_id}',
                'htmlUrl': f'https://arxiv.org/abs/{arxiv_id}',
                'figures': []
            }
            
            papers.append(paper_info)
            print(f"  - {arxiv_id}: {title[:60]}...")
        
        # 保存结果
        with open('/tmp/arxiv_results_7days.json', 'w', encoding='utf-8') as f:
            json.dump(papers, f, indent=2, ensure_ascii=False)
        
        print(f"结果已保存到 /tmp/arxiv_results_7days.json")
        print(f"共找到 {len(papers)} 篇相关论文")
        
        return papers
        
    except Exception as e:
        print(f"搜索失败: {e}")
        return []

if __name__ == "__main__":
    search_arxiv_papers()