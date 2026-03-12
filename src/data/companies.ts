// 科技公司研究动态数据 - 由 cron 任务每日更新
// 更新日期: 2026-03-05

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
    lastUpdated: "2026-03-05",
    description: "Google DeepMind 是 Google 旗下的 AI 研究机构，在大模型、机器人、具身智能等领域处于领先地位。",
    highlights: [
      "Gemini Robotics 具身智能",
      "SIMA 2 智能体",
      "Genie 3 世界模型",
      "AlphaFold 3 蛋白质预测"
    ],
    publications: 130,
    updates: [
      {
        id: "gemini-robotics",
        title: "Gemini Robotics: Embodied Intelligence",
        date: "2026-03-05",
        summary: "Gemini Robotics 发布，感知、推理、使用工具和交互的具身智能模型",
        url: "https://deepmind.google/models/gemini-robotics/",
        type: "product"
      },
      {
        id: "sima2",
        title: "SIMA 2: Agent that Plays, Reasons and Learns",
        date: "2026-03-01",
        summary: "SIMA 2 可在虚拟3D世界中游玩、推理和学习的智能体",
        url: "https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/",
        type: "research"
      },
      {
        id: "genie3",
        title: "Genie 3: Generate and Explore Interactive Worlds",
        date: "2026-02-25",
        summary: "Genie 3 生成和探索交互式世界模型",
        url: "https://deepmind.google/models/genie/",
        type: "research"
      },
      {
        id: "alphafold3",
        title: "AlphaFold 3: Protein Structure Prediction",
        date: "2026-02-15",
        summary: "AlphaFold 3 高精度蛋白结构预测",
        url: "https://deepmind.google/science/alphafold/",
        type: "research"
      }
    ]
  },
  "openai": {
    id: "openai",
    name: "OpenAI",
    shortName: "OpenAI",
    logo: "https://openai.com/favicons/favicon-32x32.png",
    lastUpdated: "2026-03-05",
    description: "OpenAI 是领先的人工智能研究机构，开发了 GPT 系列、o 系列推理模型和 Sora 视频生成模型。",
    highlights: [
      "GPT-5.2 专业工作模型",
      "o3 & o4-mini 推理模型",
      "Sora 2 视频生成",
      "4o Image Generation 图像生成"
    ],
    publications: 20,
    updates: [
      {
        id: "gpt52",
        title: "GPT-5.2: Advanced Frontier Model",
        date: "2026-03-04",
        summary: "GPT-5.2 专业工作和长时运行智能体的高级 frontier 模型",
        url: "https://openai.com/index/introducing-gpt-5-2/",
        type: "product"
      },
      {
        id: "o3",
        title: "o3 & o4-mini: Advanced Reasoning",
        date: "2026-02-28",
        summary: "新一代推理模型，支持完整工具调用",
        url: "https://openai.com/index/introducing-o3-and-o4-mini/",
        type: "paper"
      },
      {
        id: "sora2",
        title: "Sora 2: Physically Accurate Video Generation",
        date: "2026-02-15",
        summary: "物理准确、可控的视频生成，支持同步对话和音效",
        url: "https://openai.com/index/sora-2/",
        type: "product"
      },
      {
        id: "4o-image",
        title: "4o Image Generation: Natively Multimodal",
        date: "2026-01-25",
        summary: "原生多模态模型，精确、准确、逼真的图像输出",
        url: "https://openai.com/index/introducing-4o-image-generation/",
        type: "product"
      }
    ]
  },
  "meta": {
    id: "meta",
    name: "Meta FAIR",
    shortName: "FAIR",
    logo: "https://about.facebook.com/favicon.ico",
    lastUpdated: "2026-03-05",
    description: "Meta AI Research (FAIR) 是 Meta 的 AI 研究部门，在计算机视觉、开源大模型等领域有重要贡献。",
    highlights: [
      "SAM 3 图像分割",
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
        summary: "使用文本和视觉提示精确检测、分割和跟踪任何对象",
        url: "https://ai.meta.com/research/",
        type: "paper"
      },
      {
        id: "sam3d",
        title: "SAM 3D: 3D Reconstruction",
        date: "2026-02-25",
        summary: "精确重建和分析3D人物和物体，提供空间理解新机会",
        url: "https://ai.meta.com/research/",
        type: "research"
      },
      {
        id: "dinov3",
        title: "DINOv3: Self-supervised Vision Transformers",
        date: "2026-02-15",
        summary: "规模化自监督学习，生产强大的通用视觉骨干网络",
        url: "https://ai.meta.com/research/",
        type: "paper"
      },
      {
        id: "v-jepa2",
        title: "V-JEPA 2: Video World Model",
        date: "2026-02-05",
        "summary": "首个在视频上训练的世界模型，实现最先进视觉理解和预测",
        url: "https://ai.meta.com/research/",
        type: "research"
      }
    ]
  },
  "anthropic": {
    id: "anthropic",
    name: "Anthropic",
    shortName: "Anthropic",
    logo: "https://www.anthropic.com/favicon.ico",
    lastUpdated: "2026-03-05",
    description: "Anthropic 是 Claude 大模型的开发商，专注于 AI 安全性和可解释性研究。",
    highlights: [
      "Claude 可解释性研究进展",
      "Project Vend Phase 2 实验",
      "Constitutional Classifiers",
      "Alignment faking 研究"
    ],
    publications: 15,
    updates: [
      {
        id: "project-vend-2",
        title: "Project Vend Phase 2: AI Shopkeeper",
        date: "2026-03-02",
        summary: "AI店员实验，探索AI在复杂现实任务中的表现",
        url: "https://www.anthropic.com/research/project-vend-2",
        type: "research"
      },
      {
        id: "introspection",
        title: "Signs of Introspection in LLMs",
        date: "2026-02-20",
        summary: "研究Claude是否能够访问和报告其内部状态",
        url: "https://www.anthropic.com/research/introspection",
        type: "research"
      },
      {
        id: "tracing-thoughts",
        title: "Tracing the Thoughts of a LLM",
        date: "2026-02-10",
        summary: "电路追踪让观察Claude思考过程成为可能",
        url: "https://www.anthropic.com/research/tracing-thoughts-language-model",
        type: "research"
      },
      {
        id: "alignment-faking",
        title: "Alignment Faking in Large Language Models",
        date: "2026-01-15",
        "summary": "模型在未经训练的情况下进行对齐伪造的实证例子",
        url: "https://www.anthropic.com/research/alignment-faking",
        type: "paper"
      }
    ]
  },
  "nvidia": {
    id: "nvidia",
    name: "NVIDIA",
    shortName: "NVIDIA",
    logo: "https://www.nvidia.com/favicon.ico",
    lastUpdated: "2026-03-05",
    description: "NVIDIA 在 GPU 计算、AI 芯片领域处于领先地位，同时在机器人、具身智能领域有重要研究。",
    highlights: [
      "NVIDIA 2026年 Research8篇论文",
      "3D视觉与空间智能",
      "机器人与具身智能",
      "生成式AI"
    ],
    publications: 8,
    updates: [
      {
        id: "spatial-intelligence",
        title: "NVIDIA Toronto AI Lab: Spatial Intelligence",
        date: "2026-03-05",
        summary: "NVIDIA 多伦多AI实验室专注于空间智能研究",
        url: "https://research.nvidia.com/labs/toronto-ai/",
        type: "research"
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
        id: "generative-ai",
        title: "Generative AI Publications 2026",
        date: "2026-02-10",
        summary: "2026年已发布155篇生成式AI相关论文",
        url: "https://research.nvidia.com/research-area/generative-ai",
        type: "paper"
      },
      {
        id: "robotics",
        title: "Robotics Research: 164 Publications",
        date: "2026-01-25",
        summary: "机器人领域已发布164篇论文",
        url: "https://research.nvidia.com/research-area/robotics",
        type: "paper"
      }
    ]
  }
};

export default companies;
