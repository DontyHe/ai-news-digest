# Yann LeCun - Research Digest
**Date**: 2026-06-22

## Recent Papers

### 1. LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels
- **Authors**: Lucas Maes, Quentin Le Lidec, Damien Scieur, Yann LeCun, Randall Balestriero
- **Affiliations**: Mila & Universite de Montreal, NYU, Samsung SAIL, Brown University
- **arXiv**: https://arxiv.org/abs/2603.19312 (March 2026)
- **Summary**: First JEPA that trains stably end-to-end from raw pixels using only two loss terms (next-embedding prediction loss + Gaussian regularizer). Reduces tunable loss hyperparameters from six to one compared to existing alternatives. With 15M parameters trainable on a single GPU in a few hours, plans up to 48x faster than foundation-model-based world models while remaining competitive across diverse 2D and 3D control tasks. Latent space encodes meaningful physical structure through probing and surprise evaluation.

### 2. When Does LeJEPA Learn a World Model?
- **Authors**: David Klindt, Yann LeCun, Randall Balestriero
- **Affiliations**: Cold Spring Harbor Laboratory, NYU, Brown University
- **arXiv**: https://arxiv.org/abs/2605.26379 (May 2026)
- **Summary**: Proves that LeJEPA (alignment plus Gaussian regularization) linearly recovers the world's latent variables from nonlinear observations (linear identifiability) in a broad class of worlds where latents evolve under stationary, additive-noise transitions. Gaussian is the unique latent distribution for which this guarantee holds. Proves approximate identifiability with graceful degradation, and shows linear orthogonal identifiability enables optimal latent-space planning. All proofs verified in Lean 4 theorem prover.

### 3. Value-Guided Action Planning with JEPA World Models
- **Authors**: Matthieu Destrade, Oumayma Bounou, Quentin Le Lidec, Jean Ponce, Yann LeCun
- **Affiliations**: Ecole Polytechnique, ENS Paris, NYU
- **arXiv**: https://arxiv.org/abs/2601.00844 (Dec 2025)
- **Summary**: Enhances planning with JEPA world models by shaping representation space so the negative goal-conditioned value function is approximated by distance between state embeddings. Introduces practical method to enforce this constraint during training, showing significantly improved planning performance on control tasks.

### 4. Transformers without Normalization (shared with Kaiming He)
- **Authors**: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
- **Venue**: CVPR 2025
- **Summary**: Removing normalization layers from Transformers.

## Background
- Founder of AMI Labs (raised ~$1bn, March 2026)
- Former Chief AI Scientist at Meta (FAIR)
- Professor at NYU
- Turing Award recipient (2018)
- Core thesis: LLMs are a dead end; future belongs to world models (JEPA)
- Recently called xAI a "failure" and warned of AI industry bubble (June 2026)

## Source
- Exa web search (arxiv.org)
