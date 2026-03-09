# ArXiv 具身智能/VLA/世界模型论文摘要 (2026-03-08)

> 每日arxiv论文追踪，重点关注具身智能、VLA、世界模型、机器人操作等领域

---

## 1. RoboPocket: Improve Robot Policies Instantly with Your Phone

- **论文ID**: arXiv:2603.05504
- **作者**: Junjie Fang, Wendi Chen, Han Xue, Fangyuan Zhou, Tian Le
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO, cs.LG, cs.CV
- **链接**: [PDF](https://arxiv.org/pdf/2603.05504) | [HTML](https://arxiv.org/abs/2603.05504)

**一句话概括**
提出RoboPocket，通过手机作为手持接口实现大规模闭环数据采集，利用策略弱点感知选择关键状态分布，显著提升模仿学习效率。

**详细解读**

- **研究背景**
  模仿学习的规模化受限于数据收集效率。传统手持接口虽能大规模采集野外数据，但操作者盲目收集演示不知道策略的弱点，导致关键状态分布覆盖不足。DAgger等交互方法虽能解决协变量偏移，但依赖物理交互，难以规模化。

- **架构分析**
  RoboPocket核心创新在于：1) 策略弱点感知模块，实时评估当前策略的不确定性；2) 闭环数据选择器，根据弱点反馈指导操作者收集关键演示；3) 手机端实时推理能力，无需额外硬件。

- **创新点**
  首次将策略弱点感知引入手持数据收集，形成闭环反馈；提出的方法可在任何智能手机上运行，实现真正的大规模部署。

- **对具身智能算法工程师的启发**
  数据收集是具身智能的瓶颈，该工作提供了低成本的规模化方案；弱点感知思路可用于主动学习策略改进。

---

## 2. Safe-SAGE: Social-Semantic Adaptive Guidance for Safe Engagement

- **论文ID**: arXiv:2603.05497
- **作者**: Lizhi Yang, Ryan M. Bena, Meg Wilkinson, Gilbert Bahati, Andy Navarro Brenes
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO
- **链接**: [PDF](https://arxiv.org/pdf/2603.05497) | [HTML](https://arxiv.org/abs/2603.05497)

**一句话概括**
提出Safe-SAGE框架，桥接高层语义理解与底层安全控制，让机器人在不同语义情境下对障碍物采取差异化安全策略。

**详细解读**

- **研究背景**
  传统安全关键控制方法（如控制屏障函数）存在语义盲区：对所有障碍物一视同仁，无论其语义重要性如何。这导致在复杂社会环境中行为不合理。

- **架构分析**
  Safe-SAGE核心组件：1) 语义理解模块，识别障碍物的社会语义（如行人、静态物体）；2) 拉普拉斯调制的泊松安全函数，自适应调整安全距离；3) 统一框架，融合语义与安全约束。

- **创新点**
  首次在安全控制中引入语义理解；提出拉普拉斯调制的安全函数形式化方法。

- **对具身智能算法工程师的启发**
  语义理解与安全控制的结合是未来机器人落地的关键；该框架可扩展到其他安全关键场景。

---

## 3. cuRoboV2: Dynamics-Aware Motion Generation with Depth-Fused Distance Fields

- **论文ID**: arXiv:2603.05493
- **作者**: Balakumar Sundaralingam, Adithyavairavan Murali, Stan Birchfield
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO
- **链接**: [PDF](https://arxiv.org/pdf/2603.05493) | [HTML](https://arxiv.org/abs/2603.05493)

**一句话概括**
提出cuRoboV2，统一运动生成框架，包含B-Spline轨迹优化、GPU原生TSDF/ESDF感知管道，解决高自由度机器人运动生成的安全性和实时性问题。

**详细解读**

- **研究背景**
  当前方法碎片化：快速规划器输出物理不可行轨迹，响应式控制器难以处理高保真感知，高自由度系统求解失败。

- **架构分析**
  cuRoboV2三大创新：1) B样条轨迹优化，强制平滑和力矩限制；2) GPU原生TSDF/ESDF感知管道，生成高质量环境表示；3) 统一求解器架构。

- **创新点**
  首次在GPU上实现端到端运动生成；统一了安全和响应能力。

- **对具身智能算法工程师的启发**
  GPU加速对实时运动规划至关重要；该工作提供了高自由度机器人规划的参考。

---

## 4. Observing and Controlling Features in Vision-Language-Action Models

