import urllib.request
import urllib.parse
import json
import time

# Retry failed papers
paper_ids = [
    "2603.12243",  # HandelBot
    "2603.12193",  # SaPaVe
    "2603.12144",  # O3N
    "2603.10871",  # FG-CLTP
]

detailed = []
for pid in paper_ids:
    for attempt in range(3):
        try:
            url = f"http://export.arxiv.org/api/query?id_list={pid}"
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=30) as response:
                content = response.read().decode('utf-8')
            
            import re
            entry = re.search(r'<entry>(.*?)</entry>', content, re.DOTALL)
            if entry:
                entry = entry.group(1)
                title = re.search(r'<title>(.*?)</title>', entry)
                summary = re.search(r'<summary>(.*?)</summary>', entry)
                authors = re.findall(r'<name>(.*?)</name>', entry)
                date = re.search(r'<published>(.*?)</published>', entry)
                categories = re.findall(r'<category term="([^"]+)"', entry)
                comment = re.search(r'<arxiv:comment>(.*?)</arxiv:comment>', entry)
                
                paper = {
                    'id': pid,
                    'title': title.group(1).strip() if title else '',
                    'summary': summary.group(1).strip() if summary else '',
                    'authors': authors,
                    'published': date.group(1)[:10] if date else '',
                    'categories': categories,
                    'comment': comment.group(1) if comment else ''
                }
                detailed.append(paper)
                print(f"✓ {pid}")
                break
        except Exception as e:
            print(f"Attempt {attempt+1} failed for {pid}: {e}")
            time.sleep(30)

print(f"\nTotal: {len(detailed)} papers")

with open('retry_papers.json', 'w') as f:
    json.dump(detailed, f, indent=2)
