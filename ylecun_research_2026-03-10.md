# Yann LeCun Research Papers - 2026-03-10

## March 2026

### 1. The Spike, the Sparse and the Sink: Anatomy of Massive Activations and Attention Sinks
- **arXiv**: [2603.08993](https://arxiv.org/abs/2603.08993)
- **Authors**: Shangwen Sun, Alfredo Canziani, Yann LeCun, Jiachen Zhu
- **Abstract**: We study two recurring phenomena in Transformer language models: massive activations, in which a small number of tokens exhibit extreme outliers in a few channels, and attention sinks, in which certain tokens attract disproportionate attention mass regardless of semantic relevance. Prior work observes that these phenomena frequently co-occur and often involve the same tokens, but their functional understanding remains limited.

### 2. AI+HW 2035: Shaping the Next Decade
- **arXiv**: [2603.02612](https://arxiv.org/abs/2603.02612)
- **Authors**: Deming Chen, Jason Cong, Azalia Mirhoseini, Christos Kozyrakis, Subhasish Mitra, Jinjun Xiong, Cliff Young, Anima Anandkumar, Michael Littman, Yann LeCun, et al.
- **Abstract**: Artificial intelligence (AI) and hardware (HW) are advancing at unprecedented rates, yet their trajectories have become inseparably intertwined. The global research community lacks a cohesive, long-term vision to strategically coordinate the development of AI and HW.

### 3. Beyond Language Modeling: An Exploration of Multimodal Pretraining
- **arXiv**: [2603.02819](https://arxiv.org/abs/2603.02819)
- **Authors**: Shengbang Tong, David Fan, John Nguyen, Ellis Brown, Gaoyue Zhou, Shengyi Qian, Boyang Zheng, Théophane Vallaeys, Junlin Han, Rob Fergus, Naila Murray, Yann LeCun, Saining Xie
- **Abstract**: The visual world offers a critical axis for advancing foundation models beyond language. Despite growing interest in this direction, the design space for native multimodal models remains opaque. We provide empirical clarity through controlled, from-scratch pretraining experiments, isolating the factors that govern multimodal pretraining without interference from language pretraining.

## February 2026

### 4. AI Must Embrace Specialization via Superhuman Adaptable Intelligence
- **arXiv**: [2602.12906](https://arxiv.org/abs/2602.12906)
- **Authors**: Judah Goldfeder, Philippe Wyder, Yann LeCun, Ravid Shwartz Ziv
- **Abstract**: Everyone from AI executives and researchers to doomsayers, politicians, and activists is talking about Artificial General Intelligence (AGI). Yet, they often don't seem to agree on its exact definition. One common definition of AGI is an AI that can do everything a human can do, but are humans truly general? In this paper, we address what's wrong with our conception of AGI.

### 5. Semantic Tube Prediction: Beating LLM Data Efficiency with JEPA
- **arXiv**: [2602.12907](https://arxiv.org/abs/2602.12907)
- **Authors**: Yann LeCun, et al.
- **Abstract**: Large Language Models (LLMs) obey consistent scaling laws -- empirical power-law fits that predict how loss decreases with compute, data, and parameters. Surprisingly few works have successfully challenged the data-efficiency bounds implied by these laws.

### 6. Radial-VCReg: More Informative Representation Learning Through Radial Gaussianization
- **arXiv**: [2602.08791](https://arxiv.org/abs/2602.08791)
- **Authors**: Yilun Kuang, Yash Dagade, Deep Chakraborty, Erik Learned-Miller, Randall Balestriero, Tim G. J. Rudner, Yann LeCun
- **Abstract**: Self-supervised learning aims to learn maximally informative representations, but explicit information maximization is hindered by the curse of dimensionality. We propose Radial-VCReg, which augments VCReg with a radial Gaussianization loss that aligns features to a spherical distribution.

### 7. Causal-JEPA: Learning World Models through Object-Level Latent Interventions
- **arXiv**: [2602.05972](https://arxiv.org/abs/2602.05972)
- **Authors**: Heejeong Nam, Quentin Le Lidec, Lucas Maes, Yann LeCun, Randall Balestriero
- **Abstract**: World models require robust relational understanding to support prediction, reasoning, and control. While object-centric representations provide a useful abstraction, they are not sufficient to capture interaction-dependent dynamics. We therefore propose C-JEPA, a simple and flexible object-centric world model that extends masked joint embedding prediction from image patches to object-centric representations.

### 8. stable-worldmodel-v1: Reproducible World Modeling Research and Evaluation
- **arXiv**: [2602.10266](https://arxiv.org/abs/2602.10266)
- **Authors**: Lucas Maes, Quentin Le Lidec, Nassim Massaudi, Damien Scieur, Yann LeCun, Randall Balestriero
- **Abstract**: World Models have emerged as a powerful paradigm for learning compact, predictive representations of environment dynamics, enabling agents to reason, plan, and generalize beyond direct experience.

### 9. A Lightweight Library for Energy-Based Joint-Embedding Predictive Architectures
- **arXiv**: [2602.03282](https://arxiv.org/abs/2602.03282)
- **Authors**: Basile Terver, Randall Balestriero, Megi Dervishi, David Fan, Quentin Garrido, Tushar Nagarajan, Koustuv Sinha, Wancong Zhang, Mike Rabbat, Yann LeCun, Amir Bar
- **Abstract**: We present EB-JEPA, an open-source library for learning representations and world models using Joint-Embedding Predictive Architectures (JEPAs). JEPAs learn to predict in representation space rather than pixel space, avoiding the pitfalls of generative modeling while capturing semantically meaningful features suitable for downstream tasks.

### 10. Rectified LpJEPA: Joint-Embedding Predictive Architectures with Sparse and Maximum-Entropy Representations
- **arXiv**: [2602.00772](https://arxiv.org/abs/2602.00772)
- **Authors**: Yilun Kuang, Yash Dagade, Tim G. J. Rudner, Randall Balestriero, Yann LeCun
- **Abstract**: Joint-Embedding Predictive Architectures (JEPA) learn view-invariant representations and admit projection-based distribution matching for collapse prevention. Existing approaches regularize representations towards isotropic Gaussian distributions, but inherently favor dense representations and fail to capture the key property of sparsity observed in efficient representations.

### 11. Parallel Stochastic Gradient-Based Planning for World Models
- **arXiv**: [2601.09579](https://arxiv.org/abs/2601.09579)
- **Authors**: Michael Psenka, Michael Rabbat, Aditi Krishnapriyan, Yann LeCun, Amir Bar
- **Abstract**: World models simulate environment dynamics from raw sensory inputs like video. However, using them for planning can be challenging due to the vast and unstructured search space. We propose a robust and highly parallelizable planner that leverages the differentiability of the learned world model for efficient optimization.

## January 2026

### 12. Scaling Text-to-Image Diffusion Transformers with Representation Autoencoders
- **arXiv**: [2601.06379](https://arxiv.org/abs/2601.06379)
- **Authors**: Shengbang Tong, Boyang Zheng, Ziteng Wang, Bingda Tang, Nanye Ma, Ellis Brown, Jihan Yang, Rob Fergus, Yann LeCun, Saining Xie
- **Abstract**: Representation Autoencoders (RAEs) have shown distinct advantages in diffusion modeling on ImageNet by training in high-dimensional semantic latent spaces. In this work, we investigate whether this framework can scale to large-scale, freeform text-to-image (T2I) generation.

### 13. Learning Latent Action World Models In The Wild
- **arXiv**: [2601.02172](https://arxiv.org/abs/2601.02172)
- **Authors**: Quentin Garrido, Tushar Nagarajan, Basile Terver, Nicolas Ballas, Yann LeCun, Michael Rabbat
- **Abstract**: Agents capable of reasoning and planning in the real world require the ability of predicting the consequences of their actions. While world models possess this capability, they most often require action labels, that can be complex to obtain at scale. This motivates the learning of latent action models, that can learn an action space from videos alone.

### 14. Value-guided action planning with JEPA world models
- **arXiv**: [2512.18508](https://arxiv.org/abs/2512.18508)
- **Authors**: Matthieu Destrade, Oumayma Bounouar, Quentin Le Lidec, Jean Ponce, Yann LeCun
- **Abstract**: Building deep learning models that can reason about their environment requires capturing its underlying dynamics. Joint-Embedded Predictive Architectures (JEPA) provide a promising framework to model such dynamics by learning representations and predictors through a self-supervised prediction objective.

### 15. What Drives Success in Physical Planning with Joint-Embedding Predictive World Models?
- **arXiv**: [2601.00956](https://arxiv.org/abs/2601.00956)
- **Authors**: Basile Terver, Tsung-Yen Yang, Jean Ponce, Adrien Bardes, Yann LeCun
- **Abstract**: A long-standing challenge in AI is to develop agents capable of solving a wide range of physical tasks and generalizing to new, unseen tasks and environments.