- **论文ID**: arXiv:2603.05487
- **作者**: Hugo Buurmeijer, Carmen Amo Alonso, Aiden Swann, Marco Pavone
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.LG, cs.RO, cs.AI
- **链接**: [PDF](https://arxiv.org/pdf/2603.05487) | [HTML](https://arxiv.org/abs/2603.05487)

**一句话概括**
首次系统研究VLA模型的特征可解释性与在线控制，揭示VLA内部表征与其输出行为的关系。

**详细解读**

- **研究背景**
  VLA模型取得了显著进展，但其多模态输入输出和混合transformer/diffusion头架构，使得LLM中的可解释性研究不能直接迁移。

- **架构分析**
  研究方法：1) 特征探测，识别VLA内部与特定输出相关的特征；2) 线性探针，预测行为；3) 特征干预，验证因果关系。

- **创新点**
  首次在VLA上应用可解释性分析；发现VLA特征具有语义可解释性，可用于行为控制。

- **对具身智能算法工程师的启发**
  VLA可解释性对安全部署至关重要；该工作为VLA调试和可控性提供了新思路。

---

## 5. Residual RL--MPC for Robust Microrobotic Cell Pushing Under Time-Varying Flow

- **论文ID**: arXiv:2603.05448
- **作者**: Yanda Yang, Sambeeta Das
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO
- **链接**: [PDF](https://arxiv.org/pdf/2603.05448) | [HTML](https://arxiv.org/abs/2603.05448)

**一句话概括**
研究微流控环境中磁滚动微机器人的细胞推送，提出混合MPC+RL残差策略控制器，解决时变流场下的接触稳定问题。

**详细解读**

- **研究背景**
  微米级操作中小扰动会破坏推动接触，导致大侧向漂移。时变泊肃叶流场使问题更具挑战性。

- **架构分析**
  控制器设计：1) 名义MPC，跟踪路点采样参考曲线；2) SAC训练的残差策略，输出有界2D速度修正；3) 接触门控机制。

- **创新点**
  首次在微机器人操作中结合MPC和RL；提出的接触门控残差策略显著提高鲁棒性。

- **对具身智能算法工程师的启发**
  MPC+RL混合控制在高精度操作中有效；该方法可扩展到其他接触丰富的微操作任务。

---

## 6. Planning in 8 Tokens: A Compact Discrete Tokenizer for Latent World Model

- **论文ID**: arXiv:2603.05438
- **作者**: Dongwon Kim, Gawon Seo, Jinsung Lee, Minsu Cho, Suha Kwak
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.LG, cs.RO, cs.CV
- **链接**: [PDF](https://arxiv.org/pdf/2603.05438) | [HTML](https://arxiv.org/abs/2603.05438)

**一句话概括**
提出仅用8个token表示观测的紧凑离散tokenizer，使世界模型实现实时控制级规划。

**详细解读**

- **研究背景**
  世界模型作为学习模拟器前景广阔，但决策时规划计算成本高，实时控制不可行。瓶颈在于潜在表示：传统tokenizer将每个观测编码成数百个token，使规划计算量大。

- **架构分析**
  方法核心：1) 紧凑离散tokenizer，将观测压缩到仅8个token；2) 基于离散token的世界模型；3) 高效规划器，利用紧凑表示。

- **创新点**
  首次实现亚毫秒级世界模型规划；token数量减少一个数量级。

- **对具身智能算法工程师的启发**
  紧凑表示是实时世界模型规划的关键；该工作为实时机器人控制提供了新思路。

---

## 7. PhysiFlow: Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching

- **论文ID**: arXiv:2603.05410
- **作者**: Weikai Qin, Sichen Wu, Ci Chen, Mengfan Liu, Linxi Feng
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO, cs.LG
- **链接**: [PDF](https://arxiv.org/pdf/2603.05410) | [HTML](https://arxiv.org/abs/2603.05410)

**一句话概括**
提出PhysiFlow，融合VLA与全身控制，通过语义运动意图引导和物理感知多脑架构，实现人形机器人动态肢体协调任务。

**详细解读**

- **研究背景**
  人形机器人控制中，VLA与全身控制融合对语义引导的真实世界任务执行至关重要。但现有方法VLA推理效率低或缺乏有效的全身语义引导。

- **架构分析**
  框架核心：1) 语义运动意图模块，解析高层指令；2) 多脑VLA架构，分离感知、推理、控制；3) 潜在流匹配，实现物理感知；4) 鲁棒跟踪。

