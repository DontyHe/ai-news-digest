# Kaiming He's Research - 2026-03-15

## Recent arXiv Papers

### 1. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv:** 2602.20399
- **Authors:** Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **Category:** cs.LG
- **Abstract:** Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present GeoPT, a unified pre-trained model for general physics simulation based on lifted geometric pre-training. The core idea is to augment geometry with synthetic dynamics, enabling dynamics-aware self-supervision without physics labels. Pre-trained on over one million samples, GeoPT consistently improves industrial-fidelity benchmarks spanning fluid mechanics for cars, aircraft, and ships, and solid mechanics in crash simulation, reducing labeled data requirements by 20-60% and accelerating convergence by 2×.
- **Submitted:** 23 February, 2026

### 2. Generative Modeling via Drifting
- **arXiv:** 2602.04770
- **Authors:** Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **Category:** cs.LG, cs.CV
- **Abstract:** Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. The pushforward behavior can be carried out iteratively at inference time, for example in diffusion and flow-based models. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit one-step inference. We introduce a drifting field that governs the sample movement and achieves equilibrium when the distributions match. This leads to a training objective that allows the neural network optimizer to evolve the distribution. In experiments, our one-step generator achieves state-of-the-art results on ImageNet at 256×256 resolution, with an FID of 1.54 in latent space and 1.61 in pixel space.
- **Submitted:** 6 February, 2026

### 3. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv:** 2601.22158
- **Authors:** Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **Category:** cs.CV
- **Abstract:** Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. Recent advances have made encouraging progress on each aspect individually, paving the way toward one-step diffusion/flow without latents. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF). Our core guideline is to formulate the network output space and the loss space separately. The network target is designed to be on a presumed low-dimensional image manifold (i.e., x-prediction), while the loss is defined via MeanFlow in the velocity space. We introduce a simple transformation between the image manifold and the average velocity field. In experiments, pMF achieves strong results for one-step latent-free generation on ImageNet at 256×256 resolution (2.22 FID) and 512×512 resolution (2.48 FID).
- **Submitted:** 5 February, 2026

### 4. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv:** 2512.10953
- **Authors:** Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **Category:** cs.LG, cs.CV
- **Abstract:** Normalizing Flows (NFs) have been established as a principled framework for generative modeling. Standard NFs consist of a forward process and a reverse process: the forward process maps data to noise, while the reverse process generates samples by inverting it. Typical NF forward transformations are constrained by explicit invertibility, ensuring that the reverse process can serve as their exact analytic inverse. In this work, we introduce Bidirectional Normalizing Flow (BiFlow), a framework that removes the need for an exact analytic inverse. BiFlow learns a reverse model that approximates the underlying noise-to-data inverse mapping, enabling more flexible loss functions and architectures. Experiments on ImageNet demonstrate that BiFlow improves generation quality while accelerating sampling by up to two orders of magnitude.
- **Submitted:** 11 December, 2025

### 5. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv:** 2512.02012
- **Authors:** Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **Category:** cs.CV, cs.LG
- **Abstract:** MeanFlow (MF) has recently been established as a framework for one-step generative modeling. However, its "fastforward" nature introduces key challenges in both the training objective and the guidance mechanism. We tackle this issue by formulating guidance as explicit conditioning variables, thereby retaining flexibility at test time. The diverse conditions are processed through in-context conditioning, which reduces model size and benefits performance. Overall, our improved MeanFlow (iMF) method, trained entirely from scratch, achieves 1.72 FID with a single function evaluation (1-NFE) on ImageNet 256×256.
- **Submitted:** 1 December, 2025

### 6. ARC Is a Vision Problem!
- **arXiv:** 2511.14761
- **Authors:** Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **Category:** cs.CV, cs.AI, cs.LG
- **Abstract:** The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning. Common approaches to ARC treat it as a language-oriented problem, addressed by large language models (LLMs). However, although the puzzle-like tasks in ARC are inherently visual, existing research has rarely approached the problem from a vision-centric perspective. In this work, we formulate ARC within a vision paradigm, framing it as an image-to-image translation problem. Our framework, termed Vision ARC (VARC), achieves 60.4% accuracy on the ARC-1 benchmark.
- **Submitted:** 18 November, 2025

### 7. Back to Basics: Let Denoising Generative Models Denoise
- **arXiv:** 2511.13720
- **Authors:** Tianhong Li, Kaiming He
- **Category:** cs.CV
- **Abstract:** Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, whereas noised quantities do not. With this assumption, we advocate for models that directly predict clean data. Our approach is conceptually nothing more than "Just image Transformers", or JiT. We report competitive results using JiT with large patch sizes of 16 and 32 on ImageNet at resolutions of 256 and 512.
- **Submitted:** 7 January, 2026 (v1: 17 November, 2025)

### 8. Transformers without Normalization
- **arXiv:** 2503.10622
- **Authors:** Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
- **Category:** cs.LG, cs.AI, cs.CL, cs.CV
- **Abstract:** Normalization layers are ubiquitous in modern neural networks and have long been considered essential. This work demonstrates that Transformers without normalization can achieve the same or better performance using a remarkably simple technique. We introduce Dynamic Tanh (DyT), an element-wise operation DyT(x) = tanh(αx), as a drop-in replacement for normalization layers in Transformers. By incorporating DyT, Transformers without normalization can match or exceed the performance of their normalized counterparts.
- **Submitted:** 10 March, 2025

