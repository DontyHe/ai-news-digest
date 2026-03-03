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
    id: "stemvla-2026-02-27",
    title: "StemVLA: An Open-Source Vision-Language-Action Model with Future 3D Spatial Geometry Knowledge and 4D Historical Representation",
    authors: "Jiasong Xiao, Yutao She, Kai Li, Yuyang Sha, Ziang Cheng, Ziang Tong",
    institution: "Various",
    date: "2026-02-27",
    category: "vla",
    summary: "StemVLA 显式整合未来导向的3D空间知识和历史4D时空表示，通过预测结构化的3D未来世界知识来增强动作预测。",
    background: "现有VLA模型主要依赖从2D视觉输入到动作序列的直接映射，没有显式建模底层3D空间结构或时间世界动态，可能限制空间推理和长程决策。",
    architecture: "StemVLA 包含三个核心组件：1) 预测结构化的3D未来空间-几何世界知识；2) 将历史图像帧输入预训练的video-geometry transformer主干提取隐式3D世界表示；3) 使用时间注意力模块(VideoFormer)跨时间聚合形成统一的4D历史时空表示。",
    innovations: "• 显式3D未来预测: 预测未来场景几何和物体配置\n• 4D历史表示: 联合建模2D观察、预测3D未来结构和4D时间动态\n• CALVIN基准: 在ABC-D基准上实现SOTA性能",
    inspiration: "StemVLA的3D空间建模和4D时空表示方法对你研究VLA的长程推理能力有重要参考价值，其显式未来预测可能是突破当前VLA瓶颈的关键。",
    pdfUrl: "https://arxiv.org/pdf/2602.23721",
    htmlUrl: "https://arxiv.org/abs/2602.23721",
    figures: []
  },
  {
    id: "favla-2026-02-27",
    title: "FAVLA: A Force-Adaptive Fast-Slow VLA model for Contact-Rich Robotic Manipulation",
    authors: "Yao Li, Peiyuan Tang, Wuyang Zhang, Chengyang Zhu, Yifan Duan, Weikai Shi, Xiaodong Zhang, Zijiang Yang, Jianmin Ji, Yanyong Zhang",
    institution: "Various",
    date: "2026-02-27",
    category: "vla",
    summary: "FAVLA通过快慢双环路架构解耦力反馈感知与控制，实现接触丰富操纵的自适应频率调度。",
    background: "力/力矩反馈可以显著改善接触丰富操纵的VLA模型，但现有方法在单一工作频率融合所有模态，忽略了真实机器人传感器的不匹配采样率。",
    architecture: "FAVLA采用快慢双环路：慢速VLM以固定低频运行编码模态并预测近未来力变化；快速动作专家(AE)以可变高频执行，根据最新力序列数据生成反应动作。引入力适配器将高频力特征注入多个AE层，并基于VLM预测的力变化自适应调度AE执行频率。",
    innovations: "• 快慢双环路: 力反馈感知与控制解耦\n• 自适应频率调度: 根据力变化动态调整控制频率\n• 接触丰富任务: 显著优于基线方法",
    inspiration: "FAVLA的快慢架构设计对你研究力反馈控制有重要参考价值，其自适应频率调度策略是平衡计算效率和控制精度的有效方法。",
    pdfUrl: "https://arxiv.org/pdf/2602.23648",
    htmlUrl: "https://arxiv.org/abs/2602.23648",
    figures: []
  },
  {
    id: "brittle-grounding-2026-02-27",
    title: "Robust Skills, Brittle Grounding: Diagnosing Restricted Generalization in Vision-Language Action Policies via Multi-Object Picking",
    authors: "David Emukpere, Romain Deffayet, Jean-Michel Renders",
    institution: "Various",
    date: "2026-02-27",
    category: "vla",
    summary: "研究揭示VLA策略的指令-grounded泛化存在限制，操纵技能获取与指令跟随可能解耦。",
    background: "VLA策略在少量演示数据下能取得较强的操纵基准测试成绩，但这种表现究竟源于robust的语言-物体grounding，还是依赖于物体-位置相关性仍不清楚。",
    architecture: "本文提出受控的多物体拾取研究，逐步增加物体放置变异性直至完全随机化，并评估打破熟悉关联的held-out物体-位置配对。测试了包括SmolVLA和π₀.₅在内的代表性VLA策略。",
    innovations: "• 发现执行操纵原语比指令条件下的任务成功更可靠\n• 操纵技能获取与指令跟随是解耦的\n• 建议增加任务阶梯和分解指标",
    inspiration: "VLA模型的泛化能力可能存在'虚假繁荣'，需要更严格的测试。指令-grounded泛化值得单独评估。",
    pdfUrl: "https://arxiv.org/pdf/2602.24143",
    htmlUrl: "https://arxiv.org/abs/2602.24143",
    figures: []
  },
  {
    id: "planning-observation-2026-02-27",
    title: "Planning from Observation and Interaction",
    authors: "Tyler Han, Siyang Shen, Rohan Baijal, Harine Ravichandiran, Bat Nemekhbold, Kevin Huang, Sanghun Jung, Byron Boots",
    institution: "University of Washington",
    date: "2026-02-27",
    category: "embodied",
    summary: "提出基于规划的逆强化学习算法，仅从观察和交互中进行世界建模，实现一小时内从零学习图像操纵任务。",
    background: "观察学习要求智能体仅通过观察执行任务来学习。在真实机器人学习中，无法假设可以获得手设计的奖励和演示者动作。",
    architecture: "提出基于规划的IRL算法，从观察和交互中进行世界建模。完全在真实世界中进行实验，证明该范式可以在一小时内从零学习基于图像的操纵任务，不需要任何先验知识、预训练或除任务观察之外的任何数据。",
    innovations: "• 无先验学习: 不假设任何先验知识或预训练\n• 在线迁移学习: 学习的世界模型表示能够进行在线迁移学习\n• 高样本效率: 与IRL、RL和BC相比显著提高样本效率",
    inspiration: "从观察中学习世界模型是数据受限设置下的可行路径，在线世界建模和从观察与交互中规划是实际可行的。",
    pdfUrl: "https://arxiv.org/pdf/2602.24121",
    htmlUrl: "https://arxiv.org/abs/2602.24121",
    figures: []
  },
  {
    id: "foundation-worldmodel-2026-02-27",
    title: "Foundation World Models for Agents that Learn, Verify, and Adapt Reliably Beyond Static Environments",
    authors: "Florent Delgrange",
    institution: "Various",
    date: "2026-02-27",
    category: "worldmodel",
    summary: "提出基础世界模型的愿景：持久的、组合的表示，统一强化学习、反应式/程序合成和抽象机制。",
    background: "下一代自主智能体不仅要学习高效，还要在开放世界中可靠地行动并适应行为变化。标准方法假设固定任务和环境，限制了世界模型支持必须随条件变化更新策略的智能体的能力。",
    architecture: "围绕四个组件构建议程：1) 从规范中学习奖励模型；2) 学习中集成的自适应形式验证；3) 在线抽象校准以量化模型预测的可靠性；4) 验证器引导的测试时合成和世界模型生成。",
    innovations: "• 形式验证集成: 将形式验证集成到学习过程中\n• 测试时合成: 验证器引导的测试时合成和世界模型生成\n• 可靠适应: 使智能体能够从少量交互中推导新策略",
    inspiration: "基础世界模型可能是学习、推理和适应的统一底层，可靠性验证与学习过程的结合是重要方向。",
    pdfUrl: "https://arxiv.org/pdf/2602.23997",
    htmlUrl: "https://arxiv.org/abs/2602.23997",
    figures: []
  },
  {
    id: "aoe-2026-02-27",
    title: "AoE: Always-on Egocentric Human Video Collection for Embodied AI",
    authors: "Large Team",
    institution: "Various",
    date: "2026-02-27",
    category: "embodied",
    summary: "提出AoE数据收集系统，利用人类自身和智能手机进行低门槛、大规模自我中心数据收集。",
    background: "具身基础模型需要大规模、高质量的真实世界交互数据进行预训练和扩展，但现有数据收集方法成本高、硬件依赖复杂、交互范围有限。",
    architecture: "AoE系统包含：1) 人体颈挂式智能手机支架，低门槛大规模自我中心数据收集；2) 跨平台移动应用，利用设备端计算进行实时处理；3) 云端托管自动标注和过滤管道，将原始视频转换为高质量训练数据。",
    innovations: "• 云边协同: 低成本、高效率、场景无关的真实世界交互数据收集\n• 分布式收集: 任何人、任何时间、任何地点都能进行数据收集\n• 下游任务: 高质量自我中心数据显著提升真实世界泛化能力",
    inspiration: "人类自我中心视频是具身智能数据的宝贵来源，低成本数据收集对规模化至关重要。",
    pdfUrl: "https://arxiv.org/pdf/2602.23893",
    htmlUrl: "https://arxiv.org/abs/2602.23893",
    figures: []
  },
  {
    id: "omnixtreme-2026-02-27",
    title: "OmniXtreme: Breaking the Generality Barrier in High-Dynamic Humanoid Control",
    authors: "Various",
    institution: "Various",
    date: "2026-02-27",
    category: "embodied",
    summary: "提出OmniXtreme框架，解耦通用运动技能学习与物理技能精炼，实现高动态人形机器人控制。",
    background: "高保真运动跟踪是通用化、类人运动技能的终极测试，但当前策略存在' generality barrier'：随着运动库规模增大，跟踪保真度不可避免下降。",
    architecture: "OmniXtreme采用两阶段方法：1) 使用flow-matching策略和高效架构进行通用运动技能学习，无需干扰密集的多运动RL优化；2)  actuation-aware精炼阶段确保在物理硬件上的鲁棒性能。",
    innovations: "• 技能解耦: 将运动技能学习与物理精炼分离\n• 高保真跟踪: 在多样化、高难度数据集上保持高保真跟踪\n• 真实机器人: 在真实机器人上成功执行多种极限动作",
    inspiration: "OmniXtreme解决了高动态人形控制中长期存在的保真度-可扩展性权衡问题。",
    pdfUrl: "https://arxiv.org/pdf/2602.23843",
    htmlUrl: "https://arxiv.org/abs/2602.23843",
    figures: []
  },
  {
    id: "safegen-llm-2026-02-27",
    title: "SafeGen-LLM: Enhancing Safety Generalization in Task Planning for Robotic Systems",
    authors: "Various",
    institution: "Various",
    date: "2026-02-27",
    category: "embodied",
    summary: "提出安全可泛化LLM，增强任务规划的安全满足性并泛化到新的安全属性。",
    background: "安全关键任务规划在机器人系统中仍具挑战：经典规划器可扩展性差，基于RL的方法泛化能力弱，基础LLM无法保证安全性。",
    architecture: "SafeGen-LLM包含两阶段后训练框架：1) 在合规规划数据集上进行监督微调(SFT)学习规划语法和语义；2) 使用基于形式验证的细粒度奖励机器人和课程学习进行GRPO训练，增强安全对齐和处理复杂任务的能力。",
    innovations: "• 安全泛化: 不仅增强任务计划的安全满足性，还泛化到新安全属性\n• 两阶段训练: SFT + GRPO的组合\n• 多域验证: 在多域规划任务和多种输入格式上优于基线",
    inspiration: "SafeGen-LLM在安全关键机器人任务规划中展示了有前景的泛化能力。",
    pdfUrl: "https://arxiv.org/pdf/2602.24235",
    htmlUrl: "https://arxiv.org/abs/2602.24235",
    figures: []
  },
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
