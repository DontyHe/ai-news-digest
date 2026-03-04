// 科技公司研究动态数据 - 由 cron 任务每日更新
// 更新日期: 2026-03-04

export interface CompanyUpdate {
  name: string;
  lastUpdated: string;
  highlights: string[];
  publications: number;
}

export const companies: CompanyUpdate[] = [
  {
    name: "Google DeepMind",
    lastUpdated: "2026-03-04",
    highlights: [
      "Gemma 3 开源模型发布",
      "Veo 2 视频生成",
      "Agent系统扩展性研究",
      "Teaching AI to read a map"
    ],
    publications: 130
  },
  {
    name: "OpenAI",
    lastUpdated: "2026-03-04",
    highlights: [
      "GPT-5 系列更新 (5.1, 5.2)",
      "o3 & o4-mini 推理模型",
      "Sora 2 视频生成",
      "Voice Agents 音频模型"
    ],
    publications: 20
  },
  {
    name: "Meta FAIR",
    lastUpdated: "2026-03-04",
    highlights: [
      "SAM 3 发布",
      "DINOv3 视觉骨干",
      "V-JEPA 2 世界模型",
      "Seamless Interaction"
    ],
    publications: 50
  },
  {
    name: "Anthropic",
    lastUpdated: "2026-03-04",
    highlights: [
      "Claude 可解释性研究",
      "Alignment faking 研究",
      "Constitutional Classifiers",
      "Project Vend 实验"
    ],
    publications: 15
  },
  {
    name: "NVIDIA",
    lastUpdated: "2026-03-04",
    highlights: [
      "3D-GENERALIST VLA模型",
      "Physical AI 研究",
      "天气预测模型",
      "Isaac Lab 机器人仿真"
    ],
    publications: 8
  }
];
