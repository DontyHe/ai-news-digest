# Yann LeCun 论文追踪 - 2026年3月6日

## 最新论文 (2026年2月-3月)

### 1. Beyond Language Modeling: An Exploration of Multimodal Pretraining

**arXiv**: 2603.????  
**日期**: 2026-03-03  
**作者**: Shengbang Tong, David Fan, John Nguyen, Ellis Brown, Gaoyue Zhou, Shengyi Qian, Boyang Zheng, Théophane Vallaeys, Junlin Han, Rob Fergus, Naila Murray, Marjan Ghazvininejad, Mike Lewis, Nicolas Ballas, Amir Bar, Michael Rabbat, Jakob Verbeek, Luke Zettlemoyer, Koustuv Sinha, Yann LeCun, Saining Xie

**摘要**: 视觉世界为推进超越语言的基础模型提供了关键轴。尽管对此方向越来越感兴趣，但原生多模态模型的设计空间仍不透明。本文通过控制的从零预训练实验提供经验清晰度，隔离多模态预训练的因素，不受语言预训练的干扰。

**关键贡献**:
- 提供多模态预训练的实证分析
- 探索超越语言建模的多模态预训练

---

### 2. AI Must Embrace Specialization via Superhuman Adaptable Intelligence

**arXiv**: 2602.????  
**日期**: 2026-02-26  
**作者**: Judah Goldfeder, Philippe Wyder, Yann LeCun, Ravid Shwartz Ziv

**摘要**: 本文讨论关于 AGI 的定义问题，以及为什么即使在可能的未来，人类也不是通用的。提出通过超级适应性智能拥抱专业化的观点。

---

### 3. Semantic Tube Prediction: Beating LLM Data Efficiency with JEPA

**arXiv**: 2602.????  
**日期**: 2026-02-25  
**作者**: (待补充)

**摘要**: 大型语言模型遵循一致的缩放定律——经验幂律拟合，预测损失如何随计算、数据和参数减少。很少有工作能成功挑战这些定律所暗示的数据效率界限。

---

### 4. Radial-VCReg: More Informative Representation Learning through Radial Gaussianization

**arXiv**: 2602.????  
**日期**: 2026-02-15  
**作者**: Yilun Kuang, Yash Dagade, Deep Chakraborty, Erik Learned-Miller, Randall Balestriero, Tim G. J. Rudner, Yann LeCun

**摘要**: 自监督学习旨在学习最大信息量表示，但显式信息最大化受到维度灾难的阻碍。现有方法如 VCReg 通过正则化一阶和二阶特征统计来缓解，无法完全实现最大熵。本文提出 Radial-VCReg，在 VCReg 基础上增加径向高斯化损失。

---

### 5. Causal-JEPA: Learning World Models through Object-Level Latent Interventions

**arXiv**: 2602.????  
**日期**: 2026-02-11  
**作者**: Heejeong Nam, Quentin Le Lidec, Lucas Maes, Yann LeCun, Randall Balestriero

**摘要**: 世界模型需要强大的关系理解来支持预测、推理和控制。虽然以对象为中心的表示提供了有用的抽象，但它们不足以捕获交互依赖的动态。本文提出 C-JEPA，一个简单灵活的对象中心世界模型，将掩码联合嵌入预测从图像块扩展到对象中心表示。

---

### 6. EB-JEPA: A Lightweight Library for Energy-Based Joint-Embedding Predictive Architectures

**arXiv**: 2602.????  
**日期**: 2026-02-06  
**作者**: Basile Terver, Randall Balestriero, Megi Dervishi, David Fan, Quentin Garrido, Tushar Nagarajan, Koustuv Sinha, Wancong Zhang, Mike Rabbat, Yann LeCun, Amir Bar

**摘要**: 本文提出 EB-JEPA，一个用于学习和使用联合嵌入预测架构(JEPAs)学习表示和世界模型的开源库。JEPAs 在表示空间而非像素空间中进行预测，避免了生成建模的缺陷。

---

### 7. Rectified LpJEPA: Joint-Embedding Predictive Architectures with Sparse and Maximum-Entropy Representations

**arXiv**: 2602.????  
**日期**: 2026-02-01  
**作者**: Yilun Kuang, Yash Dagade, Tim G. J. Rudner, Randall Balestriero, Yann LeCun

**摘要**: 联合嵌入预测架构(JEPAs)学习视图不变表示，并使用基于投影的分布匹配防止崩溃。现有方法将表示正则化到各向同性高斯分布，但本质上倾向于密集表示，无法捕获高效表示的稀疏性特性。本文引入 Rectified LpJEPA。

---

### 8. Learning Latent Action World Models In The Wild

**arXiv**: 2601.????  
**日期**: 2026-01-20  
**作者**: Quentin Garrido, Tushar Nagarajan, Basile Terver, Nicolas Ballas, Yann LeCun, Michael Rabbat

**摘要**: 能够在世界中进行推理和规划的代理需要预测其行为后果的能力。世界模型具有这种能力，但通常需要动作标签，这在规模化时可能很复杂。本文解决了从视频中学习潜在动作模型的问题。

---

### 9. JEPA as a Neural Tokenizer: Learning Robust Speech Representations with Density Adaptive Attention

**arXiv**: 2512.????  
**日期**: 2025-12-08  
**作者**: Georgios Ioannides, Christos Constantinou, Aman Chadha, Aaron Elkins, Linsey Pang, Ravid Shwartz-Ziv, Yann LeCun

**摘要**: 引入两阶段自监督框架，结合联合嵌入预测架构(JEPA)和密度自适应注意力机制(DAAM)，学习鲁棒的语音表示。

---

### 10. VL-JEPA: Joint Embedding Predictive Architecture for Vision-language

**arXiv**: 2512.????  
**日期**: 2025-12-11  
**作者**: Delong Chen, Mustafa Shukor, Theo Moutakanni, Willy Chung, Jade Yu, Tejaswi Kasarla, Yejin Bang, Allen Bolourchi, Yann LeCun, Pascale Fung

**摘要**: 引入 VL-JEPA，一个基于联合嵌入预测架构(VJEPA)的视觉语言模型。不像经典 VLM 那样自回归生成令牌，VL-JEPA 预测目标文本的连续嵌入。

---

*本报告由Javas自动生成 | 日期: 2026-03-06*
