# Kaiming He - Research Digest
**Date**: 2026-06-22

## Recent Papers

### 1. Back to Basics: Let Denoising Generative Models Denoise
- **Authors**: Tianhong Li, Kaiming He
- **Venue**: CVPR 2026 (Tech report, Nov 2025)
- **arXiv**: https://arxiv.org/abs/2511.13720
- **Summary**: Today's denoising diffusion models do not "denoise" in the classical sense; they predict noise or noised quantities rather than clean images. This paper argues that predicting clean data and predicting noised quantities are fundamentally different. According to the manifold assumption, natural data lies on a low-dimensional manifold while noised quantities do not. They advocate for models that directly predict clean data, allowing simple large-patch Transformers on pixels to be strong generative models. Using no tokenizer, no pre-training, and no extra loss. Called JiT ("Just image Transformers"). Reports competitive results on ImageNet at 256 and 512 resolutions with patch sizes 16 and 32.

### 2. Mean Flows for One-step Generative Modeling
- **Authors**: Zhengyang Geng, Mingyang Deng, Xingjian Bai, J. Zico Kolter, Kaiming He
- **Venue**: NeurIPS 2025 (Oral, Tech report May 2025)
- **Summary**: A new approach for one-step generative modeling using mean flows.

### 3. Transformers without Normalization
- **Authors**: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
- **Venue**: CVPR 2025, pages 14901-14911
- **Summary**: Research on removing normalization layers from Transformers.

## Background
- Associate Professor with tenure, EECS at MIT
- Distinguished Scientist at Google DeepMind (part-time)
- Known for: ResNets, Faster R-CNN, Mask R-CNN, MoCo, MAE
- 700,000+ citations (as of May 2025)
- Awards: CVPR 2026 Test of Time Award, NeurIPS 2025 Test of Time Award, ICCV 2025 Test of Time Award

## Source
- Exa web search (people.csail.mit.edu/kaiming/, arxiv.org)
