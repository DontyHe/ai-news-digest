// 科技公司研究动态数据 - 由 cron 任务每日更新
// 更新日期: 2026-03-18

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
    lastUpdated: "2026-03-18",
    description: "Google DeepMind 是 Google 旗下的 AI 研究机构，在大模型、机器人、具身智能等领域处于领先地位。",
    highlights: [
      "Gemini Robotics 具身智能",
      "SIMA 2 智能体",
      "Genie 3 世界模型",
      "AI-Driven Flash Flood Forecasting"
    ],
    publications: 240,
    updates: [
      {
        id: "check-up-2026",
        title: "Google Research at The Check Up: Healthcare Innovation",
        date: "2026-03-17",
        summary: "从医疗创新到真实临床环境的AI应用",
        url: "https://research.google/blog/google-research-at-the-check-up-from-healthcare-innovation-to-real-world-care-settings/",
        type: "blog"
      },
      {
        id: "breast-cancer-ml",
        title: "Improving Breast Cancer Screening with ML",
        date: "2026-03-17",
        summary: "用机器学习改进乳腺癌筛查工作流",
        url: "https://research.google/blog/improving-breast-cancer-screening-workflows-with-machine-learning/",
        type: "blog"
      },
      {
        id: "llm-superconductivity",
        title: "Testing LLMs on Superconductivity Research Questions",
        date: "2026-03-16",
        summary: "测试大语言模型在超导研究问题上的表现",
        url: "https://research.google/blog/testing-llms-on-superconductivity-research-questions/",
        type: "blog"
      },
      {
        id: "flash-flood",
        title: "Protecting Cities with AI-Driven Flash Flood Forecasting",
        date: "2026-03-12",
        summary: "AI驱动的山洪预报保护城市安全",
        url: "https://research.google/blog/protecting-cities-with-ai-driven-flash-flood-forecasting/",
        type: "blog"
      },
      {
        id: "groundsource",
        title: "Introducing Groundsource: News Reports to Data with Gemini",
        date: "2026-03-12",
        summary: "用Gemini将新闻报道转化为结构化数据",
        url: "https://research.google/blog/introducing-groundsource-turning-news-reports-into-data-with-gemini/",
        type: "blog"
      },
      {
        id: "bayesian-reasoning",
        title: "Teaching LLMs to Reason Like Bayesians",
        date: "2026-03-04",
        summary: "教大语言模型像贝叶斯方法一样推理",
        url: "https://research.google/blog/teaching-llms-to-reason-like-bayesians/",
        type: "blog"
      }
    ]
  },
  "openai": {
    id: "openai",
    name: "OpenAI",
    shortName: "OpenAI",
    logo: "https://openai.com/favicons/favicon-32x32.png",
    lastUpdated: "2026-03-18",
    description: "OpenAI 是领先的人工智能研究机构，开发了 GPT 系列、o 系列推理模型和 Sora 视频生成模型。",
    highlights: [
      "GPT-5.3 Instant / Codex",
      "o3 & o4-mini 推理模型",
      "Sora 2 视频生成",
      "Voice Agents 音频模型"
    ],
    publications: 20,
    updates: [
      {
        id: "gpt53-instant",
        title: "GPT-5.3 Instant",
        date: "2026-03-10",
        summary: "最新一代GPT模型，Instant变体，高效快速",
        url: "https://openai.com/index/gpt-5-3-instant/",
        type: "product"
      },
      {
        id: "gpt53-codex",
        title: "GPT-5.3-Codex",
        date: "2026-03-10",
        summary: "代码专用的GPT-5.3变体",
        url: "https://openai.com/index/introducing-gpt-5-3-codex/",
        type: "product"
      },
      {
        id: "gpt52",
        title: "GPT-5.2: Advanced Frontier Model",
        date: "2025-12-11",
        summary: "专业工作和长时运行智能体的高级 frontier 模型",
        url: "https://openai.com/index/introducing-gpt-5-2/",
        type: "product"
      },
      {
        id: "sora2",
        title: "Sora 2: Physically Accurate Video Generation",
        date: "2025-09-30",
        summary: "物理准确、可控的视频生成，支持同步对话和音效",
        url: "https://openai.com/index/sora-2/",
        type: "product"
      }
    ]
  },
  "meta": {
    id: "meta",
    name: "Meta FAIR",
    shortName: "FAIR",
    logo: "https://about.facebook.com/favicon.ico",
    lastUpdated: "2026-03-18",
    description: "Meta AI Research (FAIR) 是 Meta 的 AI 研究部门，在计算机视觉、开源大模型、具身智能等领域有重要贡献。",
    highlights: [
      "Video World Model (SOTA视觉理解)",
      "Behavioral Foundation Model (人形虚拟智能体)",
      "SAM 2 图像分割",
      "Code World Models + RL"
    ],
    publications: 50,
    updates: [
      {
        id: "meta-video-world-model",
        title: "First Video-Trained World Model with SOTA Vision",
        date: "2026-03-15",
        summary: "首个在视频上训练的世界模型，实现最先进视觉理解和预测",
        url: "https://ai.meta.com/research/",
        type: "research"
      },
      {
        id: "meta-face-to-face",
        title: "Face-to-Face Dynamics Research Model",
        date: "2026-03-10",
        summary: "面部表情、主动倾听、轮替对话和视觉同步的AI研究模型",
        url: "https://ai.meta.com/research/",
        type: "research"
      },
      {
        id: "meta-behavioral-foundation",
        title: "Behavioral Foundation Model for Embodied Humanoid Agents",
        date: "2026-02-28",
        summary: "首个用于具身人形虚拟智能体的行为基础模型",
        url: "https://ai.meta.com/research/",
        type: "research"
      },
      {
        id: "meta-code-world-models",
        title: "Code World Models & RL with Execution Feedback",
        date: "2026-02-20",
        summary: "代码世界模型作为代码和智能体的基础模型，执行反馈强化学习",
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
    lastUpdated: "2026-03-18",
    description: "Anthropic 是 Claude 大模型的开发商，专注于 AI 安全性、可解释性研究。",
    highlights: [
      "Claude New Constitution (Jan 2026)",
      "AI Fluency Index 教育报告",
      "Assistant Axis 可解释性",
      "Agent Autonomy 实证研究"
    ],
    publications: 15,
    updates: [
      {
        id: "anthropic-persona-selection",
        title: "The Persona Selection Model: Multi-Persona Safety",
        date: "2026-03-11",
        summary: "Anthropic的多人格安全选择模型方法",
        url: "https://www.anthropic.com/research/persona-selection-model",
        type: "paper"
      },
      {
        id: "ai-fluency-index",
        title: "AI Fluency Index: Education Report",
        date: "2026-02-23",
        summary: "Anthropic教育报告：AI素养指数",
        url: "https://www.anthropic.com/research/AI-fluency-index",
        type: "research"
      },
      {
        id: "agent-autonomy",
        title: "Measuring AI Agent Autonomy in Practice",
        date: "2026-02-18",
        summary: "实践中测量AI智能体的自主性",
        url: "https://www.anthropic.com/research/measuring-agent-autonomy",
        type: "paper"
      },
      {
        id: "claude-constitution",
        title: "Claude's New Constitution",
        date: "2026-01-22",
        summary: "Claude发布新版宪章，更新安全准则",
        url: "https://www.anthropic.com/news/claude-new-constitution",
        type: "research"
      },
      {
        id: "assistant-axis",
        title: "The Assistant Axis: Stabilizing LLM Character",
        date: "2026-01-19",
        summary: "定位和稳定大语言模型角色的assistant axis研究",
        url: "https://www.anthropic.com/research/assistant-axis",
        type: "paper"
      }
    ]
  },
  "nvidia": {
    id: "nvidia",
    name: "NVIDIA",
    shortName: "NVIDIA",
    logo: "https://www.nvidia.com/favicon.ico",
    lastUpdated: "2026-03-18",
    description: "NVIDIA 在 GPU 计算、AI 芯片领域处于领先地位，同时在机器人、具身智能、视频生成等领域有重要研究。",
    highlights: [
      "GalaxyDiT 视频生成",
      "ScheduleStream 机器人任务规划",
      "3D深度学习与空间智能",
      "NeurIPS(48) SIGGRAPH(77) 顶会论文"
    ],
    publications: 8,
    updates: [
      {
        id: "galaxydit",
        title: "GalaxyDiT: Efficient Video Generation in Diffusion Transformers",
        date: "2026-07",
        summary: "基于引导对齐和自适应代理的高效Diffusion Transformer视频生成",
        url: "https://research.nvidia.com/publication/2026-07_galaxydit-efficient-video-generation-guidance-alignment-and-adaptive-proxy",
        type: "paper"
      },
      {
        id: "schedulestream",
        title: "ScheduleStream: GPU-Accelerated Multi-Arm Task Planning",
        date: "2026-06",
        summary: "GPU加速的多臂任务和运动规划调度，时序规划采样器",
        url: "https://research.nvidia.com/publication/2026-06_schedulestream-temporal-planning-samplers-gpu-accelerated-multi-arm-task-and",
        type: "paper"
      }
    ]
  },
  "apple": {
    id: "apple",
    name: "Apple ML",
    shortName: "Apple",
    logo: "https://www.apple.com/favicon.ico",
    lastUpdated: "2026-03-18",
    description: "Apple Machine Learning Research 专注端侧AI、计算机视觉、隐私保护等领域，持续在 ICLR/CVPR 等顶会发表高质量论文。",
    highlights: [
      "TrajTok 视频理解 (CVPR 2026)",
      "LiTo 光场Token化 (ICLR 2026)",
      "GenCtrl 生成模型可控性 (ICLR 2026)",
      "Flow Matching 半离散耦合 (ICLR 2026)"
    ],
    publications: 9,
    updates: [
      {
        id: "trajtok",
        title: "TrajTok: Trajectory Tokens for Video Understanding",
        date: "2026-03-17",
        summary: "学习轨迹Token实现更好的视频理解，CVPR 2026",
        url: "https://machinelearning.apple.com/research/trajtok",
        type: "paper"
      },
      {
        id: "rubicap",
        title: "RubiCap: Rubric-Guided RL for Dense Image Captioning",
        date: "2026-03-15",
        summary: "基于评分标准的强化学习密集图像描述生成",
        url: "https://machinelearning.apple.com/research/rubicap",
        type: "paper"
      },
      {
        id: "lito",
        title: "LiTo: Surface Light Field Tokenization",
        date: "2026-03-10",
        summary: "表面光场Token化方法，ICLR 2026",
        url: "https://machinelearning.apple.com/research/lito",
        type: "paper"
      },
      {
        id: "genctrl",
        title: "GenCtrl: Formal Controllability Toolkit for Generative Models",
        date: "2026-03-08",
        summary: "生成模型形式化可控性工具包，ICLR 2026",
        url: "https://machinelearning.apple.com/research/genctrl",
        type: "paper"
      },
      {
        id: "ames",
        title: "AMES: Approximate Multi-modal Enterprise Search",
        date: "2026-03-05",
        summary: "基于晚期交互检索的多模态企业搜索近似方法",
        url: "https://machinelearning.apple.com/research/ames",
        type: "paper"
      }
    ]
  },
  "microsoft": {
    id: "microsoft",
    name: "Microsoft Research",
    shortName: "MSR",
    logo: "https://www.microsoft.com/favicon.ico",
    lastUpdated: "2026-03-18",
    description: "Microsoft Research 在 AI 推理模型、智能体框架、医疗AI等领域持续产出高质量研究。",
    highlights: [
      "Phi-4-reasoning-vision-15B 开源多模态推理",
      "AgentRx 智能体调试框架",
      "PlugMem 智能体记忆复用",
      "Project Silica 玻璃存储 (Nature)"
    ],
    publications: 6,
    updates: [
      {
        id: "agentrx",
        title: "AgentRx: Systematic Debugging for AI Agents",
        date: "2026-03-17",
        summary: "AI智能体系统性调试框架，解决自主系统的透明度挑战",
        url: "https://www.microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework/",
        type: "blog"
      },
      {
        id: "plugmem",
        title: "PlugMem: Raw Interactions to Reusable Knowledge",
        date: "2026-03-10",
        summary: "将原始智能体交互转化为可复用知识，解决记忆膨胀问题",
        url: "https://www.microsoft.com/en-us/research/blog/from-raw-interaction-to-reusable-knowledge-rethinking-memory-for-ai-agents/",
        type: "blog"
      },
      {
        id: "phi4-rv",
        title: "Phi-4-reasoning-vision-15B: Open Multimodal Reasoning",
        date: "2026-03-04",
        summary: "150亿参数开源多模态推理模型，广泛适用于视觉推理任务",
        url: "https://www.microsoft.com/en-us/research/blog/phi-4-reasoning-vision-and-the-lessons-of-training-a-multimodal-reasoning-model/",
        type: "blog"
      },
      {
        id: "corpgen",
        title: "CORPGEN: AI Agents for Real Work",
        date: "2026-02-26",
        summary: "推进AI智能体处理真实企业工作的能力",
        url: "https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/",
        type: "blog"
      },
      {
        id: "silica",
        title: "Project Silica: Glass Storage Technology (Nature)",
        date: "2026-02-15",
        summary: "硼硅玻璃数据编码新技术，支持10000年数据保存，发表于Nature",
        url: "https://www.microsoft.com/en-us/research/blog/project-silicas-advances-in-glass-storage-technology/",
        type: "paper"
      }
    ]
  }
};

export default companies;
