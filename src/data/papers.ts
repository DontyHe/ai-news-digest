// 论文数据 - 由 cron 任务每日更新
// 更新路径: /home/Hebin/project/ai-news-digest/src/data/papers.ts

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
  id: "260624884",
  title: "InSight: Self-Guided Skill Acquisition via Steerable VLAs",
  authors: "Maggie J. Johnson, Liang Pan, Chelsea Finn",
  date: "2026-06-26",
  institution: "Stanford University",
  category: "vla",
  summary: "We present InSight, a framework that enables VLAs to self-guide skill acquisition by decomposing complex tasks into primitive-level controllable units. Our approach leverages VLMs to automatically dis...",
  background: "研究背景待完善",
  architecture: "架构分析待完善",
  innovations: "创新点待完善",
  inspiration: "启发待完善",
  pdfUrl: "https://arxiv.org/pdf/2606.24884",
  htmlUrl: "https://arxiv.org/abs/2606.24884",
  figures: []
},
{
  id: "260624742",
  title: "World Value Models for Robotic Manipulation",
  authors: "Zhihao Wang, Yilun Du, Jiajun Wu",
  date: "2026-06-26",
  institution: "MIT",
  category: "embodied",
  summary: "We introduce World Value Models (WVM) that combine the temporal modeling capabilities of world models with value estimation. WVM achieves SOTA performance on Value-Order Correlation benchmarks on mixe...",
  background: "研究背景待完善",
  architecture: "架构分析待完善",
  innovations: "创新点待完善",
  inspiration: "启发待完善",
  pdfUrl: "https://arxiv.org/pdf/2606.24742",
  htmlUrl: "https://arxiv.org/abs/2606.24742",
  figures: []
},
{
  id: "260624472",
  title: "G³VLA: Geometric Inductive Bias for VLA Models",
  authors: "Xingchen Wan, Weize Chen, Hao Su",
  date: "2026-06-26",
  institution: "NYU Shanghai, DTU",
  category: "vla",
  summary: "G³VLA injects geometric priors into VLA models through ray embeddings, PRoPE, and cross-view fusion, improving spatial generalization without modifying backbone or action space....",
  background: "研究背景待完善",
  architecture: "架构分析待完善",
  innovations: "创新点待完善",
  inspiration: "启发待完善",
  pdfUrl: "https://arxiv.org/pdf/2606.24472",
  htmlUrl: "https://arxiv.org/abs/2606.24472",
  figures: []
},
];
