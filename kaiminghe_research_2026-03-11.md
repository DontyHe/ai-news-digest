# Kaiming He - Research Papers (2026-03-11)

## Recent arXiv Papers

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training

- **论文ID**: arXiv:2602.10895
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **机构**: MIT, Stanford, etc.
- **发布日期**: 2026-02-23
- **类别**: cs.CV, physics
- **链接**: [PDF](https://arxiv.org/pdf/2602.10895)

**一句话概括**
提出几何预训练方法 GeoPT，通过在静态几何数据上预训练来缓解神经模拟器训练数据不足的问题。

**详细解读**
- **研究背景**：神经模拟器是物理仿真的高效替代品，但生成高质量训练数据的成本很高。预训练是一个自然的选择，但静态几何上的监督与动态物理任务存在差距，可能导致负迁移。
- **架构分析**：GeoPT 使用提升的几何预训练方法，在静态几何数据上预训练，然后在物理任务上微调。
- **创新点**：首次提出在静态几何上进行预训练来缓解物理模拟的数据瓶颈。
- **对具身智能的启发**：物理模拟对于机器人世界模型构建至关重要，GeoPT 的方法可以帮助构建更高效的物理仿真器，减少数据需求。

---

### 2. Generative Modeling via Drifting

- **论文ID**: arXiv:2602.05945
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **发布日期**: 2026-02-04
- **类别**: cs.LG
- **链接**: [PDF](https://arxiv.org/pdf/2602.05945)

**一句话概括**
提出漂移模型（Drifting Models），在训练过程中让推送分布自然演化，实现无需推理时迭代的生成建模。

**详细解读**
- **研究背景**：生成建模通常被表述为学习一个映射，使其推送分布匹配数据分布。扩散和基于流的模型通过推理时的迭代来实现这一目标。
- **架构分析**：漂移模型在训练过程中演化推送分布，自然地支持推理时的一次性生成。
- **创新点**：提出了一种新的生成建模范式，训练和推理过程更加统一。
- **对具身智能的启发**：高效的生成模型对于世界模型和视觉预测非常重要，漂移模型可能提供更快速的推理能力。

---

### 3. One-step Latent-free Image Generation with Pixel Mean Flows

- **论文ID**: arXiv:2601.08815
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **发布日期**: 2026-01-29
- **类别**: cs.CV
- **链接**: [PDF](https://arxiv.org/pdf/2601.08815)

**一句话概括**
提出 Pixel MeanFlow (pMF)，实现无需潜变量的一步扩散/流生成。

**详细解读**
- **研究背景**：现代扩散/流模型通常有两个核心特征：多步采样和在潜空间操作。最近的进展在这两个方面分别取得了进展，但一步生成仍是挑战。
- **架构分析**：pMF 在像素空间操作，使用平均流来加速生成。
- **创新点**：首次实现真正的一步生成，无需潜变量。
- **对具身智能的启发**：高效的图像生成对于视觉理解和世界模型预测非常重要。

---

### 4. Transformers without Normalization

- **论文ID**: arXiv:2503.06153
- **作者**: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
- **发布日期**: 2025-03-13
- **类别**: cs.CV
- **链接**: [PDF](https://arxiv.org/pdf/2503.06153)

**一句话概括**
提出 Dynamic Tanh (DyT) 作为归一化层的替代品，证明 Transformer 可以不需要归一化层。

**详细解读**
- **研究背景**：归一化层在现代神经网络中无处不被认为至关重要。
- **架构分析**：DyT 是元素级操作 DyT(x) = tanh(αx)，作为归一化层的即插即用替代品。
- **创新点**：首次证明 Transformer 可以不需要归一化层，使用极其简单的技术达到相同或更好的性能。
- **对具身智能的启发**：减少计算开销和内存使用，对于在机器人上部署高效模型非常有价值。

---
*Generated on 2026-03-11*
