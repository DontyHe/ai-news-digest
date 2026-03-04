// 公司详情页 - 动态路由
// 路径: src/app/company/[name]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import companies, { Company } from '../../../data/companies';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return Object.keys(companies).map((name) => ({
    name,
  }));
}

function getTypeLabel(type: string) {
  const labels: Record<string, string> = {
    paper: "论文",
    blog: "博客",
    product: "产品",
    research: "研究"
  };
  return labels[type] || type;
}

function getTypeClass(type: string) {
  const classes: Record<string, string> = {
    paper: "bg-purple-500/20 text-purple-400",
    blog: "bg-yellow-500/20 text-yellow-400",
    product: "bg-green-500/20 text-green-400",
    research: "bg-cyan-500/20 text-cyan-400"
  };
  return classes[type] || "bg-gray-500/20 text-gray-400";
}

export default async function CompanyPage({ params }: PageProps) {
  const { name } = await params;
  const company = companies[name];

  if (!company) {
    notFound();
  }

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
        {/* 公司信息 */}
        <div className="flex items-start gap-6 mb-8">
          <img
            src={company.logo}
            alt={company.name}
            className="w-20 h-20 rounded-xl"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
            <p className="text-gray-400 mb-4">{company.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">最后更新: {company.lastUpdated}</span>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400">{company.publications} 篇论文</span>
            </div>
          </div>
        </div>

        {/* 研究亮点 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">研究亮点</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {company.highlights.map((highlight, i) => (
              <div 
                key={i}
                className="bg-gray-900 rounded-lg px-4 py-3 border border-gray-800 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span className="text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 研究动态列表 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">研究动态</h2>
          <div className="space-y-4">
            {company.updates.map((update) => (
              <article 
                key={update.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-gray-100 flex-grow">
                    {update.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${getTypeClass(update.type)}`}>
                    {getTypeLabel(update.type)}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{update.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{update.date}</span>
                  <a 
                    href={update.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black text-sm font-semibold rounded-lg transition-colors"
                  >
                    查看原文 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>由 Javas 自动整理</p>
        </div>
      </footer>
    </div>
  );
}
