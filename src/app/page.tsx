"use client";

import { useState } from "react";
import Link from 'next/link';
import papers, { Paper } from '../data/papers';
import companies from '../data/companies';

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

type FilterCategory = "all" | "worldmodel" | "embodied" | "vla";

export default function Home() {
  // 按日期排序，最新的在前
  const sortedPapers = [...papers].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [showAll, setShowAll] = useState(false);
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");

  // 过滤论文
  const filteredPapers = sortedPapers.filter(paper => {
    if (filterCategory === "all") return true;
    return paper.category === filterCategory;
  });

  // 默认显示6篇，其他折叠
  const displayedPapers = showAll ? filteredPapers : filteredPapers.slice(0, 6);
  const hasMore = filteredPapers.length > 6;

  const filterButtons: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "worldmodel", label: "世界模型" },
    { key: "embodied", label: "具身智能" },
    { key: "vla", label: "VLA模型" },
  ];

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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold">ArXiv 最新论文</h3>
            <span className="tag">每日更新 · {papers.length} 篇</span>
          </div>
        </div>

        {/* 分类标签筛选 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => {
                setFilterCategory(btn.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filterCategory === btn.key
                  ? "bg-primary text-white"
                  : "bg-card border border-accent/30 text-muted hover:border-primary/50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedPapers.map((paper) => (
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

        {/* 更多按钮 */}
        {hasMore && filterCategory === "all" && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              {showAll ? "收起 ▲" : `更多 ${filteredPapers.length - 6} 篇 ▼`}
            </button>
          </div>
        )}

        {/* 筛选结果提示 */}
        {filterCategory !== "all" && (
          <div className="flex items-center justify-between mt-6 text-sm text-muted">
            <span>筛选结果: {filteredPapers.length} 篇</span>
            <button
              onClick={() => {
                setFilterCategory("all");
                setShowAll(false);
              }}
              className="text-primary hover:underline"
            >
              清除筛选
            </button>
          </div>
        )}
      </section>

      {/* Research News Section */}
      <section id="research">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-semibold">前沿科技公司研究动态</h3>
          <span className="tag">Research Updates</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(companies).map((company) => (
            <Link key={company.id} href={`/company/${company.id}`}>
              <article className="card hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={company.logo} 
                    alt={company.shortName}
                    className="w-8 h-8 rounded"
                  />
                  <div className="flex-grow">
                    <h4 className="card-title text-base">{company.shortName}</h4>
                  </div>
                  <span className="text-xs text-muted">{company.lastUpdated}</span>
                </div>
                <p className="text-sm text-muted mb-3 line-clamp-2">{company.description}</p>
                <div className="flex flex-wrap gap-1">
                  {company.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
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
