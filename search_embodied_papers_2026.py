#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import re
from datetime import datetime, timedelta
import time

# Search keywords for embodied AI/VLA/world models
queries = [
    'all:world model embodied robot VLA action',
    'all:visual language action model robot',
    'all:robotics foundation model end-to-end',
    'all:sim2real robot learning',
    'all:embodied AI robot learning',
    'all:end-to-end robotics control',
    'all:robot imitation learning world model',
    'all:visual language model robot',
    'all:autonomous robot learning',
    'all:embodied intelligence VLA'
]

all_results = []
seen_ids = set()
top_institutions = ['NVIDIA', 'Meta', 'Google', 'DeepMind', 'OpenAI', 'Tesla', 'Stanford', 'CMU', 'Berkeley', 'MIT']

# Calculate date range for last 7 days
end_date = datetime.now()
start_date = end_date - timedelta(days=7)

print(f"🔍 Searching for papers from {start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}")

for query in queries:
    url = f'http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&sort=submittedDate&sortBy=descending&start=0&max_results=100'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; EmbodiedAI-Bot/1.0; +http://example.com/bot)'})
        print(f"🔎 Querying: {query}")
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read().decode('utf-8')
            entries = re.findall(r'<entry>(.*?)</entry>', content, re.DOTALL)
            for entry in entries:
                id_match = re.search(r'<id>.*?/(.*?)</id>', entry)
                date_match = re.search(r'<published>(\d{4}-\d{2}-\d{2})</published>', entry)
                title_match = re.search(r'<title>(.*?)</title>', entry, re.DOTALL)
                abstract_match = re.search(r'<summary>(.*?)</summary>', entry, re.DOTALL)
                author_matches = re.findall(r'<name>(.*?)</name>', entry)
                category_matches = re.findall(r'<category term="(.*?)"', entry)
                
                if id_match and date_match:
                    aid = id_match.group(1)
                    date_str = date_match.group(1)
                    date = datetime.strptime(date_str, '%Y-%m-%d')
                    title = title_match.group(1).replace('\n', ' ').strip() if title_match else ''
                    abstract = abstract_match.group(1).replace('\n', ' ').strip() if abstract_match else ''
                    authors = author_matches[:5] if author_matches else []
                    categories = category_matches[:3] if category_matches else []
                    
                    # Filter by date range
                    if start_date <= date <= end_date and aid not in seen_ids:
                        seen_ids.add(aid)
                        
                        # Check if it matches our keywords
                        matched_keywords = []
                        for keyword in ['world model', 'embodied AI', 'VLA', 'robotics foundation model', 'end-to-end robotics', 'visual language action', 'sim2real', 'visual language model', 'autonomous robot', 'embodied intelligence']:
                            if keyword.lower() in title.lower() or keyword.lower() in abstract.lower():
                                matched_keywords.append(keyword)
                        
                        if matched_keywords:
                            # Check for top institutions in author affiliations
                            has_top_institution = any(inst.lower() in ' '.join(authors).lower() for inst in top_institutions)
                            
                            paper_info = {
                                'id': aid,
                                'date': date_str,
                                'title': title,
                                'abstract': abstract,
                                'authors': authors,
                                'categories': categories,
                                'matched_keywords': matched_keywords,
                                'has_top_institution': has_top_institution,
                                'quality_score': len(matched_keywords) + (1 if has_top_institution else 0)
                            }
                            
                            all_results.append(paper_info)
                            print(f"✅ Found: {aid} - {title[:60]}... (Keywords: {matched_keywords[:2]})")
    
    except Exception as e:
        print(f'❌ Error for query {query}: {e}')
        # Wait before retrying if it's a 520 error
        if '520' in str(e):
            print('⏰ Waiting 30 minutes due to 520 error...')
            time.sleep(1800)  # 30 minutes
        else:
            # Wait 5 seconds for other errors
            time.sleep(5)

# Sort by date and quality score
all_results.sort(key=lambda x: (x['date'], x['quality_score']), reverse=True)

print(f'\n📊 Summary:')
print(f'Total papers found: {len(all_results)}')
print(f'Unique papers: {len(seen_ids)}')
print(f'Papers with top institutions: {sum(1 for p in all_results if p["has_top_institution"])}')

# Save results
with open('/home/Hebin/project/paper_digest/arxiv_results_2026.json', 'w') as f:
    json.dump(all_results, f, indent=2)

print(f"📄 Results saved to arxiv_results_2026.json")

# Save a summary for today
today_str = datetime.now().strftime('%Y-%m-%d')
with open(f'/home/Hebin/project/paper_digest/arxiv_summary_{today_str}.json', 'w') as f:
    summary = {
        'date_range': f"{start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}",
        'total_papers': len(all_results),
        'papers_with_top_institutions': sum(1 for p in all_results if p["has_top_institution"]),
        'top_keywords': {}
    }
    
    # Count keyword occurrences
    for paper in all_results:
        for keyword in paper['matched_keywords']:
            summary['top_keywords'][keyword] = summary['top_keywords'].get(keyword, 0) + 1
    
    json.dump(summary, f, indent=2)

print(f"📈 Summary saved to arxiv_summary_{today_str}.json")