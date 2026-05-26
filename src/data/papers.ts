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
    id: "paper-260513632",
    title: "Guide, Think, Act: Interactive Embodied Reasoning in Vision-Language-Action Models",
    authors: "Yiran Ling, Qing Lian, Jinghang Li, Qing Jiang, Tianming Zhang, Xiaoke Jiang, Chuanxiu Liu, Jie Liu, Lei Zhang",
    institution: "福田实验室、哈尔滨工业大学、IDEA、湖南大学、华南理工大学",
    date: "2026-05-13",
    category: "vla",
    summary: "GTA-VLA 通过引导-思考-执行三阶段，让用户用 affordance 点、边界框、轨迹等视觉提示直接引导 VLA 策略，实现可纠正的交互式具身推理。SimplerEnv WidowX 81.2% 成功率（SOTA）。",
    background: "现有 VLA 采用直接 Sense-to-Act 映射，OOD 场景下脆弱且缺乏人类干预接口。CoT 方法虽暴露中间推理，但推理仍由模型内部生成无法被外部修正。",
    architecture: "三阶段：Guide（空间先验接口接入策略）+ Think（Qwen3-VL-2B 生成空间-视觉 CoT，取 hidden states 作为 H_reasoning）+ Act（Flow-Matching action head 结合高频控制观测生成 action chunks）。异步双频设计：慢速推理+快速控制解耦。",
    innovations: "首次在 VLA 中引入可选空间先验作为可学习条件；空间-视觉 CoT 统一推理；异步双频架构解决推理延迟；自动化数据管道合成交互监督。",
    inspiration: "空间引导和异步双频设计值得参考：高层世界模型推理与低层动作执行解耦。空间先验接口让人类在感知层直接修正模型，无需通过语言。",
    pdfUrl: "https://arxiv.org/pdf/2605.13632",
    htmlUrl: "https://arxiv.org/abs/2605.13632",
    figures: []
  },
  {
    id: "paper-260519319",
    title: "SWEET: Sparse World Modeling with Image Editing for Embodied Task Execution",
    authors: "Yiren Song, Yihan Wang, Xiyao Deng, Zhuoran Yan, Mike Zheng Shou",
    institution: "上海科技大学",
    date: "2026-05-19",
    category: "worldmodel",
    summary: "SWEET 用图像编辑模型（FLUX-Kontext）替代密集视频生成，作为稀疏视觉世界模型预测任务级关键帧，配合扩散动作预测器实现机器人操控规划，大幅降低计算成本。",
    background: "密集视频生成计算代价高，且许多操作任务进展可以用少量任务相关视觉状态总结。图像编辑是否可用作稀疏世界模型？",
    architecture: "稀疏视觉规划：图像编辑模型通过连续编辑逐步生成任务关键帧序列 + Goal-conditioned 扩散动作预测器将相邻关键帧转为动作 chunks。混合训练策略减少真实/编辑图像分布差距。",
    innovations: "首次系统对比视频生成模型与图像编辑模型在机器人世界建模上的差异；稀疏关键帧规划范式；显著低于视频生成的推理成本。",
    inspiration: "稀疏世界模型（关键帧）vs 密集世界模型（视频）的权衡是实用方向。选择性地建模可能是降低计算成本的关键，对你的世界模型设计有直接参考价值。",
    pdfUrl: "https://arxiv.org/pdf/2605.19319",
    htmlUrl: "https://arxiv.org/abs/2605.19319",
    figures: []
  },
  {
    id: "paper-260520544",
    title: "The Yes-Man Syndrome: Benchmarking Abstention in Embodied Robotic Agents",
    authors: "Doguhan Yeke, Elif Su Temirel, Ananth Shreekumar, Brandon Lee, Dongyan Xu, Z Berkay Celik",
    institution: "Purdue University, Bilkent University",
    date: "2026-05-19",
    category: "embodied",
    summary: "RoboAbstention 基准揭示当前 VLM 在具身场景中 abstention 率极低：最强模型 Gemini Robotics ER 1.6 Preview 仅在 16.5% 应拒绝指令中选择拒绝。提出八类拒绝 taxonomy。",
    background: "VLM 作为具身机器人高层规划器时，面对模糊、不可行、前提矛盾等指令必须知道何时拒绝执行。现有 abstention 基准仅针对文本场景，未捕捉具身机器人的感知接地和物理约束挑战。",
    architecture: "三阶段 pipeline：结构化视觉接地（VLM 提取场景表示）+ 确定性约束推导 + 类别模板控制生成拒绝指令。来自 5 个数据集 1,250 张图共 6,069 条 benchmark 指令。",
    innovations: "首次提出具身场景下八类拒绝 taxonomy；可扩展可审计的拒绝指令生成 pipeline；系统评估前沿 VLM 的 abstention 能力；Defensive prompting + ICL 显著改善拒绝率。",
    inspiration: "具身智能的'安全边界意识'被严重低估。在 VLA 研究中，不仅要优化成功率，还要关注模型是否知道自己什么时候不该执行。这对安全部署机器人到真实世界至关重要。",
    pdfUrl: "https://arxiv.org/pdf/2605.20544",
    htmlUrl: "https://arxiv.org/abs/2605.20544",
    figures: []
  },
  {
    id: "paper-260512090",
    title: "World Action Models: The Next Frontier in Embodied AI",
    authors: "Siyin Wang, Junhao Shi, Zhaoyang Fu, Xinzhe He, Feihong Liu, Chenchen Yang, Yikang Zhou, Zhaoye Fei, Jingjing Gong, Jinlan Fu, Mike Zheng Shou, Xuanjing Huang, Xipeng Qiu, Yu-Gang Jiang",
    institution: "复旦大学",
    date: "2026-05-12",
    category: "worldmodel",
    summary: "首篇 WAMs 系统综述，正式定义 World Action Models，将现有方法组织为 Cascaded WAMs 和 Joint WAMs 两大类，梳理数据生态和评估协议，为具身基础模型提供统一概念框架。",
    background: "VLA 学习 reactive observation-to-action 映射，没有显式建模物理世界在干预下的演化。WAMs 将预测性环境动力学与动作生成统一，是近年来兴起的新范式但文献碎片化。",
    architecture: "Cascaded WAMs：世界模型生成未来状态→动作预测器基于状态预测动作（按生成模态/条件机制细分）。Joint WAMs：autoregressive 联合生成未来状态和动作。数据：遥操作/人类演示/仿真/自我中心视频。评估：视觉保真度、物理常识、动作合理性。",
    innovations: "首次系统梳理 WAMs 领域；正式定义 WAMs 并区分于相关概念；提出统一 taxonomy（Cascaded/Joint）；全面梳理数据生态和评估协议。",
    inspiration: "WAMs 的核心区别在于建模环境动力学（世界如何响应动作）而不仅是观测到动作的条件概率。如果你的模型同时建模未来状态和动作的联合分布，则属于 WAMs 范畴。",
    pdfUrl: "https://arxiv.org/pdf/2605.12090",
    htmlUrl: "https://arxiv.org/abs/2605.12090",
    figures: []
  }
];

export default papers;