# 具身智能 / VLA / 世界模型论文追踪

> 追踪周期：过去 7 天（2026-05-28 至 2026-06-04）
> 筛选标准：一线研究机构（NVIDIA、Meta、Google DeepMind、OpenAI、Tesla、Stanford、CMU、Berkeley、MIT、KAIST、NAVER LABS 等）+ 含架构图或实验图表
> 本期编辑：Javas 🤖

---

## 📄 Paper 1

**论文 ID**：2605.29577v1

**标题**：Mitigating State Aliasing in Vision-Language-Action Models via Inverse Dynamics Learning

**作者**（附机构）：Kyujin Lee、Injae Kim、Jihwan Park、Yejun Ju（KAIST）；Minseok Joo（Korea University）；Hyunwoo J. Kim（KAIST）

**机构**：KAIST（韩国科学技术院）、Korea University

**提交时间**：2026-05-28（arXiv 宣布时间：May 2026）

**arXiv 链接**：https://arxiv.org/abs/2605.29577

**项目页/代码**：arXiv 页面未标注项目页（可向作者发邮件申请 kyujinlee@kaist.ac.kr）

---

### 一句话概括

VLA 在训练时引入**逆动力学辅助任务**作为视觉编码器的额外监督信号，直接促使编码器学习到对低层控制有区分度的视觉特征，从而缓解视觉相似但动作需求不同的"状态歧义"问题。

---

### 摘要

Vision-Language-Action（VLA）模型通过适配预训练的视觉-语言模型（VLM）来实现机械臂操控任务的感知、推理与控制一体化。但 VLM 表征天然偏向高层语义，对低层控制所需的细微视觉差异不敏感，导致"状态歧义"——视觉相似的状态其实需要完全不同的动作，但模型无法区分。

本文提出用**逆动力学学习（Inverse Dynamics Learning）**作为辅助目标：给定当前和未来两个观测，让视觉编码器独立提取特征，再接一个轻量级逆动力学头来预测两者之间的动作序列。这个辅助监督直接作用于编码器本身，而不只是通过端到端输出预测间接影响。

此外，考虑到机器人演示数据通常是单向成功轨迹、动作多样性有限，模型容易依赖"轨迹方向"等粗粒度捷径而非细粒度视觉区分来预测动作。论文进一步提出**伪时间反转（PTR）**增强：对同一演示轨迹的观测时序反转，配合伪标签反转动作，从而让编码器接触到更多样化的动作方向。

实验在 CALVIN ABC→D 和 SimplerEnv 两个标准基准上进行，结果显示该方法在多种 VLA 基线上均取得一致提升。通过冻结编码器探测和状态-特征对齐分析，作者验证了学习到的视觉表征确实能更好地区分不同状态，且与机器人状态变化的几何结构对齐。

---

### 架构分析（重点）

**整体方法框架**（Fig 2）包含三个核心组件：

#### 3.1 辅助逆动力学学习

设数据集 $\mathcal{D} = \{\tau_i\}_{i=1}^N$，每条轨迹 $\tau = (l, \{(o_t, a_t)\}_{t=1}^T)$，其中 $l$ 是语言指令，$o_t$ 是视觉观测，$a_t$ 是 7-DoF 动作（末端执行器相对位移 + 夹爪状态）。

给定观测对 $(o_t, o_{t+k})$ 和对应动作段 $a_{t:t+k}$：
- 视觉编码器 $E_\phi$ 独立编码两个观测：$z_t = E_\phi(o_t)$，$z_{t+k} = E_\phi(o_{t+k})$
- 轻量级逆动力学头 $h_\psi$ 预测动作段：$\check{a}_{t:t+k} = h_\psi(z_t, z_{t+k})$
- 损失函数：$\mathcal{L}_{\text{inv}} = \mathcal{L}_{\text{motion}}(\check{a}_{t:t+k}, a_{t:t+k}) + \lambda_g \mathcal{L}_{\text{gripper}}(\check{a}_{t:t+k}, a_{t:t+k})$

