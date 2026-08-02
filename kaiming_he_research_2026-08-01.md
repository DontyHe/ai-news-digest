# Research Paper Digest - Kaiming He
**Date**: 2026-08-01
**Source**: arXiv

## Recent Papers

### Paper 1
- **Title**: Video Generation Models are General-Purpose Vision Learners
- **Authors**: Letian Wang, Chuhan Zhang, Rishabh Kabra, Jasper Uijlings, Steven Waslander, Andrew Zisserman, Joao Carreira, Kaiming He, Misha Andriluka, Eduard Gabriel Bazavan, Andrei Zanfir, Cristian Sminchisescu
- **arXiv ID**: 2607.09024v1
- **Published**: 2026-07-10
- **Updated**: 2026-07-10
- **Categories**: cs.CV, cs.AI
- **Comment**: ECCV 2026
- **Abstract**: Driven by next-token prediction, NLP shifted from task-specific models into powerful generalist foundation models. What, then, is the equivalent catalyst needed to achieve a general-purpose model in computer vision? In this paper, we contend that large-scale text-to-video generation serves as a strong pre-training paradigm for computer vision, providing the necessary spatiotemporal priors, vision-language alignment, and scalability required for general visual intelligence. We introduce GenCeption, which leverages a pre-trained video generative diffusion backbone to define a feed-forward perception model, capable of performing various vision tasks steered by text instructions. Empirical results demonstrate that GenCeption achieves state-of-the-art performance across a diverse suite of tasks, including depth, surface normal, and camera pose estimation, expression-referring segmentation, and 3D keypoint prediction, often matching or surpassing specialized models (e.g. DepthAnything3, SAM3, D4RT, VGGT-Omega, Sapiens, David, Genmo, and Lotus-2). Furthermore, the video generative pretrained backbone outperforms alternative pretraining paradigms (e.g., V-JEPA, and Video MAE) under comparable settings. Importantly, GenCeption exhibits preliminary data and model scaling properties along with exceptional data efficiency, where it achieves comparable performance with leading models like D4RT and VGGT-Omega with 7 to 500 less training data. Finally, GenCeption also exhibits intriguing emergent behaviors: a model trained exclusively on synthetic human videos generalizes to real-world footage and out-of-distribution object categories (e.g., animals and robots). These findings suggest that video generation is not merely a synthesis tool, but a foundational path toward generalist vision intelligence for the physical world. Project page: https://genception.github.io
- **URL**: https://arxiv.org/abs/2607.09024v1

### Paper 2
- **Title**: ELF: Embedded Language Flows
- **Authors**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, Kaiming He
- **arXiv ID**: 2605.10938v2
- **Published**: 2026-05-11
- **Updated**: 2026-06-26
- **Categories**: cs.CL, cs.AI, cs.LG
- **Comment**: Tech report. arXiv v2: add distillation results in Appendix B. https://linlu-qiu.github.io/assets/html/elf_pd.html
- **Abstract**: Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion language models (DLMs) primarily operate over discrete tokens. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain. We propose Embedded Language Flows (ELF), a class of diffusion models in continuous embedding space based on continuous-time Flow Matching. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared-weight network. This formulation makes it straightforward to adapt established techniques from image-domain diffusion models, e.g., classifier-free guidance (CFG). Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps. These results suggest that ELF offers a promising path toward effective continuous DLMs.
- **URL**: https://arxiv.org/abs/2605.10938v2

### Paper 3
- **Title**: Image Generators are Generalist Vision Learners
- **Authors**: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, Shuyang Sun, Yanan Bao, Karen Truong, Zhicheng Wang, Wenlei Zhou, Jonathan T. Barron, Kyle Genova, Nithish Kannen, Sherry Ben, Yandong Li, Mandy Guo, Suhas Yogin, Yiming Gu, Huizhong Chen, Oliver Wang, Saining Xie, Howard Zhou, Kaiming He, Thomas Funkhouser, Jean-Baptiste Alayrac, Radu Soricut
- **arXiv ID**: 2604.20329v3
- **Published**: 2026-04-22
- **Updated**: 2026-06-03
- **Categories**: cs.CV, cs.AI
- **Comment**: Project Page: http://vision-banana.github.io
- **Abstract**: Recent works show that image and video generators exhibit zero-shot visual understanding behaviors, in a way reminiscent of how LLMs develop emergent capabilities of language understanding and reasoning from generative pretraining. While it has long been conjectured that the ability to create visual content implies an ability to understand it, there has been limited evidence that generative vision models have developed strong understanding capabilities. In this work, we demonstrate that image generation training serves a role similar to LLM pretraining, and lets models learn powerful and general visual representations that enable SOTA performance on various vision tasks. We introduce Vision Banana, a generalist model built by instruction-tuning Nano Banana Pro (NBP) on a mixture of its original training data alongside a small amount of vision task data. By parameterizing the output space of vision tasks as RGB images, we seamlessly reframe perception as image generation. Our generalist model, Vision Banana, achieves SOTA results on a variety of vision tasks involving both 2D and 3D understanding, beating or rivaling zero-shot domain-specialists, including Segment Anything Model 3 on segmentation tasks, and the Depth Anything series on metric depth estimation. We show that these results can be achieved with lightweight instruction-tuning without sacrificing the base model's image generation capabilities. The superior results suggest that image generation pretraining is a generalist vision learner. It also shows that image generation serves as a unified and universal interface for vision tasks, similar to text generation's role in language understanding and reasoning. We could be witnessing a major paradigm shift for computer vision, where generative vision pretraining takes a central role in building Foundational Vision Models for both generation and understanding.
- **URL**: https://arxiv.org/abs/2604.20329v3

