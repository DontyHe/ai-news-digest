# Yann LeCun - arXiv Research Digest - 2026-03-21

**抓取时间**: 2026-03-21 08:05 CST
**来源**: arXiv (via r.jina.ai)
**总论文数**: 209 篇

---

## 变更说明

与 2026-03-20 对比，无新增论文。最新论文仍为 2026-03-16 的 "Why AI systems don't learn and what to do about it"。

---

## 最新论文 (2026年3月)

### 1. Why AI systems don't learn and what to do about it
- **arXiv**: 2603.15381
- **日期**: 2026-03-16
- **领域**: cs.AI
- **作者**: Emmanuel Dupoux, Yann LeCun, Jitendra Malik
- **摘要**: 受人类/动物认知启发的自主学习架构。System A (观察学习) + System B (主动行为学习) + System M (元控制信号)。

### 2. V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning
- **arXiv**: 2603.14482
- **日期**: 2026-03-17
- **领域**: cs.CV
- **作者**: Lorenzo Mur-Labadia, Matthew Muckley, Amir Bar, Mido Assran, Koustuv Sinha, Mike Rabbat, Yann LeCun, Nicolas Ballas, Adrien Bardes
- **摘要**: 四个关键组件实现 dense 视频表征。Ego4D 7.71 mAP, 机器人抓取成功率提升 20%。

### 3. Representation Learning for Spatiotemporal Physical Systems
- **arXiv**: 2603.13227
- **日期**: 2026-03-13
- **领域**: cs.LG, cs.CV
- **作者**: Helen Qu, Rudy Morel, Michael McCabe, Alberto Bietti, François Lanusse, Shirley Ho, Yann LeCun
- **摘要**: JEPAs 在物理参数估计等下游任务中优于 pixel-level prediction 方法。
- **会议**: ICLR 2026 Workshop on AI & PDE

### 4. Temporal Straightening for Latent Planning
- **arXiv**: 2603.12231
- **日期**: 2026-03-12
- **领域**: cs.LG
- **作者**: Ying Wang, Oumayma Bounou, Gaoyue Zhou, Randall Balestriero, Tim G. J. Rudner, Yann LeCun, Mengye Ren
- **摘要**: 曲率正则化使潜在轨迹局部直线化，提升基于梯度的规划稳定性。

### 5. The Spike, the Sparse and the Sink
- **arXiv**: 2603.05498
- **日期**: 2026-03-05
- **领域**: cs.AI, cs.CL
- **作者**: Shangwen Sun, Alfredo Canziani, Yann LeCun, Jiachen Zhu
- **摘要**: 研究 Transformer 中 massive activations 和 attention sinks 现象，发现两者共现是 pre-norm 架构产物。

### 6. AI+HW 2035: Shaping the Next Decade
- **arXiv**: 2603.05225
- **日期**: 2026-03-05
- **领域**: cs.AI, cs.AR
- **作者**: 25+ 作者包括 Yann LeCun
- **摘要**: 10 年 AI+HW 路线图，目标训练和推理效率提升 1000x。

---

## 研究趋势总结

Yann LeCun 最近的研究主线：
1. **JEPA 家族持续扩展**: V-JEPA 2.1, Causal-JEPA, Semantic Tube Prediction, Rectified LpJEPA
2. **世界模型**: GRASP 规划优化, Temporal Straightening
3. **自主学习**: System A/B/M 架构
4. **多模态统一**: RAE + Transfusion, vision 比 language 更数据饥渴
5. **对 AGI 的反思**: 提出 SAI 替代 AGI
6. **表征学习**: 物理系统中 JEPA vs pixel-level prediction
