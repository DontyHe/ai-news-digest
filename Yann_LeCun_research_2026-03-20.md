# Yann LeCun - arXiv Research Digest - 2026-03-20

**抓取时间**: 2026-03-20 08:07 CST
**来源**: arXiv (via r.jina.ai)
**总论文数**: 209 篇

---

## 最新论文 (2026年3月)

### 1. Why AI systems don't learn and what to do about it
- **arXiv**: 2603.15381
- **日期**: 2026-03-16
- **领域**: cs.AI
- **作者**: Emmanuel Dupoux, Yann LeCun, Jitendra Malik
- **摘要**: 批判性审视当前 AI 模型在自主学习方面的局限，提出受人类/动物认知启发的新学习架构。框架整合观察学习（System A）和主动行为学习（System B），通过内部元控制信号（System M）灵活切换学习模式。从进化和发展时间尺度上借鉴生物适应动态环境的机制。

### 2. V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning
- **arXiv**: 2603.14482
- **日期**: 2026-03-17
- **领域**: cs.CV
- **作者**: Lorenzo Mur-Labadia, Matthew Muckley, Amir Bar, Mido Assran, Koustuv Sinha, Mike Rabbat, Yann LeCun, Nicolas Ballas, Adrien Bardes
- **摘要**: V-JEPA 2.1，自监督视频/图像密集表征学习。四个关键组件：(1) dense predictive loss (masking-based); (2) deep self-supervision; (3) multi-modal tokenizers; (4) 模型和数据 scaling。Ego4D 7.71 mAP, EPIC-KITCHENS 40.8 Recall@5, 机器人抓取成功率提升 20%, TartanDrive 5.687 ATE, NYUv2 深度 0.307 RMSE, Something-Something-V2 77.7。

### 3. Representation Learning for Spatiotemporal Physical Systems
- **arXiv**: 2603.13227
- **日期**: 2026-03-13
- **领域**: cs.LG, cs.CV
- **作者**: Helen Qu, Rudy Morel, Michael McCabe, Alberto Bietti, François Lanusse, Shirley Ho, Yann LeCun
- **摘要**: 研究自监督方法在物理时空系统表征学习中的效果。发现通用自监督方法（特别是 JEPAs）在物理参数估计等下游科学任务中优于专门为物理建模设计的方法。
- **会议**: ICLR 2026 Workshop on AI & PDE
- **代码**: https://github.com/helenqu/physical-representation-learning

### 4. Temporal Straightening for Latent Planning
- **arXiv**: 2603.12231
- **日期**: 2026-03-12
- **领域**: cs.LG
- **作者**: Ying Wang, Oumayma Bounou, Gaoyue Zhou, Randall Balestriero, Tim G. J. Rudner, Yann LeCun, Mengye Ren
- **摘要**: 受人类视觉处理中 perceptual straightening 假设启发，引入曲率正则化鼓励局部直线化潜在轨迹。减少曲率使 latent space 中的欧几里得距离成为更好的测地距离代理，显著提升基于梯度的规划稳定性。

### 5. The Spike, the Sparse and the Sink: Anatomy of Massive Activations and Attention Sinks
- **arXiv**: 2603.05498
- **日期**: 2026-03-05
- **领域**: cs.AI, cs.CL
- **作者**: Shangwen Sun, Alfredo Canziani, Yann LeCun, Jiachen Zhu
- **摘要**: 研究 Transformer 中的 massive activations 和 attention sinks 两种现象。发现两者共现主要是 pre-norm 配置的架构产物。Massive activations 全局运作（隐式参数），attention sinks 局部运作（偏置短距离依赖）。消融 pre-norm 后两者解耦。

### 6. AI+HW 2035: Shaping the Next Decade
- **arXiv**: 2603.05225
- **日期**: 2026-03-05
- **领域**: cs.AI, cs.AR
- **作者**: 大规模合作 (Deming Chen, Jason Cong, ..., Yann LeCun 等 25+ 作者)
- **摘要**: 10 年 AI+HW 协同发展路线图。核心目标：训练和推理效率提升 1000x；实现能量感知自优化系统；民主化先进 AI 基础设施访问。关键洞察：scaling 应围绕能效重新定义。

---

## 2026年2月论文

