// 论文数据 - 由 cron 任务每日更新
// 更新路径: /home/Hebin/project/ai-news-digest/src/data/papers.json

export interface Paper {
  id: string;
  title: string;
  authors: string;
  date: string;
  institution: string;
  category: "embodied" | "vla" | "worldmodel" | "ai";
  summary: string;
  background: string;
  architecture: string;
  innovations: string;
  inspiration: string;
  pdfUrl: string;
  htmlUrl: string;
  figures: string[];
}

export const papers: Paper[] = [
  {
    id: "planning-in-8-tokens-2026-03-07",
    title: "Planning in 8 Tokens: A Compact Discrete Tokenizer for Latent World Model",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 1. Planning in 8 Tokens: A Compact Discrete Tokenizer for Latent World Model  - **作者**: Dongwon Kim, Gawon Seo, Jinsung Lee, Minsu Cho, Suha Kwak - **机构**: KAIST (韩国科学技术院) - **发布日期**: 2026-03-05 -",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "physiflow-2026-03-07",
    title: "PhysiFlow: Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching and Robust Tracking",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 2. PhysiFlow: Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching and Robust Tracking  - **作者**: Weikai Qin, Sichen Wu, Ci Chen, Mengfan Liu, Linxi Feng - **机构**:  Carnegie ",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "critic-in-the-loop-2026-03-07",
    title: "Critic in the Loop: A Tri-System VLA Framework for Robust Long-Horizon Manipulation",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 3. Critic in the Loop: A Tri-System VLA Framework for Robust Long-Horizon Manipulation  - **作者**: Pengfei Yi, Yingjie Ma, Wenjiang Xu, Yanan Hao, Shuai Gan - **机构**: 上海交通大学 - **发布日期**: 2026-03-05 ",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "observing-and-contro-2026-03-07",
    title: "Observing and Controlling Features in Vision-Language-Action Models",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 4. Observing and Controlling Features in Vision-Language-Action Models  - **作者**: Hugo Buurmeijer, Carmen Amo Alonso, Aiden Swann, Marco Pavone - **机构**: Stanford University - **发布日期**: 2026-03-05",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "robopocket-2026-03-07",
    title: "RoboPocket: Improve Robot Policies Instantly with Your Phone",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 5. RoboPocket: Improve Robot Policies Instantly with Your Phone  - **作者**: Junjie Fang, Wendi Chen, Han Xue, Fangyuan Zhou, Tian Le - **机构**: 未明确（待查证） - **发布日期**: 2026-03-05 - **类别**: cs.RO - **论文",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "curobov2-2026-03-07",
    title: "cuRoboV2: Dynamics-Aware Motion Generation with Depth-Fused Distance Fields for High-DoF Robots",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 6. cuRoboV2: Dynamics-Aware Motion Generation with Depth-Fused Distance Fields for High-DoF Robots  - **作者**: Balakumar Sundaralingam, Adithyavairavan Murali, Stan Birchfield - **机构**: NVIDIA - **",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "ultradexgrasp-2026-03-07",
    title: "UltraDexGrasp: Learning Universal Dexterous Grasping for Bimanual Robots with Synthetic Data",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 7. UltraDexGrasp: Learning Universal Dexterous Grasping for Bimanual Robots with Synthetic Data  - **作者**: Sizhe Yang, Yiman Xie, Zhixuan Liang, Yang Tian, Jia Zeng - **机构**:  Zhejiang University ",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "omni-manip-2026-03-07",
    title: "Omni-Manip: Beyond-FOV Large-Workspace Humanoid Manipulation with Omnidirectional 3D Perception",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 8. Omni-Manip: Beyond-FOV Large-Workspace Humanoid Manipulation with Omnidirectional 3D Perception  - **作者**: Pei Qu, Zheng Li, Yufei Jia, Ziyun Liu, Liang Zhu - **机构**: 清华大学 - **发布日期**: 2026-03-0",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "latent-policy-steeri-2026-03-07",
    title: "Latent Policy Steering through One-Step Flow Policies",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 9. Latent Policy Steering through One-Step Flow Policies  - **作者**: Hokyun Im, Andrey Kolobov, Jianlong Fu, Youngwoon Lee - **机构**:  University of Southern California (USC) - **发布日期**: 2026-03-05 ",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "openfrontier-2026-03-07",
    title: "OpenFrontier: General Navigation with Visual-Language Grounded Frontiers",
    authors: "et al.",
    institution: "",
    date: "2026-03-07",
    category: "embodied",
    summary: "### 10. OpenFrontier: General Navigation with Visual-Language Grounded Frontiers  - **作者**: Esteban Padilla, Boyang Sun, Marc Pollefeys, Hermann Blum - **机构**: ETH Zurich - **发布日期**: 2026-03-05 - **类别",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "paper-260309971",
    title: "TiPToP: A Modular Open-Vocabulary Planning System for Robotic Manipulation",
    authors: "et al.",
    institution: "",
    date: "2026-03-11",
    category: "embodied",
    summary: "## 1. TiPToP: A Modular Open-Vocabulary Planning System for Robotic Manipulation  - **论文ID**: arXiv:2603.09971 - **作者**: William Shen, Nishanth Kumar, Sahit Chintalapudi, Jie Wang, Christopher Watson,",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "https://arxiv.org/pdf/2603.09971",
    htmlUrl: "https://arxiv.org/abs/2603.09971",
    figures: []
  },
  {
    id: "paper-260309882",
    title: "Emerging Extrinsic Dexterity in Cluttered Scenes via Dynamics-aware Policy Learning",
    authors: "et al.",
    institution: "",
    date: "2026-03-11",
    category: "embodied",
    summary: "## 2. Emerging Extrinsic Dexterity in Cluttered Scenes via Dynamics-aware Policy Learning  - **论文ID**: arXiv:2603.09882 - **作者**: Yixin Zheng, Jiangran Lyu, Yifan Zhang, Jiayi Chen, Mi Yan, Yuntian De",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "https://arxiv.org/pdf/2603.09882",
    htmlUrl: "https://arxiv.org/abs/2603.09882",
    figures: []
  },
  {
    id: "paper-260309712",
    title: "Robotic Scene Cloning: Advancing Zero-Shot Robotic Scene Adaptation in Manipulation via Visual Prompt Editing",
    authors: "et al.",
    institution: "",
    date: "2026-03-11",
    category: "embodied",
    summary: "## 3. Robotic Scene Cloning: Advancing Zero-Shot Robotic Scene Adaptation in Manipulation via Visual Prompt Editing  - **论文ID**: arXiv:2603.09712 - **作者**: Binyuan Huang, Yuqing Wen, Yucheng Zhao, Yao",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "https://arxiv.org/pdf/2603.09712",
    htmlUrl: "https://arxiv.org/abs/2603.09712",
    figures: []
  },
  {
    id: "paper-260309961",
    title: "BEACON: Language-Conditioned Navigation Affordance Prediction under Occlusion",
    authors: "et al.",
    institution: "",
    date: "2026-03-11",
    category: "embodied",
    summary: "## 4. BEACON: Language-Conditioned Navigation Affordance Prediction under Occlusion  - **论文ID**: arXiv:2603.09961 - **作者**: (待查证) - **机构**: (待查证) - **发布日期**: 2026-03-10 - **类别**: cs.RO - **链接**: [PDF]",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "https://arxiv.org/pdf/2603.09961",
    htmlUrl: "https://arxiv.org/abs/2603.09961",
    figures: []
  },
  {
    id: "2603.11041",
    title: "DynVLA: Learning World Dynamics",
    authors: "Shuyao Shang et al.",
    institution: "中科院",
    date: "2026-03-11",
    category: "vla",
    summary: "DynVLA提出Dynamics CoT范式，在动作生成前先预测紧凑世界动态，实现更知情、物理合理的自动驾驶决策。核心创新包括Dynamics Tokenizer和ego-centric/env-centric dynamics解耦。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "https://arxiv.org/pdf/2603.11041",
    htmlUrl: "https://arxiv.org/abs/2603.11041",
    figures: []
  },
];

export default papers;