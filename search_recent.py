import urllib.request
import urllib.parse
import json
import re
from datetime import datetime

# Search for papers in the past 7 days (May 19-26, 2026)
queries = [
    'all:world model embodied robot VLA action',
    'all:visual language action model robot',
    'all:robotics foundation model end-to-end',
    'all:sim2real robot learning',
]

all_results = []
seen_ids = set()

for query in queries:
    url = f'http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&sort=submittedDate&sortBy=descending&start=0&max_results=50'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read().decode('utf-8')
            entries = re.findall(r'<entry>(.*?)</entry>', content, re.DOTALL)
            for entry in entries:
                id_match = re.search(r'<id>.*?/(.*?)</id>', entry)
                date_match = re.search(r'<submittedDate>(\d{4}-\d{2}-\d{2})', entry)
                title_match = re.search(r'<title>(.*?)</title>', entry, re.DOTALL)
                abstract_match = re.search(r'<summary>(.*?)</summary>', entry, re.DOTALL)
                author_match = re.findall(r'<name>(.*?)</name>', entry)
                
                if id_match and date_match:
                    aid = id_match.group(1)
                    date = date_match.group(1)
                    title = title_match.group(1).replace('\n', ' ').strip() if title_match else ''
                    abstract = abstract_match.group(1).replace('\n', ' ').strip() if abstract_match else ''
                    authors = ', '.join(author_match[:5]) if author_match else ''
                    
                    if aid not in seen_ids:
                        seen_ids.add(aid)
                        all_results.append({
                            'id': aid,
                            'date': date,
                            'title': title,
                            'abstract': abstract[:300],
                            'authors': authors
                        })
    except Exception as e:
        print(f'Error for query {query}: {e}')

# Filter to May 19-26, 2026
start_date = datetime(2026, 5, 19)
end_date = datetime(2026, 5, 26)

filtered = [r for r in all_results if start_date <= datetime.strptime(r['date'], '%Y-%m-%d') <= end_date]
print(f'Total papers found: {len(all_results)}')
print(f'Papers in date range: {len(filtered)}')
print()
print('=== Filtered papers (May 19-26) ===')
for r in sorted(filtered, key=lambda x: x['date']):
    print(f"ID: {r['id']}, Date: {r['date']}, Title: {r['title'][:100]}")
print()
print('=== All recent results ===')
for r in sorted(all_results, key=lambda x: x['date']):
    print(f"ID: {r['id']}, Date: {r['date']}, Title: {r['title'][:100]}")

# Save
with open('/home/Hebin/project/paper_digest/arxiv_results.json', 'w') as f:
    json.dump({'filtered': filtered, 'all': all_results}, f, indent=2)