// 大V社交媒体数据 - 动态路由页面
// 路径: src/app/social/[name]/page.tsx

import Link from 'next/link';

interface PageProps {
  params: Promise<{ name: string }>;
};

// 大V社交媒体数据（后续可改为从外部JSON读取）
export const socialData: Record<string, {
  id: string;
  name: string;
  platform: string;
  handle: string;
  bio: string;
  avatar: string;
  followers: string;
  categories: string[];
  recentPosts: {
    id: string;
    content: string;
    date: string;
    likes: number;
    reposts: number;
    url: string;
  }[];
}> = {
  "karpathy": {
    id: "karpathy",
    name: "Andrej Karpathy",
    platform: "X (Twitter)",
    handle: "@karpathy",
    bio: "特斯拉前AI总监，OpenAI创始成员。专注于自动驾驶、神经网络和计算机视觉。",
    avatar: "https://pbs.twimg.com/profile_images/1594518828893073408/0mqrk5rv_400x400.jpg",
    followers: "120万",
    categories: ["自动驾驶", "深度学习", "VLA模型", "教育"],
    recentPosts: [
      {
        id: "1",
        content: "关于VLA模型的最新思考：端到端架构正在改变机器人学习的范式...",
        date: "2026-03-01",
        likes: 5200,
        reposts: 890,
        url: "https://twitter.com/karpathy/status/xxx"
      },
      {
        id: "2",
        content: "教育改革：让每个人都学会编程的时代已经到来",
        date: "2026-02-28",
        likes: 3800,
        reposts: 420,
        url: "https://twitter.com/karpathy/status/xxx"
      }
    ]
  },
  "ylecun": {
    id: "ylecun",
    name: "Yann LeCun",
    platform: "X (Twitter)",
    handle: "@ylecun",
    bio: "Meta AI首席科学家，NYU教授，图灵奖得主。对深度学习和AI有着独特的见解。",
    avatar: "https://pbs.twimg.com/profile_images/1438663072583655425/xs-Fpz0z_400x400.jpg",
    followers: "100万",
    categories: ["深度学习", "AI理论", "开源", "VLA模型"],
    recentPosts: [
      {
        id: "1",
        content: "关于自主智能的思考：我们需要能够学习的AI，而不是仅仅记忆的AI...",
        date: "2026-03-01",
        likes: 4800,
        reposts: 720,
        url: "https://twitter.com/ylecun/status/xxx"
      }
    ]
  },
  "sanjay": {
    id: "sanjay",
    name: "Sanjay Geist",
    platform: "X (Twitter)",
    handle: "@sanjaygim",
    bio: "谷歌DeepMind具身智能研究负责人。领导RT系列机器人模型的研究。",
    avatar: "https://pbs.twimg.com/profile_images/1583677086482845696/0Hv7gJ7z_400x400.jpg",
    followers: "45万",
    categories: ["具身智能", "机器人", "RT模型", "Google DeepMind"],
    recentPosts: [
      {
        id: "1",
        content: "RT-3发布：机器人基础模型的新里程碑...",
        date: "2026-03-01",
        likes: 3200,
        reposts: 580,
        url: "https://twitter.com/sanjaygim/status/xxx"
      }
    ]
  }
};

// 静态路由生成
export async function generateStaticParams() {
  return Object.keys(socialData).map((name) => ({
    name,
  }));
}

export default async function SocialPage({ params }: PageProps) {
  const { name } = await params;
  const influencer = socialData[name];

  if (!influencer) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <h1 className="text-2xl">未找到该大V</h1>
        <Link href="/" className="text-cyan-400 hover:underline mt-4 inline-block">
          ← 返回首页
        </Link>
      </div>
    );
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
        {/* 个人信息 */}
        <div className="flex items-start gap-6 mb-12">
          <img
            src={influencer.avatar}
            alt={influencer.name}
            className="w-24 h-24 rounded-full border-2 border-cyan-500"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{influencer.name}</h1>
            <p className="text-cyan-400 mb-2">{influencer.handle}</p>
            <p className="text-gray-400 mb-4">{influencer.bio}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{influencer.platform}</span>
              <span>•</span>
              <span>{influencer.followers} 粉丝</span>
            </div>
          </div>
        </div>

        {/* 关注领域 */}
        <div className="flex gap-2 mb-12">
          {influencer.categories.map((cat) => (
            <span 
              key={cat}
              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* 最近动态 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">最近精选</h2>
          <div className="space-y-6">
            {influencer.recentPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <div className="flex gap-4">
                    <span>❤️ {post.likes.toLocaleString()}</span>
                    <span>🔁 {post.reposts.toLocaleString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>由 Javas 自动整理 | 来源: {influencer.platform}</p>
        </div>
      </footer>
    </div>
  );
}
