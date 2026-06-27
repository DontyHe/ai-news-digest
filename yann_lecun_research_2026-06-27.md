# Yann LeCun - Research Digest
**Date**: 2026-06-27

## Recent Papers

### 1. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **arXiv**: 2606.23444v2
- **Published**: 2026-06-22 (updated 2026-06-23)
- **Authors**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **Categories**: cs.RO, cs.LG
- **Summary**: 引入JEPA风格的实时四旋翼控制模型。结合latent dynamics model和physics-inspired prober，将冻结的latent映射到可解释的状态空间，实现物理grounding的长时预测。配合采样最优控制在嵌入式硬件上实现实时控制。实验验证了准确预测、鲁棒的zero-shot sim-to-real迁移和跨工况泛化能力。
- **Link**: https://arxiv.org/abs/2606.23444v2
- **Status**: Under Review

### 2. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **arXiv**: 2606.19398v1
- **Published**: 2026-06-17
- **Authors**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, **Yann LeCun**, Ravid Shwartz-Ziv
- **Categories**: cs.SD, eess.AS, eess.SP
- **Summary**: 提出S-JEPA，用JEPA风格的encoder-predictor匹配GMM soft posteriors替代离散hard cluster预测。训练分为两阶段：先固定GMM over MFCC，再online GMM over encoder features，消除offline re-cluster步骤。在90M参数以下的SSL方法中WER最低，在情感识别上以约一半参数量匹配HuBERT-Base。
- **Link**: https://arxiv.org/abs/2606.19398v1
- **Code**: https://github.com/gioannides/s-jepa

### 3. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **arXiv**: 2606.15956v1
- **Published**: 2026-06-14
- **Authors**: Ninad Daithankar, Alexi Gladstone, **Yann LeCun**, Heng Ji
- **Categories**: cs.CV, cs.AI, cs.LG
- **Summary**: 提出TDV (Temporal Difference in Vision)，从视频中自监督学习的新范式。不依赖数据增强、masking或cropping等强归纳偏置，仅利用"过去导致未来"的因果假设。联合训练image encoder和motion encoder，使当前帧表示+编码运动=下一帧表示。在dense spatial任务上匹配SOTA。
- **Link**: https://arxiv.org/abs/2606.15956v1

### 4. Unifying Object-Centric World Models and Diffusion Policy (WorldDP)
- **arXiv**: 2606.08775v1
- **Published**: 2026-06-07
- **Authors**: Raktim Gautam Goswami, Prashanth Krishnamurthy, **Yann LeCun**, Farshad Khorrami
- **Categories**: cs.RO, cs.AI
- **Summary**: 引入WorldDP，面向多阶段机器人操控的世界模型框架。层级方法使用高层世界模型作为转移函数优化可行子目标，低层Diffusion Policy执行。结合object-centric表示解耦环境实体。在多个机器人benchmark上一致优于基线。
- **Link**: https://arxiv.org/abs/2606.08775v1

### 5. When Does LeJEPA Learn a World Model?
- **arXiv**: 2605.26379v1
- **Published**: 2026-05-25
- **Authors**: David Klindt, **Yann LeCun**, Randall Balestriero
- **Categories**: stat.ML, cs.LG
- **Summary**: 证明LeJEPA在线性可辨识性上的理论保证。在宽泛的世界类别中，Gaussian是唯一能保证线性恢复世界潜变量的分布。通过谱分解和非线性惩罚对齐证明。同时证明近似可辨识性结果，线性正交可辨识性支持最优潜空间规划。
- **Link**: https://arxiv.org/abs/2605.26379v1

---
*No new papers since 2026-06-26. Generated: 2026-06-27 08:07 CST*
