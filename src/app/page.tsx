import Link from 'next/link';
import papers, { Paper } from '../data/papers';

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function getCategoryLabel(category: Paper["category"]) {
  const labels: Record<string, string> = {
    embodied: "具身智能",
    vla: "VLA模型",
    worldmodel: "世界模型",
    ai: "人工智能",
  };
  return labels[category] || category;
}

function getCategoryTagClass(category: Paper["category"]) {
  const classes: Record<string, string> = {
    embodied: "tag-embodied",
    vla: "tag-vla",
    worldmodel: "tag-worldmodel",
    ai: "tag-ai",
  };
  return classes[category] || "";
}

export default function Home() {
  // 按日期排序，最新的在前
  const sortedPapers = [...papers].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 gradient-bg rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">
          每日<span className="text-primary">AI</span>资讯精选
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          追踪 ArXiv 具身智能、世界模型、VLA 领域最新论文 · 关注前沿科技公司研究动态 · 整合社交媒体大V观点
        </p>
        <p className="text-sm text-muted mt-4 font-mono">
          Last updated: {new Date().toLocaleString("zh-CN")}
        </p>
      </section>

      {/* ArXiv Papers Section */}
      <section id="arxiv">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-semibold">ArXiv 最新论文</h3>
          <span className="tag">每日更新 · {papers.length} 篇</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedPapers.map((paper) => (
            <article key={paper.id} className="card flex flex-col">
              <Link href={`/paper/${paper.id}`}>
                <div className="flex gap-2 mb-3">
                  <span className={`tag ${getCategoryTagClass(paper.category)}`}>
                    {getCategoryLabel(paper.category)}
                  </span>
                  <span className="tag">{paper.date}</span>
                </div>
                <h4 className="card-title text-base">{paper.title}</h4>
                <p className="text-sm text-muted mb-2">{paper.authors}</p>
                <p className="text-xs text-cyan-400 mb-3">{paper.institution}</p>
                <p className="text-sm flex-grow">{paper.summary}</p>
              </Link>
              <div className="flex gap-3 mt-4 pt-4 border-t border-accent/30">
                <a href={paper.pdfUrl} target="_blank" className="a-link text-sm flex items-center gap-1">
                  PDF <ArrowIcon />
                </a>
                <a href={paper.htmlUrl} target="_blank" className="a-link text-sm flex items-center gap-1">
                  ArXiv <ArrowIcon />
                </a>
                <Link href={`/paper/${paper.id}`} className="a-link text-sm flex items-center gap-1 ml-auto">
                  详情 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Research News Section */}
      <section id="research">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-semibold">前沿科技公司研究动态</h3>
          <span className="tag">Research Updates</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card">
            <div className="flex items-center justify-between mb-3">
              <span className="tag tag-ai">OpenFang</span>
              <span className="text-xs text-muted">2026-02-27</span>
            </div>
            <h4 className="card-title">v2026.2.26 Release</h4>
            <p className="text-sm text-muted">External Secrets Management 新增完整 openclaw secrets 工作流</p>
          </article>
          <article className="card">
            <div className="flex items-center justify-between mb-3">
              <span className="tag tag-ai">NVIDIA</span>
              <span className="text-xs text-muted">2026-02-28</span>
            </div>
            <h4 className="card-title">GR00T N1 发布</h4>
            <p className="text-sm text-muted">NVIDIA 发布新版人形机器人基础模型，支持实时动作生成</p>
          </article>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-semibold">社交媒体精选</h3>
          <span className="tag">X / 社交圈</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card">
            <Link href="/social/karpathy">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium">Andrej Karpathy</p>
                  <p className="text-xs text-muted">@karpathy · 2h ago</p>
                </div>
                <span className="ml-auto tag">X</span>
              </div>
              <p className="text-sm">关于世界模型在机器人学习中的重要性，最新的研究表明...</p>
            </Link>
          </article>
          <article className="card">
            <Link href="/social/ylecun">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm">
                  Y
                </div>
                <div>
                  <p className="text-sm font-medium">Yann LeCun</p>
                  <p className="text-xs text-muted">@ylecun · 5h ago</p>
                </div>
                <span className="ml-auto tag">X</span>
              </div>
              <p className="text-sm">AI 的未来在于自主智能系统，我们需要重新思考学习范式...</p>
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
