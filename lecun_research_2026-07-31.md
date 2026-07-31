# Research Paper Digest - Yann LeCun
**Date**: 2026-07-31
**Source**: arXiv

## Recent Papers

### Paper 1
- **Title**: Music-JEPA: Learning a World Model of Sound from Action
- **Authors**: Ziyu Wang, Kun Fang, Yann LeCun
- **arXiv ID**: 2607.22000
- **Date**: 2026-07-24
- **Abstract**: Joint Embedding Predictive Architectures (JEPA) have recently emerged as a paradigm for learning world models by predicting latent representations, offering a promising direction for self-supervised learning. While initial attempts have applied JEPA to the music domain, it remains unclear how such frameworks can naturally support the formation of a world model for music. In this work, we propose Music-JEPA, which learns a world model of sound by predicting latent representations conditioned on actions, enabling compositional understanding and generation of music.
- **URL**: https://arxiv.org/abs/2607.22000

### Paper 2
- **Title**: Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **Authors**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, Yann LeCun, Lerrel Pinto
- **arXiv ID**: 2607.18236
- **Date**: 2026-07-20
- **Abstract**: Pretrained dense visual features from Vision Transformers (ViTs) are powerful yet have been underutilized in robot learning. Modern robot policies either compress each observation into a single global token, or rely on visual backbones trained from scratch, sacrificing both fine-grained spatial detail and the benefits of large-scale visual pre-training. While there exist policies that do operate on dense features, they typically use all tokens equally, ignoring the spatial structure. We propose Patch Policy, which efficiently leverages dense visual representations for embodied control by exploiting the spatial structure of ViT patch tokens.
- **URL**: https://arxiv.org/abs/2607.18236

### Paper 3
- **Title**: Separating Representation from Reconstruction Enables Scalable Text Encoders
- **Authors**: Megi Dervishi, Mathurin Videau, Yann LeCun
- **arXiv ID**: 2607.04011
- **Date**: 2026-07-04
- **Abstract**: While decoders have rapidly scaled, encoders have remained largely unchanged since BERT. We revisit this disparity by frozen backbone evaluation via probing. Under this lens, the representations of BERT encoders become increasingly unexploitable by frozen probes, despite improved perplexity. The misalignment originates in BERT's flat design, which couples representation learning to the reconstruction objective. We propose separating representation learning from reconstruction, enabling scalable text encoders that produce more transferable representations.
- **URL**: https://arxiv.org/abs/2607.04011

### Paper 4
- **Title**: AdaJEPA: An Adaptive Latent World Model
- **Authors**: Ying Wang, Oumayma Bounou, Yann LeCun, Mengye Ren
- **arXiv ID**: 2606.32026
- **Date**: 2026-06-30
- **Abstract**: Latent world models enable planning from high-dimensional observations by predicting future states in a compact latent space. However, these models are typically kept frozen at test time: when their predictions become inaccurate, planning can fail, especially under test-time distribution shift. To address this, we propose AdaJEPA, an adaptive latent world model that performs test-time adaptation to maintain accurate predictions in changing environments, enabling robust long-horizon planning.
- **URL**: https://arxiv.org/abs/2606.32026

### Paper 5
- **Title**: SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **Authors**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, Yann LeCun, Giuseppe Loianno
- **arXiv ID**: 2606.23444
- **Date**: 2026-06-22
- **Abstract**: Accurate dynamics models are critical for informed decision-making in robotic systems, particularly for agile aerial vehicles operating under uncertainty. Neural network dynamics models are attractive for capturing complex nonlinear effects, but existing predictive approaches struggle with long-horizon forecasting because their autoregressive rollout mechanism amplifies errors over time. Joint Embedding Predictive Architectures (JEPA) address this by predicting in latent space. We apply this to quadrotor control, demonstrating zero-shot sim-to-real transfer for long-horizon tasks.
- **URL**: https://arxiv.org/abs/2606.23444
- **Note**: Under Review

### Paper 6
- **Title**: S-JEPA: Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **Authors**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, Yann LeCun, Ravid Shwartz-Ziv
- **arXiv ID**: 2606.19398
- **Date**: 2026-06-17
- **Abstract**: Self-supervised speech encoders are predominantly trained by predicting discrete hard cluster IDs at masked positions, a recipe that collapses acoustic ambiguity at category boundaries and requires interrupting training to re-cluster the entire corpus between iterations. We introduce S-JEPA, a JEPA-style encoder-predictor pair trained to match the soft posteriors of a Gaussian Mixture Model at masked positions, enabling continuous learning without disruptive re-clustering steps.
- **URL**: https://arxiv.org/abs/2606.19398

### Paper 7
- **Title**: You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **Authors**: Ninad Daithankar, Alexi Gladstone, Yann LeCun, Heng Ji
- **arXiv ID**: 2606.15956
- **Date**: 2026-06-14
- **Abstract**: Progress in AI has largely been driven by methods that assume less. As compute and data increase, approaches with weaker inductive biases generally outperform those with stronger assumptions. This is particularly characteristic of the field of Visual Representation Learning, where approaches have gone from being dominated by Supervised Learning, to Weakly Supervised Learning, to the now widespread Self-Supervised Learning. We propose a temporal difference learning approach for visual representation learning that requires minimal assumptions while achieving competitive performance.
- **URL**: https://arxiv.org/abs/2606.15956

### Paper 8
- **Title**: Unifying Object-Centric World Models and Diffusion Policy: A Hierarchical Framework for Multi-Stage Robotic Tasks
- **Authors**: Raktim Gautam Goswami, Prashanth Krishnamurthy, Yann LeCun, Farshad Khorrami
- **arXiv ID**: 2606.08775
- **Date**: 2026-06-07
- **Abstract**: Visual world models have shown great potential in learning complex system dynamics. Recent advancements leverage these models as transition functions within Model Predictive Control (MPC) frameworks to solve various control tasks. When applied to robotics, however, they are limited to single-stage tasks such as reaching or grasping, and struggle with multi-stage ones that demand complex sequential planning. We propose a hierarchical framework that unifies object-centric world models with diffusion policies for multi-stage robotic task execution.
- **URL**: https://arxiv.org/abs/2606.08775

### Paper 9
- **Title**: When Does LeJEPA Learn a World Model?
- **Authors**: David Klindt, Yann LeCun, Randall Balestriero
- **arXiv ID**: 2605.26379
- **Date**: 2026-05-25
- **Abstract**: A representation that scrambles the true degrees of freedom of the world cannot support reliable planning or compositional generalization. We prove that LeJEPA (alignment plus Gaussian regularization) linearly recovers the world's latent variables from nonlinear observations, a property known as linear identifiability, in a broad class of worlds where latents evolve under stationary, additive-noise dynamics. This provides theoretical grounding for when JEPA-style world models successfully learn compositional representations.
- **URL**: https://arxiv.org/abs/2605.26379

### Paper 10
- **Title**: stable-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation
- **Authors**: Lucas Maes, Quentin Le Lidec, Luiz Facury, Nassim Massaudi, Ayush Chaurasia, Francesco Capuano, Richard Gao, Taj Gillin, Dan Haramati, Damien Scieur, Yann LeCun, Randall Balestriero
- **arXiv ID**: 2605.21800
- **Date**: 2026-05-20
- **Abstract**: World models are central to building agents that can reason, plan, and generalize beyond their training data. However, research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison. Current practice is further limited by fragile one-off codebases, slow video data loading, and inconsistent evaluation. We introduce stable-worldmodel, a unified platform for reproducible world modeling research with standardized benchmarks, data loaders, and evaluation protocols.
- **URL**: https://arxiv.org/abs/2605.21800