### 7. AI Must Embrace Specialization via Superhuman Adaptable Intelligence (SAI)
- **arXiv**: 2602.23643
- **日期**: 2026-02-26
- **领域**: cs.AI
- **作者**: Judah Goldfeder, Philippe Wyder, Yann LeCun, Ravid Shwartz Ziv
- **摘要**: 批判 AGI 概念，提出 SAI (Superhuman Adaptable Intelligence)：在人类能做的重要事情上超越人类，并填补人类无法做到的技能空白。

### 8. Semantic Tube Prediction (STP): Beating LLM Data Efficiency with JEPA
- **arXiv**: 2602.22617
- **日期**: 2026-02-25
- **领域**: cs.LG
- **作者**: Hai Huang, Yann LeCun, Randall Balestriero
- **摘要**: 提出测地假说和 STP 任务（JEPA 风格正则化）。STP 允许 LLM 仅用 **1/16 训练数据**达到基线准确率，直接违反 Chinchilla 式 scaling laws 的数据项。
- **代码**: https://github.com/galilai-group/llm-jepa#stp

### 9. Causal-JEPA: Learning World Models through Object-Level Latent Interventions
- **arXiv**: 2602.11389
- **日期**: 2026-02-11
- **领域**: cs.AI
- **作者**: Heejeong Nam, Quentin Le Lidec, Lucas Maes, Yann LeCun, Randall Balestriero
- **摘要**: 提出 C-JEPA，将 mask JEPA 扩展到 object-centric representations。Object-level masking 诱导类似反事实的潜在干预，反事实推理提升约 20%。Agent 控制任务仅需 patch-based world models 1% 的 latent features。
- **项目页**: https://hazel-heejeong-nam.github.io/cjepa/

### 10. Beyond Language Modeling: An Exploration of Multimodal Pretraining
- **arXiv**: 2603.03276
- **日期**: 2026-03-03
- **领域**: cs.CV
- **作者**: Shengbang Tong, David Fan, ..., Yann LeCun, Saining Xie 等
- **摘要**: 使用 Transfusion 框架从零进行多模态预训练。四个发现：(1) RAE 是最优统一视觉表征; (2) 视觉和语言数据互补; (3) 统一多模态预训练自然导向世界模型; (4) MoE 高效实现多模态 scaling，发现 scaling 不对称性：vision 比 language 更数据饥渴。
- **项目页**: https://beyond-llms.github.io/

### 11. Parallel Stochastic Gradient-Based Planning for World Models (GRASP)
- **arXiv**: 2602.00475
- **日期**: 2026-01-30
- **领域**: cs.LG, cs.RO
- **作者**: Michael Psenka, Michael Rabbat, Aditi Krishnapriyan, Yann LeCun, Amir Bar
- **摘要**: 提出鲁棒且高度并行化的 planner GRASP，利用 world model 可微性进行高效优化。将状态作为优化变量（"virtual states"），引入随机性辅助探索。在长时域视频世界模型上超越 CEM 和 vanilla GD。

### 12. Rectified LpJEPA: Sparse and Maximum-Entropy Representations
- **arXiv**: 2602.01456
- **日期**: 2026-02-01
- **领域**: cs.LG, cs.CV
- **作者**: Yilun Kuang, Yash Dagade, Tim G. J. Rudner, Randall Balestriero, Yann LeCun
- **摘要**: 提出 RDMReg，将表征对齐到 Rectified Generalized Gaussian (RGG) 分布，实现稀疏且最大熵的表征。

---

## 研究趋势总结

Yann LeCun 最近的研究主线：
1. **JEPA 家族持续扩展**: V-JEPA 2.1, Causal-JEPA, Semantic Tube Prediction, Rectified LpJEPA, EB-JEPA 库
2. **世界模型 (World Models)**: 规划优化 (GRASP), Temporal Straightening, Latent Action World Models
3. **自主学习**: 与 Dupoux/Malik 合作提出 System A/B/M 架构
4. **多模态统一**: RAE + Transfusion 框架，vision 比 language 更数据饥渴
5. **对 AGI 的反思**: 提出 SAI 替代 AGI，主张专业化而非通用性
6. **表征学习**: Spatiotemporal 物理系统中的 JEPA vs pixel-level prediction
