# Kaiming He - Research Papers 2026-03-16

## Recent arXiv Papers

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: 2602.20399
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **Category**: cs.LG
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. GeoPT通过augment geometry with synthetic dynamics，实现dynamics-aware self-supervision without physics labels。在超过100万样本上预训练，在流体和固体力学基准测试上一致提升，减少20-60% labeled data需求，加速2x收敛。
- **Submitted**: 23 February 2026

### 2. Generative Modeling via Drifting
- **arXiv**: 2602.04770
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **Category**: cs.LG, cs.CV
- **Abstract**: 提出Drifting Models范式，evolve pushforward distribution during training，实现one-step inference。在ImageNet 256x256上达到SOTA，FID 1.54 (latent space), 1.61 (pixel space)。
- **Submitted**: 6 February 2026

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: 2601.22158
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **Category**: cs.CV
- **Abstract**: 提出Pixel MeanFlow (pMF)，在ImageNet 256x256达到2.22 FID，512x512达到2.48 FID，实现one-step latent-free generation。
- **Submitted**: 5 February 2026

### 4. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv**: 2512.10953
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **Category**: cs.LG, cs.CV
- **Abstract**: 提出BiFlow，移除exact analytic inverse的需求，学习reverse model来approximate noise-to-data mapping。在ImageNet上比causal decoding提升生成质量，采样加速up to two orders of magnitude。
- **Submitted**: 11 December 2025

---

*Generated on 2026-03-16*
