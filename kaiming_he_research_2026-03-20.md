# Kaiming He - arXiv Research Digest - 2026-03-20

**抓取时间**: 2026-03-20 08:07 CST
**来源**: arXiv (via r.jina.ai)
**总论文数**: 90 篇

---

## 最新论文 (2026年)

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: 2602.20399
- **日期**: 2026-02-23
- **领域**: cs.LG
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **摘要**: 提出基于 lifting geometric pre-training 的统一预训练模型 GeoPT，通过在静态几何上添加合成动态实现动力学感知自监督。在超过 100 万样本上预训练，在流体力学（汽车、飞机、船舶）和固体力学（碰撞模拟）的工业级基准上持续改进，减少标注数据需求 20-60%，加速收敛 2x。
- **代码**: https://github.com/Physics-Scaling/GeoPT

### 2. Generative Modeling via Drifting
- **arXiv**: 2602.04770
- **日期**: 2026-02-06
- **领域**: cs.LG, cs.CV
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **摘要**: 提出 Drifting Models 新范式，在训练中演化 pushforward distribution，自然支持 one-step inference。引入 drifting field 控制样本运动，one-step 生成器在 ImageNet 256x256 达到 FID 1.54 (latent) / 1.61 (pixel)。
- **项目页**: https://lambertae.github.io/projects/drifting/

### 3. One-step Latent-free Image Generation with Pixel Mean Flows (pMF)
- **arXiv**: 2601.22158
- **日期**: 2026-02-05
- **领域**: cs.CV
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **摘要**: 提出 pixel MeanFlow (pMF)，网络输出空间和 loss 空间分离设计。在 ImageNet 256x256 达到 2.22 FID，512x512 达到 2.48 FID，填补 one-step latent-free 生成的关键空白。
- **代码**: https://github.com/Lyy-iiis/pMF

### 4. Bidirectional Normalizing Flow (BiFlow)
- **arXiv**: 2512.10953
- **日期**: 2025-12-11
- **领域**: cs.LG, cs.CV
- **作者**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **摘要**: 移除精确解析逆的需求，学习近似逆映射的 reverse model。相比因果解码加速采样高达两个数量级，NF 方法中 SOTA。

### 5. Improved Mean Flows (iMF)
- **arXiv**: 2512.02012
- **日期**: 2025-12-01
- **领域**: cs.CV, cs.LG
- **作者**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **摘要**: 改进 MeanFlow 训练目标，将 classifier-free guidance 作为显式条件变量。iMF 在 ImageNet 256x256 达到 **1.72 FID** (1-NFE)，从零训练，无需蒸馏。

### 6. ARC Is a Vision Problem! (VARC)
- **arXiv**: 2511.14761
- **日期**: 2025-11-18
- **领域**: cs.CV, cs.AI, cs.LG
- **作者**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **摘要**: 将 ARC 抽象推理任务重新定义为视觉问题（image-to-image translation），使用 vanilla ViT 从零训练。VARC 在 ARC-1 达到 60.4% 准确率，接近人类平均表现。
- **代码**: https://github.com/lillian039/VARC

### 7. Back to Basics: Let Denoising Generative Models Denoise (JiT)
- **arXiv**: 2511.13720
- **日期**: 2025-11-17 (v1) / 2026-01-07 (v2)
- **领域**: cs.CV
- **作者**: Tianhong Li, Kaiming He
- **摘要**: 主张去噪模型应直接预测干净数据而非噪声。基于流形假设，大 patch Transformers 在像素上即可成为强生成模型。JiT，无 tokenizer、无预训练、无额外 loss。
- **代码**: https://github.com/LTH14/JiT

### 8. Transformers without Normalization (DyT)
- **arXiv**: 2503.10622
- **日期**: 2025-03-13 (v1) / 2025-06-14 (updated)
- **领域**: cs.LG, cs.AI, cs.CL, cs.CV
- **作者**: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
- **摘要**: 引入 Dynamic Tanh (DyT) 替代 Transformer 中的 normalization layers。DyT(x) = tanh(αx)，简单有效。在识别、生成、自监督、CV/NLP 多种设置下验证。
- **会议**: **CVPR 2025**
- **项目页**: https://jiachenzhu.github.io/DyT/

### 9. Scaling Proprioceptive-Visual Learning with HPT
- **arXiv**: 2409.20537
- **日期**: 2024-09-30
- **领域**: cs.RO, cs.CV, cs.LG
- **作者**: Lirui Wang, Xinlei Chen, Jialiang Zhao, Kaiming He
- **摘要**: 提出 HPT (Heterogeneous Pre-trained Transformers)，跨不同具身和任务的大规模异构预训练。在 52 个数据集上实验，未见任务微调性能提升超 20%。
- **会议**: **NeurIPS 2024**

### 10. Autoregressive Image Generation without Vector Quantization (MAR)
- **arXiv**: 2406.11838
- **日期**: 2024-06-17 (v1)
- **领域**: cs.CV
- **作者**: Tianhong Li, Yonglong Tian, He Li, Mingyang Deng, Kaiming He
- **摘要**: 使用扩散过程替代离散 token 概率分布，消除 VQ tokenizer 的需求。定义 Diffusion Loss 作为 per-token 概率。
- **会议**: **NeurIPS 2024 (Spotlight)**
- **代码**: https://github.com/LTH14/mar

---

## 研究趋势总结

Kaiming He 最近的关注点集中在：
1. **One-step 生成模型**: MeanFlow 系列 (MF → iMF → pMF → Drifting)，持续刷新 SOTA
2. **去噪模型回归本源**: JiT 主张直接预测干净数据
3. **视觉推理**: VARC 将 ARC 重新定义为视觉问题
4. **机器人学习**: HPT 异构预训练
5. **物理模拟**: GeoPT 几何预训练
6. **架构创新**: DyT 去除 normalization
