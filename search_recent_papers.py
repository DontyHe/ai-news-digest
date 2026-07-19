#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import re
from datetime import datetime, timedelta

# Direct queries for today's papers
queries = [
    'all:world model robot submittedDate:[2026-07-02T00:00:00Z TO 2026-07-09T23:59:59Z]',
    'all:embodied AI submittedDate:[2026-07-02T00:00:00Z TO 2026-07-09T23:59:59Z]',
    'all:visual language action submittedDate:[2026-07-02T00:00:00Z TO 2026-07-09T23:59:59Z]',
    'all:robotics foundation model submittedDate:[2026-07-02T00:00:00Z TO 2026-07-09T23:59:59Z]'
]

all_results = []
seen_ids = set()

print(f"🔍 Searching for papers from 2026-07-02 to 2026-07-09")

for query in queries:
    url = f'http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&sort=submittedDate&sortBy=descending&start=0&max_results=50'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; EmbodiedAI-Bot/1.0; +http://example.com/bot)'})
        print(f"🔎 Querying: {query[:50]}...")
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read().decode('utf-8')
            entries = re.findall(r'<entry>(.*?)</entry>', content, re.DOTALL)
            for entry in entries:
                id_match = re.search(r'<id>.*?/(.*?)</id>', entry)
                date_match = re.search(r'<published>(\d{4}-\d{2}-\d{2})</published>', entry)
                title_match = re.search(r'<title>(.*?)</title>', entry, re.DOTALL)
                abstract_match = re.search(r'<summary>(.*?)</summary>', entry, re.DOTALL)
                author_matches = re.findall(r'<name>(.*?)</name>', entry)
                
                if id_match and date_match:
                    aid = id_match.group(1)
                    date_str = date_match.group(1)
                    date = datetime.strptime(date_str, '%Y-%m-%d')
                    title = title_match.group(1).replace('\n', ' ').strip() if title_match else ''
                    abstract = abstract_match.group(1).replace('\n', ' ').strip() if abstract_match else ''
                    authors = author_matches[:5] if author_matches else []
                    
                    if aid not in seen_ids:
                        seen_ids.add(aid)
                        
                        # Check if it matches our keywords
                        matched = False
                        for keyword in ['world model', 'embodied AI', 'visual language action', 'robotics foundation model', 'VLA', 'end-to-end robotics']:
                            if keyword.lower() in title.lower() or keyword.lower() in abstract.lower():
                                matched = True
                                break
                        
                        if matched:
                            all_results.append({
                                'id': aid,
                                'date': date_str,
                                'title': title,
                                'abstract': abstract,
                                'authors': authors,
                                'categories': [],
                                'matched_keywords': True
                            })
                            print(f"✅ Found: {aid} - {title[:60]}...")
    
    except Exception as e:
        print(f'❌ Error for query {query}: {e}')

print(f'\n📊 Summary:')
print(f'Total papers found: {len(all_results)}')

# Sort by date
all_results.sort(key=lambda x: x['date'], reverse=True)

# Save results
with open('/home/Hebin/project/paper_digest/arxiv_results_2026.json', 'w') as f:
    json.dump(all_results, f, indent=2)

print(f"📄 Results saved to arxiv_results_2026.json")