# Kaiming He - Research Digest
**Date**: 2026-06-25

## Recent Papers

### 1. ELF: Embedded Language Flows
- **arXiv**: 2605.10938v1
- **Published**: 2026-05-11
- **Authors**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, **Kaiming He**
- **Categories**: cs.CL, cs.AI, cs.LG
- **Summary**: 提出ELF，一种基于连续时间Flow Matching的扩散模型，在连续嵌入空间中运行。与现有离散DLM不同，ELF在最后一步之前始终保持在连续嵌入空间中，使用共享权重网络映射到离散token。可以直接适配图像域扩散模型的技术（如CFG）。实验表明ELF在生成质量和采样步数上大幅超过现有的离散和连续DLM。
- **Link**: https://arxiv.org/abs/2605.10938v1
- **Code**: https://github.com/lillian039/ELF

### 2. Image Generators are Generalist Vision Learners (Vision Banana)
- **arXiv**: 2604.20329v3
- **Published**: 2026-04-22 (updated 2026-06-03)
- **Authors**: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, ..., **Kaiming He**, Thomas Funkhouser, Jean-Baptiste Alayrac, Radu Soricut
- **Categories**: cs.CV, cs.AI
- **Summary**: 证明图像生成训练可以像LLM预训练一样，让模型学习强大的通用视觉表征。Vision Banana通过instruction-tuning Nano Banana Pro (NBP)实现，将视觉任务参数化为RGB图像生成，在2D/3D理解任务上达到SOTA，击败Segment Anything Model 3和Depth Anything系列。仅用轻量级instruction-tuning，不牺牲图像生成能力。
- **Link**: https://arxiv.org/abs/2604.20329v3
- **Page**: http://vision-banana.github.io

### 3. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: 2602.20399v2
- **Published**: 2026-02-23 (updated 2026-05-20)
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, **Kaiming He**, Wojciech Matusik
- **Categories**: cs.LG
- **Summary**: 通过提升几何预训练解决神经模拟器数据瓶颈。在超过100万样本上预训练，通过合成动态增强几何实现无物理标签的自监督。在汽车/飞机/船舶流体力学和碰撞模拟等工业级benchmark上，减少标注数据需求20-60%，加速收敛2倍。
- **Link**: https://arxiv.org/abs/2602.20399v2
- **Code**: https://github.com/Physics-Scaling/GeoPT

### 4. Generative Modeling via Drifting
- **arXiv**: 2602.04770v2
- **Published**: 2026-02-04 (updated 2026-02-06)
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, **Kaiming He**
- **Categories**: cs.LG, cs.CV
- **Summary**: 提出Drifting Models新范式，通过drifting field驱动样本移动并在分布匹配时达到平衡。训练过程中演化pushforward分布，天然支持一步推理。在ImageNet 256x256上FID 1.54（latent space）和1.61（pixel space），达到一步生成SOTA。
- **Link**: https://arxiv.org/abs/2602.04770v2
- **Page**: https://lambertae.github.io/projects/drifting/

### 5. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: 2601.22158v3
- **Published**: 2026-01 (updated 2026-05-09)
- **Authors**: (includes **Kaiming He**)
- **Categories**: cs.CV, cs.LG
- **Summary**: 像素空间一步生成方法，无需latent space。
- **Link**: https://arxiv.org/abs/2601.22158v3

## Research Trends
- **核心方向**: 扩散/流模型、一步生成、视觉理解统一
- **关键洞察**: 图像生成预训练可以作为通用视觉学习者，类似LLM预训练在语言领域的角色
- **方法论**: 连续embedding空间中的flow matching，避免离散token的限制

---
*Generated: 2026-06-25 08:07 CST*
