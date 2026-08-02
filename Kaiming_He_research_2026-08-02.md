# Kaiming He 最新论文追踪

**抓取日期**: 2026-08-02
**来源**: arXiv (按发表日期降序)

---

## 1. Video Generation Models are General-Purpose Vision Learners

- **arXiv**: [2607.09024](https://arxiv.org/abs/2607.09024)
- **作者**: Letian Wang, Chuhan Zhang, Rishabh Kabra, Jasper Uijlings, Steven Waslander, Andrew Zisserman, Joao Carreira, **Kaiming He**, Misha Andriluka, Eduard Gabriel Bazavan, Andrei Zanfir, Cristian Sminchisescu
- **日期**: 2026年7月9日
- **类别**: cs.CV, cs.AI
- **会议**: ECCV 2026

**摘要**: NLP 通过 next-token prediction 从任务特定模型转向了通用基础模型。本文提出，大规模文本到视频生成可以作为计算机视觉的强预训练范式，提供必要的时空先验和视觉理解能力。

**分析**: Kaiming He 团队正在验证"生成式预训练 = 通用视觉学习"的路线。继 Image Generators 之后，进一步扩展到视频生成领域，继续推进生成式视觉基础模型的研究方向。

---

## 2. ELF: Embedded Language Flows

- **arXiv**: [2605.10938](https://arxiv.org/abs/2605.10938)
- **作者**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, **Kaiming He**
- **日期**: 2026年5月11日（v1）/ 2026年6月25日（v2）
- **类别**: cs.CL, cs.AI, cs.LG

**摘要**: 扩散模型和 flow 模型在图像视频生成领域取得成功，但将其应用于语言建模时，当前的 DLM 主要操作离散 token。本文提出 continuous DLM，在连续空间中进行语言建模。

**分析**: 将扩散模型从视觉生成拓展到语言建模，Kaiming He 的研究兴趣正在跨模态扩展。ELF 的蒸馏结果是 v2 的补充，说明这项工作仍在快速迭代。

---

## 3. Image Generators are Generalist Vision Learners

- **arXiv**: [2604.20329](https://arxiv.org/abs/2604.20329)
- **作者**: Valentin Gabeur, Shangbang Long, Songyou Peng 等（含 **Kaiming He**）
- **日期**: 2026年4月22日（v1）/ 2026年6月3日（v2）
- **类别**: cs.CV, cs.AI
- **项目主页**: http://vision-banana.github.io

**摘要**: 图像和视频生成器展现出零样本视觉理解能力，类似 LLM 通过生成式预训练获得语言理解。本文提供证据表明，生成式视觉预训练可以作为通用视觉理解的基础。

**分析**: 这是 Kaiming He 近期最核心的方向。论文验证了"会画就会看"的假设，对视觉基础模型的训练范式有重要影响。对于 VLA 领域，这意味着视觉编码器可能可以直接用生成模型替代。

---

## 4. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training

- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **作者**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, **Kaiming He**
- **日期**: 2026年2月
- **类别**: cs.LG

**分析**: 将几何预训练应用到物理模拟的 scaling 上，属于基础模型在科学计算领域的拓展。
