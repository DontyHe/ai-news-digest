# Yann LeCun - arXiv 论文追踪

**抓取时间**: 2026-07-29 08:05 CST
**数据来源**: arXiv (curl)

## 最新论文

### 1. Music-JEPA: Learning a World Model of Sound from Action
- **ID**: arXiv:2607.22000
- **分类**: cs.SD
- **作者**: Ziyu Wang, Kun Fang, **Yann LeCun**
- **摘要**: JEPA 最近作为一种通过预测潜在表示来学习世界模型的范式出现，为自监督学习提供了有希望的方向。虽然初步尝试已将 JEPA 应用于音乐领域，但此类框架如何自然地结合动作信息仍不清楚。本文探索了从动作中学习声音世界模型。
- **链接**: https://arxiv.org/abs/2607.22000

### 2. Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **ID**: arXiv:2607.18236
- **分类**: cs.RO, cs.LG
- **作者**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, **Yann LeCun**, Lerrel Pinto
- **摘要**: 来自 Vision Transformer (ViT) 的预训练密集视觉特征很强大，但在机器人学习中未被充分利用。现代机器人策略要么将每个观察压缩为单个全局 token，要么依赖视觉主干训练……本文提出 Patch Policy，充分利用密集视觉表示进行高效的具身控制。
- **链接**: https://arxiv.org/abs/2607.18236

### 3. Separating Representation from Reconstruction Enables Scalable Text Encoders
- **ID**: arXiv:2607.04011
- **分类**: cs.CL, cs.AI
- **作者**: Megi Dervishi, Mathurin Videau, **Yann LeCun**
- **摘要**: 解码器迅速扩展，但编码器自 BERT 以来基本没有变化。我们通过冻结主干评估 (frozen backbone evaluation via probing) 重新审视这种差异。在这个视角下，BERT 编码器的表示变得越来越"不可利用"。
- **链接**: https://arxiv.org/abs/2607.04011

### 4. AdaJEPA: An Adaptive Latent World Model
- **ID**: arXiv:2606.32026
- **分类**: cs.LG, cs.AI
- **作者**: Ying Wang, Oumayma Bounou, **Yann LeCun**, Mengye Ren
- **摘要**: 潜在世界模型通过在紧凑潜在空间中预测未来状态来实现从高维观察的规划。然而，这些模型通常在测试时保持冻结：当预测变得不准确时，规划可能失败，特别是在测试时分布偏移下。本文提出 AdaJEPA 来解决这一问题。
- **链接**: https://arxiv.org/abs/2606.32026

### 5. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **ID**: arXiv:2606.23444
- **分类**: cs.RO, cs.LG
- **作者**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **摘要**: 准确的动力学模型对机器人系统中的知情决策至关重要，特别是对于在不确定性下运行的敏捷飞行器。本文提出 SkyJEPA，学习长视野世界模型用于四旋翼的零样本仿真到真实控制。
- **链接**: https://arxiv.org/abs/2606.23444

### 6. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **ID**: arXiv:2606.19398
- **分类**: cs.SD, eess.AS, eess.SP
- **作者**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, **Yann LeCun**, Ravid Shwartz-Ziv
- **摘要**: 自监督语音编码器主要通过在掩码位置预测离散硬聚类 ID 来训练。本文提出 S-JEPA，使用软聚类锚点替代硬聚类。
- **链接**: https://arxiv.org/abs/2606.19398

### 7. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **ID**: arXiv:2606.15956
- **分类**: cs.CV, cs.AI, cs.LG
- **作者**: Ninad Daithankar, Alexi Gladstone, **Yann LeCun**, Heng Ji
- **摘要**: AI 进展主要由假设更少的方法驱动。随着计算和数据增加，具有较弱归纳偏置的方法通常优于具有较强假设的方法。本文通过时序差异进行视觉表示学习。
- **链接**: https://arxiv.org/abs/2606.15956

### 8. Unifying Object-Centric World Models and Diffusion Policy
- **ID**: arXiv:2606.08775
- **分类**: cs.RO, cs.AI
- **作者**: Raktim Gautam Goswami, Prashanth Krishnamurthy, **Yann LeCun**, Farshad Khorrami
- **摘要**: 视觉世界模型在学习复杂系统动力学方面显示了巨大潜力。本文统一了以对象为中心的世界模型和 Diffusion Policy，用于多阶段机器人任务。
- **链接**: https://arxiv.org/abs/2606.08775

### 9. When Does LeJEPA Learn a World Model?
- **ID**: arXiv:2605.26379
- **分类**: stat.ML, cs.LG
- **作者**: David Klindt, **Yann LeCun**, Randall Balestriero
- **摘要**: 一个打乱世界真实自由度的表示无法支持可靠的规划或组合泛化。我们证明 LeJEPA (对齐加高斯正则化) 从非线性观察中线性恢复世界的潜在变量，这一性质被称为线性可识别性。
- **链接**: https://arxiv.org/abs/2605.26379

### 10. stable-worldmodel: A Platform for Reproducible World Modeling Research
- **ID**: arXiv:2605.21800
- **分类**: cs.LG, cs.RO
- **作者**: Lucas Maes, Quentin Le Lidec, Luiz Facury, Nassim Massaudi, Ayush Chaurasia, Francesco Capuano, Richard Gao, Taj Gillin, Dan Haramati, Damien Scieur, **Yann LeCun**, Randall Balestriero
- **摘要**: 世界模型是构建能够推理、规划和超越训练数据泛化的 agent 的核心。然而，世界模型研究的可复现性仍然是一个挑战。本文提出了 stable-worldmodel 平台。
- **链接**: https://arxiv.org/abs/2605.21800

## 研究趋势分析

Yann LeCun 2026 年的研究方向高度聚焦:

1. **JEPA 架构扩展**: Music-JEPA, S-JEPA, AdaJEPA, SkyJEPA, LeJEPA 理论分析
   - JEPA 正在被应用到越来越多领域：音乐、语音、机器人、视觉
   - 理论基础在加强（LeJEPA 线性可识别性证明）

2. **具身智能/机器人**: Patch Policy, SkyJEPA, Object-Centric World Models
   - 密集视觉表示在机器人控制中的应用
   - 四旋翼零样本仿真到真实迁移
   - 世界模型 + Diffusion Policy 统一框架

3. **编码器重新审视**: 质疑 BERT 时代以来的编码器停滞

4. **研究基础设施**: stable-worldmodel 平台促进可复现研究

## 与 Kaiming He 研究的对比

| 维度 | Kaiming He | Yann LeCun |
|------|-----------|------------|
| 核心方向 | 通用视觉学习器 | 世界模型 (JEPA) |
| 生成模型 | Video/Image generation | 潜在空间预测 |
| 具身智能 | 间接 (物理模拟) | 直接 (机器人控制) |
| 方法论 | 预训练 + 通用化 | 自监督 + JEPA 家族 |
| 产出频率 | 中等 (5篇/年) | 高产 (10篇/半年) |

## 状态
成功 (arXiv curl 直接抓取)