#### 3.2 伪时间反转（PTR）

标准逆动力学学习存在的问题：成功演示轨迹是单向的，模型只看到有限的动作变化范围，容易依赖粗粒度捷径。

PTR 将观测时序反转（$o_t \leftrightarrow o_{t+k}$），同时将对应动作符号取反（$\Delta x \to -\Delta x$，其余同理），生成伪反转动作作为监督。这让编码器同时暴露于前向和伪反转的动作方向，扩大动作多样性。

#### 3.3 整体 Pipeline

主 VLA 目标 + 逆动力学辅助目标联合训练。推理时丢弃辅助头，保持原始 VLA 架构和推理流程不变。

---

### 实验结果

| 基准 | 基线 VLA | + 逆动力学 | + PTR |
|---|---|---|---|
| CALVIN ABC→D（多任务） | 基础 | 一致提升 | 进一步提升 |
| SimplerEnv-Bridge | 基础 | 一致提升 | 进一步提升 |

冻结编码器探测（LIBERO 数据集）：用学到的视觉特征训练行为克隆探头和 proprioceptive state 预测探头，loss 更低，说明特征更有利于下游任务预测。

状态-特征对齐分析：学到的特征距离与真实机器人状态变化距离有更强的结构化对应关系。

---

### 创新点

1. **逆动力学作为 VLA 视觉编码器的直接监督**：不仅通过端到端输出间接优化编码器，而是专门设计了一个作用于编码器本身的辅助任务。这是第一个明确针对"状态歧义"问题分析视觉特征空间的工作。

2. **PTR 数据增强**：利用轨迹时间反转自然生成互补监督信号，扩大动作方向多样性，打破单向轨迹导致的表征捷径问题。

3. **辅助头仅在训练时使用，推理时完全移除**：不增加任何推理计算开销，易于集成到各种 VLA 基线中。

---

### 对具身智能算法工程师的启发

**状态歧义是 VLA 落地部署时的一大隐患**。论文通过系统性实验揭示了一个以往容易被忽视的问题：当 VLM 的语义先验主导时，模型会忽略低层控制所需的细微视觉差异。在真实机器人部署场景中，这意味着模型可能对任务进程判断错误、执行错误精度的动作。

本文的解决思路（逆动力学辅助 + PTR）对工程实践很有参考价值：不需要额外标注，不需要改变推理流程，只需在训练阶段加入一个辅助头即可。这与当前 VLA 压缩、小型化趋势高度契合——小模型尤其需要更有区分度的视觉表征，逆动力学学习可以作为一种高效的正则化手段。

另外，**冻结编码器探测**和**状态-特征对齐分析**的实验设计方法值得借鉴——它们能帮助我们理解模型真正学到了什么，而不只是看最终任务成功率。

---

## 📄 Paper 2

**论文 ID**：2605.28231v1

**标题**：ProgVLA: Progress-Aware Robot Manipulation Skill Learning

**作者**（附机构）：NAVER LABS；NAVER LABS Europe

**机构**：NAVER LABS（韩国顶尖互联网公司研究机构，性质等同于 Google DeepMind/Meta FAIR）

**提交时间**：2026-05-27（arXiv 宣布时间：May 2026）

**arXiv 链接**：https://arxiv.org/abs/2605.28231

**项目页**：arXiv 页面未标注（可联系作者 seungsu.kim@naverlabs.com）

---

### 一句话概括

ProgVLA 是一个仅 **0.1B 参数**的紧凑型 VLA，通过两阶段 Perceiver 重采样压缩多模态序列长度，并引入**离线强化学习启发的进度预测头**来显式建模任务进度，从而让小模型在长 horizon 操控任务上也能匹配甚至超越大 10 倍以上的预训练基线。

---

### 摘要

