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
    id: "paper-260404502",
    title: "Veo-Act: How Far Can Frontier Video Models Advance Generalizable Robotic Manipulation?",
    authors: "Zhongru Zhang, Chenghan Yang, Qingzhou Lu, Yanjiang Guo, Jianke Zhang, Yucheng Hu, Jianyu Chen",
    institution: "清华大学",
    date: "2026-04-06",
    category: "vla",
    summary: "用 Google Veo-3 视频生成模型做高级运动规划，配合 π₀.₅ VLA 做低级灵巧操作执行，构建层次化机器人操作框架。在仿真和真实灵巧手平台上将成功率从 45% 提升到 80%。",
    background: "视频生成模型已展现对物理动力学的强理解能力，但能否直接用于机器人操作仍是开放问题。现有 VLA 在接触密集交互中精度不足。",
    architecture: "三层层次化框架：Veo-3 视频规划层、DINOv3 多任务逆动力学模型（action head + interaction detector）、VLA 执行层。IDM 从随机 play 数据训练，interaction detector 自动切换视频规划和 VLA 执行。",
    innovations: "首次系统评估前沿商业视频模型在零样本机器人操作中的能力边界；设计 interaction detector 实现自动切换；Veo-3 + π₀.₅ 组合框架。",
    inspiration: "视频生成模型适合做高层任务规划，接触密集操作仍需 VLA。层次化架构是实用方案。",
    pdfUrl: "https://arxiv.org/pdf/2604.04502",
    htmlUrl: "https://arxiv.org/abs/2604.04502",
    figures: []
  },
  {
    id: "paper-260406168",
    title: "Action Images: End-to-End Policy Learning via Multiview Video Generation",
    authors: "Zixian Gao, Qiao Sun, Yilin Zhao, Yuncong Yang, Yilun Du, Tsun-Hsuan Wang, Yi-Ling Qiao, Chuang Gan",
    institution: "UMass Amherst, UTokyo, NVIDIA, Harvard, Genesis AI",
    date: "2026-04-07",
    category: "vla",
    summary: "将 7-DoF 机器人动作转化为像素级动作图像，用统一视频生成框架同时建模观测和动作，基于 Wan 2.2 实现零样本策略。RLBench 和真实世界评测取得最强零样本成功率。",
    background: "当前 WAM 在视频预测上很强但策略泛化不足。瓶颈在于动作表示：依赖独立 policy head 或非像素级编码，预训练视频知识利用率低。",
    architecture: "动作编码：7-DoF → 3个语义3D点 → 多视角RGB高斯热力图。动作解码：多视角射线投射重建3D点。统一模型基于 Wan 2.2 微调，通过多种 mask 策略训练联合生成、条件生成、动作标注。",
    innovations: "像素级动作表示让视频骨干本身就是策略；多视角解决3D运动深度歧义；统一视频空间支持多种任务。",
    inspiration: "动作像素化让视频模型的预训练知识直接用于策略学习，避免 VLM→action 的适配损失。",
    pdfUrl: "https://arxiv.org/pdf/2604.06168",
    htmlUrl: "https://arxiv.org/abs/2604.06168",
    figures: []
  },
  {
    id: "paper-260407430",
    title: "HY-Embodied-0.5: Embodied Foundation Models for Real-World Agents",
    authors: "Tencent Hunyuan Team (Yuxiang Wei 等)",
    institution: "腾讯混元",
    date: "2026-04-08",
    category: "vla",
    summary: "腾讯发布具身智能专用 VLM 基础模型族，MoT-2B 在 22 个基准上平均 58%，MoE-32B 媲美 Gemini 3.0 Pro。开源 MoT-2B。",
    background: "通用 VLM 对物理世界细粒度视觉感知和具身推理能力不足。",
    architecture: "MoT-2B：HY-ViT 2.0 编码器 + MoT 架构（视觉/语言独立 QKV/FFN）+ 视觉 latent tokens。MoE-32B：32B激活/407B总参数。迭代 RL + rejection sampling SFT 后训练，大→小 on-policy 蒸馏。",
    innovations: "MoT 架构在小模型上有效 doubling 参数量；视觉 latent tokens 提升感知；迭代自进化后训练；大规模蒸馏。",
    inspiration: "MoT 是解决小模型视觉-语言跷跷板问题的有效方案。蒸馏策略为实际部署提供实用路径。",
    pdfUrl: "https://arxiv.org/pdf/2604.07430",
    htmlUrl: "https://arxiv.org/abs/2604.07430",
    figures: []
  },
  {
    id: "paper-260408168",
    title: "ViVa: A Video-Generative Value Model for Robot Reinforcement Learning",
    authors: "Sichuan University, ZJU team",
    institution: "四川大学、浙江大学",
    date: "2026-04-09",
    category: "worldmodel",
    summary: "将预训练视频生成器复用为 RL 价值函数，利用视频模型的时空先验估计状态价值，无需额外标注。",
    background: "机器人 RL 的价值网络缺乏对时序动态的建模能力。视频生成模型在大规模视频语料上学到了丰富时空先验。",
    architecture: "输入当前观测+本体感知，联合预测未来本体感知+状态标量价值。利用视频模型对好/坏状态转移的生成质量差异估计价值。",
    innovations: "首次将视频生成模型直接作为 RL 价值函数；纯自监督；自然处理部分可观测和延迟奖励。",
    inspiration: "视频生成模型可以同时充当世界模型和价值函数。在世界模型训练中引入价值估计目标，直接用于 RL fine-tuning。",
    pdfUrl: "https://arxiv.org/pdf/2604.08168",
    htmlUrl: "https://arxiv.org/abs/2604.08168",
    figures: []
  },
  {
    id: "paper-260329844",
    title: "DIAL: Decoupling Intent and Action via Latent World Modeling for End-to-End VLA",
    authors: "XPENG Robotics & HKU team",
    institution: "小鹏机器人、香港大学",
    date: "2026-04-06",
    category: "vla",
    summary: "通过可微分的潜在意图瓶颈，将 VLA 中的高层认知决策和低层运动执行解耦。RoboCasa GR1 基准 70.2% 成功率，10倍数据效率提升。",
    background: "现有端到端 VLA 直接映射视觉-语言特征到底层动作，未充分利用 VLM 高层决策潜力，训练不稳定。",
    architecture: "潜在意图瓶颈：VLM 预测 ViT 特征空间的未来视觉状态（意图），独立 action decoder 从意图生成控制动作。VLM 本质上在 ViT 特征空间做世界建模。",
    innovations: "结构化解耦认知决策和运动执行；VLM 在自身特征空间做世界建模保留预训练知识；10倍数据效率。",
    inspiration: "VLM→未来视觉特征→动作的三段式设计比 VLM→动作更合理。让 VLM 在自己的特征空间做世界建模与你的研究方向高度契合。",
    pdfUrl: "https://arxiv.org/pdf/2603.29844",
    htmlUrl: "https://arxiv.org/abs/2603.29844",
    figures: []
  },
];

export default papers;
