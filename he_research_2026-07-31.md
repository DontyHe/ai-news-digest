# Research Paper Digest - Kaiming He
**Date**: 2026-07-31
**Source**: arXiv

## Recent Papers

### Paper 1
- **Title**: Video Generation Models are General-Purpose Vision Learners
- **Authors**: Letian Wang, Chuhan Zhang, Rishabh Kabra, Jasper Uijlings, Steven Waslander, Andrew Zisserman, Joao Carreira, Kaiming He, Misha Andriluka, Eduard Gabriel Bazavan, Andrei Zanfir, Cristian Sminchisescu
- **arXiv ID**: 2607.09024
- **Date**: 2026-07-09 (announced July 2026)
- **Abstract**: Driven by next-token prediction, NLP shifted from task-specific models into powerful generalist foundation models. What, then, is the equivalent catalyst needed to achieve a general-purpose model in computer vision? In this paper, we contend that large-scale text-to-video generation serves as a strong pre-training paradigm for computer vision, providing the necessary spatiotemporal priors, vision-language alignment, and generalization to diverse visual tasks. We demonstrate that video generation models, when applied as general-purpose vision learners, exhibit zero-shot visual understanding behaviors reminiscent of how LLMs develop emergent capabilities from generative pretraining.
- **URL**: https://arxiv.org/abs/2607.09024
- **Note**: ECCV 2026

### Paper 2
- **Title**: ELF: Embedded Language Flows
- **Authors**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, Kaiming He
- **arXiv ID**: 2605.10938
- **Date**: 2026-05-11 (originally announced May 2026)
- **Abstract**: Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion language models (DLMs) primarily operate over discrete tokens. In this paper, we show that continuous DLMs operating in the embedding space can match or exceed discrete-token DLMs in generation quality while offering unique advantages in terms of continuous optimization and smoother gradients.
- **URL**: https://arxiv.org/abs/2605.10938
- **Note**: Tech report. arXiv v2 adds distillation results.

### Paper 3
- **Title**: Image Generators are Generalist Vision Learners
- **Authors**: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, Shuyang Sun, Yanan Bao, Karen Truong, Zhicheng Wang, Wenlei Zhou, Jonathan T. Barron, Kyle Genova, Nithish Kannen, Sherry Ben, Yandong Li, Mandy Guo, Suhas Yogin, Yiming Gu, Huizhong Chen, Oliver Wang, Saining Xie, Howard Zhou, Kaiming He, Thomas Funkhouser, Jean-Baptiste Alayrac, Radu Soricut
- **arXiv ID**: 2604.20329
- **Date**: 2026-04-22 (originally announced April 2026)
- **Abstract**: Recent works show that image and video generators exhibit zero-shot visual understanding behaviors, in a way reminiscent of how LLMs develop emergent capabilities of language understanding and reasoning from generative pretraining. While it has long been conjectured that the ability to create visual content implies an ability to understand it, there has been limited evidence that generative vision models can serve as general-purpose visual backbones. We provide comprehensive evidence that image generators can serve as generalist vision learners, achieving competitive performance across diverse vision tasks without task-specific fine-tuning.
- **URL**: https://arxiv.org/abs/2604.20329
- **Note**: Project Page: http://vision-banana.github.io

### Paper 4
- **Title**: GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **arXiv ID**: 2602.20399
- **Date**: 2026-02-23 (originally announced February 2026)
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present GeoPT, a lifted geometric pre-training framework that bridges this gap by learning geometry-aware representations that transfer effectively to downstream physics simulation tasks.
- **URL**: https://arxiv.org/abs/2602.20399
- **Note**: Project Page: https://physics-scaling.github.io/GeoPT/

### Paper 5
- **Title**: Generative Modeling via Drifting
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **arXiv ID**: 2602.04770
- **Date**: 2026-02-04 (originally announced February 2026)
- **Abstract**: Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. The pushforward behavior can be carried out iteratively at inference time, for example in diffusion and flow-based models. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit one-step generation. Drifting models offer a principled alternative to iterative sampling, combining the best properties of flow-based and diffusion-based approaches.
- **URL**: https://arxiv.org/abs/2602.04770
- **Note**: Project page: https://lambertae.github.io/projects/drifting/

### Paper 6
- **Title**: One-step Latent-free Image Generation with Pixel Mean Flows
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **arXiv ID**: 2601.22158
- **Date**: 2026-01-29 (originally announced January 2026)
- **Abstract**: Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. Recent advances have made encouraging progress on each aspect individually, paving the way toward one-step diffusion/flow without latents. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF), a one-step, latent-free generative model that operates directly in pixel space while maintaining competitive generation quality.
- **URL**: https://arxiv.org/abs/2601.22158
- **Note**: Tech report. Code at https://github.com/Lyy-iiis/pMF

### Paper 7
- **Title**: Bidirectional Normalizing Flow: From Data to Noise and Back
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **arXiv ID**: 2512.10953
- **Date**: 2025-12-11
- **Abstract**: Normalizing Flows (NFs) have been established as a principled framework for generative modeling. Standard NFs consist of a forward process and a reverse process: the forward process maps data to noise, while the reverse process generates samples by inverting it. Typical NF forward transformations are constrained by explicit invertibility, ensuring that the reverse process can serve as their exact inverse. We propose bidirectional normalizing flows that relax this constraint while maintaining generation quality.
- **URL**: https://arxiv.org/abs/2512.10953
- **Note**: Tech report

### Paper 8
- **Title**: ARC Is a Vision Problem!
- **Authors**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **arXiv ID**: 2511.14761
- **Date**: 2025-11-18
- **Abstract**: The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning, a fundamental aspect of human intelligence. Common approaches to ARC treat it as a language-oriented problem, addressed by large language models (LLMs) or recurrent reasoning models. However, although the puzzle-like tasks in ARC are inherently visual, existing research has rarely approached the problem from a purely visual perspective. We demonstrate that treating ARC as a vision problem, leveraging visual representations from pretrained vision models, achieves strong performance.
- **URL**: https://arxiv.org/abs/2511.14761
- **Note**: Technical Report. Project: https://github.com/lillian039/VARC

### Paper 9
- **Title**: Back to Basics: Let Denoising Generative Models Denoise
- **Authors**: Tianhong Li, Kaiming He
- **arXiv ID**: 2511.13720
- **Date**: 2025-11-17
- **Abstract**: Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, where the clean prediction can be directly achieved. We propose a simple yet effective approach that回归去噪的本质.
- **URL**: https://arxiv.org/abs/2511.13720
- **Note**: Tech report. Code at https://github.com/LTH14/JiT

### Paper 10
- **Title**: Mean Flows for One-step Generative Modeling
- **Authors**: Zhengyang Geng, Mingyang Deng, Xingjian Bai, J. Zico Kolter, Kaiming He
- **arXiv ID**: 2505.13447
- **Date**: 2025-05-19
- **Abstract**: We propose a principled and effective framework for one-step generative modeling. We introduce the notion of average velocity to characterize flow fields, in contrast to instantaneous velocity modeled by Flow Matching methods. A well-defined identity between average and instantaneous velocities is derived and used to guide neural network training. Our method, termed the MeanFlow model, is self-contained and does not require a pre-trained model or distillation.
- **URL**: https://arxiv.org/abs/2505.13447
- **Note**: Tech report
