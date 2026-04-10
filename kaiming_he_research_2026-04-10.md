# Kaiming He - 研究论文追踪 - 2026-04-10

抓取时间: 2026-04-10 08:06 CST

## 最新论文

本次抓取未发现自 2026-03-25 以来的新论文。以下为近期论文回顾：

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **日期**: 2026-02-23
- **领域**: cs.LG
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **摘要**: 面向物理仿真的统一预训练模型。通过在几何数据上添加合成动力学实现 dynamics-aware 自监督，无需物理标签。在流体力学（汽车/飞机/船舶）和固体力学（碰撞仿真）的工业级 benchmark 上，减少标注数据需求 20-60%，收敛速度提升 2 倍。
- **代码**: https://github.com/Physics-Scaling/GeoPT

### 2. Generative Modeling via Drifting
- **arXiv**: [2602.04770](https://arxiv.org/abs/2602.04770)
- **日期**: 2026-02-06
- **领域**: cs.LG, cs.CV
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **摘要**: 提出 Drifting Models 新范式，训练时演化 pushforward 分布，天然支持一步推理。引入 drifting field 控制样本移动，分布匹配时达到平衡。一步生成器在 ImageNet 256x256 达到 FID 1.54（latent space）和 1.61（pixel space）。
- **项目页**: https://lambertae.github.io/projects/drifting/

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: [2601.22158](https://arxiv.org/abs/2601.22158)
- **日期**: 2026-01-29
- **领域**: cs.CV
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **摘要**: pixel MeanFlow (pMF)，一步无 latent 生成。核心思想是将网络输出空间和 loss 空间分开：网络 target 在低维图像流形上（x-prediction），loss 定义在 MeanFlow 的速度空间中。ImageNet 256x256 FID 2.22，512x512 FID 2.48。
- **代码**: https://github.com/Lyy-iiis/pMF

---
*数据来源: arXiv via r.jina.ai*
