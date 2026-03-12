import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI News Digest | 每日AI资讯",
  description: "每日追踪AI领域最新研究动态：具身智能、世界模型、VLA、前沿科技公司",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-background text-foreground min-h-screen">
        <header className="border-b border-accent/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">
              <span className="text-primary">AI</span> News Digest
            </h1>
            <nav className="flex gap-6 text-sm">
              <a href="#arxiv" className="hover:text-primary transition-colors">ArXiv</a>
              <a href="#research" className="hover:text-primary transition-colors">研究动态</a>
              <a href="#social" className="hover:text-primary transition-colors">社交媒体</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-accent/50 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-muted text-sm">
            Powered by OpenClaw · Updated daily
          </div>
        </footer>
      </body>
    </html>
  );
}