- **创新点**
  首次在人形机器人上实现物理感知多脑VLA；提出的流匹配方法比扩散更高效。

- **对具身智能算法工程师的启发**
  人形机器人是具身智能的重要载体；多脑架构是复杂任务分解的有效方法。

---

## 8. Accelerating Sampling-Based Control via Learned Linear Koopman Dynamics

- **论文ID**: arXiv:2603.05385
- **作者**: Wenjian Hao, Yuxuan Fang, Zehui Lu, Shaoshuai Mou
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO, cs.LG
- **链接**: [PDF](https://arxiv.org/pdf/2603.05385) | [HTML](https://arxiv.org/abs/2603.05385)

**一句话概括**
提出使用学习的线性深度Koopman算子(DKO)替代非线性动力学，实现高效模型预测路径积分控制。

**详细解读**

- **研究背景**
  采样基控制（如MPPI）在复杂非线性动力学系统中计算成本高，限制了其实际应用。

- **架构分析**
  方法核心：1) 从交互数据直接学习DKO动力学，消除系统辨识需求；2) 用线性DKO模型替换非线性动力学进行轨迹传播；3) 保持控制性能的同时加速采样。

- **创新点**
  首次将深度Koopman算子用于实时控制；实现两个数量级的采样加速。

- **对具身智能算法工程师的启发**
  Koopman算子是将非线性系统线性化的有效工具；该工作为实时控制提供了新思路。

---

## 9. OpenFrontier: General Navigation with Visual-Language Grounded Frontiers

- **论文ID**: arXiv:2603.05377
- **作者**: Esteban Padilla, Boyang Sun, Marc Pollefeys, Hermann Blum
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO, cs.CV
- **链接**: [PDF](https://arxiv.org/pdf/2603.05377) | [HTML](https://arxiv.org/abs/2603.05377)

**一句话概括**
提出OpenFrontier，结合前沿探索与视觉语言接地，实现开放世界导航中自然语言指令的语义理解与目标定位。

**详细解读**

- **研究背景**
  开放世界导航要求机器人在复杂日常环境中做出决策并适应灵活的任务需求。传统方法依赖密集3D重建和手工目标度量，泛化能力有限。

- **架构分析**
  方法核心：1) 视觉语言接地前沿，将语言指令与空间区域关联；2) 前沿选择策略，优先探索语义相关区域；3) 端到端学习框架。

- **创新点**
  首次将前沿探索与VLA/VLN结合；实现零样本开放词汇导航。

- **对具身智能算法工程师的启发**
  视觉语言导航是具身智能的重要能力；该工作为开放词汇导航提供了新思路。

---

## 10. Omni-Manip: Beyond-FOV Large-Workspace Humanoid Manipulation with Omnidirectional 3D Perception

- **论文ID**: arXiv:2603.05355
- **作者**: Pei Qu, Zheng Li, Yufei Jia, Ziyun Liu, Liang Zhu
- **机构**: 暂未明确
- **发布日期**: 2026-03-05
- **类别**: cs.RO
- **链接**: [PDF](https://arxiv.org/pdf/2603.05355) | [HTML](https://arxiv.org/abs/2603.05355)

**一句话概括**
提出Omni-Manip，通过全方位3D感知突破人形机器人工作空间限制，实现超越视野的大范围操作。

**详细解读**

- **研究背景**
  人形机器人在非结构化环境中进行灵巧操作时，受限于感知范围，无法有效覆盖大工作空间。当机器人无法重新定位时，保持全方位感知至关重要。

- **架构分析**
  方法核心：1) 全方位3D感知模块，覆盖360度范围；2) 视觉运动策略学习；3) 大工作空间操作规划。

- **创新点**
  首次实现超越视野的人形机器人操作；提出的全方位感知方案可扩展到其他平台。

- **对具身智能算法工程师的启发**
  感知范围是操作能力的关键瓶颈；该工作为扩展机器人操作范围提供了新思路。

---

## 本期趋势观察

1. **VLA可解释性**成为新热点（论文4），说明学界开始关注VLA的安全性和可控性
2. **紧凑表示**是关键方向（论文6仅用8个token），推动世界模型实时应用
3. **人形机器人**研究持续升温（论文7、10），全身控制和全方位感知是重点
4. **MPC+RL混合控制**在精细操作中表现优异（论文5、8）

---

*抓取时间: 2026-03-08 UTC+8*
*数据来源: arXiv (cs.RO, cs.LG, cs.CV)*
