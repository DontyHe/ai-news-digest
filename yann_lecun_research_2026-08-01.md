# Research Paper Digest - Yann LeCun
**Date**: 2026-08-01
**Source**: arXiv

## Recent Papers

### Paper 1
- **Title**: Music-JEPA: Learning a World Model of Sound from Action
- **Authors**: Ziyu Wang, Kun Fang, Yann LeCun
- **arXiv ID**: 2607.22000v1
- **Published**: 2026-07-24
- **Updated**: 2026-07-24
- **Categories**: cs.SD
- **Abstract**: Joint Embedding Predictive Architectures (JEPA) have recently emerged as a paradigm for learning world models by predicting latent representations, offering a promising direction for self-supervised learning. While initial attempts have applied JEPA to the music domain, it remains unclear how such frameworks can naturally support the formation of a world model for music. In this work, we propose to learn a world model of piano sound using JEPA by framing music as an action-conditioned system: the audio is treated as the state, and the pianoroll as the instrument action. Given a current audio state and an action, the model predicts the resulting future audio state, mirroring how humans learn musical sound through interaction. The model is trained in a fully offline setting using paired audio-pianoroll data, without environment interaction. Experiments show that the learned model captures the relationships between musical actions and their resulting sound. The resulting representations support downstream tasks, including beat tracking, composer identification, and key estimation, and enable piano transcription via planning, by searching for actions that best explain a target sound.
- **URL**: https://arxiv.org/abs/2607.22000v1

### Paper 2
- **Title**: Patch Policy: Efficient Embodied Control via Dense Visual Representations
- **Authors**: Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, Yann LeCun, Lerrel Pinto
- **arXiv ID**: 2607.18236v1
- **Published**: 2026-07-20
- **Updated**: 2026-07-20
- **Categories**: cs.RO, cs.LG
- **Abstract**: Pretrained dense visual features from Vision Transformers (ViTs) are powerful yet have been underutilized in robot learning. Modern robot policies either compress each observation into a single global token, or rely on visual backbones trained from scratch, sacrificing both fine-grained spatial detail and the benefits of large-scale visual pre-training. While there exist policies that do operate on dense patch features like large vision-language-action models (VLAs), they tend to be heavy and slow, inheriting the full cost of a billion-parameter vision-language model (VLM) backbone. We close this gap with Patch Policy, a minimal architectural extension that enables transformer-based policies to consume dense pre-trained patch tokens directly without the computational overhead of a full VLM. At its core is a block-causal attention mask that preserves the temporal causality of standard policies while letting the model attend over many patch tokens per observation, alongside other state information. Patch Policy is lightweight, fast, and highly effective. Across four simulated and three real-world environment suites, our method achieves a 40% relative improvement over policies using state-of-the-art global-pooled representations. Furthermore, it surpasses fine-tuned OpenVLA-OFT by 18% while using roughly 0.7% of the parameters. We believe Patch Policy provides a pipeline for the robotics community to readily leverage continuing progress in visual representation learning, without sacrificing the training efficiency or inference speed required for high-frequency, reactive control. Videos can be viewed at https://patch-policy.github.io
- **URL**: https://arxiv.org/abs/2607.18236v1

### Paper 3
- **Title**: Separating Representation from Reconstruction Enables Scalable Text Encoders
- **Authors**: Megi Dervishi, Mathurin Videau, Yann LeCun
- **arXiv ID**: 2607.04011v1
- **Published**: 2026-07-04
- **Updated**: 2026-07-04
- **Categories**: cs.CL, cs.AI
- **Abstract**: While decoders have rapidly scaled, encoders have remained largely unchanged since BERT. We revisit this disparity by frozen backbone evaluation via probing. Under this lens, the representations of BERT encoders become increasingly $\textit{unexploitable}$ by frozen probes, despite improved perplexity. The misalignment originates in BERT's flat design, which couples representation learning to the token reconstruction loss. We propose $\textbf{CrossBERT}$, a two-part architecture that separates the learning of high-quality encoded representations from the rigid grounding of token reconstruction. This design further enables high masking ratios ($\ge 50\%$) and gradient collection over all tokens via a $\textit{Complementary Masking Strategy}$, respectively increasing throughput by $1.5$ to $2\times$ and sample efficiency by $2\times$. Overall, CrossBERT demonstrates monotonic scaling and superior performance on MTEB(eng, v2) and frozen GLUE benchmarks.
- **URL**: https://arxiv.org/abs/2607.04011v1