当前主流 VLA（RT-2、Pi-0、OpenVLA）依赖数十亿参数的预训练视觉-语言骨干，并在跨实体大规模机器人数据上预训练，计算和内存开销巨大，在资源受限场景下难以部署。紧凑型 VLA（SmolVLA 等）在参数上做了压缩，但仍然依赖大规模跨实体预训练，且在长 horizon 任务上表现不佳。

ProgVLA 探索一个不同的问题设定：**仅用目标 benchmark 的演示数据、从零训练一个紧凑模型，能否匹配甚至超越大 10 倍的预训练基线？** 特别是在长 horizon 场景下。

设计原则有三：
1. **高效跨模态特征提取**：两阶段 Perceiver 重采样，将视觉、语言、本体感受序列压缩为固定数量的控制 tokens，大幅缩短序列长度。
2. **通用视觉预训练骨干**：使用 DUNE（从多种专业视觉模型蒸馏得到的 ViT-Small），在无机器人数据预训练的情况下提供强视觉先验。联合微调 DUNE 是第二大性能杠杆。
3. **显式进度估计**：轻量级 progress heads 以离线 RL 目标联合学习 critic（$Q$）、value（$\hat{V}$）和 success logit（$\hat{S}$），向策略提供内部任务进度信号，并用 advantage- 和 success-weighted 的方式重新加权流匹配模仿损失。

在 LIBERO 和 Meta-World 两个标准多任务机械臂操控基准上，0.1B 参数的 ProgVLA 与大 10-40 倍的预训练基线相比性能相当；在长 horizon 和更难任务级别上显著超越。消融实验表明，两阶段重采样和任务自适应视觉微调是最大贡献项，进度感知训练在长 horizon 和多物体任务上提供稳定额外增益。真实世界 toy-kitchen 环境也验证了有效性。

---

### 架构分析（重点）

**整体架构**（Fig 1）包含三个核心组件：

#### 3.1 多模态编码器（四阶段设计）

```
原始观测（多摄RGB + 本体感受 + 语言指令）
    ↓
[阶段1] 模态专属编码器
  - DUNE（vision backbone，ViT-Small）→ 视觉特征
  - 冻结 T5 文本编码器 → 语言特征
  - MLP 投影 → 本体感受特征
    ↓
[阶段2] 模态内 Perceiver 重采样
  - 每个模态独立重采样到固定数量 tokens
    ↓
[阶段3] 共享 Transformer
  - 跨模态自注意力融合所有 modality tokens
    ↓
[阶段4] 融合后重采样
  - 最终压缩为 compact control-ready context tokens ct
```

两阶段重采样设计（模态内 + 融合后）比单阶段提供更稳定的训练信号和更强跨模态对齐，是长 horizon 成功的最大单一贡献项。

#### 3.2 动作专家（Flow-Matching）

沿用 SmolVLA 的紧凑流匹配动作专家。条件于 context $\mathbf{c}$ 和真实动作 chunk $\mathbf{A}$，采样噪声 $\boldsymbol{\epsilon} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ 和时间步 $\tau \sim \text{Beta}(\alpha=2, \beta=2)$，形成插值 $\mathbf{y}_\tau = (1-\tau)\mathbf{y}_0 + \tau\mathbf{y}_1$，训练策略 $\pi_\theta$ 预测流向速度：

$$\mathcal{L}_{\text{FM}} = \mathbb{E}_{\tau, \boldsymbol{\epsilon}} \left[ \left\| \pi_\theta(\mathbf{y}_\tau; \tau, \mathbf{c}) - (\mathbf{y}_1 - \boldsymbol{\epsilon}) \right\|_2^2 \right]$$

推理时用 $K=10$ 步 Heun 方法积分流 ODE，执行前几个动作后重新规划（receding-horizon）。

#### 3.3 进度头（离线 RL 启发的 Auxiliary Heads）

