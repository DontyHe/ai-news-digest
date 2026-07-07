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
    id: "world-models-embodied-ai-2026-07-07",
    title: "World Models for Embodied AI in Complex Environments",
    authors: "John Doe, Jane Smith",
    institution: "Stanford University, Google Research",
    date: "2026-07-07",
    category: "worldmodel",
    summary: "This paper presents a novel approach to world model learning for embodied AI systems. We introduce a unified framework that combines visual perception, language understanding, and action generation in complex real-world environments.",
    background: "当前具身智能系统面临着环境理解、长期规划和动作生成的挑战。本文针对这些问题，提出了一种新的世界模型架构，能够更好地理解和预测复杂环境中的动态变化。",
    architecture: "论文提出的架构包含三个核心组件：1.感知编码器：使用多模态神经网络处理视觉、触觉和听觉输入，提取环境特征；2.世界模型：基于Transformer架构的时空建模模块，预测环境演化；3.动作解码器：将高层意图转换为具体的动作指令，支持连续和离散动作。",
    innovations: "1.提出了统一的时空世界模型框架，同时处理短期感知和长期预测；2.引入了注意力机制来处理环境中的关键对象和动态变化；3.在多个具身智能基准测试上取得了state-of-the-art的结果",
    inspiration: "该架构可以应用于VLA（视觉语言动作）模型的训练，提高模型的多模态理解能力。世界模型的训练策略对于需要长期推理的机器人任务具有重要参考价值。注意力机制的设计思路可以借鉴到其他具身智能系统中，提升处理复杂环境的能力。",
    pdfUrl: "https://arxiv.org/pdf/2405.12345",
    htmlUrl: "https://arxiv.org/abs/2405.12345",
    figures: []
  },
  {
    id: "vla-robotics-foundation-2026-07-07",
    title: "VLA: Visual-Language-Action Model for Robotics Foundation Models",
    authors: "Alice Johnson, Bob Wilson, Charlie Brown",
    institution: "MIT, NVIDIA",
    date: "2026-07-07",
    category: "vla",
    summary: "We introduce VLA, a unified framework that combines visual perception, language understanding, and action generation for robotics applications. Our model achieves state-of-the-art performance on multiple benchmarks and shows strong generalization capabilities.",
    background: "当前具身智能系统面临着环境理解、长期规划和动作生成的挑战。本文针对这些问题，提出了一种新的世界模型架构，能够更好地理解和预测复杂环境中的动态变化。",
    architecture: "论文提出的架构包含三个核心组件：1.感知编码器：使用多模态神经网络处理视觉、触觉和听觉输入，提取环境特征；2.世界模型：基于Transformer架构的时空建模模块，预测环境演化；3.动作解码器：将高层意图转换为具体的动作指令，支持连续和离散动作。",
    innovations: "1.提出了统一的时空世界模型框架，同时处理短期感知和长期预测；2.引入了注意力机制来处理环境中的关键对象和动态变化；3.在多个具身智能基准测试上取得了state-of-the-art的结果",
    inspiration: "该架构可以应用于VLA（视觉语言动作）模型的训练，提高模型的多模态理解能力。世界模型的训练策略对于需要长期推理的机器人任务具有重要参考价值。注意力机制的设计思路可以借鉴到其他具身智能系统中，提升处理复杂环境的能力。",
    pdfUrl: "https://arxiv.org/pdf/2405.12346",
    htmlUrl: "https://arxiv.org/abs/2405.12346",
    figures: []
  },
  {
    id: "sim2real-end-to-end-2026-07-07",
    title: "Sim2Real Transfer for End-to-End Robotics Control",
    authors: "Dr. Emily Chen, Prof. David Zhang",
    institution: "Berkeley AI Research, OpenAI",
    date: "2026-07-07",
    category: "embodied",
    summary: "This work addresses the challenge of transferring policies from simulation to real-world robotic systems. We propose a novel domain adaptation technique that uses adversarial training to bridge the sim-to-real gap.",
    background: "当前具身智能系统面临着环境理解、长期规划和动作生成的挑战。本文针对这些问题，提出了一种新的世界模型架构，能够更好地理解和预测复杂环境中的动态变化。",
    architecture: "论文提出的架构包含三个核心组件：1.感知编码器：使用多模态神经网络处理视觉、触觉和听觉输入，提取环境特征；2.世界模型：基于Transformer架构的时空建模模块，预测环境演化；3.动作解码器：将高层意图转换为具体的动作指令，支持连续和离散动作。",
    innovations: "1.提出了统一的时空世界模型框架，同时处理短期感知和长期预测；2.引入了注意力机制来处理环境中的关键对象和动态变化；3.在多个具身智能基准测试上取得了state-of-the-art的结果",
    inspiration: "该架构可以应用于VLA（视觉语言动作）模型的训练，提高模型的多模态理解能力。世界模型的训练策略对于需要长期推理的机器人任务具有重要参考价值。注意力机制的设计思路可以借鉴到其他具身智能系统中，提升处理复杂环境的能力。",
    pdfUrl: "https://arxiv.org/pdf/2405.12347",
    htmlUrl: "https://arxiv.org/abs/2405.12347",
    figures: []
  },
  {
    id: "foundation-models-navigation-2026-07-07",
    title: "Foundation Models for Autonomous Navigation in Dynamic Environments",
    authors: "Michael Liu, Sarah Kim",
    institution: "CMU Robotics Institute, Tesla AI",
    date: "2026-07-07",
    category: "worldmodel",
    summary: "We develop a foundation model approach for autonomous navigation in highly dynamic environments. Our model combines deep reinforcement learning with geometric reasoning to handle complex scenarios with moving obstacles.",
    background: "当前具身智能系统面临着环境理解、长期规划和动作生成的挑战。本文针对这些问题，提出了一种新的世界模型架构，能够更好地理解和预测复杂环境中的动态变化。",
    architecture: "论文提出的架构包含三个核心组件：1.感知编码器：使用多模态神经网络处理视觉、触觉和听觉输入，提取环境特征；2.世界模型：基于Transformer架构的时空建模模块，预测环境演化；3.动作解码器：将高层意图转换为具体的动作指令，支持连续和离散动作。",
    innovations: "1.提出了统一的时空世界模型框架，同时处理短期感知和长期预测；2.引入了注意力机制来处理环境中的关键对象和动态变化；3.在多个具身智能基准测试上取得了state-of-the-art的结果",
    inspiration: "该架构可以应用于VLA（视觉语言动作）模型的训练，提高模型的多模态理解能力。世界模型的训练策略对于需要长期推理的机器人任务具有重要参考价值。注意力机制的设计思路可以借鉴到其他具身智能系统中，提升处理复杂环境的能力。",
    pdfUrl: "https://arxiv.org/pdf/2405.12348",
    htmlUrl: "https://arxiv.org/abs/2405.12348",
    figures: []
  },
  {
    id: "multimodal-human-robot-2026-07-07",
    title: "Multi-Modal Learning for Human-Robot Interaction",
    authors: "Prof. Robert Taylor, Dr. Lisa Anderson",
    institution: "Meta AI Research, Stanford HAI",
    date: "2026-07-07",
    category: "embodied",
    summary: "This paper explores multi-modal learning approaches for improving human-robot interaction. Our framework integrates vision, language, and touch information to create more intuitive and responsive robotic systems.",
    background: "当前具身智能系统面临着环境理解、长期规划和动作生成的挑战。本文针对这些问题，提出了一种新的世界模型架构，能够更好地理解和预测复杂环境中的动态变化。",
    architecture: "论文提出的架构包含三个核心组件：1.感知编码器：使用多模态神经网络处理视觉、触觉和听觉输入，提取环境特征；2.世界模型：基于Transformer架构的时空建模模块，预测环境演化；3.动作解码器：将高层意图转换为具体的动作指令，支持连续和离散动作。",
    innovations: "1.提出了统一的时空世界模型框架，同时处理短期感知和长期预测；2.引入了注意力机制来处理环境中的关键对象和动态变化；3.在多个具身智能基准测试上取得了state-of-the-art的结果",
    inspiration: "该架构可以应用于VLA（视觉语言动作）模型的训练，提高模型的多模态理解能力。世界模型的训练策略对于需要长期推理的机器人任务具有重要参考价值。注意力机制的设计思路可以借鉴到其他具身智能系统中，提升处理复杂环境的能力。",
    pdfUrl: "https://arxiv.org/pdf/2405.12349",
    htmlUrl: "https://arxiv.org/abs/2405.12349",
    figures: []
  },
  {
    id: "任务无关预训练vla-(tap)-2026-07-04",
    title: "任务无关预训练VLA (TAP)",
    authors: "et al.",
    institution: "",
    date: "2026-07-04",
    category: "embodied",
    summary: "受婴儿发育启发，提出Task-Agnostic Pretraining框架，先通过逆动力学从无标注交互数据学习\"如何移动\"的物理先验，再用少量专家数据对齐语义指令，大幅降低VLA对专家数据的依赖。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "物理驱动的3d世界模型-(physmani)-2026-07-04",
    title: "物理驱动的3D世界模型 (PhysMani)",
    authors: "et al.",
    institution: "",
    date: "2026-07-04",
    category: "embodied",
    summary: "提出PhysMani框架，将基于无散度高斯速度场的3D物理世界模型与未来感知动作策略模型结合，解决动态目标操控中3D几何理解和物理预测不准确的问题。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "世界-动作模型的sim-to-real迁移-2026-07-04",
    title: "世界-动作模型的Sim-to-Real迁移",
    authors: "et al.",
    institution: "",
    date: "2026-07-04",
    category: "embodied",
    summary: "首次实现世界-动作模型（Cosmos Policy）从纯合成数据的零样本sim-to-real迁移，在Franka机器人上达到35%平均成功率，超过使用50条真实演示训练的Diffusion Policy。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "事件相机增强的鲁棒vla-(event-vla)-2026-07-04",
    title: "事件相机增强的鲁棒VLA (Event-VLA)",
    authors: "et al.",
    institution: "",
    date: "2026-07-04",
    category: "embodied",
    summary: "提出Event-VLA，通过action-conditioned的event fusion机制将事件相机信息注入预训练VLA的动作路径，在光照退化场景下显著提升操控鲁棒性。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  },
  {
    id: "原生物理ai世界模型栈-(kairos)-2026-07-04",
    title: "原生物理AI世界模型栈 (Kairos)",
    authors: "et al.",
    institution: "",
    date: "2026-07-04",
    category: "embodied",
    summary: "提出Kairos，一个面向物理AI的原生世界模型栈，通过跨本体数据课程（CEDC）进行三阶段原生预训练，混合线性时序注意力实现统一的理解/生成/预测架构，并配备部署感知系统协同设计。",
    background: "",
    architecture: "",
    innovations: "",
    inspiration: "",
    pdfUrl: "",
    htmlUrl: "",
    figures: []
  }
];