### Paper 4
- **Title**: AdaJEPA: An Adaptive Latent World Model
- **Authors**: Ying Wang, Oumayma Bounou, Yann LeCun, Mengye Ren
- **arXiv ID**: 2606.32026v1
- **Published**: 2026-06-30
- **Updated**: 2026-06-30
- **Categories**: cs.LG, cs.AI
- **Abstract**: Latent world models enable planning from high-dimensional observations by predicting future states in a compact latent space. However, these models are typically kept frozen at test time: when their predictions become inaccurate, planning can fail, especially under test-time distribution shift. To address this, we propose AdaJEPA, an adaptive latent world model that performs test-time adaptation within the closed loop of model predictive control (MPC). After training, AdaJEPA plans and executes the first action chunk, uses the observed next-state transition as a self-supervised adaptation signal, and replans with the updated model. This closed-loop update continuously recalibrates the world model without additional expert demonstrations. Across a range of goal-reaching tasks, AdaJEPA substantially improves planning success with as few as one gradient step per MPC replanning step.
- **URL**: https://arxiv.org/abs/2606.32026v1

### Paper 5
- **Title**: SkyJEPA: Learning Long-Horizon World Models for Zero-Shot Sim-to-Real Control of Quadrotors
- **Authors**: Pratyaksh Rao, Wancong Zhang, Randall Balestriero, Yann LeCun, Giuseppe Loianno
- **arXiv ID**: 2606.23444v2
- **Published**: 2026-06-22
- **Updated**: 2026-06-23
- **Categories**: cs.RO, cs.LG
- **Comment**: Under Review
- **Abstract**: Accurate dynamics models are critical for informed decision-making in robotic systems, particularly for agile aerial vehicles operating under uncertainty. Neural network dynamics models are attractive for capturing complex nonlinear effects, but existing predictive approaches struggle with long-horizon forecasting because their autoregressive rollout mechanism amplifies errors over time. Joint Embedding Predictive Architectures (JEPAs) offer a compelling alternative by modeling dynamics in latent space, yet prior JEPA-style methods for robot navigation have been studied primarily for kinematic-level planning, with limited investigation in high-frequency control. In this work, we introduce the JEPA-style model for real-time quadrotor control. The proposed approach combines a latent dynamics model with a novel physics-inspired prober that maps frozen latents to interpretable state, enabling physically grounded long-horizon prediction. Additionally, we combine the learned model with a sampling-based optimal control solution to take advantage of its predictive capabilities for real-time control on embedded hardware. Finally, to reduce the dependence on expensive and unsafe real-world data collection, we develop a structured pipeline for automated dataset generation. Extensive open-loop and outdoor closed-loop experiments demonstrate accurate prediction, robust zero-shot sim-to-real transfer, and strong generalization across diverse operating conditions.
- **URL**: https://arxiv.org/abs/2606.23444v2

### Paper 6
- **Title**: S-JEPA : Soft Clustering Anchors for Self-Supervised Speech Representation Learning
- **Authors**: Georgios Ioannides, Adrian Kieback, Judah Goldfeder, Linsey Pang, Aman Chadha, Aaron Elkins, Yann LeCun, Ravid Shwartz-Ziv
- **arXiv ID**: 2606.19398v1
- **Published**: 2026-06-17
- **Updated**: 2026-06-17
- **Categories**: cs.SD, eess.AS, eess.SP
- **Abstract**: Self-supervised speech encoders are predominantly trained by predicting discrete hard cluster IDs at masked positions, a recipe that collapses acoustic ambiguity at category boundaries and requires interrupting training to re-cluster the entire corpus between iterations. We introduce S-JEPA, a JEPA-style encoder-predictor pair trained to match the soft posteriors of a Gaussian Mixture Model at masked positions via KL divergence. Training runs as one continuous optimization trajectory in two phases: a fixed GMM over MFCC features, then an online GMM over encoder features, with the input layer selected adaptively from a label-free signal, removing both the offline re-cluster step and the hand-tuned choice of which transformer layer to cluster on. Under the SUPERB protocol, S-JEPA achieves the lowest WER among evaluated SSL methods below 90M parameters and matches HuBERT-Base on emotion recognition at roughly half its parameter count, establishing a new Pareto frontier without offline re-clustering or teacher distillation. An analysis of the predictor's per-frame entropy on held-out speech reveals a bimodal distribution with a substantial minority of frames near the entropy of a perfect two-cluster tie, providing direct empirical evidence that the soft-target objective preserves the acoustic ambiguity that hard targets would collapse. Code is available at https://github.com/gioannides/s-jepa.
- **URL**: https://arxiv.org/abs/2606.19398v1

### Paper 7
- **Title**: You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences
- **Authors**: Ninad Daithankar, Alexi Gladstone, Yann LeCun, Heng Ji
- **arXiv ID**: 2606.15956v1
- **Published**: 2026-06-14
- **Updated**: 2026-06-14
- **Categories**: cs.CV, cs.AI, cs.LG
- **Abstract**: Progress in AI has largely been driven by methods that assume less. As compute and data increase, approaches with weaker inductive biases generally outperform those with stronger assumptions. This is particularly characteristic of the field of Visual Representation Learning, where approaches have gone from being dominated by Supervised Learning, to Weakly Supervised Learning, to the now widespread success of Self-Supervised Learning without human labels. Yet, even modern Self-Supervised Learning approaches still depend on strong inductive biases such as augmentations, masking, or cropping. If this trend holds, even these remaining biases should become bottlenecks at scale -- and our experiments confirm this: the optimal strength of inductive biases decreases as data grows. This motivates the search for approaches that rely on fewer assumptions. To this end, we introduce Temporal Difference in Vision (TDV), a new paradigm for self-supervised learning from video that avoids existing inductive biases, relying instead on a causal assumption that the past causes the future. TDV functions by jointly training an image encoder and a motion encoder so that the current frame's representation plus the encoded motion equals the next frame's representation. Despite not leveraging any strong inductive biases, TDV matches state-of-the-art recipes on dense spatial tasks, laying the foundation for representation learning without strong assumptions.
- **URL**: https://arxiv.org/abs/2606.15956v1

