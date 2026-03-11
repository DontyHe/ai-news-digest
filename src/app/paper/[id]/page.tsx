import Link from 'next/link';
import { notFound } from 'next/navigation';
import papers from '../../../data/papers';
import fullPapers from '../../../data/fullPapers.json';

export async function generateStaticParams() {
  return fullPapers.map((paper: any) => ({
    id: paper.id,
  }));
}

export default async function PaperPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paper = papers.find((p: any) => p.id === id);
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

        {/* Full Markdown Content */}
        {fullContent && (
          <div className="prose prose-invert max-w-none">
            {fullContent.content.split('\n').map((line: string, i: number) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-cyan-400">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-semibold mt-6 mb-3">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('**')) {
                return <p key={i} className="font-bold my-2">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ') || line.startsWith('* ')) {
                return <li key={i} className="ml-4 my-1">{line.replace(/^[-*] /, '')}</li>;
              }
              if (line.trim()) {
                return <p key={i} className="my-2 text-gray-300">{line}</p>;
              }
              return null;
            })}
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
