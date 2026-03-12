# Kaiming He 最新研究动态 (2026-03-04)

> 搜索日期: 2026-03-04

## 1. 近期发表论文 (2025-2026)

### 2026年

| 论文 | 作者 | arXiv | 日期 |
|------|------|-------|------|
| **GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training** | Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik | - | 2026-02 |
| **Generative Modeling via Drifting** | Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He | - | 2026-02 |
| **One-step Latent-free Image Generation with Pixel Mean Flows** | Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He | - | 2026-01 |
| **Back to Basics: Let Denoising Generative Models Denoise** | Kaiming He | - | 2026-01 |
| **Bidirectional Normalizing Flow: From Data to Noise and Back** | Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He | - | 2025-12 |
| **Improved Mean Flows: On the Challenges of Fastforward Generative Models** | Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He | - | 2025-12 |

### 2025年

| 论文 | 作者 | arXiv | 日期 |
|------|------|-------|------|
| **ARC Is a Vision Problem!** | Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He | - | 2025-11 |
| **Is Noise Conditioning Necessary for Denoising Generative Models?** | Qiao Sun, Zhicheng Jiang, Hanhong Zhao, Kaiming He | - | 2025-11 |
| **Diffuse and Disperse: Image Generation with Representation Regularization** | Runqian Wang, Kaiming He | - | 2025-06 |
| **Transformers without Normalization** | Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu | - | 2025-03 |
| **Denoising Hamiltonian Network for Physical Reasoning** | Congyue Deng, Brandon Y. Feng, Cecilia Garraffo, Alan Garbarz, Robin Walters, William T. Freeman, Leonidas Guibas, Kaiming He | - | 2025-03 |
| **Fractal Generative Models** | Tianhong Li, Qinyi Sun, Lijie Fan, Kaiming He | - | 2025-02 |
| **Mean Flows for One-step Generative Modeling** | Zhengyang Geng, Mingyang Deng, Xingjian Bai, J. Zico Kolter, Kaiming He | - | 2025-05 |
| **TetSphere Splatting: Representing High-Quality Geometry with Lagrangian Volumetric Meshes** | Minghao Guo, Bohan Wang, Kaiming He, Wojciech Matusik | - | 2025-04 |
| **A Decade's Battle on Dataset Bias: Are We There Yet?** | Zhuang Liu, Kaiming He | - | 2025-03 |

---

## 2. 研究方向分析

### 生成模型 (Generative Models)
Kaiming He 近期的工作主要集中在**生成模型**领域:

- **MeanFlow 系列**: 提出平均速度概念来表征流场，区别于 Flow Matching 的瞬时速度
- **Denoising Diffusion Models**: 探索去噪扩散模型的本质，质疑噪声条件的必要性
- **Pixel Mean Flows**: 实现一步 latent-free 图像生成
- **Fractal Generative Models**: 引入分形概念，递归调用原子生成模块
- **Drifting Models**: 提出训练过程中演化 pushforward 分布的新范式

### 物理模拟 (Physics Simulation)
- **GeoPT**: 通过几何预训练扩展物理模拟
- **Denoising Hamiltonian Network**: 用于物理推理的去噪哈密顿网络

### 视觉理解
- **ARC Is a Vision Problem!**: 探索 ARC 数据集的视觉方法
- **Transformers without Normalization**: 用 Dynamic Tanh 替代归一化层

---

## 3. Meta/FAIR 研究工作

Kaiming He 现任 Meta AI (FAIR) 研究科学家。以下是他在 FAIR 的代表性工作:

| 论文 | 年份 | 影响 |
|------|------|------|
| Mask R-CNN | 2017 | 里程碑工作，实例分割标准方法 |
| Focal Loss | 2017 | 解决类别不平衡 |
| Feature Pyramid Networks | 2017 | 多尺度特征融合 |
| Non-local Neural Networks | 2017 | 长距离依赖建模 |
| Group Normalization | 2018 | 批归一化的替代方案 |
| MoCo | 2019 | 无监督视觉表示学习 |
| Masked Autoencoders (MAE) | 2021 | 可扩展自监督学习 |
| Simple Siamese (SimSiam) | 2020 | 简化的孛生网络 |

---

## 4. 个人主页

- Google Scholar: `https://scholar.google.com/citations?user=8ktpsxAAAAAJ` (需要解决 403 访问限制)
- 个人网站: `kaiminghe.github.io` (可能已下线)

---

## 5. 总结

Kaiming He 近期研究重点从**自监督学习 (MAE)** 逐渐转向**生成模型**领域，特别是在:
1. 一步生成 (one-step generation)
2. 去噪扩散模型的本质理解
3. 归一化层的替代方案
4. 物理模拟与神经网络的结合

这些方向与当前 AI 主流趋势（生成式 AI、物理神经网络）高度一致。