### Paper 8
- **Title**: Unifying Object-Centric World Models and Diffusion Policy: A Hierarchical Framework for Multi-Stage Robotic Tasks
- **Authors**: Raktim Gautam Goswami, Prashanth Krishnamurthy, Yann LeCun, Farshad Khorrami
- **arXiv ID**: 2606.08775v1
- **Published**: 2026-06-07
- **Updated**: 2026-06-07
- **Categories**: cs.RO, cs.AI
- **Abstract**: Visual world models have shown great potential in learning complex system dynamics. Recent advancements leverage these models as transition functions within Model Predictive Control (MPC) frameworks to solve various control tasks. When applied to robotics, however, they are limited to single-stage tasks such as reaching or grasping, and struggle with multi-stage ones that demand complex sequential planning. In this work, we introduce WorldDP, a world model framework designed for multi-stage robotic manipulation. Our hierarchical approach utilizes a high-level world model as a transition function to optimize for feasible subgoals during runtime, which are subsequently reached by a low-level Diffusion Policy. To further aid in learning dynamics and planning, we incorporate object-centric representations that decouple environmental entities and enable us to plan sequentially with respect to each. Evaluated across several robotics benchmarks, WorldDP consistently outperforms existing baselines, validating that coupling the world model's physically grounded planning with diffusion policy's efficient execution yields superior multi-stage performance.
- **URL**: https://arxiv.org/abs/2606.08775v1

### Paper 9
- **Title**: When Does LeJEPA Learn a World Model?
- **Authors**: David Klindt, Yann LeCun, Randall Balestriero
- **arXiv ID**: 2605.26379v1
- **Published**: 2026-05-25
- **Updated**: 2026-05-25
- **Categories**: stat.ML, cs.LG
- **Abstract**: A representation that scrambles the true degrees of freedom of the world cannot support reliable planning or compositional generalization. We prove that LeJEPA (alignment plus Gaussian regularization) linearly recovers the world's latent variables from nonlinear observations, a property known as linear identifiability, in a broad class of worlds where latents evolve under stationary, additive-noise transitions. Our main result is that among all such worlds, the Gaussian is the unique latent distribution for which this guarantee holds. The forward direction rests on a spectral decomposition in which each degree of nonlinearity is strictly penalized by alignment, making the linear map the optimum; the converse rules out every non-Gaussian alternative. We further prove an approximate identifiability result where the guarantee degrades gracefully, and show that linear, orthogonal identifiability enables optimal latent-space planning. We validate the theory with experiments ranging from 2D examples to 1024-dimensional latents, including distributional ablations and pixel-based robotic control. Our theory turns an empirically successful recipe into a mathematical guarantee, providing the foundation for building World Models that provably recover the structure of the world.
- **URL**: https://arxiv.org/abs/2605.26379v1

### Paper 10
- **Title**: stable-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation
- **Authors**: Lucas Maes, Quentin Le Lidec, Luiz Facury, Nassim Massaudi, Ayush Chaurasia, Francesco Capuano, Richard Gao, Taj Gillin, Dan Haramati, Damien Scieur, Yann LeCun, Randall Balestriero
- **arXiv ID**: 2605.21800v1
- **Published**: 2026-05-20
- **Updated**: 2026-05-20
- **Categories**: cs.LG, cs.RO
- **Abstract**: World models are central to building agents that can reason, plan, and generalize beyond their training data. However, research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison. Current practice is further limited by three key bottlenecks: fragile one-off codebases, slow video data loading, and the lack of standardized generalization benchmarks. We present stable-worldmodel (swm), an open-source platform for standardized and reproducible world modeling research and evaluation. It delivers (1) a high-performance Lance-based data layer with native support and conversion tools for MP4, HDF5, and LeRobot datasets, (2) clean, well-tested implementations of modern world model baselines and planning solvers, and (3) a broad suite of environments and tasks extended with controllable visual, geometric, and physical factors of variation for systematic in-silico evaluation of dynamics understanding, control performance, representation quality, and out-of-distribution generalization. By unifying the full pipeline under a single, scalable framework, \texttt{swm} dramatically reduces research overhead and accelerates trustworthy progress toward reliable world models.
- **URL**: https://arxiv.org/abs/2605.21800v1

---
*Fetched at: 2026-08-01T08:05:00+08:00*