### Paper 4
- **Title**: GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik
- **arXiv ID**: 2602.20399v2
- **Published**: 2026-02-23
- **Updated**: 2026-05-20
- **Categories**: cs.LG
- **Comment**: Project Page: https://physics-scaling.github.io/GeoPT/
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present GeoPT, a unified pre-trained model for general physics simulation based on lifted geometric pre-training. The core idea is to augment geometry with synthetic dynamics, enabling dynamics-aware self-supervision without physics labels. Pre-trained on over one million samples, GeoPT consistently improves industrial-fidelity benchmarks spanning fluid mechanics for cars, aircraft, and ships, and solid mechanics in crash simulation, reducing labeled data requirements by 20-60% and accelerating convergence by 2$\times$. These results show that lifting with synthetic dynamics bridges the geometry-physics gap, unlocking a scalable path for neural simulation and potentially beyond. Code is available at https://github.com/Physics-Scaling/GeoPT.
- **URL**: https://arxiv.org/abs/2602.20399v2

### Paper 5
- **Title**: Generative Modeling via Drifting
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He
- **arXiv ID**: 2602.04770v2
- **Published**: 2026-02-04
- **Updated**: 2026-02-06
- **Categories**: cs.LG, cs.CV
- **Comment**: Project page: https://lambertae.github.io/projects/drifting/
- **Abstract**: Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. The pushforward behavior can be carried out iteratively at inference time, for example in diffusion and flow-based models. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit one-step inference. We introduce a drifting field that governs the sample movement and achieves equilibrium when the distributions match. This leads to a training objective that allows the neural network optimizer to evolve the distribution. In experiments, our one-step generator achieves state-of-the-art results on ImageNet at 256 x 256 resolution, with an FID of 1.54 in latent space and 1.61 in pixel space. We hope that our work opens up new opportunities for high-quality one-step generation.
- **URL**: https://arxiv.org/abs/2602.04770v2

### Paper 6
- **Title**: One-step Latent-free Image Generation with Pixel Mean Flows
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He
- **arXiv ID**: 2601.22158v3
- **Published**: 2026-01-29
- **Updated**: 2026-05-09
- **Categories**: cs.CV
- **Comment**: Tech report. Code at https://github.com/Lyy-iiis/pMF
- **Abstract**: Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. Recent advances have made encouraging progress on each aspect individually, paving the way toward one-step diffusion/flow without latents. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF). Our core guideline is to formulate the network output space and the loss space separately. The network target is designed to be on a presumed low-dimensional image manifold (i.e., x-prediction), while the loss is defined via MeanFlow in the velocity space. We introduce a simple transformation between the image manifold and the average velocity field. In experiments, pMF achieves strong results for one-step latent-free generation on ImageNet at 256x256 resolution (2.22 FID) and 512x512 resolution (2.48 FID), filling a key missing piece in this regime. We hope that our study will further advance the boundaries of diffusion/flow-based generative models.
- **URL**: https://arxiv.org/abs/2601.22158v3

### Paper 7
- **Title**: Bidirectional Normalizing Flow: From Data to Noise and Back
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He
- **arXiv ID**: 2512.10953v1
- **Published**: 2025-12-11
- **Updated**: 2025-12-11
- **Categories**: cs.LG, cs.CV
- **Comment**: Tech report
- **Abstract**: Normalizing Flows (NFs) have been established as a principled framework for generative modeling. Standard NFs consist of a forward process and a reverse process: the forward process maps data to noise, while the reverse process generates samples by inverting it. Typical NF forward transformations are constrained by explicit invertibility, ensuring that the reverse process can serve as their exact analytic inverse. Recent developments in TARFlow and its variants have revitalized NF methods by combining Transformers and autoregressive flows, but have also exposed causal decoding as a major bottleneck. In this work, we introduce Bidirectional Normalizing Flow ($\textbf{BiFlow}$), a framework that removes the need for an exact analytic inverse. BiFlow learns a reverse model that approximates the underlying noise-to-data inverse mapping, enabling more flexible loss functions and architectures. Experiments on ImageNet demonstrate that BiFlow, compared to its causal decoding counterpart, improves generation quality while accelerating sampling by up to two orders of magnitude. BiFlow yields state-of-the-art results among NF-based methods and competitive performance among single-evaluation ("1-NFE") methods. Following recent encouraging progress on NFs, we hope our work will draw further attention to this classical paradigm.
- **URL**: https://arxiv.org/abs/2512.10953v1

