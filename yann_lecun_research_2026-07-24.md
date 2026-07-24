# Yann LeCun - 最新研究论文

**抓取时间**: 2026-07-24 08:07 CST

## 论文列表

### 1. Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **作者**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, **Yann LeCun**, Lerrel Pinto
- **发布日期**: 2026-07-20
- **链接**: https://arxiv.org/abs/2607.18236v1
- **分类**: cs.RO, cs.LG
- **摘要**: 提出Patch Policy，一个最小架构扩展，使基于transformer的策略能够直接消费预训练的密集patch token，而无需完整VLM的计算开销。核心是block-causal attention mask，保留标准策略的时序因果性，同时让模型在每个观测上关注大量patch token。在4个仿真和3个真实世界环境套件中，相对SOTA全局池化表示提升40%。超越微调的OpenVLA-OFT 18%，仅使用约0.7%的参数。

### 2. Separating Representation from Reconstruction Enables Scalable Text Encoders (CrossBERT)
- **作者**: Megi Dervishi, Mathurin Videau, **Yann LeCun**
- **发布日期**: 2026-07-04
- **链接**: https://arxiv.org/abs/2607.04011v1
- **分类**: cs.CL, cs.AI
- **摘要**: 通过冻结主干评估和probing重新审视编码器。BERT编码器的表示随着perplexity改善变得 increasingly unexploitable by frozen probes。问题源于BERT的扁平设计将表示学习耦合到token重建损失。CrossBERT将高质量编码表示的学习与token重建的刚性锚定分离。支持高掩码比(≥50%)和互补掩码策略的梯度收集，分别提升1.5-2x吞吐量和2x样本效率。在MTEB(eng, v2)和冻结GLUE上展示单调缩放和优越性能。

### 3. AdaJEPA: An Adaptive Latent World Model
- **作者**: Ying Wang, Oumayma Bounou, **Yann LeCun**, Mengye Ren
- **发布日期**: 2026-06-30
- **链接**: https://arxiv.org/abs/2606.32026v1
- **分类**: cs.LG, cs.AI
- **摘要**: 在模型预测控制(MPC)的闭环中执行测试时自适应的潜在世界模型。训练后，AdaJEPA规划和执行第一个动作块，使用观测到的下一状态转换作为自监督自适应信号，然后用更新后的模型重新规划。这种闭环更新无需额外的专家演示即可持续校准世界模型。在一系列目标到达任务中，仅每个MPC重规划步骤一次梯度步就能大幅提高规划成功率。

### 4. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **作者**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **发布日期**: 2026-06-22
- **链接**: https://arxiv.org/abs/2606.23444v2
- **分类**: cs.RO, cs.LG
- **摘要**: 首个将JEPA风格模型用于实时四旋翼控制的方法。结合潜在动力学模型与新颖的物理启发prober，将冻结潜在变量映射到可解释状态。与采样最优控制结合，实现嵌入式硬件上的实时控制。开发自动化数据集生成流水线。广泛的户外闭环实验展示准确预测、鲁棒的零样本sim-to-real迁移和强泛化能力。

### 5. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **作者**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, **Yann LeCun**, Ravid Shwartz-Ziv
- **发布日期**: 2026-06-17
- **链接**: https://arxiv.org/abs/2606.19398v1
- **分类**: cs.SD, eess.AS
- **摘要**: 提出S-JEPA，JEPA风格的编码器-预测器对，通过KL散度在掩码位置匹配高斯混合模型的软后验。训练作为连续优化轨迹运行，移除离线重聚类步骤和手动调参。在SUPERB协议下，在90M参数以下的SSL方法中达到最低WER，在情感识别上以约一半参数量匹配HuBERT-Base。

### 6. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences (TDV)
- **作者**: Ninad Daithankar, Alexi Gladstone, **Yann LeCun**, Heng Ji
- **发布日期**: 2026-06-14
- **链接**: https://arxiv.org/abs/2606.15956v1
- **分类**: cs.CV, cs.AI, cs.LG
- **摘要**: 引入TDV，一种从视频中自监督学习的新范式，避免现有的强归纳偏置（增强、掩码、裁剪），依赖因果假设——过去导致未来。联合训练图像编码器和运动编码器，使当前帧表示+编码运动=下一帧表示。尽管不利用强归纳偏置，TDV在密集空间任务上匹配SOTA方法。

### 7. WorldDP: Unifying Object-Centric World Models and Diffusion Policy
- **作者**: Raktim Gautam Goswami, Prashanth Krishnamurthy, **Yann LeCun**, Farshad Khorrami
- **发布日期**: 2026-06-07
- **链接**: https://arxiv.org/abs/2606.08775v1
- **分类**: cs.RO, cs.AI
- **摘要**: 用于多阶段机器人操纵的世界模型框架。层次化方法利用高级世界模型作为转移函数在运行时优化可行子目标，然后由低级Diffusion Policy到达。引入以物体为中心的表示解耦环境实体，在各种机器人基准上持续超越现有baseline。

### 8. When Does LeJEPA Learn a World Model?
- **作者**: David Klindt, **Yann LeCun**, Randall Balestriero
- **发布日期**: 2026-05-25
- **链接**: https://arxiv.org/abs/2605.26379v1
- **分类**: stat.ML, cs.LG
- **摘要**: 证明LeJEPA（对齐+高斯正则化）在广泛的世界类别中（潜在变量在平稳加性噪声转换下演化）能线性恢复世界的潜在变量。主要结果：在所有此类世界中，高斯是唯一保证此性质的潜在分布。证明了线性正交可辨识性实现最优潜在空间规划。从2D到1024维潜在变量的实验验证。

### 9. stable-worldmodel: A Platform for Reproducible World Modeling Research
- **作者**: Lucas Maes, Quentin Le Lidec, Luiz Facury, Nassim Massaudi, Ayush Chaurasia, Francesco Capuano, Richard Gao, Taj Gillin, Dan Haramati, Damien Scieur, **Yann LeCun**, Randall Balestriero
- **发布日期**: 2026-05-20
- **链接**: https://arxiv.org/abs/2605.21800v1
- **分类**: cs.LG, cs.RO
- **摘要**: 开源平台，提供(1)基于Lance的高性能数据层(2)现代世界模型基线和规划求解器的清洁实现(3)广泛的环境和任务套件，带有可控的视觉/几何/物理变化因素。统一全流水线，大幅减少研究开销。

### 10. Crys-JEPA: Accelerating Crystal Discovery via Embedding Screening and Generative Refinement
- **作者**: Nian Liu, Nikita Kazeev, Stephen Gregory Dale, Artem Maevskiy, Yuwei Zeng, Ryoji Kubo, Pengru Huang, Thomas Laurent, **Yann LeCun**, Kostya S. Novoselov, Xavier Bresson
- **发布日期**: 2026-05-14
- **链接**: https://arxiv.org/abs/2605.14759v2
- **分类**: cs.LG
- **摘要**: 晶体发现的JEPA架构，学习保持形成能差异的能量感知潜在空间。稳定性评估可重构为基于嵌入的可访问训练晶体比较，减少对昂贵能量评估的依赖。在MP-20和Alex-MP-20数据集上，V.S.U.N.指标分别提升高达53.8%和72.7%。
