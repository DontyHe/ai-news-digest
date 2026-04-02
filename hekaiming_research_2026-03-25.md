# Kaiming He - 研究论文追踪 - 2026-03-25

抓取时间: 2026-03-25 08:05 CST

## 最新论文

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **日期**: 2026-02-23
- **领域**: cs.LG
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **摘要**: 提出基于几何预训练的物理仿真模型GeoPT，通过合成动态增强静态几何数据，解决预训练中的负迁移问题。在流体力学和碰撞仿真基准上减少标注数据需求20-60%，收敛速度提升2倍。

### 2. Generative Modeling via Drifting
- **arXiv**: [2602.04770](https://arxiv.org/abs/2602.04770)
- **日期**: 2026-02-06
- **领域**: cs.LG, cs.CV
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **摘要**: 提出 Drifting Models 新范式，在训练过程中演化推前分布，自然支持单步推理。ImageNet 256x256 上 FID 达到 1.54（潜在空间）和 1.61（像素空间）。
- **项目页**: https://lambertae.github.io/projects/drifting/

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: [2601.22158](https://arxiv.org/abs/2601.22158)
- **日期**: 2026-01-29
- **领域**: cs.CV
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **摘要**: 提出 pixel MeanFlow (pMF)，实现单步无潜在空间图像生成。ImageNet 256x256 FID 2.22，512x512 FID 2.48。
- **代码**: https://github.com/Lyy-iiis/pMF

### 4. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv**: [2512.10953](https://arxiv.org/abs/2512.10953)
- **日期**: 2025-12-11
- **领域**: cs.LG, cs.CV
- **作者**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **摘要**: 提出 BiFlow 框架，移除了精确解析逆的需求，相比因果解码加速采样最多两个数量级，在 NF 方法中达到 SOTA。

### 5. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv**: [2512.02012](https://arxiv.org/abs/2512.02012)
- **日期**: 2025-12-11
- **领域**: cs.CV, cs.LG
- **作者**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **摘要**: 改进 MeanFlow 框架，重新参数化训练目标，引入 in-context conditioning 的 guidance 机制。ImageNet 256x256 上 1-NFE 达到 FID 1.72。

---
*数据来源: arXiv via r.jina.ai*
