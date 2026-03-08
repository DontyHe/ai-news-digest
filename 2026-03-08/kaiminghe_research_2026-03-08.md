# Kaiming He - ArXiv 论文 - 2026-03-08

## 最新论文 (2026年)

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: 2602.20399 | Submitted 23 February 2026
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **Abstract**: 神经模拟器有望成为物理仿真的高效替代品，但生成高质量训练数据的成本过高限制了规模化。通过对现成几何体进行预训练提供了一种自然的替代方案。提出 GeoPT，通过提升几何预训练来统一物理仿真。核心思想是通过合成动力学增强几何，使自监督无需物理标签即可实现动态感知。在超过100万个样本上预训练后，GeoPT 在汽车、飞机、船舶的流体力学和碰撞仿真的工业精度基准上持续提升，将标注数据需求减少20-60%，收敛加速2倍。

### 2. Generative Modeling via Drifting
- **arXiv**: 2602.04770 | Submitted 6 February 2026
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **Abstract**: 生成建模可以表述为学习映射 f，使其推送分布匹配数据分布。提出 Drifting Models，在训练期间演化推送分布，自然地支持单步推理。引入漂移场governs sample movement，在分布匹配时达到平衡。在 ImageNet 256x256 上单步生成器达到最先进结果，FID 为 1.54 (latent space) 和 1.61 (pixel space)。

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: 2601.22158 | Submitted 5 February 2026
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **Abstract**: 现代 diffusion/flow 模型通常具有两个核心特征：(i) 多步采样，(ii) 在 latent space 操作。提出 "pixel MeanFlow" (pMF)，在 ImageNet 256x256 达到 2.22 FID，512x512 达到 2.48 FID。

### 4. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv**: 2512.10953 | Submitted 11 December 2025
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **Abstract**: 引入 Bidirectional Normalizing Flow (BiFlow)，无需精确解析逆。学习近似底层噪声到数据逆映射的逆模型，实现更灵活的损失函数和架构。在 ImageNet 上比因果解码方法提升生成质量，采样加速达两个数量级。

### 5. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv**: 2512.02012 | Submitted 1 December 2025
- **Authors**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **Abstract**: 改进的 MeanFlow (iMF) 在 ImageNet 256x256 上用单步函数评估 (1-NFE) 达到 1.72 FID，大幅超越同类型先前方法。

### 6. ARC Is a Vision Problem!
- **arXiv**: 2511.14761 | Submitted 18 November 2025
- **Authors**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **Abstract**: 将 ARC 表述为图像到图像的转换问题。提出 Vision ARC (VARC)，在 ARC-1 基准上达到 60.4% 准确率，显著超越从零训练的其他方法。

### 7. Back to Basics: Let Denoising Generative Models Denoise
- **arXiv**: 2511.13720 | Submitted 7 January 2026 (v1: 17 November 2025)
- **Authors**: Tianhong Li, Kaiming He
- **Abstract**: 今天的去噪扩散模型并不真正"去噪"——它们不直接预测干净图像。提出直接预测干净数据的模型。展示简单的大 patch Transformers 可以是强大的生成模型：无需 tokenizer，无预训练，无额外损失。称为 "Just image Transformers" (JiT)，在 ImageNet 256 和 512 分辨率上使用 patch size 16 和 32 取得竞争性结果。

---
*Source: arXiv | Retrieved: 2026-03-08*
