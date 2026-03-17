import urllib.request
import urllib.parse
import json
import re
from datetime import datetime, timedelta

# Search for papers in the past 7 days
end_date = datetime(2026, 3, 14)
start_date = end_date - timedelta(days=7)

keywords = [
    "world model",
    "embodied AI",
    "VLA",
    "robotics foundation model",
    "end-to-end robotics",
    "visual language action",
    "sim2real"
]

# Top institutions
top_institutions = [
    "NVIDIA", "Meta", "Google DeepMind", "DeepMind", "OpenAI", "Tesla",
    "Stanford", "CMU", "Carnegie Mellon", "Berkeley", "MIT", "University of California",
    "Microsoft", "Amazon", "Apple", "Intel", "Boston Dynamics", "Agility Robotics"
]

all_papers = []

for kw in keywords:
    query = f"all:{kw} AND submittedDate:[{start_date.strftime('%Y%m%d000000')} TO {end_date.strftime('%Y%m%d235959')}]"
    url = f"http://export.arxiv.org/api/query?search_query={urllib.parse.quote(query)}&start=0&maxResults=50&sortBy=submittedDate&sortOrder=descending"
    
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            content = response.read().decode('utf-8')
            
        # Extract paper info using regex
        entries = re.findall(r'<entry>(.*?)</entry>', content, re.DOTALL)
        
        for entry in entries:
            id_match = re.search(r'<id>(.*?)</id>', entry)
            title_match = re.search(r'<title>(.*?)</title>', entry)
            summary_match = re.search(r'<summary>(.*?)</summary>', entry)
            author_match = re.findall(r'<name>(.*?)</name>', entry)
            date_match = re.search(r'<published>(.*?)</published>', entry)
            categories_match = re.findall(r'<category term="([^"]+)"', entry)
            
            if id_match and title_match:
                arxiv_id = id_match.group(1).split('/')[-1]
                title = title_match.group(1).strip().replace('\n', ' ')
                summary = summary_match.group(1).strip() if summary_match else ''
                authors = author_match if author_match else []
                published = date_match.group(1)[:10] if date_match else ''
                categories = categories_match if categories_match else []
                
                # Check if authors are from top institutions (basic check)
                # For now, include all papers matching keywords
                paper = {
                    'id': arxiv_id,
                    'title': title,
                    'summary': summary,
                    'authors': authors,
                    'published': published,
                    'categories': categories,
                    'keywords_matched': kw
                }
                all_papers.append(paper)
                
    except Exception as e:
        print(f"Error searching {kw}: {e}")

# Deduplicate by ID
seen = set()
unique_papers = []
for p in all_papers:
    if p['id'] not in seen:
        seen.add(p['id'])
        unique_papers.append(p)

# Sort by date
unique_papers.sort(key=lambda x: x['published'], reverse=True)

print(f"Found {len(unique_papers)} unique papers")
for p in unique_papers[:10]:
    print(f"- {p['id']}: {p['title'][:60]}...")

# Save to file
with open('arxiv_results.json', 'w') as f:
    json.dump(unique_papers, f, indent=2)
