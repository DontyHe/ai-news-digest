# Yann LeCun - arXiv 最新论文 - 2026-08-04

> 抓取时间: 2026-08-04 08:05 CST
> 共 224 篇论文，以下为最新 10 篇

## 1. Music-JEPA: Learning a World Model of Sound from Action
- **arXiv**: 2607.22000
- **领域**: cs.SD
- **日期**: July 2026
- **作者**: Ziyu Wang, Kun Fang, Yann LeCun
- **摘要**: 提出Music-JEPA，将JEPA范式应用于音乐领域，通过从动作中学习声音的世界模型实现自监督学习。

## 2. Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **arXiv**: 2607.18236
- **领域**: cs.RO, cs.LG
- **日期**: July 2026
- **作者**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, Yann LeCun, Lerrel Pinto
- **摘要**: 利用ViT预训练的密集视觉特征进行机器人控制，不压缩为单一token，保留细粒度空间细节和大规模视觉预训练的优势。**与具身智能直接相关。**

## 3. Separating Representation from Reconstruction Enables Scalable Text Encoders
- **arXiv**: 2607.04011
- **领域**: cs.CL, cs.AI
- **日期**: July 2026
- **作者**: Megi Dervishi, Mathurin Videau, Yann LeCun
- **摘要**: BERT的扁平设计将表示学习耦合到重建，导致表示随训练变得"不可利用"。提出分离表示和重建以实现可扩展文本编码器。

## 4. AdaJEPA: An Adaptive Latent World Model
- **arXiv**: 2606.32026
- **领域**: cs.LG, cs.AI
- **日期**: June 2026
- **作者**: Ying Wang, Oumayma Bounou, Yann LeCun, Mengye Ren
- **摘要**: 潜在空间世界模型通常在测试时冻结。AdaJEPA提出测试时自适应机制，当预测不准确时进行在线调整。**与世界模型直接相关。**

## 5. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **arXiv**: 2606.23444
- **领域**: cs.RO, cs.LG
- **日期**: June 2026
- **作者**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, Yann LeCun, Giuseppe Loianno
- **摘要**: 利用JEPA学习长期世界模型，用于四旋翼无人机零样本sim-to-real控制。解决自回归rollup误差放大的问题。**与具身智能/世界模型直接相关。**

## 6. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **arXiv**: 2606.19398
- **领域**: cs.SD, eess.AS
- **日期**: June 2026
- **作者**: Georgios Ioannides, Adrian Kieback, Yann LeCun, Ravid Shwartz-Ziv 等
- **摘要**: 用高斯混合模型的软后验替代离散硬聚类ID进行自监督语音表示学习，无需中断训练重新聚类。

## 7. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **arXiv**: 2606.15956
- **领域**: cs.CV, cs.AI, cs.LG
- **日期**: June 2026
- **作者**: Ninad Daithankar, Alexi Gladstone, Yann LeCun, Heng Ji
- **摘要**: AI进展主要由假设更少的方法驱动。视觉表示学习从监督->弱监督->自监督->无监督/时序差分。展示时序差分作为视觉表示学习方法的潜力。

## 8. Unifying Object-Centric World Models and Diffusion Policy
- **arXiv**: 2606.08775
- **领域**: cs.RO, cs.AI
- **日期**: June 2026
- **作者**: Raktim Gautam Goswami, Prashanth Krishnamurthy, Yann LeCun, Farshad Khorrami
- **摘要**: 将以物体为中心的世界模型与扩散策略统一为层次框架，解决多阶段机器人任务(超越单一到达/抓取)。**与具身智能/世界模型直接相关。**

## 9. When Does LeJEPA Learn a World Model?
- **arXiv**: 2605.26379
- **领域**: stat.ML, cs.LG
- **日期**: May 2026
- **作者**: David Klindt, Yann LeCun, Randall Balestriero
- **摘要**: 证明LeJEPA在广泛的世界类别中能线性恢复世界的潜在变量(线性可辨识性)。当世界潜在变量在平稳加性噪声下演化时成立。

## 10. stable-worldmodel: A Platform for Reproducible World Modeling Research
- **arXiv**: 2605.21800
- **领域**: cs.LG, cs.RO
- **日期**: May 2026
- **作者**: Lucas Maes, Quentin Le Lidec, Yann LeCun, Randall Balestriero 等
- **摘要**: 世界模型研究目前碎片化，代码库、数据管道和评估协议各不相同。提出统一平台解决可复现性和公平比较问题。**与具身智能/世界模型直接相关。**

## 11. Crys-JEPA: Accelerating Crystal Discovery via Embedding Screening and Generative Refinement
- **arXiv**: 2605.14759
- **领域**: cs.LG
- **日期**: May 2026
- **作者**: Nian Liu, Yann LeCun, Kostya S. Novoselov, Xavier Bresson 等
- **摘要**: 将JEPA应用于晶体发现，通过嵌入筛选和生成优化加速新材料发现。

**趋势总结**: LeCun 2026年研究围绕JEPA世界模型框架在多个领域的扩展。与Donty研究方向高度相关的论文包括：Patch Policy(具身控制)、AdaJEPA(自适应世界模型)、SkyJEPA(四旋翼sim-to-real)、Object-Centric World Models + Diffusion Policy(多阶段机器人任务)、stable-worldmodel平台、以及LeJEPA可辨识性理论。
