# Yann LeCun 最新论文 - 2026-03-19
> 抓取时间: 2026-03-19 08:08 CST

## 论文列表

### 1. Why AI systems don't learn and what to do about it: Lessons on autonomous learning from cognitive science
- **arXiv**: [2603.15381](https://arxiv.org/abs/2603.15381)
- **日期**: 2026-03-16
- **方向**: cs.AI
- **作者**: Emmanuel Dupoux, Yann LeCun, Jitendra Malik
- **摘要**: 批判当前 AI 模型在自主学习方面的局限, 提出受人类/动物认知启发的学习架构, 整合观察学习 (System A) 和主动行为学习 (System B), 通过内部元控制信号 (System M) 灵活切换。

### 2. V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning
- **arXiv**: [2603.14482](https://arxiv.org/abs/2603.14482)
- **日期**: 2026-03-17
- **方向**: cs.CV
- **摘要**: 提出视频自监督学习新方法 V-JEPA 2.1, 结合密集预测损失、深度自监督、多模态 tokenizer 和有效缩放。Ego4D 达到 7.71 mAP, EPIC-KITCHENS 40.8 Recall@5, 机器人抓取成功率提升 20 个百分点。**与具身智能高度相关。**

### 3. Representation Learning for Spatiotemporal Physical Systems
- **arXiv**: [2603.13227](https://arxiv.org/abs/2603.13227)
- **日期**: 2026-03-13
- **方向**: cs.LG, cs.CV (ICLR 2026 Workshop)
- **摘要**: 从物理参数估计角度评估自监督方法的表征质量, 发现 JEPAs 等潜在空间方法优于像素级预测方法。
- **代码**: https://github.com/helenqu/physical-representation-learning

### 4. Temporal Straightening for Latent Planning
- **arXiv**: [2603.12231](https://arxiv.org/abs/2603.12231)
- **日期**: 2026-03-12
- **方向**: cs.LG
- **摘要**: 受人类视觉感知直线化假说启发, 引入时间直线化改进潜在规划中的表征学习。通过曲率正则化使潜在轨迹局部直线化, 梯度规划更稳定, 目标到达成功率显著提升。**与世界模型和具身智能直接相关。**

### 5. The Spike, the Sparse and the Sink: Anatomy of Massive Activations and Attention Sinks
- **arXiv**: [2603.05498](https://arxiv.org/abs/2603.05498)
- **日期**: 2026-03-05
- **方向**: cs.AI, cs.CL
- **摘要**: 研究 Transformer 中的 massive activations 和 attention sinks 现象, 发现共现主要是 pre-norm 架构的产物, 两者功能不同: massive activations 全局作用作为隐式参数, attention sinks 局部作用调控注意力输出。
