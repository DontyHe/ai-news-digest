# Yann LeCun 最新论文追踪

**抓取日期**: 2026-08-02
**来源**: arXiv (按发表日期降序)

---

## 1. Music-JEPA: Learning a World Model of Sound from Action

- **arXiv**: [2607.22000](https://arxiv.org/abs/2607.22000)
- **作者**: Ziyu Wang, Kun Fang, **Yann LeCun**
- **日期**: 2026年7月24日
- **类别**: cs.SD

**摘要**: 提出 Music-JEPA，将 JEPA 范式应用到音乐领域，通过 action-conditional prediction 学习声音的世界模型。

**分析**: JEPA 架构从视觉、语言扩展到音乐领域。LeCun 持续推进其 JEPA 世界模型路线，现在覆盖了多模态。对于具身智能研究，action-conditional 的设计思路值得关注。

---

## 2. Patch Policy: Efficient Embodied Control via Dense Visual Representations

- **arXiv**: [2607.18236](https://arxiv.org/abs/2607.18236)
- **作者**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, **Yann LeCun**, Lerrel Pinto
- **日期**: 2026年7月20日
- **类别**: cs.RO, cs.LG

**摘要**: 预训练的 ViT dense 视觉特征在机器人学习中未被充分利用。现代策略要么压缩为单个全局 token，要么从头训练视觉骨干。本文提出利用预训练 dense visual features 实现高效具身控制。

**分析**: 与 VLA 研究高度相关。当前 VLA 模型通常使用压缩的视觉 token，这篇工作主张保留 spatial detail，利用大规模预训练的 dense features。对于你的研究可能有直接参考价值。

---

## 3. Separating Representation from Reconstruction Enables Scalable Text Encoders

- **arXiv**: [2607.04011](https://arxiv.org/abs/2607.04011)
- **作者**: Megi Dervishi, Mathurin Videau, **Yann LeCun**
- **日期**: 2026年7月4日
- **类别**: cs.CL, cs.AI

**摘要**: 重新审视 BERT 编码器 scaling 停滞的问题，发现 BERT 的扁平设计将表示学习和重建耦合在一起。通过分离表示和重建，提出可扩展的文本编码器。

**分析**: 对编码器架构的根本性反思。如果编码器可以像解码器一样有效扩展，对多模态模型的设计有深远影响。

---

## 4. AdaJEPA: An Adaptive Latent World Model

- **arXiv**: [2606.32026](https://arxiv.org/abs/2606.32026)
- **作者**: Ying Wang, Oumayma Bounou, **Yann LeCun**, Mengye Ren
- **日期**: 2026年6月30日
- **类别**: cs.LG, cs.AI

**摘要**: 潜在世界模型通常在测试时冻结，当预测不准确时规划会失败。AdaJEPA 提出测试时自适应的潜在世界模型，在分布偏移下仍能保持规划能力。

**分析**: JEPA 家族的新成员。测试时自适应是具身智能的实际需求，因为真实世界的分布偏移不可避免。与 VLA 中世界模型的在线适应高度相关。

---

## 5. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors

- **arXiv**: [2606.23444](https://arxiv.org/abs/2606.23444)
- **作者**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **日期**: 2026年6月22日
- **类别**: cs.RO, cs.LG
- **状态**: Under Review

**摘要**: JEPA 应用于四旋翼无人机控制，解决长期预测中自回归 rollout 的误差累积问题，实现 zero-shot sim-to-real 迁移。

**分析**: JEPA 在机器人控制上的实际应用案例。长期世界模型预测 + sim-to-real 是具身智能的核心挑战。

---

## 6. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning

- **arXiv**: [2606.19398](https://arxiv.org/abs/2606.19398)
- **作者**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang 等（含 **Yann LeCun**）
- **日期**: 2026年6月
- **类别**: cs.SD, eess.AS, eess.SP

**分析**: JEPA 向语音领域的持续扩展。软聚类锚点提供更灵活的自监督学习。
