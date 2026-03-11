import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import papers from '../../../data/papers';
import fullPapers from '../../../data/fullPapers.json';

const allPapers = [...papers];
fullPapers.forEach((fp: any) => {
  if (!allPapers.find((p: any) => p.id === fp.id)) {
    allPapers.push({
      id: fp.id,
      title: fp.title,
      authors: fp.title.includes('MIT') ? 'MIT et al.' : '',
      institution: '',
      date: fp.date,
      category: 'embodied',
      summary: fp.content?.substring(0, 200) || '',
      background: '',
      architecture: '',
      innovations: '',
      inspiration: '',
      pdfUrl: fp.pdfUrl || '',
      htmlUrl: fp.htmlUrl || '',
      figures: []
    });
  }
});

export async function generateStaticParams() {
  return allPapers.map((paper: any) => ({
    id: paper.id,
  }));
}

export default async function PaperPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paper = allPapers.find((p: any) => p.id === id);
  const fullContent = fullPapers.find((p: any) => p.id === id);

  if (!paper) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    embodied: "具身智能",
    vla: "VLA模型",
    worldmodel: "世界模型",
    ai: "人工智能"
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-cyan-400">AI News</Link>
          <Link href="/" className="text-gray-400 hover:text-white">← 返回首页</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full">
            {categoryLabels[paper.category] || paper.category}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-400 rounded-full">
            {paper.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{paper.title}</h1>
        <p className="text-gray-400 mb-2">{paper.authors}</p>
        <p className="text-cyan-400 mb-8">{paper.institution}</p>

        <div className="flex gap-4 mb-12">
          <a href={paper.pdfUrl} target="_blank" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg">
            阅读PDF
          </a>
          <a href={paper.htmlUrl} target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg">
            arXiv页面
          </a>
        </div>

        {fullContent && (
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-cyan-400">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-300 border-b border-gray-700 pb-2">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-white">{children}</h3>,
                p: ({children}) => <p className="my-4 text-gray-300 leading-relaxed">{children}</p>,
                li: ({children}) => <li className="my-2 text-gray-300 ml-4">{children}</li>,
                ul: ({children}) => <ul className="my-4 space-y-2">{children}</ul>,
                strong: ({children}) => <strong className="text-cyan-400 font-semibold">{children}</strong>,
                a: ({href, children}) => <a href={href as string} target="_blank" className="text-cyan-400 hover:text-cyan-300 underline">{children}</a>,
              }}
            >
              {fullContent.content}
            </ReactMarkdown>
          </article>
        )}

        {!fullContent && paper.summary && (
          <div className="mt-8 p-6 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">摘要</h2>
            <p className="text-gray-300">{paper.summary}</p>
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
