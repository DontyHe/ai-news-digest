# Kaiming He - 最新研究论文

**抓取时间**: 2026-07-24 08:07 CST

## 论文列表

### 1. Video Generation Models are General-Purpose Vision Learners (GenCeption)
- **作者**: Letian Wang, Chuhan Zhang, Rishabh Kabra, Jasper Uijlings, Steven Waslander, Andrew Zisserman, Joao Carreira, **Kaiming He**, Misha Andriluka, Eduard Gabriel Bazavan, Andrei Zanfir, Cristian Sminchisescu
- **发布日期**: 2026-07-10
- **链接**: https://arxiv.org/abs/2607.09024v1
- **分类**: cs.CV, cs.AI (ECCV 2026)
- **摘要**: 提出GenCeption，利用预训练的视频生成扩散backbone定义前馈感知模型，通过文本指令控制执行多种视觉任务。在深度估计、表面法线、相机位姿、指代表达分割、3D关键点预测等任务上达到SOTA，经常匹配或超越专用模型。视频生成预训练backbone在可比设置下优于V-JEPA和Video MAE。展现数据/模型缩放特性，以及出色的数据效率（比D4RT和VGGT-Omega少7-500倍训练数据）。模型仅在合成人类视频上训练，却能泛化到真实世界和分布外类别。

### 2. ELF: Embedded Language Flows
- **作者**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, **Kaiming He**
- **发布日期**: 2026-05-11
- **链接**: https://arxiv.org/abs/2605.10938v2
- **分类**: cs.CL, cs.AI, cs.LG
- **摘要**: 提出Embedded Language Flows (ELF)，一类基于连续时间Flow Matching的连续嵌入空间扩散模型。与现有DLM不同，ELF主要在连续嵌入空间中运行，直到最后一步才通过共享权重网络映射到离散token。这使得直接适配图像域扩散模型的成熟技术（如CFG）成为可能。ELF在更少采样步数下大幅超越领先的离散和连续DLM。

### 3. Image Generators are Generalist Vision Learners (Vision Banana)
- **作者**: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, Shuyang Sun, Yanan Bao, Karen Truong, Zhicheng Wang, Wenlei Zhou, Jonathan T. Barron, Kyle Genova, Nithish Kannen, Sherry Ben, Yandong Li, Mandy Guo, Suhas Yogin, Yiming Gu, Huizhong Chen, Oliver Wang, Saining Xie, Howard Zhou, **Kaiming He**, Thomas Funkhouser, Jean-Baptiste Alayrac, Radu Soricut
- **发布日期**: 2026-04-22
- **链接**: https://arxiv.org/abs/2604.20329v3
- **分类**: cs.CV, cs.AI
- **摘要**: 证明图像生成训练作为LLM预训练的等价物，让模型学习强大且通用的视觉表示。Vision Banana通过在Nano Banana Pro (NBP)的原始训练数据上混合少量视觉任务数据进行指令微调，将视觉任务的输出空间参数化为RGB图像。在2D和3D理解任务上达到SOTA，超越或匹敌SAM3（分割）和Depth Anything系列（深度估计）。图像生成预训练是通用视觉学习器，类似于文本生成在语言理解中的角色。

### 4. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, **Kaiming He**, Wojciech Matusik
- **发布日期**: 2026-02-23
- **链接**: https://arxiv.org/abs/2602.20399v2
- **分类**: cs.LG
- **摘要**: 针对神经仿真器的可扩展预训练方法。通过提升几何预训练(Lifted Geometric Pre-Training)，用合成动力学增强静态几何，实现动力学感知的自监督训练。在超过100万样本上预训练，在汽车/飞机/船舶流体力学和碰撞仿真等工业级基准上持续改进，减少20-60%标注数据需求，加速2倍收敛。

### 5. Generative Modeling via Drifting
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, **Kaiming He**
- **发布日期**: 2026-02-04
- **链接**: https://arxiv.org/abs/2602.04770v2
- **分类**: cs.LG, cs.CV
- **摘要**: 提出Drifting Models新范式，在训练期间演化前推分布，自然支持一步推理。引入控制样本运动的drifting field，当分布匹配时达到平衡。一步生成器在ImageNet 256x256上达到FID 1.54（潜在空间）和1.61（像素空间）的SOTA结果。

### 6. One-step Latent-free Image Generation with Pixel Mean Flows (pMF)
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, **Kaiming He**
- **发布日期**: 2026-01-29
- **链接**: https://arxiv.org/abs/2601.22158v3
- **分类**: cs.CV
- **摘要**: 提出