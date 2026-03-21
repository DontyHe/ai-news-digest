# Kaiming He - arXiv Research Digest - 2026-03-21

**抓取时间**: 2026-03-21 08:05 CST
**来源**: arXiv (via r.jina.ai)
**总论文数**: 90 篇

---

## 变更说明

与 2026-03-20 对比，无新增论文。最新论文仍为 2026-02-23 的 GeoPT。

---

## 最新论文 (2026年)

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: 2602.20399
- **日期**: 2026-02-23
- **领域**: cs.LG
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **摘要**: 基于 lifting geometric pre-training 的统一预训练模型，通过合成动态实现动力学感知自监督。减少标注数据需求 20-60%，加速收敛 2x。
- **代码**: https://github.com/Physics-Scaling/GeoPT

### 2. Generative Modeling via Drifting
- **arXiv**: 2602.04770
- **日期**: 2026-02-06
- **领域**: cs.LG, cs.CV
- **作者**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **摘要**: Drifting Models 新范式，自然支持 one-step inference。ImageNet 256x256 FID 1.54 (latent) / 1.61 (pixel)。

### 3. One-step Latent-free Image Generation with Pixel Mean Flows (pMF)
- **arXiv**: 2601.22158
- **日期**: 2026-02-05
- **领域**: cs.CV
- **作者**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **摘要**: 网络输出和 loss 空间分离设计。ImageNet 256x256 FID 2.22, 512x512 FID 2.48。
- **代码**: https://github.com/Lyy-iiis/pMF

### 4. Bidirectional Normalizing Flow (BiFlow)
- **arXiv**: 2512.10953
- **日期**: 2025-12-11
- **领域**: cs.LG, cs.CV
- **作者**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **摘要**: 移除精确解析逆的需求，采样加速高达两个数量级。

### 5. Improved Mean Flows (iMF)
- **arXiv**: 2512.02012
- **日期**: 2025-12-01
- **领域**: cs.CV, cs.LG
- **作者**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **摘要**: 将 classifier-free guidance 作为显式条件变量。ImageNet 256x256 FID 1.72 (1-NFE)。

---

## 研究趋势总结

Kaiming He 最近的关注点集中在：
1. **One-step 生成模型**: MeanFlow 系列 (MF → iMF → pMF → Drifting)
2. **去噪模型回归本源**: JiT 直接预测干净数据
3. **视觉推理**: VARC 将 ARC 重新定义为视觉问题
4. **机器人学习**: HPT 异构预训练
5. **物理模拟**: GeoPT 几何预训练
6. **架构创新**: DyT 去除 normalization