### Paper 8
- **Title**: Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **Authors**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He
- **arXiv ID**: 2512.02012v2
- **Published**: 2025-12-01
- **Updated**: 2026-05-09
- **Categories**: cs.CV, cs.LG
- **Comment**: Technical report. Code at https://github.com/Lyy-iiis/imeanflow
- **Abstract**: MeanFlow (MF) has recently been established as a framework for one-step generative modeling. However, its ``fastforward'' nature introduces key challenges in both the training objective and the guidance mechanism. First, the original MF's training target depends not only on the underlying ground-truth fields but also on the network itself. To address this issue, we recast the objective as a loss on the instantaneous velocity $v$, re-parameterized by a network that predicts the average velocity $u$. Our reformulation yields a more standard regression problem and improves the training stability. Second, the original MF fixes the classifier-free guidance scale during training, which sacrifices flexibility. We tackle this issue by formulating guidance as explicit conditioning variables, thereby retaining flexibility at test time. The diverse conditions are processed through in-context conditioning, which reduces model size and benefits performance. Overall, our $\textbf{improved MeanFlow}$ ($\textbf{iMF}$) method, trained entirely from scratch, achieves $\textbf{1.72}$ FID with a single function evaluation (1-NFE) on ImageNet 256$\times$256. iMF substantially outperforms prior methods of this kind and closes the gap with multi-step methods while using no distillation. We hope our work will further advance fastforward generative modeling as a stand-alone paradigm.
- **URL**: https://arxiv.org/abs/2512.02012v2

### Paper 9
- **Title**: ARC Is a Vision Problem!
- **Authors**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He
- **arXiv ID**: 2511.14761v1
- **Published**: 2025-11-18
- **Updated**: 2025-11-18
- **Categories**: cs.CV, cs.AI, cs.LG
- **Comment**: Technical Report. Project webpage: https://github.com/lillian039/VARC
- **Abstract**: The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning, a fundamental aspect of human intelligence. Common approaches to ARC treat it as a language-oriented problem, addressed by large language models (LLMs) or recurrent reasoning models. However, although the puzzle-like tasks in ARC are inherently visual, existing research has rarely approached the problem from a vision-centric perspective. In this work, we formulate ARC within a vision paradigm, framing it as an image-to-image translation problem. To incorporate visual priors, we represent the inputs on a "canvas" that can be processed like natural images. It is then natural for us to apply standard vision architectures, such as a vanilla Vision Transformer (ViT), to perform image-to-image mapping. Our model is trained from scratch solely on ARC data and generalizes to unseen tasks through test-time training. Our framework, termed Vision ARC (VARC), achieves 60.4% accuracy on the ARC-1 benchmark, substantially outperforming existing methods that are also trained from scratch. Our results are competitive with those of leading LLMs and close the gap to average human performance.
- **URL**: https://arxiv.org/abs/2511.14761v1

### Paper 10
- **Title**: Back to Basics: Let Denoising Generative Models Denoise
- **Authors**: Tianhong Li, Kaiming He
- **arXiv ID**: 2511.13720v2
- **Published**: 2025-11-17
- **Updated**: 2026-01-07
- **Categories**: cs.CV
- **Comment**: Tech report. Code at https://github.com/LTH14/JiT
- **Abstract**: Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, whereas noised quantities do not. With this assumption, we advocate for models that directly predict clean data, which allows apparently under-capacity networks to operate effectively in very high-dimensional spaces. We show that simple, large-patch Transformers on pixels can be strong generative models: using no tokenizer, no pre-training, and no extra loss. Our approach is conceptually nothing more than "Just image Transformers", or JiT, as we call it. We report competitive results using JiT with large patch sizes of 16 and 32 on ImageNet at resolutions of 256 and 512, where predicting high-dimensional noised quantities can fail catastrophically. With our networks mapping back to the basics of the manifold, our research goes back to basics and pursues a self-contained paradigm for Transformer-based diffusion on raw natural data.
- **URL**: https://arxiv.org/abs/2511.13720v2

---
*Fetched at: 2026-08-01T08:05:00+08:00*