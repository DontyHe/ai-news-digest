"use client";

// 论文详情页 - 动态路由
// 路径: src/app/paper/[id]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import papers, { Paper } from '../../data/papers';

interface PageProps {
  params: Promise<{ id: string }>;
}

// 从 papers 数组构建 lookup map
const papersMap: Record<string, Paper> = {};
papers.forEach(p => {
  papersMap[p.id] = p;
});

export async function generateStaticParams() {
  return papers.map((paper) => ({
    id: paper.id,
  }));
}

export default async function PaperPage({ params }: PageProps) {
  const { id } = await params;
  const paper = papersMap[id];

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
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-cyan-400">
            AI News
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 标签 */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full">
            {categoryLabels[paper.category] || paper.category}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-400 rounded-full">
            {paper.date}
          </span>
        </div>

        {/* 标题 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{paper.title}</h1>
        
        {/* 作者 & 机构 */}
        <p className="text-gray-400 mb-2">{paper.authors}</p>
        <p className="text-cyan-400 mb-8">{paper.institution}</p>

        {/* 论文链接 */}
        <div className="flex gap-4 mb-12">
          <a 
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-colors"
          >
            阅读PDF
          </a>
          <a 
            href={paper.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            arXiv页面
          </a>
        </div>

        {/* 架构图 */}
        {paper.figures.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">架构图</h2>
            <div className="bg-gray-900 rounded-xl p-4 space-y-4">
              {paper.figures.map((fig, i) => (
                <img 
                  key={i}
                  src={fig} 
                  alt={`架构图 ${i + 1}`}
                  className="max-w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </section>
        )}

        {/* 一句话总结 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">一句话总结</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{paper.summary}</p>
        </section>

        {/* 研究背景 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">研究背景</h2>
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500">
            <p className="text-gray-300 leading-relaxed">{paper.background}</p>
          </div>
        </section>

        {/* 架构分析 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">架构分析</h2>
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-purple-500">
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{paper.architecture}</p>
          </div>
        </section>

        {/* 创新点 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">创新点与对比</h2>
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-green-500">
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{paper.innovations}</p>
          </div>
        </section>

        {/* 研究启发 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">研究启发</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed">{paper.inspiration}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>由 Javas 自动生成 | 来源: arXiv</p>
        </div>
      </footer>
    </div>
  );
}
