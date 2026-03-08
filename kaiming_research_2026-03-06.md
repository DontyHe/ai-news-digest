# Kaiming He 论文追踪 - 2026年3月6日

## 最新论文 (2026年2月-3月)

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training

**arXiv**: 2602.20399  
**日期**: 2026-02-23  
**作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik

**摘要**: 神经模拟器是物理仿真的高效替代品，但生成高质量训练数据的成本阻碍了其扩展。预训练在现成几何体上是一种自然替代方案，但面临根本性差距：仅在静态几何体上的监督忽略了动力学，可能导致负迁移。本文提出 GeoPT，通过提升几何预训练实现通用物理仿真。核心思想是通过合成动力学增强几何，使自监督能够无需物理标签。

**关键贡献**:
- 提出统一预训练模型 GeoPT 用于通用物理仿真
- 通过合成动力学增强几何，弥补几何-物理差距
- 在汽车、飞机、船舶的流体力学和碰撞仿真中减少20-60%的标签数据需求
- 加速2倍收敛

---

### 2. Generative Modeling via Drifting

**arXiv**: 2602.04770  
**日期**: 2026-02-06  
**作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He

**摘要**: 生成建模可以表述为学习一个映射，使其前向分布匹配数据分布。本文提出新的范式 Drifting Models，在训练过程中演化前向分布，自然地实现单步推理。引入漂移场控制样本移动，在分布匹配时达到平衡。

**关键贡献**:
- 提出 Drifting Models 范式，训练中演化分布
- 实现单步生成器
- 在 ImageNet 256x256 上达到 SOTA 结果，FID 1.54 (latent space) / 1.61 (pixel space)

---

### 3. One-step Latent-free Image Generation with Pixel Mean Flows

**arXiv**: 2601.22158  
**日期**: 2026-01-29  
**作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He

**摘要**: 现代扩散/流模型通常有两个核心特征：多步采样和在潜在空间操作。本文进一步推进这一目标，提出 Pixel MeanFlow (pMF)。核心指导是将网络输出空间和损失空间分开设计。

**关键贡献**:
- 在 ImageNet 256x256 达到 2.22 FID
- 在 ImageNet 512x512 达到 2.48 FID
- 首个在如此高分辨率上实现单步潜在自由生成的方案之一

---

### 4. Bidirectional Normalizing Flow: From Data to Noise and Back

**arXiv**: 2512.10953  
**日期**: 2025-12-11  
**作者**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He

**摘要**: 标准化流(NF)是一种原则性的生成建模框架。标准 NF 由前向过程和反向过程组成：前向将数据映射到噪声，反向通过反转生成样本。本文引入 BiFlow，学习近似底层噪声到数据反向映射的逆向模型。

**关键贡献**:
- 去除对精确解析逆的要求
- 允许更灵活的损失函数和架构
- 加速采样达两个数量级

---

### 5. Improved Mean Flows: On the Challenges of Fastforward Generative Models

**arXiv**: 2512.02012  
**日期**: 2025-12-01  
**作者**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He

**摘要**: MeanFlow (MF) 是单步生成建模的框架，但其"快速前进"特性在训练目标和引导机制上存在挑战。原始 MF 的训练目标依赖于网络本身，本文重新表述为瞬时速度 v 上的损失。

**关键贡献**:
- 重新表述为更标准的回归问题，提高训练稳定性
- 通过上下文条件保持测试时的灵活性
- 在 ImageNet 256x256 上实现 1.72 FID (单步)

---

### 6. Back to Basics: Let Denoising Generative Models Denoise

**arXiv**: 2511.13720  
**日期**: 2025-11-17  
**作者**: Tianhong Li, Kaiming He

**摘要**: 今天的去噪扩散模型并不真正"去噪"，即不直接预测干净图像。神经网络预测噪声或带噪量。本文认为预测干净数据和预测带噪量有根本不同。提出直接预测干净数据的模型。

**关键贡献**:
- 提出 JiT (Just image Transformers)
- 无 tokenizer，无预训练，无额外损失
- 在 ImageNet 256/512 上使用大 patch size (16, 32) 表现强劲

---

### 7. Transformers without Normalization

**arXiv**: 2503.10622  
**日期**: 2025-03-??  
**作者**: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu

**摘要**: 归一化层在现代神经网络中无处不在。本文证明不使用归一化的 Transformer 可以达到相同或更好的性能。引入 Dynamic Tanh (DyT) 作为归一化层的即插即用替代品。

**关键贡献**:
- 提出 DyT: DyT(x) = tanh(αx)
- 无需超参数调优即可匹配或超过性能
- 跨视觉、语言、监督到自监督学习验证

---

*本报告由Javas自动生成 | 日期: 2026-03-06*
