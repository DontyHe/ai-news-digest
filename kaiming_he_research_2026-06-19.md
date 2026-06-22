# Kaiming He 近期研究论文追踪

**日期**: 2026-06-19  
**数据来源**: arXiv API  
**论文总数**: 5 篇（按提交日期降序）

---

## 1. ELF: Embedded Language Flows

- **arXiv ID**: [2605.10938](https://arxiv.org/abs/2605.10938v1)
- **发表日期**: 2026-05-11
- **作者**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, **Kaiming He**
- **领域**: cs.CL, cs.AI, cs.LG
- **项目页**: https://github.com/lillian039/ELF

**摘要**: 提出嵌入式语言流（ELF），一类在连续嵌入空间中基于连续时间 Flow Matching 的扩散模型。与现有离散 token DLM 不同，ELF 在最后一步之前始终停留在连续嵌入空间中，然后使用共享权重网络映射到离散 token。这使得直接适配图像域扩散模型技术（如 classifier-free guidance）变得简单。实验表明 ELF 大幅超越领先的离散和连续 DLM。

---

## 2. Image Generators are Generalist Vision Learners

- **arXiv ID**: [2604.20329](https://arxiv.org/abs/2604.20329v3)
- **发表日期**: 2026-04-22（最近更新 2026-06-03）
- **作者**: Valentin Gabeur, Shangbang Long, Songyou Peng 等（含 **Kaiming He**）
- **领域**: cs.CV, cs.AI
- **项目页**: http://vision-banana.github.io

**摘要**: 证明图像生成训练类似于 LLM 预训练，能学习强大的通用视觉表征。通过指令微调 Nano Banana Pro 构建 Vision Banana，将视觉任务输出参数化为 RGB 图像，将感知重构为图像生成。在 2D/3D 理解任务上达到 SOTA，击败或匹敌 SAM3 和 Depth Anything 等专业模型。提出生成式视觉预训练可能成为计算机视觉的基础范式。

---

## 3. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training

- **arXiv ID**: [2602.20399](https://arxiv.org/abs/2602.20399v2)
- **发表日期**: 2026-02-23（最近更新 2026-05-20）
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li 等（含 **Kaiming He**）
- **领域**: cs.LG
- **项目页**: https://physics-scaling.github.io/GeoPT/

**摘要**: 针对神经网络模拟器的可扩展性问题，提出基于"提升几何预训练"的 GeoPT。核心思想是用合成动态增强几何，实现无需物理标签的动态感知自监督。在百万级样本上预训练，在流体力学（汽车/航空/船舶）和固体力学（碰撞模拟）的工业级基准上，减少标注需求 20-60%，加速收敛 2 倍。

---

## 4. Generative Modeling via Drifting

- **arXiv ID**: [2602.04770](https://arxiv.org/abs/2602.04770v2)
- **发表日期**: 2026-02-04
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, **Kaiming He**
- **领域**: cs.LG, cs.CV
- **项目页**: https://lambertae.github.io/projects/drifting/

**摘要**: 提出 Drifting Models 新范式，在训练过程中演化推前分布，天然支持一步推理。引入漂移场控制样本移动，当分布匹配时达到平衡。一步生成器在 ImageNet 256x256 上达到 FID 1.54（latent）/ 1.61（pixel），SOTA 结果。

---

## 5. One-step Latent-free Image Generation with Pixel Mean Flows

- **arXiv ID**: [2601.22158](https://arxiv.org/abs/2601.22158v3)
- **发表日期**: 2026-01-29（最近更新 2026-05-09）
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun 等（含 **Kaiming He**）
- **领域**: cs.CV
- **代码**: https://github.com/Lyy-iiis/pMF

**摘要**: 提出 Pixel MeanFlow (pMF)，将网络输出空间和损失空间分离设计。网络目标在假定低维图像流形上（x-prediction），损失在速度空间中通过 MeanFlow 定义。在 ImageNet 256x256 (2.22 FID) 和 512x512 (2.48 FID) 上实现一步无 latent 生成，填补该领域空白。

---

**趋势总结**: Kaiming He 近期研究集中在生成模型（扩散/Flow Matching 一步生成）、物理模拟和通用视觉基础模型。特别值得关注的是 Vision Banana 项目，提出图像生成预训练作为视觉基础模型的新范式。
