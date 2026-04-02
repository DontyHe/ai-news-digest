# Yann LeCun - 研究论文追踪 - 2026-03-25

抓取时间: 2026-03-25 08:05 CST

## 最新论文

### 1. LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels
- **arXiv**: [2603.19312](https://arxiv.org/abs/2603.19312)
- **日期**: 2026-03-13
- **领域**: cs.LG, cs.AI
- **作者**: Lucas Maes, Quentin Le Lidec, Damien Scieur, Yann LeCun, Randall Balestriero
- **摘要**: 首个从像素端到端稳定训练的 JEPA 世界模型。仅用两个 loss 项，~15M 参数单 GPU 训练，规划速度比基础模型快 48 倍，在 2D/3D 控制任务上具有竞争力。

### 2. Why AI systems don't learn and what to do about it: Lessons on autonomous learning from cognitive science
- **arXiv**: [2603.15381](https://arxiv.org/abs/2603.15381)
- **日期**: 2026-03-16
- **领域**: cs.AI
- **作者**: Emmanuel Dupoux, Yann LeCun, Jitendra Malik
- **摘要**: 批判性审视当前 AI 模型在自主学习方面的局限，提出受人类/动物认知启发的学习架构：System A（观察学习）+ System B（主动行为学习）+ System M（元控制信号），灵活切换学习模式。

### 3. V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning
- **arXiv**: [2603.14482](https://arxiv.org/abs/2603.14482)
- **日期**: 2026-03-15
- **领域**: cs.CV
- **作者**: Lorenzo Mur-Labadia, Matthew Muckley, Amir Bar, Mido Assran, Koustuv Sinha, Mike Rabbat, Yann LeCun, Nicolas Ballas, Adrien Bardes
- **摘要**: V-JEPA 2.1，结合密集预测 loss、深度自监督、多模态 tokenizer 和有效缩放。Ego4D 物体交互预测 7.71 mAP，EPIC-KITCHENS 动作预测 40.8 Recall@5，机器人抓取成功率提升 20 个百分点。

### 4. Representation Learning for Spatiotemporal Physical Systems
- **arXiv**: [2603.13227](https://arxiv.org/abs/2603.13227)
- **日期**: 2026-03-13
- **领域**: cs.LG, cs.CV
- **作者**: Helen Qu, Rudy Morel, Michael McCabe, Alberto Bietti, François Lanusse, Shirley Ho, Yann LeCun
- **摘要**: 评估通用自监督方法在物理系统表示学习上的效果。发现潜在空间学习（如 JEPA）优于像素级预测目标。发表于 ICLR 2026 AI & PDE Workshop。
- **代码**: https://github.com/helenqu/physical-representation-learning

### 5. Temporal Straightening for Latent Planning
- **arXiv**: [2603.12231](https://arxiv.org/abs/2603.12231)
- **日期**: 2026-03-12
- **领域**: cs.LG
- **作者**: Ying Wang, Oumayma Bounou, Gaoyue Zhou, Randall Balestriero, Tim G. J. Rudner, Yann LeCun, Mengye Ren
- **摘要**: 受人类视觉感知拉直假说启发，提出时间拉直（temporal straightening）方法，通过曲率正则化使潜在轨迹局部拉直，使欧几里得距离更好地代理测地距离，显著提升基于梯度的规划成功率。

---
*数据来源: arXiv via r.jina.ai*
