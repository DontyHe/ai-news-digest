import urllib.request
import urllib.parse
import json
import re
import time

# Papers to fetch details for
paper_ids = [
    "2603.12263",  # Ψ0: Humanoid
    "2603.12260",  # HumDex
    "2603.11653",  # Simple Recipe Works
    "2603.11558",  # RoboClaw
    "2603.12243",  # HandelBot
    "2603.12193",  # SaPaVe
    "2603.12265",  # OmniStream
    "2603.12144",  # O3N
    "2603.10871",  # FG-CLTP
    "2603.11653",  # VLA
]

detailed_papers = []

for pid in paper_ids:
    url = f"http://export.arxiv.org/api/query?id_list={pid}"
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            content = response.read().decode('utf-8')
        
        entry = re.search(r'<entry>(.*?)</entry>', content, re.DOTALL)
        if entry:
            entry = entry.group(1)
            title = re.search(r'<title>(.*?)</title>', entry)
            summary = re.search(r'<summary>(.*?)</summary>', entry)
            authors = re.findall(r'<name>(.*?)</name>', entry)
            date = re.search(r'<published>(.*?)</published>', entry)
            updated = re.search(r'<updated>(.*?)</updated>', entry)
            categories = re.findall(r'<category term="([^"]+)"', entry)
            doi = re.search(r'<arxiv:doi>(.*?)</arxiv:doi>', entry)
            comment = re.search(r'<arxiv:comment>(.*?)</arxiv:comment>', entry)
            
            paper = {
                'id': pid,
                'title': title.group(1).strip() if title else '',
                'summary': summary.group(1).strip() if summary else '',
                'authors': authors,
                'published': date.group(1)[:10] if date else '',
                'updated': updated.group(1)[:10] if updated else '',
                'categories': categories,
                'doi': doi.group(1) if doi else '',
                'comment': comment.group(1) if comment else ''
            }
            detailed_papers.append(paper)
            print(f"✓ {pid}: {paper['title'][:50]}...")
        
        time.sleep(0.5)
        
    except Exception as e:
        print(f"✗ {pid}: {e}")

print(f"\nTotal: {len(detailed_papers)} papers")

with open('detailed_papers.json', 'w') as f:
    json.dump(detailed_papers, f, indent=2)
