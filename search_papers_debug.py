import urllib.request
import urllib.parse
import json
import re
from datetime import datetime, timedelta

# Test with a simpler search first
queries = [
    'all:"world model" robot',
    'all:"visual language action" robot',
    'all:"embodied AI" robot',
    'all:"VLA" robot'
]

print("Starting search for embodied AI papers...")

for i, query in enumerate(queries):
    print(f"\n--- Query {i+1}: {query} ---")
    url = f'http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&sort=submittedDate&sortBy=descending&start=0&max_results=20'
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; ResearchBot/1.0; +http://example.com/bot)'})
        print(f"Query URL: {url}")
        
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read().decode('utf-8')
            print(f"Response length: {len(content)}")
            
            # Look for error patterns in response
            if 'error' in content.lower() or '520' in content:
                print("Error detected in response, waiting...")
                import time
                time.sleep(60)
                continue
                
            entries = re.findall(r'<entry>(.*?)</entry>', content, re.DOTALL)
            print(f"Found {len(entries)} entries")
            
            if entries:
                for entry in entries[:3]:  # Show first 3 entries
                    id_match = re.search(r'<id>.*?/(.*?)</id>', entry)
                    date_match = re.search(r'<published>(\d{4}-\d{2}-\d{2})</published>', entry)
                    title_match = re.search(r'<title>(.*?)</title>', entry, re.DOTALL)
                    
                    if id_match and date_match and title_match:
                        aid = id_match.group(1)
                        date = date_match.group(1)
                        title = title_match.group(1).replace('\n', ' ').strip()
                        print(f"  Paper: {aid} - {title[:60]}...")
    
    except Exception as e:
        print(f'Error: {e}')
        if '520' in str(e):
            print('Waiting 60 seconds due to 520 error...')
            import time
            time.sleep(60)