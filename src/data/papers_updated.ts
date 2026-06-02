// 论文数据 - 2026-05-29 更新
// 包含现有论文 + 新增论文

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
  // 新增论文 - 2026-05-29
  {
    id: "cop-tactile-2026-05-28",
    title: "Beyond Binary: Sim-to-Real Dexterous Manipulation with Physics-Grounded Contact Representation",
    authors: "Jiahe Pan, Stelian Coros, Jitendra Malik, Toru Lin",
    institution: "ETH Zürich, UC Berkeley",
    date: "2026-05-28",
    category: "embodied",
    summary: "提出基于物理原理的触觉表示方法(CoP)，实现了sim-to-real场景下灵巧操作的零样本迁移，显著优于简化的触觉表征方法。",
    background: "接触式灵巧操作面临的主要瓶颈是真实世界数据收集的困难。现有sim-to-real方法往往简化触觉数据为低维特征，牺牲了复杂操作所需的丰富性。",
    architecture: "CoP的核心架构包含物理感知的接触表征和传感器校准方案。将高维触觉数据压缩为3D接触力向量和3D接触位置，基于可微动力学估计传感器特性。",
    innovations: "物理驱动的触觉表示，首次将高维触觉数据映射到有物理意义的3D力和位置；可微动力学校准方法，无需真实力测量即可估计传感器特性；sim-to-real兼容的表征设计，平衡了信息丰富性和迁移鲁棒性；盲操作能力，证明仅通过触觉即可完成高精度复杂操作。",
    inspiration: "触觉表征对VLA模型多模态融合具有重要参考价值；表征设计而非复杂域随机化技术可实现更好的sim-to-real迁移；物理约束嵌入表征有助于构建鲁棒的具身智能系统；在视觉受限场景下，触觉表征支持复杂操作的可行性验证。",
    pdfUrl: "https://arxiv.org/pdf/2605.28812v1",
    htmlUrl: "https://arxiv.org/html/2605.28812v1",
    figures: ["/figures/260528812_fig1.png"]
  },
  {
    id: "vla-monitoring-2026-05-27",
    title: "How VLAs Fail Differently: Black-Box Action Monitoring Reveals Architecture-Specific Failure Signatures",
    authors: "Krishnam Gupta",
    institution: "独立研究",
    date: "2026-05-27",
    category: "vla",
    summary: "发现VLA架构在电机命令层面存在根本性且可预测的不同失败模式，提出必须根据架构特性选择相应的监控机制。",
    background: "VLA模型在输出层到电机之间的动作行为未被系统研究，不同架构是否产生不同失败模式、哪些监控信号预测任务失败尚不清楚。",
    architecture: "提出VLA架构两大家族分类：离散家族(自回归、VQ-VAE)和连续家族(diffusion、flow matching)。SafeContract监控系统包含安全合约、conformal校准、架构特定监控器和CUSUM偏移检测。",
    innovations: "系统性发现和量化不同VLA架构在电机命令层面的失败模式差异；提出根据VLA架构家族选择相应监控器的实用框架；SafeContract实现无需训练、无模型访问的实时动作监控；conformal prediction应用于机器人安全边界确定，提供理论保证；量化离散和连续VLA在失败模式上的本质区别。",
    inspiration: "VLA部署时必须根据架构特性选择监控器，不能使用通用监控；需要重新评估广泛使用的速度监控对连续VLA的效果；VLA调试应关注架构特定的失败模式而非通用安全检查；复杂具身智能系统需要组合多种监控策略覆盖不同架构类型。",
    pdfUrl: "https://arxiv.org/pdf/2605.28726v1",
    htmlUrl: "https://arxiv.org/html/2605.28726v1",
    figures: ["/figures/260528726_fig1.png"]
  },
  
  // 现有论文数据 (保留其他论文)
  {
    id: "finevla-2026-05-28",
    title: "FineVLA",
    authors: "et al.",
    institution: "",
    date: "2026-05-28",
    category: "embodied",
    summary: "## 1. FineVLA  **一句话概括**: 提出细粒度指令对齐框架，通过十维动作标注schema和可扩展VLM标注器，让VLA策略支持按执行因子（手臂、方向、接触区域等）细粒度操控。  **论文信息** - **标题**: FineVLA: Fine-Grained Instruction Alignment for Steerable Vision-Language-Action Pol",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "hypersim-2026-05-28",
    title: "HyperSim",
    authors: "et al.",
    institution: "",
    date: "2026-05-28",
    category: "embodied",
    summary: "## 2. HyperSim  **一句话概括**: 提出高保真仿真环境合成、对抗轨迹生成与Sim-And-Real联合训练的三位一体框架，显著提升机器人操作策略从仿真到真实世界的迁移成功率。  **论文信息** - **标题**: HyperSim: A Holistic Sim-To-Real Framework For Robust Robotic Manipulation - **作者**",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  }
  // 更多现有论文数据...
];