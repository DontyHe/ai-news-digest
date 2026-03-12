// 大V详情页 - 动态路由
// 路径: src/app/social/[name]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import socialData from '../../../data/social';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return Object.keys(socialData).map((name) => ({
    name,
  }));
}

export default async function SocialPage({ params }: PageProps) {
  const { name } = await params;
  const influencer = socialData[name];

  if (!influencer) {
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
