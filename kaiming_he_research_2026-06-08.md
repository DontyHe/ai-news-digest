# Research Papers - Kaiming He - 2026-06-08

## arXiv Papers (Recent: 17 papers)

Search query: author:Kaiming+He

### 1. ELF: Embedded Language Flows
- **arXiv ID**: 2605.10938
- **URL**: https://arxiv.org/abs/2605.10938
- **Authors**: Authors: Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, Kaiming He...
- **Abstract**: Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion language models (DLMs) primarily operate over discrete tokens. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain. We propose Embedded Language ...

---

### 2. Image Generators are Generalist Vision Learners
- **arXiv ID**: 2604.20329
- **URL**: https://arxiv.org/abs/2604.20329
- **Authors**: Authors: Valentin Gabeur, Shangbang Long, Songyou Peng, Paul Voigtlaender, Shuyang Sun, Yanan Bao, Karen Truong, Zhicheng Wang, Wenlei Zhou, Jonathan T. Barron, Kyle Genova, Nithish Kannen, Sherry Ben, Yandong Li, Mandy Guo, Suhas Yogin, Yiming Gu, Huizhong Chen, Oliver Wang, Saining Xie, Howard Zho...
- **Abstract**: Recent works show that image and video generators exhibit zero-shot visual understanding behaviors, in a way reminiscent of how LLMs develop emergent capabilities of language understanding and reasoning from generative pretraining. While it has long been conjectured that the ability to create visual content implies an ability to understand it, there has been limited evidence that generative vision models have developed strong understanding capabilities. In this work, we demonstrate that image ge...

---

### 3. GeoPT: Scaling Physics Simulation via Lifted Geometric Pre-Training
- **arXiv ID**: 2602.20399
- **URL**: https://arxiv.org/abs/2602.20399
- **Authors**: Authors: Haixu Wu, Minghao Guo, Zongyi Li, Zhiyang Dou, Mingsheng Long, Kaiming He, Wojciech Matusik...
- **Abstract**: Neural simulators promise efficient surrogates for physics simulation, but scaling them is bottlenecked by the prohibitive cost of generating high-fidelity training data. Pre-training on abundant off-the-shelf geometries offers a natural alternative, yet faces a fundamental gap: supervision on static geometry alone ignores dynamics and can lead to negative transfer on physics tasks. We present GeoPT, a unified pre-trained model for general physics simulation based on lifted geometric pre-trainin...

---

### 4. Generative Modeling via Drifting
- **arXiv ID**: 2602.04770
- **URL**: https://arxiv.org/abs/2602.04770
- **Authors**: Authors: Mingyang Deng, He Li, Tianhong Li, Yilun Du, Kaiming He...
- **Abstract**: Generative modeling can be formulated as learning a mapping f such that its pushforward distribution matches the data distribution. The pushforward behavior can be carried out iteratively at inference time, for example in diffusion and flow-based models. In this paper, we propose a new paradigm called Drifting Models, which evolve the pushforward distribution during training and naturally admit one-step inference. We introduce a drifting field that governs the sample movement and achieves equili...

---

### 5. One-step Latent-free Image Generation with Pixel Mean Flows
- **arXiv ID**: 2601.22158
- **URL**: https://arxiv.org/abs/2601.22158
- **Authors**: Authors: Yiyang Lu, Susie Lu, Qiao Sun, Hanhong Zhao, Zhicheng Jiang, Xianbang Wang, Tianhong Li, Zhengyang Geng, Kaiming He...
- **Abstract**: Modern diffusion/flow-based models for image generation typically exhibit two core characteristics: (i) using multi-step sampling, and (ii) operating in a latent space. Recent advances have made encouraging progress on each aspect individually, paving the way toward one-step diffusion/flow without latents. In this work, we take a further step towards this goal and propose "pixel MeanFlow" (pMF). Our core guideline is to formulate the network output space and the loss space separately. The networ...

---

### 6. Bidirectional Normalizing Flow: From Data to Noise and Back
- **arXiv ID**: 2512.10953
- **URL**: https://arxiv.org/abs/2512.10953
- **Authors**: Authors: Yiyang Lu, Qiao Sun, Xianbang Wang, Zhicheng Jiang, Hanhong Zhao, Kaiming He...
- **Abstract**: Normalizing Flows (NFs) have been established as a principled framework for generative modeling. Standard NFs consist of a forward process and a reverse process: the forward process maps data to noise, while the reverse process generates samples by inverting it. Typical NF forward transformations are constrained by explicit invertibility, ensuring that the reverse process can serve as their exact analytic inverse. Recent developments in TARFlow and its variants have revitalized NF methods by com...

---

### 7. Improved Mean Flows: On the Challenges of Fastforward Generative Models
- **arXiv ID**: 2512.02012
- **URL**: https://arxiv.org/abs/2512.02012
- **Authors**: Authors: Zhengyang Geng, Yiyang Lu, Zongze Wu, Eli Shechtman, J. Zico Kolter, Kaiming He...
- **Abstract**: MeanFlow (MF) has recently been established as a framework for one-step generative modeling. However, its ``fastforward'' nature introduces key challenges in both the training objective and the guidance mechanism. First, the original MF's training target depends not only on the underlying ground-truth fields but also on the network itself. To address this issue, we recast the objective as a loss on the instantaneous velocity $v$, re-parameterized by a network that predicts the average velocity $...

---

### 8. ARC Is a Vision Problem!
- **arXiv ID**: 2511.14761
- **URL**: https://arxiv.org/abs/2511.14761
- **Authors**: Authors: Keya Hu, Ali Cy, Linlu Qiu, Xiaoman Delores Ding, Runqian Wang, Yeyin Eva Zhu, Jacob Andreas, Kaiming He...
- **Abstract**: The Abstraction and Reasoning Corpus (ARC) is designed to promote research on abstract reasoning, a fundamental aspect of human intelligence. Common approaches to ARC treat it as a language-oriented problem, addressed by large language models (LLMs) or recurrent reasoning models. However, although the puzzle-like tasks in ARC are inherently visual, existing research has rarely approached the problem from a vision-centric perspective. In this work, we formulate ARC within a vision paradigm, frami...

---

### 9. Back to Basics: Let Denoising Generative Models Denoise
- **arXiv ID**: 2511.13720
- **URL**: https://arxiv.org/abs/2511.13720
- **Authors**: Authors: Tianhong Li, Kaiming He...
- **Abstract**: Today's denoising diffusion models do not "denoise" in the classical sense, i.e., they do not directly predict clean images. Rather, the neural networks predict noise or a noised quantity. In this paper, we suggest that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data should lie on a low-dimensional manifold, whereas noised quantities do not. With this assumption, we advocate for models that directly predict cl...

---

### 10. On the boundary Carrollian conformal algebra
- **arXiv ID**: 2508.21603
- **URL**: https://arxiv.org/abs/2508.21603
- **Authors**: Authors: Lucas Buzaglo, Xiao He, Tuan Anh Pham, Haijun Tan, Girish S Vishwa, Kaiming Zhao...
- **Abstract**: We initiate the mathematical study of the boundary Carrollian conformal algebra (BCCA), an infinite-dimensional Lie algebra recently discovered in the context of Carrollian physics. The BCCA is an intriguing object from both physical and mathematical perspectives, since it is a filtered but not graded Lie algebra. In this paper, we first construct some modules for the BCCA and one of its subalgebras, which we call $\mathcal{O}$, by restriction of well-known modules of the BMS$_3$ and Witt algebr...

---

