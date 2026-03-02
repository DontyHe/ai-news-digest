import Link from 'next/link';
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface Paper {
  id: string;
  title: string;
  authors: string;
  date: string;
  category: "embodied" | "vla" | "worldmodel" | "ai";
  summary: string;
  pdfUrl: string;
  htmlUrl: string;
}

interface News {
  id: string;
  source: string;
  title: string;
  summary: string;
  url: string;
  timestamp: string;
}

interface SocialPost {
  id: string;
  author: string;
  handle: string;
  platform: string;
  content: string;
  url: string;
  timestamp: string;
}

// 模拟数据 - 后续会被 cron 任务替换
const papers: Paper[] = [
  {
    id: "1",
    title: "LeRobot: An Open-Source Library for End-to-End Robot Learning",
    authors: "Remi Cadene et al. (Hugging Face)",
    date: "2026-02-26",
    category: "embodied",
    summary: "Hugging Face发布的开源机器人学习库，集成从底层电机控制到大规模数据集采集的全栈能力。",
    pdfUrl: "https://arxiv.org/pdf/2602.22818",
    htmlUrl: "https://arxiv.org/abs/2602.22818",
  },
  {
    id: "2",
    title: "GeoWorld: Geometric World Models",
    authors: "Zeyu Zhang et al.",
    date: "2026-02-26",
    category: "worldmodel",
    summary: "引入双曲JEPA将潜在表示从欧几里得空间映射到双曲流形，解决长程预测退化问题。",
    pdfUrl: "https://arxiv.org/pdf/2602.23058",
    htmlUrl: "https://arxiv.org/abs/2602.23058",
  },
  {
    id: "3",
    title: "DySL-VLA: Efficient Vision-Language-Action Model Inference",
    authors: "Zebin Yang et al.",
    date: "2026-02-26",
    category: "vla",
    summary: "通过动态静态层跳过机制，实现VLA模型3.75x推理加速。",
    pdfUrl: "https://arxiv.org/pdf/2602.22896",
    htmlUrl: "https://arxiv.org/abs/2602.22896",
  },
];

const researchNews: News[] = [
  {
    id: "1",
    source: "OpenFang",
    title: "v2026.2.26 Release",
    summary: "External Secrets Management 新增完整 openclaw secrets 工作流",
    url: "https://github.com/openclaw/openclaw/releases",
    timestamp: "2026-02-27",
  },
  {
    id: "2",
    source: "NVIDIA",
    title: "GR00T N1 发布",
    summary: "NVIDIA 发布新版人形机器人基础模型，支持实时动作生成",
    url: "#",
    timestamp: "2026-02-28",
  },
];

const socialPosts: SocialPost[] = [
  {
    id: "1",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    platform: "X",
    content: "关于世界模型在机器人学习中的重要性，最新的研究表明...",
    url: "#",
    timestamp: "2h ago",
  },
  {
    id: "2",
    author: "Yann LeCun",
    handle: "@ylecun",
    platform: "X",
    content: "AI 的未来在于自主智能系统，我们需要重新思考学习范式...",
    url: "#",
    timestamp: "5h ago",
  },
];

function getCategoryLabel(category: Paper["category"]) {
  const labels = {
    embodied: "具身智能",
    vla: "VLA模型",
    worldmodel: "世界模型",
    ai: "人工智能",
  };
  return labels[category];
}

function getCategoryTagClass(category: Paper["category"]) {
  const classes = {
    embodied: "tag-embodied",
    vla: "tag-vla",
    worldmodel: "tag-worldmodel",
    ai: "tag-ai",
  };
  return classes[category];
}

export default function Home() {
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
          <span className="tag">每日更新</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <article key={paper.id} className="card flex flex-col">
              <Link href={`/paper/${paper.id}`}>
                <div className="flex gap-2 mb-3">
                  <span className={`tag ${getCategoryTagClass(paper.category)}`}>
                    {getCategoryLabel(paper.category)}
                  </span>
                  <span className="tag">{paper.date}</span>
                </div>
                <h4 className="card-title text-base">{paper.title}</h4>
                <p className="text-sm text-muted mb-3">{paper.authors}</p>
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
          {researchNews.map((news) => (
            <article key={news.id} className="card">
              <div className="flex items-center justify-between mb-3">
                <span className="tag tag-ai">{news.source}</span>
                <span className="text-xs text-muted">{news.timestamp}</span>
              </div>
              <h4 className="card-title">{news.title}</h4>
              <p className="text-sm text-muted">{news.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-semibold">社交媒体精选</h3>
          <span className="tag">X / 社交圈</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {socialPosts.map((post) => {
            const authorKey = post.handle.replace('@', '').toLowerCase();
            return (
            <article key={post.id} className="card">
              <Link href={`/social/${authorKey}`}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm">
                  {post.author[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted">{post.handle} · {post.timestamp}</p>
                </div>
                <span className="ml-auto tag">{post.platform}</span>
              </div>
              <p className="text-sm">{post.content}</p>
              </Link>
            </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
