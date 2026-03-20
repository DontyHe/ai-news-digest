# Kaiming He 最新论文 - 2026-03-19
> 抓取时间: 2026-03-19 08:08 CST

## 论文列表

注: 无 2026 年 3 月新论文。以下是 2026 年 2 月的近期论文。

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **日期**: 2026-02-23
- **方向**: cs.LG
- **摘要**: 提出基于几何提升预训练的统一物理模拟模型 GeoPT, 通过合成动态增强静态几何实现 dynamics-aware 自监督。在流体力学和碰撞仿真基准上减少标注数据需求 20-60%, 加速收敛 2x。
- **代码**: https://github.com/Physics-Scaling/GeoPT

### 2. Generative Modeling via Drifting
- **arXiv**: [2602.04770](https://arxiv.org/abs/2602.04770)
- **日期**: 2026-02-06
- **方向**: cs.LG, cs.CV
- **摘要**: 提出 Drifting Models 范式, 在训练中演化 pushforward 分布, 自然支持单步推理。单步生成器在 ImageNet 256x256 达到 FID 1.54 (latent) / 1.61 (pixel)。
- **项目页**: https://lambertae.github.io/projects/drifting/

### 3. One-step Latent-free Image Generation with Pixel Mean Flows (pMF)
- **arXiv**: [2601.22158](https://arxiv.org/abs/2601.22158)
- **日期**: 2026-02-05
- **方向**: cs.CV
- **摘要**: 提出 pixel MeanFlow (pMF), 实现无 latent 的单步图像生成。ImageNet 256x256 达到 2.22 FID, 512x512 达到 2.48 FID。
- **代码**: https://github.com/Lyy-iiis/pMF

### 4. Bidirectional Normalizing Flow (BiFlow)
- **arXiv**: [2512.10953](https://arxiv.org/abs/2512.10953)
- **日期**: 2025-12-11
- **方向**: cs.LG, cs.CV
- **摘要**: 移除精确解析逆的需求, 学习反向模型近似 noise-to-data 映射。采样加速两个数量级, ImageNet 上达到 SOTA。

### 5. Improved Mean Flows (iMF)
- **arXiv**: [2512.02012](https://arxiv.org/abs/2512.02012)
- **日期**: 2025-12-11
- **方向**: cs.CV, cs.LG
- **摘要**: 改进 MeanFlow 的训练目标和引导机制。ImageNet 256x256 单步生成达到 FID 1.72。
