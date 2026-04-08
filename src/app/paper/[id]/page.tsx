import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import papers from '../../../data/papers';
import fullPapers from '../../../data/fullPapers.json';
import fs from 'fs';
import path from 'path';

// Merge: fullPapers takes priority
const fullPapersMap = new Map<string, any>();
fullPapers.forEach((fp: any) => fullPapersMap.set(fp.id, fp));

interface MergedPaper {
  id: string;
  title: string;
  authors: string;
  institution: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  pdfUrl: string;
  htmlUrl: string;
}

function getMergedPapers(): MergedPaper[] {
  const result: MergedPaper[] = [];
  
  // First add all papers.ts entries
  papers.forEach((p: any) => {
    const fp = fullPapersMap.get(p.id);
    result.push({
      id: p.id,
      title: fp?.title || p.title,
      authors: fp?.authors || p.authors,
      institution: fp?.institution || p.institution,
      date: fp?.date || p.date,
      category: fp?.category || p.category,
      summary: fp?.summary || p.summary,
      content: fp?.content || '',
      pdfUrl: fp?.pdfUrl || p.pdfUrl,
      htmlUrl: fp?.htmlUrl || p.htmlUrl,
    });
  });
  
  // Add fullPapers-only entries
  fullPapers.forEach((fp: any) => {
    if (!papers.find((p: any) => p.id === fp.id)) {
      result.push({
        id: fp.id,
        title: fp.title || '',
        authors: fp.authors || '',
        institution: fp.institution || '',
        date: fp.date || '',
        category: fp.category || 'ai',
        summary: fp.summary || fp.content?.substring(0, 200) || '',
        content: fp.content || '',
        pdfUrl: fp.pdfUrl || '',
        htmlUrl: fp.htmlUrl || '',
      });
    }
  });
  
  return result;
}

const allPapers = getMergedPapers();

// Convert paper id to arxiv id (e.g., paper-260316861 -> 2603.16861)
function paperIdToArxivId(paperId: string): string | null {
  const match = paperId.match(/^paper-(\d{4})(\d+)$/);
  if (!match) return null;
  return `${match[1]}.${match[2]}`;
}

// Parse content into sections
function parseSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  
  // Pattern: ### Heading followed by content until next ### or end
  const regex = /###\s*(.+?)\n([\s\S]*?)(?=###\s|$)/g;
  let match;
  let hasStructured = false;
  
  while ((match = regex.exec(content)) !== null) {
    hasStructured = true;
    const heading = match[1].trim();
    const body = match[2].trim();
    sections[heading] = body;
  }
  
  if (!hasStructured) {
    // Try **bold** style sections
    const parts = content.split(/\n(?=\*\*)/);
    let currentSection = '研究背景';
    let bg = [];
    
    for (const part of parts) {
      const m = part.match(/^\*\*(.+?)\*\*[:：]?\s*\n?([\s\S]*)/);
      if (m) {
        // Save previous section
        if (bg.length > 0 && !sections[currentSection]) {
          sections[currentSection] = bg.join('\n').trim();
        } else if (bg.length > 0) {
          sections[currentSection] += '\n' + bg.join('\n').trim();
        }
        bg = [];
        currentSection = m[1].trim()
          .replace(/核心方法\/?架构分析/, '核心方法/架构分析')
          .replace(/创新点.*/, '创新点');
        bg.push(m[2].trim());
      } else {
        bg.push(part.trim());
      }
    }
    if (bg.length > 0 && !sections[currentSection]) {
      sections[currentSection] = bg.join('\n').trim();
    } else if (bg.length > 0) {
      sections[currentSection] += '\n' + bg.join('\n').trim();
    }
  }
  
  return sections;
}

