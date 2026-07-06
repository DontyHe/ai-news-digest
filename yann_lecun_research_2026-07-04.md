# Yann LeCun - Research Digest
**Date**: 2026-07-04
**Status**: No new papers since last check (2026-06-27). SkyJEPA updated to v2 on 2026-06-23.

## Recent Papers (Latest Updates)

### 1. SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors (Updated v2, Jun 23)
- **arXiv**: 2606.23444v2
- **Published**: 2026-06-22, updated 2026-06-23
- **Authors**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, **Yann LeCun**, Giuseppe Loianno
- **Categories**: cs.RO, cs.LG
- **Summary**: JEPA-style real-time quadrotor control. Combines latent dynamics model with physics-inspired prober for zero-shot sim-to-real transfer. Real-time control on embedded hardware.
- **Link**: https://arxiv.org/abs/2606.23444v2
- **Status**: Under Review

### 2. S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **arXiv**: 2606.19398v1
- **Published**: 2026-06-17
- **Authors**: Georgios Ioannides, Adrian Kieback, ..., **Yann LeCun**, Ravid Shwartz-Ziv
- **Categories**: cs.SD, eess.AS, eess.SP
- **Summary**: JEPA encoder-predictor matching GMM soft posteriors via KL divergence. Two-phase training: fixed GMM over MFCC, then online GMM over encoder features. Lowest WER among SSL methods <90M params. Matches HuBERT-Base on emotion recognition at half the parameters.
- **Link**: https://arxiv.org/abs/2606.19398v1
- **Code**: https://github.com/gioannides/s-jepa

### 3. You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **arXiv**: 2606.15956v1
- **Published**: 2026-06-14
- **Authors**: Ninad Daithankar, Alexi Gladstone, **Yann LeCun**, Heng Ji
- **Categories**: cs.CV, cs.AI, cs.LG
- **Summary**: TDV (Temporal Difference in Vision) - new self-supervised paradigm from video using only "past causes future" causal assumption. No augmentations, masking, or cropping. Jointly trains image encoder + motion encoder. Matches SOTA on dense spatial tasks.
- **Link**: https://arxiv.org/abs/2606.15956v1

### 4. WorldDP: Unifying Object-Centric World Models and Diffusion Policy
- **arXiv**: 2606.08775v1
- **Published**: 2026-06-07
- **Authors**: Raktim Gautam Goswami, Prashanth Krishnamurthy, **Yann LeCun**, Farshad Khorrami
- **Categories**: cs.RO, cs.AI
- **Summary**: Hierarchical framework for multi-stage robotic manipulation. High-level world model optimizes subgoals, low-level Diffusion Policy executes. Object-centric representations for sequential planning.
- **Link**: https://arxiv.org/abs/2606.08775v1

### 5. When Does LeJEPA Learn a World Model?
- **arXiv**: 2605.26379v1
- **Published**: 2026-05-25
- **Authors**: David Klindt, **Yann LeCun**, Randall Balestriero
- **Categories**: stat.ML, cs.LG
- **Summary**: Proves LeJEPA linearly recovers world's latent variables from nonlinear observations. Gaussian is the unique latent distribution for this guarantee. Validated on 2D examples to 1024-dimensional latents including robotic control.
- **Link**: https://arxiv.org/abs/2605.26379v1

### 6. stable-worldmodel: Platform for Reproducible World Modeling
- **arXiv**: 2605.21800v1
- **Published**: 2026-05-20
- **Authors**: Lucas Maes, Quentin Le Lidec, ..., **Yann LeCun**, Randall Balestriero
- **Categories**: cs.LG, cs.RO
- **Summary**: Open-source platform with Lance-based data layer, modern world model baselines, and standardized evaluation across environments. Supports MP4, HDF5, LeRobot datasets.
- **Link**: https://arxiv.org/abs/2605.21800v1

### 7. Crys-JEPA: Accelerating Crystal Discovery via Embedding Screening
- **arXiv**: 2605.14759v2
- **Published**: 2026-05-14, updated 2026-05-25
- **Authors**: Nian Liu, ..., Thomas Laurent, **Yann LeCun**, Kostya S. Novoselov, Xavier Bresson
- **Categories**: cs.LG
- **Summary**: JEPA for crystal generation. Energy-aware latent space for stability assessment. Screening-and-refinement pipeline. 53.8% and 72.7% improvements on V.S.U.N. metric for MP-20 and Alex-MP-20.
- **Link**: https://arxiv.org/abs/2605.14759v2
