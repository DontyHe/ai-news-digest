import urllib.request
import urllib.parse
import json
import re
from datetime import datetime, timedelta

# Search keywords for embodied AI/VLA/world models
queries = [
    'all:world model embodied robot VLA action',
    'all:visual language action model robot',
    'all:robotics foundation model end-to-end',
    'all:sim2real robot learning',
    'all:embodied AI robot learning',
    'all:end-to-end robotics control',
    'all:robot imitation learning world model'
]

all_results = []
seen_ids = set()

# Calculate date range for last 7 days
end_date = datetime.now()
start_date = end_date - timedelta(days=7)

print(f"Searching for papers from {start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}")

for query in queries:
    url = f'http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&sort=submittedDate&sortBy=descending&start=0&max_results=100'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; ResearchBot/1.0; +http://example.com/bot)'})
        print(f"Querying: {query}")
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
                    
                    # Filter by date range
                    if start_date <= date <= end_date and aid not in seen_ids:
                        seen_ids.add(aid)
                        
                        # Check if it matches our keywords
                        matched = False
                        for keyword in ['world model', 'embodied AI', 'VLA', 'robotics foundation model', 'end-to-end robotics', 'visual language action', 'sim2real']:
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
                                'categories': [],  # Will be extracted if needed
                                'keywords_matched': True
                            })
                            print(f"Found: {aid} - {title[:60]}...")
    
    except Exception as e:
        print(f'Error for query {query}: {e}')
        # Wait before retrying if it's a network error
        if '520' in str(e):
            print('Waiting 30 minutes due to 520 error...')
            import time
            time.sleep(1800)  # 30 minutes

print(f'Total papers found: {len(all_results)}')
print(f'Unique papers: {len(seen_ids)}')

# Sort by date
all_results.sort(key=lambda x: x['date'])

# Save results
with open('/home/Hebin/project/paper_digest/arxiv_results_2026.json', 'w') as f:
    json.dump(all_results, f, indent=2)

print(f"Results saved to arxiv_results_2026.json")