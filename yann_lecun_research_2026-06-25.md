# Yann LeCun - Research Digest
**Date**: 2026-06-25

## Recent Papers

### 1. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **arXiv**: 2606.23444v2
- **Published**: 2026-06-22
- **Authors**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **Categories**: cs.RO, cs.LG
- **Summary**: 将JEPA架构应用于实时四旋翼控制。结合潜在动力学模型和物理启发的prober（将冻结潜在表示映射到可解释状态），实现物理基础的长期预测。结合采样最优控制实现嵌入式硬件上的实时控制。开发了自动化数据集生成pipeline减少真实世界数据依赖。开放环和户外闭环实验验证了准确的预测、鲁棒的zero-shot sim-to-real迁移。
- **Link**: https://arxiv.org/abs/2606.23444v2
- **Status**: Under Review

### 2. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **arXiv**: 2606.19398v1
- **Published**: 2026-06-17
- **Authors**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, **Yann LeCun**, Ravid Shwartz-Ziv
- **Categories**: cs.SD, eess.AS, eess.SP
- **Summary**: 提出S-JEPA，使用JEPA风格的encoder-predictor对，在masked位置匹配高斯混合模型的soft posterior（通过KL散度）。训练作为连续优化轨迹运行，无需离线重聚类步骤。在90M参数以下的SSL方法中达到最低WER，在情感识别上匹配HuBERT-Base但参数量仅一半。分析揭示soft-target目标保留了硬目标会消除的声学歧义。
- **Link**: https://arxiv.org/abs/2606.19398v1
- **Code**: https://github.com/gioannides/s-jepa

### 3. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **arXiv**: 2606.15956v1
- **Published**: 2026-06-14
- **Authors**: Ninad Daithankar, Alexi Gladstone, **Yann LeCun**, Heng Ji
- **Categories**: cs.CV, cs.AI, cs.LG
- **Summary**: 提出TDV（Temporal Difference in Vision），一种从视频自监督学习的新范式。不依赖数据增强、masking或cropping等强归纳偏置，仅基于"过去导致未来"的因果假设。联合训练图像编码器和运动编码器，使当前帧表示+编码运动=下一帧表示。在密集空间任务上匹配SOTA。
- **Link**: https://arxiv.org/abs/2606.15956v1

### 4. WorldDP: Unifying Object-Centric World Models and Diffusion Policy
- **arXiv**: 2606.08775v1
- **Published**: 2026-06-07
- **Authors**: Raktim Gautam Goswami, Prashanth Krishnamurthy, **Yann LeCun**, Farshad Khorrami
- **Categories**: cs.RO, cs.AI
- **Summary**: 面向多阶段机器人操作的world model框架。层次化方法：高层world model作为transition function优化可行子目标，低层Diffusion Policy执行。引入object-centric representation解耦环境实体。在多个robotics benchmark上持续超越baseline。
- **Link**: https://arxiv.org/abs/2606.08775v1

### 5. When Does LeJEPA Learn a World Model?
- **arXiv**: 2605.26379v1
- **Published**: 2026-05-25
- **Authors**: David Klindt, **Yann LeCun**, Randall Balestriero
- **Categories**: stat.ML, cs.LG
- **Summary**: 理论证明LeJEPA（alignment + Gaussian正则化）在广泛的世界模型类别中可以从非线性观测中线性恢复潜在变量（线性可辨识性）。证明Gaussian是唯一满足此保证的潜在分布。进一步证明近似可辨识性结果和线性正交可辨识性支持最优潜在空间规划。从2D到1024维实验验证。
- **Link**: https://arxiv.org/abs/2605.26379v1

## Research Trends
- **核心方向**: JEPA架构扩展（SkyJEPA/S-JEPA）、world model理论、减少归纳偏置
- **关键洞察**: JEPA从视觉/语言/语音扩展到机器人控制和无人机，world model具备zero-shot sim-to-real能力
- **具身智能相关**: SkyJEPA（四旋翼控制）、WorldDP（多阶段操作）直接相关VLA/世界模型研究
- **理论进展**: LeJEPA的可辨识性理论证明，为world model提供了数学保证

---
*Generated: 2026-06-25 08:07 CST*