// Find figures for a paper
function findFigures(paperId: string): string[] {
  const arxivId = paperIdToArxivId(paperId);
  if (!arxivId) return [];
  
  const figuresDir = path.join(process.cwd(), 'public', 'paper_figures');
  if (!fs.existsSync(figuresDir)) return [];
  
  try {
    const files = fs.readdirSync(figuresDir);
    return files
      .filter(f => f.startsWith(arxivId) && /\.(png|jpg|jpeg|webp)$/i.test(f))
      .map(f => `/paper_figures/${f}`);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  return allPapers.map((paper) => ({
    id: paper.id,
  }));
}

export default async function PaperPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paper = allPapers.find((p) => p.id === id);

  if (!paper) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    embodied: "具身智能",
    vla: "VLA模型",
    worldmodel: "世界模型",
    ai: "人工智能"
  };

  const sections = parseSections(paper.content);
  const figures = findFigures(paper.id);

  const sectionOrder = [
    { key: '研究背景', label: '研究背景', icon: '📚' },
    { key: '核心方法/架构分析', label: '核心方法/架构分析', icon: '⚙️' },
    { key: '架构分析', label: '核心方法/架构分析', icon: '⚙️' },
    { key: '实验结果', label: '实验结果', icon: '📊' },
    { key: '创新点', label: '创新点', icon: '💡' },
    { key: '启发', label: '启发', icon: '🎯' },
    { key: '总结', label: '总结', icon: '📝' },
  ];

  // Deduplicate section keys while preserving order
  const usedKeys = new Set<string>();
  const orderedSections: { key: string; label: string; icon: string; content: string }[] = [];
  
  for (const s of sectionOrder) {
    const content = sections[s.key];
    if (content && !usedKeys.has(s.key)) {
      usedKeys.add(s.key);
      orderedSections.push({ ...s, content });
    }
  }
  
  // Add any remaining sections not in the predefined order
  for (const [key, content] of Object.entries(sections)) {
    if (!usedKeys.has(key) && content) {
      orderedSections.push({ key, label: key, icon: '📄', content });
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-cyan-400">AI News</Link>
          <Link href="/" className="text-gray-400 hover:text-white">← 返回首页</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full">
            {categoryLabels[paper.category] || paper.category}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-400 rounded-full">
            {paper.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{paper.title}</h1>
        
        {/* Authors & Institution */}
        <div className="mb-6 space-y-1">
          <p className="text-gray-300">{paper.authors}</p>
          {paper.institution && (
            <p className="text-cyan-400 text-sm">{paper.institution}</p>
          )}
        </div>

        {/* Summary highlight */}
        {paper.summary && (
          <div className="mb-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-cyan-300 text-sm font-medium mb-1">一句话概括</p>
            <p className="text-gray-200">{paper.summary.replace(/#{1,6}\s*/g, '').replace(/\*\*/g, '')}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-4 mb-12">
          <a href={paper.pdfUrl} target="_blank" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-colors">
            阅读PDF
          </a>
          <a href={paper.htmlUrl} target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors">
            arXiv页面
          </a>
        </div>

        {/* Content sections */}
        {orderedSections.length > 0 ? (
          <div className="space-y-10">
            {orderedSections.map((section, idx) => (
              <section key={section.key}>
                <h2 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </h2>
                
                {section.key === '创新点' || section.key.includes('创新') ? (
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    {section.content.split('\n').filter(Boolean).map((line, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{line.replace(/^[-*]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-gray-300 leading-relaxed space-y-3">
                    {section.content.split('\n').filter(Boolean).map((line, i) => (
                      <p key={i}>{line.replace(/^[-*]\s*/, () => '')}</p>
                    ))}
                  </div>
                )}
                
                {/* Insert figures after 核心方法/架构分析 */}
                {figures.length > 0 && idx === orderedSections.findIndex(s => s.label === '核心方法/架构分析') && (
                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-gray-500">架构图 / 实验结果</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {figures.map((fig, i) => (
                        <div key={i} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={fig}
                            alt={`${paper.title} - Figure ${i + 1}`}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : paper.content ? (
          // Fallback: raw content as markdown
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                p: ({children}) => <p className="my-4 text-gray-300 leading-relaxed">{children}</p>,
                strong: ({children}) => <strong className="text-cyan-400 font-semibold">{children}</strong>,
              }}
            >
              {paper.content}
            </ReactMarkdown>
          </article>
        ) : (
          <div className="mt-8 p-6 bg-gray-900 rounded-lg">
            <p className="text-gray-400">暂无详细内容</p>
          </div>
        )}

        {/* Figures section (if not inserted above) */}
        {figures.length > 0 && !orderedSections.find(s => s.label === '核心方法/架构分析') && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
              <span>🖼️</span>
              <span>论文图片</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {figures.map((fig, i) => (
                <div key={i} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={fig} alt={`${paper.title} - Figure ${i + 1}`} className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>由 Javas 自动生成 | 来源: arXiv</p>
        </div>
      </footer>
    </div>
  );
}
