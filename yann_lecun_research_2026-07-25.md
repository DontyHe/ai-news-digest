# Yann LeCun - arXiv 论文追踪

**抓取时间**: 2026-07-25 08:06 CST

## 最新论文

### 论文 1
- **标题**: Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **作者**: 包含 **Yann LeCun** (Meta FAIR)
- **日期**: 2026-07-20
- **链接**: https://arxiv.org/abs/2607.18236v1
- **摘要**: 提出Patch Policy，使transformer策略直接消费预训练ViT的密集patch token，无需完整VLM的计算开销。核心是block-causal attention mask，保持时序因果性的同时让模型关注大量patch token。在四个仿真和三个真实环境套件中，比使用全局池化表示的策略提升40%，超越fine-tuned OpenVLA-OFT 18%，参数量仅为其0.7%。

### 论文 2
- **标题**: CrossBERT: Separating Representation from Reconstruction Enables Scalable Text Encoders
- **作者**: 包含 **Yann LeCun** (Meta FAIR)
- **日期**: 2026-07-04
- **链接**: https://arxiv.org/abs/2607.04011v1
- **摘要**: 发现BERT编码器的表征随规模增大变得"不可利用"（frozen probe无法利用），根源在于BERT的扁平设计将表征学习耦合到token重建损失。提出CrossBERT，两部分架构将高质量编码表征学习与token重建分离。支持高masking ratio (>=50%) 和互补masking策略，吞吐量提升1.5-2x，样本效率提升2x。在MTEB和GLUE上展现单调缩放特性。

### 论文 3
- **标题**: AdaJEPA: An Adaptive Latent World Model
- **作者**: 包含 **Yann LeCun** (Meta FAIR)
- **日期**: 2026-06-30
- **链接**: https://arxiv.org/abs/2606.32026v1
- **摘要**: 提出AdaJEPA，在MPC闭环中执行test-time adaptation的潜在世界模型。训练后，AdaJEPA规划和执行第一个action chunk，利用观测的下一状态转换作为自监督适应信号，用更新后的模型重新规划。在各种目标到达任务上显著提升规划成功率，每个MPC重规划步骤仅需一次梯度步。

### 论文 4
- **标题**: SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **作者**: 包含 **Yann LeCun** (Meta FAIR)
- **日期**: 2026-06-22
- **链接**: https://arxiv.org/abs/2606.23444v2
- **摘要**: 将JEPA风格模型引入实时四旋翼控制。结合潜在动力学模型与物理启发式探针，将冻结的潜在表示映射到可解释状态，实现物理基础的长时域预测。结合采样最优控制实现嵌入式硬件实时控制。室外闭环实验展示准确预测、稳健zero-shot sim-to-real迁移和强泛化能力。

## 状态
成功（arXiv API 直接访问）