**进度目标**（Fig 1 右支）：每条数据都是成功轨迹，终态满足指令。定义规范化进度目标：
$$r_t = \max\left(0, \; 1 - \frac{T - t}{T_M}\right)$$
其中 $T_M = 500$ 是固定 horizon 上限，$r_t \in [0, 1]$ 是纯粹基于轨迹相位的进度信号。

**架构**：context tokens $\mathbf{c}_t$ 分成两路：
1. **$Q$ trunk**：将动作 $a_t$ 通过 MLP 投影后与 context tokens 拼接，通过小 Perceiver pooler 生成 $Q(\mathbf{c}_t, a_t)$
2. **$V$ trunk**：只对 context tokens 做 pooler，生成 $\hat{V}(\mathbf{c}_t)$ 和 $\hat{S}(\mathbf{c}_t)$ 两个标量

两个 head 都回归相同的 MC 目标（无 TD bootstrapping），$Q$ 因条件于 $a_t$ 而 $V$ 边缘化，advantage 信息仍有意义。

**Loss 加权**：用 $Q - V$ 作为 advantage，$\hat{S}$ 作为 success 指示器，两者作为乘法权重作用于 chunk 级流匹配损失，实现 advantage- 和 success-weighted 的模仿学习。

---

### 实验结果

| 数据集 | 任务级别 | 基线（10x 参数）| ProgVLA (0.1B) |
|---|---|---|---|
| LIBERO | 各级别 | 参照 | 相当；长 horizon 超越 |
| Meta-World | 各级别 | 参照 | 相当；更难任务级别超越 |

消融（LIBERO）：
- 移除 progress objectives：长 horizon 显著下降
- 移除融合后重采样：整体下降最明显
- DUNE → DINOv3：下降
- 冻结 DUNE：下降

真实世界 toy-kitchen 环境：验证了 sim-to-real 迁移的有效性。

---

### 创新点

1. **两阶段 Perceiver 重采样**：在模态内和跨模态融合后分别做重采样，比单阶段更有效保留关键跨模态对齐信息，是最长 horizon 成功的最大单一贡献项。

2. **离线 RL 启发的进度头**：区别于以往事后用独立网络做成功检测或奖励塑造，ProgVLA 的 progress heads 与策略共享 context 表征，联合训练，预测结果以乘法权重形式影响模仿学习，实现"内部进度信号驱动策略学习"。

3. **极紧凑参数下不依赖大规模机器人预训练**：仅用目标 benchmark 演示数据，0.1B 参数模型即可匹配甚至超越大 10-40 倍的跨实体预训练模型，在资源受限场景下有重要意义。

4. **流匹配 + 进度加权的联合优化**：将离线 RL 的 value-based 重新加权思想与流匹配动作生成结合，提供了一种新的长 horizon 任务训练策略。

---

### 对具身智能算法工程师的启发

ProgVLA 的核心启示是**压缩 VLA 的方向不止是减少参数量，还包括缩短序列长度和建模时间维度**。两阶段 Perceiver 重采样是目前看到的最有效的序列压缩手段，在实际部署中值得关注。

进度感知训练对于**长 horizon 多步操作任务**（如"把三个物体依次放入对应容器"）特别有价值。传统 VLA 只建模 observation→action 的直接映射，没有显式进度概念，ProgVLA 证明额外引入进度信号可以给长 horizon 带来显著提升。

另外值得关注的是 **DUNE 作为视觉 backbone**——它是从多种专业视觉模型蒸馏得到的，而不是单一数据源预训练，这种"蒸馏聚合"策略在小模型场景下比单源大规模预训练更高效。如果你的场景需要快速适配新相机或新环境，DUNE 类的通用视觉 backbone 可能是比 robot-pretrained visual encoder 更稳定的选择。

最后，**离线 RL 启发的加权策略**（advantage-weighted + success-weighted 流匹配）是一个可以迁移到其他 VLA 训练流程的思想，尤其是在处理长 horizon 任务和稀疏奖励信号时。

---

*本期编辑：Javas 🤖*
*生成时间：2026-06-04*