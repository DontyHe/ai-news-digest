# Kaiming He - arXiv 论文追踪

**抓取时间**: 2026-07-23 08:06 CST
**数据来源**: DBLP + arXiv

## 最新论文

### 1. Generative Modeling via Drifting
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **日期**: 2026-02-04
- **链接**: https://arxiv.org/abs/2602.04770
- **摘要**: 提出了一种新的生成建模范式 Drifting Models。与传统扩散/流模型在推理时迭代执行 pushforward 不同，该方法在训练过程中演进 pushforward 分布，天然支持一步推理。引入 drifting field 控制样本移动，当分布匹配时达到平衡。一步生成器在 ImageNet 256x256 上取得 FID 1.54（latent space）/ 1.61（pixel space），达到 SOTA。

### 2. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **日期**: 2026-02-23
- **链接**: https://arxiv.org/abs/2602.20399
- **摘要**: 提出几何预训练框架 GeoPT，通过在静态几何上合成交运动力学的自监督信号，解决几何预训练与物理仿真之间的负迁移问题。在超过100万样本上预训练，涵盖流体力学（汽车/飞机/船舶）和固体力学（碰撞仿真），减少标注数据需求 20-60%，加速收敛 2 倍。

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **日期**: 2026-01-29
- **链接**: https://arxiv.org/abs/2601.22158
- **摘要**: 提出 pixel MeanFlow (pMF)，实现无需 latent space 的一步扩散/流模型生成。核心思路是分离网络输出空间和损失空间：网络目标设计在低维图像流形上（x-prediction），而损失通过速度空间中的 MeanFlow 定义。在 ImageNet 256x256 取得 2.22 FID，512x512 取得 2.48 FID。

### 4. Denoising Hamiltonian Network for Physical Reasoning
- **作者**: Congyue Deng, Brandon Y. Feng, Cecilia Garraffo, Alan Garbarz, Robin Walters, William T. Freeman, Leonidas J. Guibas, Kaiming He
- **日期**: 2026 (TMLR)
- **链接**: https://openreview.net/forum?id=KublEgx7Hv
- **摘要**: 基于哈密顿力学的物理推理去噪网络，用于物理系统建模。

### 5. Autoregressive Image Generation without Vector Quantization
- **作者**: Tianhong Li, Yonglong Tian, He Li, Mingyang Deng, Kaiming He
- **日期**: 2024-06-17 (NeurIPS 2024)
- **链接**: https://arxiv.org/abs/2406.11838
- **摘要**: 挑战自回归图像生成必须依赖向量量化的传统认知。提出用扩散过程建模 per-token 概率分布，在连续值空间中进行自回归建模，定义 Diffusion Loss 替代 categorical cross-entropy。消除离散 tokenizer 的需求，在广泛场景下取得强结果。
