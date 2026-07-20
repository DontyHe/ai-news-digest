export interface Paper {
  id: string;
  title: string;
  author: string;
  url: string;
  date: string;
  category: string;
}

export const papers: Paper[] = [
  // 2026-07-20 arXiv Digest
  {
    id: "arXiv:2607.15275",
    title: "RoboTTT: Context Scaling for Robot Policies",
    author: "Yunfan Jiang, Yevgen Chebotar, et al. (NVIDIA/Stanford)",
    url: "https://arxiv.org/abs/2607.15275",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
  {
    id: "arXiv:2607.15065",
    title: "DriftWorld: Fast World Modeling through Drifting",
    author: "Susie Lu, Haonan Chen, et al. (MIT/Harvard)",
    url: "https://arxiv.org/abs/2607.15065",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
  {
    id: "arXiv:2607.08877",
    title: "FlowDAgger: Human-in-the-Loop Adaptation of Generative Robot Policies in Latent Space",
    author: "Michael Murray, Daphne Chen, et al. (Microsoft Research/UW/ETH)",
    url: "https://arxiv.org/abs/2607.08877",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
  {
    id: "arXiv:2607.08742",
    title: "ContactMimic: Humanoid Object Interaction via Contact Control",
    author: "Xinyao Li, Xialin He, et al. (UIUC)",
    url: "https://arxiv.org/abs/2607.08742",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
  {
    id: "arXiv:2607.06988",
    title: "WAM-TTT: Steering World-Action Models by Watching Human Play at Test Time",
    author: "Yusen Feng, Bingchen Han, et al. (Peking University)",
    url: "https://arxiv.org/abs/2607.06988",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
  {
    id: "arXiv:2607.01088",
    title: "ROSA: A Robotics Foundation Model Serving System for Robot Factories",
    author: "Wenqi Jiang, Jason Clemons, et al. (Columbia/NVIDIA)",
    url: "https://arxiv.org/abs/2607.01088",
    date: "2026-07-20",
    category: "arXiv Digest",
  },
];
