# Kaiming He - arXiv Papers

> Date: 2026-06-15 | Source: arXiv author search

---

## 1. ELF: Embedded Language Flows
- **arXiv**: [2605.10938](https://arxiv.org/abs/2605.10938)
- **Categories**: cs.CL, cs.AI, cs.LG
- **Authors**: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, **Kaiming He**
- **Submitted**: 11 May, 2026
- **Abstract**: Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion language models (DLMs) primarily operate over discrete tokens. In this paper, we show that continuous DLMs...
- **Comments**: Tech Report. Project webpage: https://github.com/lillian039/ELF

---

## 2. Image Generators are Generalist Vision Learners
- **arXiv**: [2604.20329](https://arxiv.org/abs/2604.20329)
- **Categories**: cs.CV, cs.AI
- **Authors**: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, Shuyang Sun, Yanan Bao, Karen Truong, Zhicheng Wang, Wenlei Zhou, Jonathan T. Barron, Kyle Genova, Nithish Kannen, Sherry Ben, Yandong Li, Mandy Guo, Suhas Yogin, Yiming Gu, Huizhong Chen, Oliver Wang, Saining Xie, Howard Zhou, **Kaiming He**, Thomas Funkhouser, Jean-Baptiste Alayrac, Radu Soricut
- **Submitted**: 3 June, 2026; v1 submitted 22 April, 2026
- **Abstract**: Recent works show that image and video generators exhibit zero-shot visual understanding behaviors, in a way reminiscent of how LLMs develop emergent capabilities of language understanding and reasoning from generative pretraining. While it has long been conjectured that the ability to create visual content implies an ability to understand it, there has been limited evidence that generative vision...
- **Comments**: Project Page: http://vision-banana.github.io

---

## 3. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv**: [2602.20399](https://arxiv.org/abs/2602.20399)
- **Categories**: cs.LG
- **Authors**: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, **Kaiming He**, Wojciech Matusik
- **Submitted**: 19 May, 2026; v1 submitted 23 February, 2026
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present Geo...
- **Comments**: Project Page: https://physics-scaling.github.io/GeoPT/

---

## 4. Generative Modeling via Drifting
- **arXiv**: [2602.04770](https://arxiv.org/abs/2602.04770)
- **Categories**: cs.LG, cs.CV
- **Authors**: Mingyang Deng, He Li, Tianhong Li, Yilun Du, **Kaiming He**
- **Submitted**: 6 February, 2026; v1 submitted 4 February, 2026
- **Abstract**: Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. The pushforward behavior can be carried out iteratively at inference time, for example in diffusion and flow-based models. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit on...
- **Comments**: Project page: https://lambertae.github.io/projects/drifting/

---

## 5. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv**: [2601.22158](https://arxiv.org/abs/2601.22158)
- **Categories**: cs.CV
- **Authors**: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, **Kaiming He**
- **Submitted**: 9 May, 2026; v1 submitted 29 January, 2026
- **Abstract**: Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. Recent advances have made encouraging progress on each aspect individually, paving the way toward one-step diffusion/flow without latents. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF). O...
- **Comments**: Tech report. Code at https://github.com/Lyy-iiis/pMF

---

## 6. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv**: [2512.10953](https://arxiv.org/abs/2512.10953)
- **Categories**: cs.LG, cs.CV
- **Authors**: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, **Kaiming He**
- **Submitted**: 11 December, 2025
- **Abstract**: Normalizing Flows (NFs) have been established as a principled framework for generative modeling. Standard NFs consist of a forward process and a reverse process: the forward process maps data to noise, while the reverse process generates samples by inverting it. Typical NF forward transformations are constrained by explicit invertibility, ensuring that the reverse process can serve as their exact...
- **Comments**: Tech report

---

## 7. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv**: [2512.02012](https://arxiv.org/abs/2512.02012)
- **Categories**: cs.CV, cs.LG
- **Authors**: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, **Kaiming He**
- **Submitted**: 9 May, 2026; v1 submitted 1 December, 2025
- **Abstract**: MeanFlow (MF) has recently been established as a framework for one-step generative modeling. However, its "fastforward" nature introduces key challenges in both the training objective and the guidance mechanism. First, the original MF's training target depends not only on the underlying ground-truth fields but also on the network itself. To address this issue, we recast the objective as a loss o...
- **Comments**: Technical report. Code at https://github.com/Lyy-iiis/imeanflow

---

## 8. ARC Is a Vision Problem!
- **arXiv**: [2511.14761](https://arxiv.org/abs/2511.14761)
- **Categories**: cs.CV, cs.AI, cs.LG
- **Authors**: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, **Kaiming He**
- **Submitted**: 18 November, 2025
- **Abstract**: The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning, a fundamental aspect of human intelligence. Common approaches to ARC treat it as a language-oriented problem, addressed by large language models (LLMs) or recurrent reasoning models. However, although the puzzle-like tasks in ARC are inherently visual, existing research has rarely approached the probl...
- **Comments**: Technical Report. Project webpage: https://github.com/lillian039/VARC

---

## 9. Back to Basics: Let Denoising Generative Models Denoise
- **arXiv**: [2511.13720](https://arxiv.org/abs/2511.13720)
- **Categories**: cs.CV
- **Authors**: Tianhong Li, **Kaiming He**
- **Submitted**: 7 January, 2026; v1 submitted 17 November, 2025
- **Abstract**: Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, whe...
- **Comments**: Tech report. Code at https://github.com/LTH14/JiT

---

## 10. Diffuse and Disperse: Image Generation with Representation Regularization
- **arXiv**: [2506.09027](https://arxiv.org/abs/2506.09027)
- **Categories**: cs.CV, cs.AI, cs.LG
- **Authors**: Runqian Wang, **Kaiming He**
- **Submitted**: 24 July, 2025; v1 submitted 10 June, 2025
- **Abstract**: The development of diffusion-based generative models over the past decade has largely proceeded independently of progress in representation learning. These diffusion models typically rely on regression-based objectives and generally lack explicit regularization. In this work, we propose \textit{Dispersive Loss}, a simple plug-and-play regularizer that effectively improves diffusion-based generativ...