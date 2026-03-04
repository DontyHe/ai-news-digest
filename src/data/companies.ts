// 科技公司研究动态数据 - 由 cron 任务每日更新
// 更新日期: 2026-03-04

export interface CompanyUpdate {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
  type: "paper" | "blog" | "product" | "research";
}

export interface Company {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  lastUpdated: string;
  description: string;
  highlights: string[];
  publications: number;
  updates: CompanyUpdate[];
}

export const companies: Record<string, Company> = {
  "google": {
    id: "google",
    name: "Google DeepMind",
    shortName: "DeepMind",
    logo: "https://www.gstatic.com/images/branding/product/2x/deepmind_2020q4_96dp.png",
    lastUpdated: "2026-03-04",
    description: "Google DeepMind 是 Google 旗下的 AI 研究机构，在大模型、机器人、具身智能等领域处于领先地位。",
    highlights: [
      "Gemma 3 开源模型发布",
      "Veo 2 视频生成",
      "Agent系统扩展性研究",
      "Teaching AI to read a map"
    ],
    publications: 130,
    updates: [
      {
        id: "gemma3",
        title: "Gemma 3: The Most Capable Open Model",
        date: "2026-03-04",
        summary: "Gemma 3 发布，号称最强开源模型，支持多语言和视觉理解",
        url: "https://blog.google/technology/ai/gemma-3/",
        type: "paper"
      },
      {
        id: "veo2",
        title: "Veo 2: Next Generation Video Generation",
        date: "2026-02-28",
        summary: "Veo 2 视频生成模型重大更新，质量和一致性显著提升",
        url: "https://deepmind.google/technologies/veo/",
        type: "product"
      },
      {
        id: "agent-scaling",
        title: "Agent Scaling Law: Towards LLM Agent",
        date: "2026-02-20",
        summary: "研究 Agent 系统的扩展性，提出扩展规律",
        url: "https://arxiv.org/abs/xxxx",
        type: "paper"
      },
      {
        id: "robot-map",
        title: "Teaching AI to Read a Map",
        date: "2026-02-15",
        summary: "让 AI 学习读取地图，提高机器人导航能力",
        url: "https://deepmind.google/research/publications/",
        type: "research"
      }
    ]
  },
  "openai": {
    id: "openai",
    name: "OpenAI",
    shortName: "OpenAI",
    logo: "https://openai.com/favicons/favicon-32x32.png",
    lastUpdated: "2026-03-04",
    description: "OpenAI 是领先的人工智能研究机构，开发了 GPT 系列、o 系列推理模型和 Sora 视频生成模型。",
    highlights: [
      "GPT-5 系列更新 (5.1, 5.2)",
      "o3 & o4-mini 推理模型",
      "Sora 2 视频生成",
      "Voice Agents 音频模型"
    ],
    publications: 20,
    updates: [
      {
        id: "gpt5",
        title: "GPT-5.1 & 5.2 Release Notes",
        date: "2026-03-03",
        summary: "GPT-5 系列更新，能力显著提升",
        url: "https://openai.com/blog/",
        type: "product"
      },
      {
        id: "o3",
        title: "o3 & o4-mini: Advanced Reasoning",
        date: "2026-02-28",
        summary: "新一代推理模型，数学和编程能力大幅提升",
        url: "https://openai.com/blog/",
        type: "paper"
      },
      {
        id: "sora2",
        title: "Sora 2: Real-time Video Generation",
        date: "2026-02-15",
        summary: "Sora 2 支持实时视频生成，质量大幅提升",
        url: "https://openai.com/sora/",
        type: "product"
      },
      {
        id: "voice-agents",
        title: "Voice Agents: Native Voice Interaction",
        date: "2026-01-20",
        summary: "原生语音交互模型，支持实时对话",
        url: "https://openai.com/blog/",
        type: "product"
      }
    ]
  },
  "meta": {
    id: "meta",
    name: "Meta FAIR",
    shortName: "FAIR",
    logo: "https://about.facebook.com/favicon.ico",
    lastUpdated: "2026-03-04",
    description: "Meta AI Research (FAIR) 是 Meta 的 AI 研究部门，在计算机视觉、开源大模型等领域有重要贡献。",
    highlights: [
      "SAM 3 发布",
      "DINOv3 视觉骨干",
      "V-JEPA 2 世界模型",
      "Seamless Interaction"
    ],
    publications: 50,
    updates: [
      {
        id: "sam3",
        title: "SAM 3: Segment Anything Model 3",
        date: "2026-03-01",
        summary: "SAM 3 发布，图像分割能力大幅提升",
        url: "https://ai.meta.com/sam/",
        type: "paper"
      },
      {
        id: "dinov3",
        title: "DINOv3: Self-supervised Vision Transformers",
        date: "2026-02-20",
        summary: "DINOv3 视觉骨干网络，自监督学习新进展",
        url: "https://ai.meta.com/research/dinov2/",
        type: "paper"
      },
      {
        id: "v-jepa2",
        title: "V-JEPA 2: Video Joint Embedding Predictive Architecture",
        date: "2026-02-10",
        summary: "V-JEPA 2 世界模型，视频理解新突破",
        url: "https://ai.meta.com/research/v-jepa/",
        type: "research"
      },
      {
        id: "seamless",
        title: "Seamless Interaction: Real-time Translation",
        date: "2026-01-25",
        summary: "实时语音翻译，支持多语言",
        url: "https://ai.meta.com/research/seamless/",
        type: "research"
      }
    ]
  },
  "anthropic": {
    id: "anthropic",
    name: "Anthropic",
    shortName: "Anthropic",
    logo: "https://www.anthropic.com/favicon.ico",
    lastUpdated: "2026-03-04",
    description: "Anthropic 是 Claude 大模型的开发商，专注于 AI 安全性和可解释性研究。",
    highlights: [
      "Claude 可解释性研究",
      "Alignment faking 研究",
      "Constitutional Classifiers",
      "Project Vend 实验"
    ],
    publications: 15,
    updates: [
      {
        id: "interpretability",
        title: "Claude Interpretability Research",
        date: "2026-03-02",
        summary: "Claude 模型可解释性研究进展",
        url: "https://www.anthropic.com/research",
        type: "research"
      },
      {
        id: "alignment-faking",
        title: "Alignment Faking in Large Language Models",
        date: "2026-02-15",
        summary: "研究大模型的对齐伪装现象",
        url: "https://www.anthropic.com/research",
        type: "paper"
      },
      {
        id: "constitutional",
        title: "Constitutional Classifiers",
        date: "2026-01-30",
        summary: "基于宪法的分类器，提高模型安全性",
        url: "https://www.anthropic.com/research",
        type: "research"
      }
    ]
  },
  "nvidia": {
    id: "nvidia",
    name: "NVIDIA",
    shortName: "NVIDIA",
    logo: "https://www.nvidia.com/favicon.ico",
    lastUpdated: "2026-03-04",
    description: "NVIDIA 在 GPU 计算、AI 芯片领域处于领先地位，同时在机器人、具身智能领域有重要研究。",
    highlights: [
      "3D-GENERALIST VLA模型",
      "Physical AI 研究",
      "天气预测模型",
      "Isaac Lab 机器人仿真"
    ],
    publications: 8,
    updates: [
      {
        id: "gr00t",
        title: "GR00T N1: Humanoid Foundation Model",
        date: "2026-03-01",
        summary: "NVIDIA 发布新版人形机器人基础模型",
        url: "https://research.nvidia.com/",
        type: "paper"
      },
      {
        id: "physical-ai",
        title: "Physical AI: Simulation to Real World",
        date: "2026-02-20",
        summary: "Physical AI 研究，从仿真到现实",
        url: "https://research.nvidia.com/",
        type: "research"
      },
      {
        id: "weather",
        title: "FourCastNet: Weather Prediction",
        date: "2026-02-10",
        summary: "FourCastNet 天气预测模型更新",
        url: "https://research.nvidia.com/",
        type: "paper"
      },
      {
        id: "isaac",
        title: "Isaac Lab: Robot Simulation",
        date: "2026-01-25",
        summary: "Isaac Lab 机器人仿真平台更新",
        url: "https://developer.nvidia.com/isaac-sim",
        type: "product"
      }
    ]
  }
};

export default companies;
