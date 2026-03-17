# Kaiming He Research Papers - 2026-03-10

## February 2026

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present GeoPT, a unified pre-trained model for general physics simulation based on lifted geometric pre-training. The core idea is to augment geometry with synthetic dynamics, enabling dynamics-aware self-supervision without physics labels. Pre-trained on over one million samples, GeoPT consistently improves industrial-fidelity benchmarks spanning fluid mechanics for cars, aircraft, and ships, and solid mechanics in crash simulation, reducing labeled data requirements by 20-60% and accelerating convergence by 2×.

### 2. Generative Modeling via Drifting
- **arXiv**: [2602.04770](https://arxiv.org/abs/2602.04770)
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **Abstract**: Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit one-step inference. We introduce a drifting field that governs the sample movement and achieves equilibrium when the distributions match. In experiments, our one-step generator achieves state-of-the-art results on ImageNet at 256 x 256 resolution, with an FID of 1.54 in latent space and 1.61 in pixel space.

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: [2601.22158](https://arxiv.org/abs/2601.22158)
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **Abstract**: Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF). Our core guideline is to formulate the network output space and the loss space separately. In experiments, pMF achieves strong results for one-step latent-free generation on ImageNet at 256x256 resolution (2.22 FID) and 512x512 resolution (2.48 FID).

## January 2026

### 4. Back to Basics: Let Denoising Generative Models Denoise
- **arXiv**: [2511.13720](https://arxiv.org/abs/2511.13720)
- **Authors**: Tianhong Li, Kaiming He
- **Abstract**: Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, whereas noised quantities do not. We show that simple, large-patch Transformers on pixels can be strong generative models: using no tokenizer, no pre-training, and no extra loss. Our approach is conceptually nothing more than "Just image Transformers", or JiT.

## December 2025

### 5. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv**: [2512.10953](https://arxiv.org/abs/2512.10953)
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **Abstract**: Normalizing Flows (NFs) have been established as a principled framework for generative modeling. We introduce Bidirectional Normalizing Flow (BiFlow), a framework that removes the need for an exact analytic inverse. BiFlow learns a reverse model that approximates the underlying noise-to-data inverse mapping, enabling more flexible loss functions and architectures. Experiments on ImageNet demonstrate that BiFlow improves generation quality while accelerating sampling by up to two orders of magnitude.

### 6. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv**: [2512.02012](https://arxiv.org/abs/2512.02012)
- **Authors**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **Abstract**: MeanFlow (MF) has recently been established as a framework for one-step generative modeling. However, its "fastforward" nature introduces key challenges in both the training objective and the guidance mechanism. We tackle these issues and our improved MeanFlow (iMF) method achieves 1.72 FID with a single function evaluation (1-NFE) on ImageNet 256×256, substantially outperforming prior methods of this kind.

## November 2025

### 7. ARC Is a Vision Problem!
- **arXiv**: [2511.14761](https://arxiv.org/abs/2511.14761)
- **Authors**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **Abstract**: The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning. In this work, we formulate ARC within a vision paradigm, framing it as an image-to-image translation problem. To incorporate visual priors, we represent the inputs on a "canvas" that can be processed like natural images. Our framework, termed Vision ARC (VARC), achieves 60.4% accuracy on the ARC-1 benchmark, substantially outperforming existing methods that are also trained from scratch.
