// 论文数据 - 动态路由页面
// 路径: src/app/paper/[id]/page.tsx

import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

// 论文数据（后续可改为从外部JSON读取）
export const papersData: Record<string, {
  id: string;
  title: string;
  authors: string;
  date: string;
  category: string;
  summary: string;
  background: string;
  architecture: string;
  innovations: string;
  inspiration: string;
  pdfUrl: string;
  htmlUrl: string;
  figures: string[];
}> = {
  "1": {
    id: "1",
    title: "LeRobot: An Open-Source Library for End-to-End Robot Learning",
    authors: "Remi Cadene, Simon Aliberts, Francesco Capolino, et al. (Hugging Face)",
    date: "2026-02-26",
    category: "embodied",
    summary: "Hugging Face发布的开源机器人学习库，集成从底层电机控制到大规模数据集采集的全栈能力。",
    background: "机器人学习领域发展迅速，但工具链碎片化严重。现有工具通常是封闭源码、仅针对特定子模块设计，阻碍了端到端机器人学习的研究和应用。",
    architecture: "LeRobot是Hugging Face发布的开源库，集成从底层电机控制通信到大规模数据集采集、存储和流式的全栈能力。支持多种SOTA机器人学习算法（行为克隆、扩散策略、RL等），提供异步推理栈。",
    innovations: "- 全栈集成: 首个覆盖完整机器人学习流程的开源库\n- 硬件兼容性: 支持主流 affordable 硬件平台，同时保持可扩展性\n- 数据驱动: 强调可扩展学习方法，支持大规模数据训练",
    inspiration: "如你研究VLA模型的训练流程，LeRobot的端到端数据 pipeline 值得参考，其异步推理架构对实时控制任务有借鉴意义。",
    pdfUrl: "https://arxiv.org/pdf/2602.22818",
    htmlUrl: "https://arxiv.org/abs/2602.22818",
    figures: ["/figures/lerobot_overview.png"]
  },
  "2": {
    id: "2",
    title: "GeoWorld: Geometric World Models",
    authors: "Zeyu Zhang, Danning Li, Ian Reid, Richard Hartley",
    date: "2026-02-26",
    category: "worldmodel",
    summary: "引入双曲JEPA将潜在表示从欧几里得空间映射到双曲流形，解决长程预测退化问题。",
    background: "基于能量的预测世界模型通过在潜在能量景观上进行多步视觉规划。然而现有方法面临两大挑战：1) 潜在表示通常在欧几里得空间学习，忽略状态间的几何和层次结构；2) 长程预测能力不足，跨长 horizon 会快速退化。",
    architecture: "GeoWorld 引入双曲JEPA (Hyperbolic JEPA)，将潜在表示从欧几里得空间映射到双曲流形，保持几何结构和层次关系。配合几何强化学习进行基于能量的优化，实现双曲潜在空间中的稳定多步规划。",
    innovations: "- 双曲流形建模: 首个将双曲几何融入世界模型的工作\n- 层次结构保持: 解决传统欧几里得空间无法建模状态层次关系的问题\n- 长程预测: 在3步/4步规划任务上比 V-JEPA 2 提升约3%/2% 成功率",
    inspiration: "你研究世界模型方向，GeoWorld 的双曲空间建模方法可能是突破长程预测瓶颈的新思路，值得关注。",
    pdfUrl: "https://arxiv.org/pdf/2602.23058",
    htmlUrl: "https://arxiv.org/abs/2602.23058",
    figures: ["/figures/geoworld_architecture.png"]
  },
  "3": {
    id: "3",
    title: "DySL-VLA: Efficient Vision-Language-Action Model Inference",
    authors: "Zebin Yang, Yijiahao Qi, Tong Xie, Bo Yu, Shaoshan Liu, Meng Li",
    date: "2026-02-26",
    category: "vla",
    summary: "通过动态静态层跳过机制，实现VLA模型3.75x推理加速。",
    background: "VLA模型在机器人操作任务上表现出色，但计算成本过高，难以满足实时部署需求。",
    architecture: "DySL-VLA 核心洞察：任务中不同动作的重要性不同。关键步骤需要高精度，次要步骤可容忍更大方差。基于此，将VLA层分为两类：\n- 信息层 (Informative Layers): 始终执行\n- 增量层 (Incremental Layers): 可选择性跳过\n引入先验-后验跳过引导机制决定何时启动层跳过，并提出跳过感知的两阶段知识蒸馏训练。",
    innovations: "- 动态推理: 根据动作重要性动态调整计算量\n- 推理加速: 在 iso-accuracy 下达到 3.75x 加速\n- 参数减少: 可训练参数减少 85.7x",
    inspiration: "如你关注VLA模型的部署效率，DySL-VLA 的动态层跳过机制比传统模型压缩方法更细粒度，其知识蒸馏策略也值得参考。",
    pdfUrl: "https://arxiv.org/pdf/2602.22896",
    htmlUrl: "https://arxiv.org/abs/2602.22896",
    figures: ["/figures/dysl_vla_overview.png"]
  }
};

export default async function PaperPage({ params }: PageProps) {
  const { id } = await params;
  const paper = papersData[id];

  if (!paper) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <h1 className="text-2xl">论文未找到</h1>
        <Link href="/" className="text-cyan-400 hover:underline mt-4 inline-block">
          ← 返回首页
        </Link>
      </div>
    );
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
        <h1 className="text-4xl font-bold mb-4 leading-tight">{paper.title}</h1>
        
        {/* 作者 */}
        <p className="text-gray-400 mb-8">{paper.authors}</p>

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
            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
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
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{paper.architecture}</p>
          </div>
        </section>

        {/* 创新点 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">创新点与对比</h2>
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-green-500">
            <p className="text-gray-300 whitespace-pre-line">{paper.innovations}</p>
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
