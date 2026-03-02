// 论文数据 - 由 cron 任务每日更新
// 更新路径: /home/Hebin/project/ai-news-digest/src/data/papers.json

export interface Paper {
  id: string;
  title: string;
  authors: string;
  date: string;
  institution: string;
  category: "embodied" | "vla" | "worldmodel" | "ai";
  summary: string;
  background: string;
  architecture: string;
  innovations: string;
  inspiration: string;
  pdfUrl: string;
  htmlUrl: string;
  figures: string[];
}

export const papers: Paper[] = [
  {
    id: "lerobot-2026-02-26",
    title: "LeRobot: An Open-Source Library for End-to-End Robot Learning",
    authors: "Remi Cadene, Simon Aliberts, Francesco Capolino, et al.",
    institution: "Hugging Face",
    date: "2026-02-26",
    category: "embodied",
    summary: "Hugging Face发布的开源机器人学习库，集成从底层电机控制到大规模数据集采集的全栈能力。",
    background: "机器人学习领域发展迅速，但工具链碎片化严重。现有工具通常是封闭源码、仅针对特定子模块设计，阻碍了端到端机器人学习的研究和应用。",
    architecture: "LeRobot是Hugging Face发布的开源库，集成从底层电机控制通信到大规模数据集采集、存储和流式的全栈能力。支持多种SOTA机器人学习算法（行为克隆、扩散策略、RL等），提供异步推理栈。",
    innovations: "• 全栈集成: 首个覆盖完整机器人学习流程的开源库\n• 硬件兼容性: 支持主流 affordable 硬件平台，同时保持可扩展性\n• 数据驱动: 强调可扩展学习方法，支持大规模数据训练",
    inspiration: "如你研究VLA模型的训练流程，LeRobot的端到端数据 pipeline 值得参考，其异步推理架构对实时控制任务有借鉴意义。",
    pdfUrl: "https://arxiv.org/pdf/2602.22818",
    htmlUrl: "https://arxiv.org/abs/2602.22818",
    figures: ["/figures/lerobot_fig1.png"]
  },
  {
    id: "geoworld-2026-02-26",
    title: "GeoWorld: Geometric World Models",
    authors: "Zeyu Zhang, Danning Li, Ian Reid, Richard Hartley",
    institution: "University of Oxford",
    date: "2026-02-26",
    category: "worldmodel",
    summary: "引入双曲JEPA将潜在表示从欧几里得空间映射到双曲流形，解决长程预测退化问题。",
    background: "基于能量的预测世界模型通过在潜在能量景观上进行多步视觉规划。然而现有方法面临两大挑战：1) 潜在表示通常在欧几里得空间学习，忽略状态间的几何和层次结构；2) 长程预测能力不足，跨长 horizon 会快速退化。",
    architecture: "GeoWorld 引入双曲JEPA (Hyperbolic JEPA)，将潜在表示从欧几里得空间映射到双曲流形，保持几何结构和层次关系。配合几何强化学习进行基于能量的优化，实现双曲潜在空间中的稳定多步规划。",
    innovations: "• 双曲流形建模: 首个将双曲几何融入世界模型的工作\n• 层次结构保持: 解决传统欧几里得空间无法建模状态层次关系的问题\n• 长程预测: 在3步/4步规划任务上比 V-JEPA 2 提升约3%/2% 成功率",
    inspiration: "你研究世界模型方向，GeoWorld 的双曲空间建模方法可能是突破长程预测瓶颈的新思路，值得关注。",
    pdfUrl: "https://arxiv.org/pdf/2602.23058",
    htmlUrl: "https://arxiv.org/abs/2602.23058",
    figures: ["/figures/geoworld_fig1.png", "/figures/geoworld_fig2.png"]
  },
  {
    id: "dysl-vla-2026-02-26",
    title: "DySL-VLA: Efficient Vision-Language-Action Model Inference via Dynamic-Static Layer-Skipping",
    authors: "Zebin Yang, Yijiahao Qi, Tong Xie, Bo Yu, Shaoshan Liu, Meng Li",
    institution: "Shanghai Jiao Tong University",
    date: "2026-02-26",
    category: "vla",
    summary: "通过动态静态层跳过机制，实现VLA模型3.75x推理加速。",
    background: "VLA模型在机器人操作任务上表现出色，但计算成本过高，难以满足实时部署需求。",
    architecture: "DySL-VLA 核心洞察：任务中不同动作的重要性不同。关键步骤需要高精度，次要步骤可容忍更大方差。基于此，将VLA层分为两类：\n• 信息层 (Informative Layers): 始终执行\n• 增量层 (Incremental Layers): 可选择性跳过\n引入先验-后验跳过引导机制决定何时启动层跳过，并提出跳过感知的两阶段知识蒸馏训练。",
    innovations: "• 动态推理: 根据动作重要性动态调整计算量\n• 推理加速: 在 iso-accuracy 下达到 3.75x 加速\n• 参数减少: 可训练参数减少 85.7x",
    inspiration: "如你关注VLA模型的部署效率，DySL-VLA 的动态层跳过机制比传统模型压缩方法更细粒度，其知识蒸馏策略也值得参考。",
    pdfUrl: "https://arxiv.org/pdf/2602.22896",
    htmlUrl: "https://arxiv.org/abs/2602.22896",
    figures: ["/figures/dysl_vla_fig1.png", "/figures/dysl_vla_fig2.png", "/figures/dysl_vla_fig3.png"]
  },
  {
    id: "sparr-2026-02-26",
    title: "SPARR: Simulation-based Policies with Asymmetric Real-world Residuals for Assembly",
    authors: "Yijie Guo, Iretiayo Akinola, Lars Johannsmeier, Hugo Hadfield, Abhishek Gupta, Yashraj Narang",
    institution: "Google DeepMind",
    date: "2026-02-26",
    category: "embodied",
    summary: "提出混合仿真+真实世界的非对称残差策略，解决机器人装配中的 sim-to-real 差距。",
    background: "机器人装配是长期挑战，需要精确的接触丰富操作。Sim-to-real方法存在性能下降，纯real-world RL依赖大量人工监督且泛化能力差。",
    architecture: "SPARR 提出混合方案：\n• Base Policy: 在仿真中训练，使用底层状态观测和密集奖励，提供强先验\n• Residual Policy: 在真实世界学习，使用视觉观测和稀疏奖励，补偿动力学差异和传感器噪声",
    innovations: "• 非对称残差: 仿真策略和真实世界残差的非对称组合\n• 零样本 vs RL: 比SOTA零样本sim-to-real提升38.4%成功率，周期时间减少29.7%\n• 无需人工 expertise: 摆脱对人工监督的依赖",
    inspiration: "SPARR 的非对称残差思路可用于你研究的VLA模型，特别是处理sim2real gap 时，基础策略+残差补偿的范式值得关注。",
    pdfUrl: "https://arxiv.org/pdf/2602.23253",
    htmlUrl: "https://arxiv.org/abs/2602.23253",
    figures: []
  },
  {
    id: "cebench-2026-02-25",
    title: "Rethinking the Practicality of Vision-Language-Action Model: A Comprehensive Benchmark and An Improved Baseline",
    authors: "Wenxuan Song, Jiayi Chen",
    institution: "Tsinghua University",
    date: "2026-02-25",
    category: "vla",
    summary: "发布首个VLA实用性 benchmark CEBench 和轻量级 VLA 模型 LLaVA-VLA。",
    background: "现有VLA模型存在三大问题：参数规模过大、预训练成本高、对不同 embodiment 适用性差。",
    architecture: "• CEBench: 新 benchmark，覆盖多种 embodiment（仿真+真实），包含14.4k仿真轨迹和1.6k真实轨迹\n• LLaVA-VLA: 轻量级 VLA，消费级GPU可部署\n  - 紧凑 VLM backbone + 多视角感知 + 本体感知 tokenization + action chunking\n  - 两阶段训练：后训练 + 微调\n  - 统一导航和操作的动作空间",
    innovations: "• 实用性 benchmark: 首个全面评估VLA实用性的基准\n• 消费级部署: 首个端到端支持移动操作的VLA模型\n• 无大Scale预训练: 摆脱对大规模预训练的依赖",
    inspiration: "CEBench 的评估框架和 LLaVA-VLA 的轻量化设计对你做 VLA 研究有直接参考价值，特别是多 embodiment 泛化性的评估方法。",
    pdfUrl: "https://arxiv.org/pdf/2602.22663",
    htmlUrl: "https://arxiv.org/abs/2602.22663",
    figures: []
  }
];

export default papers;
