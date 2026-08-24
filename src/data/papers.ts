export interface Paper {
  id: string;
  title: string;
  authors: string[];
  date: string;
  category: string;
  keyword: string;
  url: string;
  abstract: string;
  institution: string;
  summary: string;
}

export const papers: Paper[] = [
  {
    id: "2408.12345",
    title: "World Model Foundation for Embodied AI: A Unified Framework for Vision-Language-Action Learning",
    authors: ["John Smith", "Emily Chen", "Michael Brown"],
    date: "2024-08-24",
    category: "机器学习 > 人工智能",
    keyword: "world model",
    url: "https://arxiv.org/abs/2408.12345",
    abstract: "This paper presents a unified world model framework that bridges vision, language, and action learning for embodied AI systems. The proposed model demonstrates significant improvements in task planning and execution in complex environments.",
    institution: "Stanford, Google DeepMind, MIT",
    summary: "提出了一种统一的世界模型框架，有效连接视觉、语言和动作学习，显著提升具身AI系统在复杂环境中的任务规划与执行能力。"
  },
  {
    id: "2408.12346",
    title: "VLA-Net: Vision-Language-Action Networks for Robotic Manipulation",
    authors: ["Alice Johnson", "Robert Davis", "Sarah Wilson"],
    date: "2024-08-24",
    category: "机器人学 > 计算机视觉",
    keyword: "VLA",
    url: "https://arxiv.org/abs/2408.12346",
    abstract: "We introduce VLA-Net, a novel neural network architecture that effectively integrates visual perception, language understanding, and action planning for robotic manipulation tasks.",
    institution: "NVIDIA, CMU, Berkeley",
    summary: "提出了VLA-Net新型神经网络架构，有效整合视觉感知、语言理解和动作规划，在机器人操作任务中达到SOTA性能。"
  },
  {
    id: "2408.12347",
    title: "Sim2Real Transfer Learning for End-to-End Robotics Control",
    authors: ["David Zhang", "Lisa Wang", "James Miller"],
    date: "2024-08-23",
    category: "机器人学 > 强化学习",
    keyword: "sim2real",
    url: "https://arxiv.org/abs/2408.12347",
    abstract: "This work addresses the challenge of transferring policies from simulation to real-world robotics through improved domain randomization techniques.",
    institution: "OpenAI, Meta, Tesla",
    summary: "提出改进的领域随机化技术，有效解决仿真到现实世界的政策迁移挑战，显著提升机器人控制的稳定性和成功率。"
  },
  {
    id: "2408.12348",
    title: "Robotic Foundation Models: A Comprehensive Survey",
    authors: ["Jennifer Lee", "Mark Thompson", "Anna Garcia"],
    date: "2024-08-22",
    category: "人工智能 > 机器人学",
    keyword: "robotics foundation model",
    url: "https://arxiv.org/abs/2408.12348",
    abstract: "A comprehensive survey of recent advances in robotic foundation models, covering architectures, training methods, and applications.",
    institution: "Stanford, Google, MIT",
    summary: "提供了机器人基础模型的全面综述，涵盖架构设计、训练方法和应用场景，为该领域的研究提供系统性指导。"
  },
  {
    id: "2408.12349",
    title: "Embodied AI in Dynamic Environments: Challenges and Solutions",
    authors: ["Kevin Liu", "Maria Rodriguez", "Thomas Anderson"],
    date: "2024-08-21",
    category: "机器人学 > 具身智能",
    keyword: "embodied AI",
    url: "https://arxiv.org/abs/2408.12349",
    abstract: "This paper explores the challenges of embodied AI in dynamic environments and proposes novel solutions for real-time adaptation and learning.",
    institution: "Berkeley, CMU, Stanford",
    summary: "探索了动态环境中具身AI面临的挑战，提出实时适应和学习的新方法，显著提升系统在变化环境中的性能。"
  }
];

export const latestPapers = papers.slice(0, 3);
export const papersByCategory = {
  "world model": papers.filter(p => p.keyword === "world model"),
  "VLA": papers.filter(p => p.keyword === "VLA"),
  "sim2real": papers.filter(p => p.keyword === "sim2real"),
  "robotics foundation model": papers.filter(p => p.keyword === "robotics foundation model"),
  "embodied AI": papers.filter(p => p.keyword === "embodied AI")
};