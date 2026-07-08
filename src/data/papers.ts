// 论文数据 - 由 cron 任务每日更新
// 更新时间: 2026-07-08

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
    id: "internvla-a15-2026-07-08",
    title: "InternVLA-A1.5: Unifying Understanding, Latent Foresight, and Action for Compositional Generalization",
    authors: "Physical Intelligence Team, Shanghai AI Laboratory",
    institution: "上海人工智能实验室",
    date: "2026-07-08",
    category: "vla",
    summary: "统一VLM语义理解、潜在前瞻和动作生成。通过latent foresight token从冻结视频生成模型（WAN2.2-5B）继承世界动态先验，训练完成后丢弃视频分支，推理零额外延迟。在六个仿真基准全部最佳。",
    background: "现有VLA统一模型面临三个问题：VLM语义能力退化、异构目标训练干扰、像素级未来预测从零学起浪费计算。需要在不退化的前提下融合语义和动态。",
    architecture: "Mixture-of-Transformers设计：(1) Qwen-3.5 2B VLM backbone，混合注意力（3层Gated DeltaNet+1层全注意力），持续VQA训练；(2) 460M统一专家，共享全注意力层，含foresight token（从冻结WAN2.2-5B获取世界先验）和action query（flow matching）。两阶段训练。",
    innovations: "1.首次将未来预测重构为latent-querying，少量token从冻结视频模型继承世界先验；2.VLM持续VQA防止语义退化，MoT架构优雅融合；3.FAST离散action token加速收敛。",
    inspiration: "冻结预训练视频模型作为世界先验提取器比从零训练更实用；VLA训练中持续保持VQA能力至关重要；MoT共享全注意力+独立线性注意力是优雅的多模块融合方案。",
    pdfUrl: "https://arxiv.org/pdf/2607.04988",
    htmlUrl: "https://arxiv.org/abs/2607.04988",
    figures: ["/figures/260704988_fig1.png"]
  },
  {
    id: "tap-task-agnostic-2026-07-08",
    title: "Learning to Move Before Learning to Do: Task-Agnostic pretraining for VLAs",
    authors: "Junhao Shi, Siyin Wang, Xiaopeng Yu, Li Ji, Jingjing Gong, Xipeng Qiu",
    institution: "复旦大学, 上海创新学院",
    date: "2026-07-08",
    category: "vla",
    summary: "提出分解假说，将VLA学习解耦为\"如何运动\"（逆动力学预训练）和\"做什么\"（少量专家对齐）。SIMPLER匹配100万专家轨迹模型，真实世界在相机扰动下保持25%成功率。",
    background: "VLA模型受限于专家演示数据稀缺性。婴儿式自主探索可建立物理常识，无需任务标注。",
    architecture: "两阶段：(1) 任务无关数据采集（复用无关轨迹+自主随机探索）；(2) Stage 1逆动力学预训练预测(o_t,o_{t+1})间动作，关注动态忽略背景；(3) Stage 2少量专家数据微调对齐语义。",
    innovations: "1.系统提出并验证VLA物理运动先验和语义对齐可解耦学习；2.逆动力学预训练将无用数据转化为物理先验；3.自主探索管道保证安全和多样性。",
    inspiration: "逆动力学预训练是VLA数据效率提升重要方向；自主探索是廉价数据源；先学运动再学任务是可扩展策略。",
    pdfUrl: "https://arxiv.org/pdf/2607.02466",
    htmlUrl: "https://arxiv.org/abs/2607.02466",
    figures: ["/figures/260702466_fig1.png"]
  },
  {
    id: "core-vla-2026-07-08",
    title: "CoRE-VLA: Towards Scalable and Robust Vision-Language-Action Modeling via Conditional Routing of Experts",
    authors: "Haozhe Zhang, Sixian Li, Yifei Zhang, Zezheng Huai, Hao Chen, Chunhua Shen, Jingjing Gong, Xipeng Qiu",
    institution: "浙江大学, 复旦大学, 南京大学, 吉林大学, 上海创新学院",
    date: "2026-07-08",
    category: "vla",
    summary: "条件专家路由框架，传感器可用性门控模态专家实现缺失时优雅降级，任务意图路由动作到任务相关专家。LIBERO、RoboCasa、真实双臂操控均表现优异。",
    background: "不同机器人平台传感器配置各异，辅助传感器可能意外失效。现有VLA策略与固定传感器耦合，缺失时脆弱。",
    architecture: "CoRE块：(1) VLM文本表示池化得到任务意图g；(2) 基于g对动作表示Top-K稀疏选择；(3) 通用专家+模态专家分离；(4) 模态dropout训练时随机禁用辅助模态。",
    innovations: "1.首次将VLA传感器异构鲁棒性建模为架构-训练联合问题；2.模态dropout+可用性专家掩码实现优雅降级；3.意图+可用性双重条件稀疏计算。",
    inspiration: "VLA传感器鲁棒性是实际部署关键挑战；条件稀疏计算比稠密计算更适合多任务长期操控；模态dropout是有效正则化策略。",
    pdfUrl: "https://arxiv.org/pdf/2607.03693",
    htmlUrl: "https://arxiv.org/abs/2607.03693",
    figures: ["/figures/260703693_fig1.png"]
  },
  {
    id: "worldscape-moe-2026-07-08",
    title: "Worldscape-MoE: Unified Mixture-of-Experts World Model for Scalable Heterogeneous Action Control",
    authors: "Shanghai AI Laboratory et al.",
    institution: "上海人工智能实验室等",
    date: "2026-07-08",
    category: "worldmodel",
    summary: "统一MoE世界模型，支持导航/操控/手部交互三种异构控制模态。共享专家捕获世界动态，模态专家专精动作语义，渐进式训练支持可扩展性。",
    background: "现有世界模型按控制模态割裂：交互式环境模型关注相机控制，具身操控模型关注机器人动作，第一人称交互模型关注手部关节。",
    architecture: "非对称注入：导航→Control Adapter→patch融合；操控→Action MLP→timestep调制；手部运动→VAE编码→条件视觉分支。MoE：共享专家+模态专家。渐进式训练策略分阶段引入。",
    innovations: "1.首次统一异构动作控制世界建模为可扩展MoE问题；2.空间密集vs紧凑动作的非对称注入路径；3.渐进式训练使新模态可吸收不破坏已有控制。",
    inspiration: "MoE可作为世界模型可扩展基础设施；共享专家+专用专家分解适用于多具身统一模型。",
    pdfUrl: "https://arxiv.org/pdf/2607.03964",
    htmlUrl: "https://arxiv.org/abs/2607.03964",
    figures: ["/figures/260703964_fig1.png"]
  },
  {
    id: "acid-world-model-2026-07-08",
    title: "ACID: Action Consistency via Inverse Dynamics for Planning with World Models",
    authors: "Gawon Seo, Dongwon Kim, Suha Kwak",
    institution: "POSTECH, KAIST",
    date: "2026-07-08",
    category: "worldmodel",
    summary: "在世界模型决策时规划中引入逆动力学验证逐步可实现性。四种世界模型x六种任务一致提升，用更少规划计算达到基线精度。",
    background: "世界模型规划仅评估终端状态接近度，不验证中间转移是否可实现。预测可能看起来合理但环境rollout会偏离。",
    architecture: "逆动力学验证器（flow matching transformer）推断预测转移的动作，残差作为可实现性指标。增强代价c=c_g+w_a*c_a，w_a通过变异系数自适应设置。单步Euler推理，延迟可忽略。",
    innovations: "1.首次在规划代价中引入逐步可实现性验证；2.逆动力学作为决策时验证器的新角色；3.尺度不变自适应权重解决代价尺度问题。",
    inspiration: "预测看起来对但不可实现是真实工程问题；逆动力学验证器即插即用兼容任何世界模型；低成本高回报改进方案。",
    pdfUrl: "https://arxiv.org/pdf/2607.02403",
    htmlUrl: "https://arxiv.org/abs/2607.02403",
    figures: ["/figures/260702403_fig1.png"]
  },
  {
    id: "hime-hierarchical-memory-2026-07-08",
    title: "HiMe: Hierarchical Embodied Memory for Long-Horizon Vision-Language-Action Control",
    authors: "Li Ji, Siyin Wang, Pengfang Qian, Xiaopeng Yu, Yihai Tian, Zhaoye Fei, Jingjing Gong, Xipeng Qiu",
    institution: "复旦大学, 上海创新学院, 华东师范大学",
    date: "2026-07-08",
    category: "vla",
    summary: "分层具身记忆框架，解耦为高频执行器/工作记忆哨兵/长期策略规划器。长时操控任务显著超过平面记忆基线，首次展示机器人自我纠错内部知识库。",
    background: "VLA依赖Markov假设，难以处理长时记忆任务。强推理模型太慢不适合实时控制（频率-能力悖论）。",
    architecture: "三层：(1) 瞬时记忆-Executor（VLA），当前观测+子目标→动作；(2) 工作记忆-Sentry（轻量VLM），滑动窗口检测状态转换；(3) 情景记忆-Planner（重量级VLM），跨模态key-value存储+子目标列表。动态增删改管理。",
    innovations: "1.首次提出VLA频率-能力悖论及分层解耦方案；2.跨模态语义锚定+主动知识管理；3.Sentry作为状态转换检测器减少不必要规划调用。",
    inspiration: "长时VLA任务分层架构比扩展上下文窗口更有效；记忆主动管理对动态交互至关重要。",
    pdfUrl: "https://arxiv.org/pdf/2607.03449",
    htmlUrl: "https://arxiv.org/abs/2607.03449",
    figures: ["/figures/260703449_fig1.png"]
  },
  {
    id: "worldsample-rl-2026-07-08",
    title: "WorldSample: Closed-loop Real-robot RL with World Modelling",
    authors: "Yuquan Xue, Le Xu, Zeyi Liu, Zhenyu Wu, Zhengyi Gu, Xinyang Song, Bofang Jia, Ziwei Wang",
    institution: "南洋理工大学, 清华大学, 中南大学, 北京邮电大学",
    date: "2026-07-08",
    category: "worldmodel",
    summary: "物理锚定世界模型数据增强框架，真实-合成闭环将rollout扩展为合成轨迹。成功率提升28%，训练步数减少59%。",
    background: "真实机器人RL面临物理rollout成本高的瓶颈，每条轨迹仅反映一个动作-结果路径。",
    architecture: "(1) 反事实轨迹生成：基于真实rollout分布局部扰动采样；(2) 真实-合成闭环：rollout后训练世界模型；(3) PPL：Q感知选择+不确定性调度防止价值过估计。",
    innovations: "1.真实-合成数据闭环锚定世界模型；2.反事实轨迹采样比纯随机更适合世界模型输入；3.PPL稳定合成数据使用。",
    inspiration: "世界模型作为RL数据增强器降低真实交互成本；合成数据需要谨慎节奏控制。",
    pdfUrl: "https://arxiv.org/pdf/2607.02431",
    htmlUrl: "https://arxiv.org/abs/2607.02431",
    figures: ["/figures/260702431_fig1.png"]
  },
  {
    id: "bridge-wa-2026-07-08",
    title: "Bridge-WA: Predicting Where and How the World Changes for Robotic Action",
    authors: "Yongjie Bai, Hanting Wang, Mingtong Dai, Qijun Zhong, Yang Liu, Liang Lin",
    institution: "中山大学, 鹏城实验室, 中科院深圳先进院, X-Era AI Lab",
    date: "2026-07-08",
    category: "vla",
    summary: "将5B世界教师蒸馏为紧凑先验（未来token/变化图/运动流图），推理时丢弃大模型。VLABench、RoboTwin 2.0、LIBERO-Plus、真实机器人均显著提升。",
    background: "现有WAM依赖大模型推理计算昂贵，密集预测将容量消耗在弱关联控制的视觉细节上。",
    architecture: "训练时5B教师生成三种缓存目标（未来token/变化图/运动流图），轻量预测器学习估计，WorldBridge通过多源注意力注入动作transformer。推理时教师和缓存全部移除。",
    innovations: "1.从完整画面生成转向哪里变化/如何变化的信息瓶颈；2.训练时蒸馏-推理时丢弃平衡感知和效率；3.变化图天然过滤干扰外观因素。",
    inspiration: "世界模型不一定要在推理时运行，蒸馏到紧凑先验更实用；变化聚焦比完整画面更适合操控。",
    pdfUrl: "https://arxiv.org/pdf/2607.02195",
    htmlUrl: "https://arxiv.org/abs/2607.02195",
    figures: ["/figures/260702195_fig1.png"]
  },
  {
    id: "restacvla-2026-07-08",
    title: "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation",
    authors: "Pengwei Zhang, Bin Xie, Ce Hao, Xinpan Meng, Xinyu Guo, Fang Deng, Long Cheng, Tiancai Wang",
    institution: "中科院自动化所, 中关村学院, Dexmal",
    date: "2026-07-08",
    category: "vla",
    summary: "受预测编码启发，将触觉重构为视觉先验残差表示，VQ离散化为潜在接触原语，惊喜信号自适应门控。五种接触密集任务最高86.7%成功率，平均提升34.6%。",
    background: "VLA集成触觉时常遇模态崩塌：高带宽视觉淹没稀疏触觉。预测编码神经机制显示大脑优先处理意外刺激。",
    architecture: "两阶段：(1) 跨模态预测器从视觉估计触觉，提取残差→VQ离散化为潜在接触原语；(2) 惊喜感知门根据视觉先验不确定性自适应注入触觉。",
    innovations: "1.预测编码启发的残差触觉表示解决模态崩塌；2.VQ离散化将触觉残差转化为高信息增益接触原语；3.惊喜感知门控实现相位自适应融合。",
    inspiration: "接触密集操控中触觉不可或缺但直接拼接会崩塌；残差表示比原始触觉更有价值；预测编码生物启发达式值得借鉴。",
    pdfUrl: "https://arxiv.org/pdf/2607.03387",
    htmlUrl: "https://arxiv.org/abs/2607.03387",
    figures: ["/figures/260703387_fig1.png"]
  }
];
