# Yann LeCun - Research Papers
**Date**: 2026-03-17
**Source**: arXiv

## Recent Papers (2026)

### 1. Representation Learning for Spatiotemporal Physical Systems
- **Date**: 2026-03-13
- **Link**: https://arxiv.org/abs/2603.13227
- **Authors**: Helen Qu, Rudy Morel, Michael McCabe, Alberto Bietti, François Lanusse, Shirley Ho, Yann LeCun
- **Abstract**: Evaluates self-supervised methods for learning physics-grounded representations. Methods learning in latent space (e.g., JEPAs) outperform those optimizing pixel-level prediction. Published at ICLR 2026 Workshop on AI & PDE.

### 2. Temporal Straightening for Latent Planning
- **Date**: 2026-03-12
- **Link**: https://arxiv.org/abs/2603.12231
- **Authors**: Ying Wang, Oumayma Bounou, Gaoyue Zhou, Randall Balestriero, Tim G. J. Rudner, Yann LeCun, Mengye Ren
- **Abstract**: Introduces temporal straightening for world model latent planning. Uses curvature regularizer encouraging locally straightened latent trajectories, making Euclidean distance better proxy for geodesic distance. Significantly improves gradient-based planning success rates.

### 3. The Spike, the Sparse and the Sink: Anatomy of Massive Activations and Attention Sinks
- **Date**: 2026-03-05
- **Link**: https://arxiv.org/abs/2603.05498
- **Authors**: Shangwen Sun, Alfredo Canziani, Yann LeCun, Jiachen Zhu
- **Abstract**: Studies massive activations and attention sinks in Transformer LMs. Shows co-occurrence is an architectural artifact of modern Transformer design (pre-norm). Massive activations function as implicit parameters globally; attention sinks bias heads toward short-range dependencies locally.

### 4. AI+HW 2035: Shaping the Next Decade
- **Date**: 2026-03-05
- **Link**: https://arxiv.org/abs/2603.05225
- **Authors**: Deming Chen, Jason Cong, Azalia Mirhoseini, Christos Kozyrakis, Yann LeCun, et al.
- **Abstract**: Vision paper laying out 10-year roadmap for AI+HW co-design. Goal: 1000x improvement in efficiency for AI training/inference, energy-aware self-optimizing systems spanning cloud/edge/physical AI. Calls for coordinated national initiatives and public-private partnerships.

### 5. Beyond Language Modeling: An Exploration of Multimodal Pretraining
- **Date**: 2026-03-03
- **Link**: https://arxiv.org/abs/2603.03276
- **Authors**: Shengbang Tong, David Fan, John Nguyen, Ellis Brown, Gaoyue Zhou, et al., Yann LeCun, Saining Xie
- **Abstract**: From-scratch multimodal pretraining using Transfusion (next-token for language, diffusion for vision). Key findings: RAE provides optimal unified visual representation; visual+language data are complementary; MoE harmonizes scaling asymmetry between modalities. Uncovers scaling laws showing vision is more data-hungry than language.

### 6. AI Must Embrace Specialization via Superhuman Adaptable Intelligence
- **Date**: 2026-02-26
- **Link**: https://arxiv.org/abs/2602.23643
- **Authors**: Judah Goldfeder, Philippe Wyder, Yann LeCun, Ravid Shwartz Ziv
- **Abstract**: Argues AGI is a flawed concept. Introduces SAI (Superhuman Adaptable Intelligence): intelligence that can exceed humans at anything important and fill gaps where humans are incapable. AI should embrace specialization, not strive for generality.

### 7. Semantic Tube Prediction: Beating LLM Data Efficiency with JEPA
- **Date**: 2026-02-25
- **Link**: https://arxiv.org/abs/2602.22617
- **Authors**: Hai Huang, Yann LeCun, Randall Balestriero
- **Abstract**: Proposes Semantic Tube Prediction (STP), a JEPA-style regularizer confining hidden-state trajectories to tubular neighborhoods of geodesics on a semantic manifold. STP allows LLMs to match baseline accuracy with 16x less training data, directly violating Chinchilla-style scaling laws.

### 8. Causal-JEPA: Learning World Models through Object-Level Latent Interventions
- **Date**: 2026-02-11
- **Link**: https://arxiv.org/abs/2602.11389
- **Authors**: Heejeong Nam, Quentin Le Lidec, Lucas Maes, Yann LeCun, Randall Balestriero
- **Abstract**: Extends masked JEPA to object-centric representations. Object-level masking induces latent interventions with counterfactual-like effects. ~20% absolute improvement in counterfactual reasoning VQA; uses only 1% of latent features for planning vs patch-based models. Formal proof of causal inductive bias.

### 9. Radial-VCReg: More Informative Representation Learning Through Radial Gaussianization
- **Date**: 2026-02-15
- **Link**: https://arxiv.org/abs/2602.14272
- **Authors**: Yilun Kuang, Yash Dagade, Deep Chakraborty, Erik Learned-Miller, Randall Balestriero, Tim G. J. Rudner, Yann LeCun
- **Abstract**: Augments VCReg with radial Gaussianization loss aligning feature norms with Chi distribution. Proves it transforms broader class of distributions towards normality. Consistently improves performance by reducing higher-order dependencies.

### 10. stable-worldmodel-v1: Reproducible World Modeling Research and Evaluation
- **Date**: 2026-02-17
- **Link**: https://arxiv.org/abs/2602.08968
- **Authors**: Lucas Maes, Quentin Le Lidec, Dan Haramati, Nassim Massaudi, Damien Scieur, Yann LeCun, Randall Balestriero
- **Abstract**: Introduces stable-worldmodel (SWM), a modular world-model research ecosystem with standardized environments, planning algorithms, and baselines. Supports controllable factors of variation for robustness/continual learning research.

### 11. EB-JEPA: A Lightweight Library for Energy-Based Joint-Embedding Predictive Architectures
- **Date**: 2026-02-06
- **Link**: https://arxiv.org/abs/2602.03604
- **Authors**: Basile Terver, Randall Balestriero, Megi Dervishi, David Fan, et al., Yann LeCun, Amir Bar
- **Abstract**: Open-source library for JEPA-based representation learning and world models. From CIFAR-10 (91% probing accuracy) to video prediction (Moving MNIST) to action-conditioned world models (97% planning success on Two Rooms). Single-GPU, few-hour training.

### 12. GMM-Anchored JEPA for Self-Supervised Speech Representation Learning
- **Date**: 2026-01-30
- **Link**: https://arxiv.org/abs/2602.09040
- **Authors**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, et al., Yann LeCun, Ravid Shwartz-Ziv
- **Abstract**: Fits GMM once on log-mel spectrograms, uses frozen soft posteriors as auxiliary JEPA targets. No iterative re-clustering needed. Improves ASR (28.68% vs 33.22% WER), emotion recognition, slot filling vs WavLM baseline. 98% cluster entropy vs 31% for WavLM.

---
*Auto-generated by Javas Daily Tracker*
