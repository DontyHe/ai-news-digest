# Yann LeCun - arXiv 论文追踪

**抓取时间**: 2026-07-23 08:06 CST
**数据来源**: DBLP + arXiv

## 最新论文

### 1. Rectified LpJEPA: Joint-Embedding Predictive Architectures with Sparse and Maximum-Entropy Representations
- **作者**: Yilun Kuang, Yash Dagade, Tim G. J. Rudner, Randall Balestriero, Yann LeCun
- **日期**: 2026-02
- **链接**: https://arxiv.org/abs/2602.01456
- **摘要**: 现有 JEPA 方法将表示正则化为各向同性高斯分布，但偏好密集表示而无法捕捉稀疏性。提出 Rectified Distribution Matching Regularization (RDMReg)，通过对齐到 Rectified Generalized Gaussian (RGG) 分布实现稀疏控制。RGG 通过 rectification 显式控制期望 l0 范数，同时保持连续性。实验表明 Rectified LpJEPA 能学到稀疏、非负表示，在图像分类基准上表现有竞争力。

### 2. A Lightweight Library for Energy-Based Joint-Embedding Predictive Architectures
- **作者**: Basile Terver, Randall Balestriero, Megi Dervishi, David Fan, Quentin Garrido, Tushar Nagarajan, Koustuv Sinha, Wancong Zhang, Mike Rabbat, Yann LeCun, Amir Bar
- **日期**: 2026-02
- **链接**: https://arxiv.org/abs/2602.03604
- **摘要**: 发布 EB-JEPA 开源库，提供模块化 JEPA 实现。涵盖图像自监督学习 (CIFAR-10 探测 91% 准确率)、视频多步预测 (Moving MNIST)、动作条件世界模型 (Two Rooms 导航 97% 成功率)。每个示例可在单 GPU 几小时内训练。GitHub: https://github.com/facebookresearch/eb_jepa

### 3. Parallel Stochastic Gradient-Based Planning for World Models (GRASP)
- **作者**: Michael Psenka, Michael Rabbat, Aditi S. Krishnapriyan, Yann LeCun, Amir Bar
- **日期**: 2026-02
- **链接**: https://arxiv.org/abs/2602.00475
- **摘要**: 提出 GRASP 规划器，利用世界模型的可微性进行高效并行规划。将状态作为优化变量（"virtual states"），通过软动力学约束实现并行计算。引入随机性促进探索，修改梯度结构避免高维视觉世界模型中的梯度敏感问题。在长序列控制任务上显著优于 CEM 和 vanilla GD。

### 4. Value-guided Action Planning with JEPA World Models
- **作者**: Matthieu Destrade, Oumayma Bounou, Quentin Le Lidec, Jean Ponce, Yann LeCun
- **日期**: 2026-01
- **链接**: https://arxiv.org/abs/2601.00844
- **摘要**: 增强 JEPA 世界模型的动作规划能力。通过塑造表示空间，使负目标条件价值函数近似为状态嵌入之间的距离。提出训练时施加此约束的实用方法，在简单控制任务上显著优于标准 JEPA 模型。

### 5. Learning Latent Action World Models In The Wild
- **作者**: Quentin Garrido, Tushar Nagarajan, Basile Terver, Nicolas Ballas, Yann LeCun, Michael Rabbat
- **日期**: 2026-01
- **链接**: https://arxiv.org/abs/2601.05230
- **摘要**: 解决从真实世界视频学习潜在动作模型的问题，扩展了以往仅限于简单仿真/游戏/操作数据的工作。发现连续但受约束的潜在动作能捕捉真实视频中的复杂动作，而向量量化无法做到。环境变化（如人进入房间）可在视频间迁移。训练控制器将已知动作映射到潜在动作，实现与动作条件基线相当的规划性能。

### 6. Scaling Text-to-Image Diffusion Transformers with Representation Autoencoders
- **作者**: Shengbang Tong, Boyang Zheng, Ziteng Wang, Bingda Tang, Nanye Ma, Ellis Brown, Jihan Yang, Rob Fergus, Yann LeCun, Saining Xie
- **日期**: 2026-01
- **链接**: https://arxiv.org/abs/2601.16208
- **摘要**: 将 Representation Autoencoders (RAE) 扩展到大规模自由文本图像生成。在 SigLIP-2 上训练 RAE 解码器，发现数据组成对特定领域（如文本渲染）至关重要。RAE 在 0.5B 到 9.8B 参数规模上持续优于 VAE，且在微调时不会像 VAE 那样灾难性过拟合。由于视觉理解和生成都可在共享表示空间中操作，多模态模型可直接对生成潜在表示进行推理。

### 7. What Drives Success in Physical Planning with Joint-Embedding Predictive World Models?
- **作者**: Basile Terver, Tsung-Yen Yang, Jean Ponce, Adrien Bardes, Yann LeCun
- **日期**: 2026 (TMLR)
- **链接**: https://openreview.net/forum?id=cHZn5Gdh8e
- **摘要**: 分析 JEPA 世界模型在物理规划任务中成功的关键因素。

### 8. Spectral Graph Theory: The Mathematics of Self-Supervised Learning
- **作者**: Randall Balestriero, Yann LeCun
- **日期**: 2026 (IEEE Signal Processing Magazine)
- **链接**: https://doi.org/10.1109/MSP.2026.3659059
- **摘要**: 从谱图理论角度阐述自监督学习的数学基础。