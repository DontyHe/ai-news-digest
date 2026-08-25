// 大V社交媒体数据 - 由 cron 任务每日更新
// Last updated: 2026-08-24

export interface SocialPost {
  id: string;
  content: string;
  date: string;
  likes: number;
  reposts: number;
  url: string;
}

export interface Influencer {
  id: string;
  name: string;
  platform: string;
  handle: string;
  bio: string;
  avatar: string;
  followers: string;
  categories: string[];
  recentPosts: SocialPost[];
}

export const socialData: Record<string, Influencer> = {
  "elvissun": {
    id: "elvissun",
    name: "Elvis",
    platform: "X (Twitter)",
    handle: "@elvissun",
    bio: "Solo founder building Medialyst (AI PR platform). Previously Google 8 years. Building in public with AI agents.",
    avatar: "https://pbs.twimg.com/profile_images/1886389973236011008/7EZHFw9k_200x200.jpg",
    followers: "45k+",
    categories: ["AI", "创业", "PR"],
    recentPosts: [
      {
        id: "0",
        content: "BIG NEWS: Claude is embedding a hidden watermark in all AI-content. Journalists will soon have no problem deleting AI pitches in their inbox.",
        date: "2026-08-11",
        likes: 0,
        reposts: 0,
        url: "https://www.linkedin.com/posts/elvissun_big-news-claude-is-embedding-a-hidden-watermark-activity-7492937509660729344-Wv6n"
      },
      {
        id: "1",
        content: "Marketing is dead and PR is the last channel that'll remain. There's now more content than ever. But attention did not scale at all. My X account has 45k followers but I'm treating our newsletters as 10x more valuable.",
        date: "2026-08",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun"
      },
      {
        id: "2",
        content: "Benchmarked Fable 5 vs Opus 4.8 for PR quality. 100 blind tests across 50 brands. Fable beat Opus 77% of the time using GPT-5.5 xhigh as neutral judge.",
        date: "2026-06-10",
        likes: 0,
        reposts: 0,
        url: "https://www.linkedin.com/posts/elvissun"
      },
      {
        id: "3",
        content: "2.9M views in one day. Karpathy called my agent swarm setup 'brilliant or severe AI psychosis.' Building a $17k/mo SaaS as a solo founder with a 4-year-old and 6-month-old.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun/status/2026628017158762790"
      }
    ]
  },
  "trg212": {
    id: "trg212",
    name: "Thariq",
    platform: "X (Twitter)",
    handle: "@trq212",
    bio: "Claude Code @anthropicai. prev YC W20, MIT Media Lab. Towards machines of loving grace.",
    avatar: "",
    followers: "237k",
    categories: ["AI", "Agent", "Claude Code"],
    recentPosts: [
      {
        id: "0",
        content: "Making Proactive Agents with Code Generation - Using Claude Code SDK to build an email agent that generates callbacks for processing emails. Code generation in a sandbox powered by an agent is one of the most powerful tools for creating radically new user experiences.",
        date: "2026-08",
        likes: 0,
        reposts: 0,
        url: "https://threadreaderapp.com/thread/1988351918448714207.html"
      },
      {
        id: "1",
        content: "Claude Code Weekly Round Up: subagents resumable, Plan subagent, prompt-based stop hooks. Replacing output styles with more powerful alternatives. Also added support for Claude Skills and interactive questions tool.",
        date: "2026-08",
        likes: 0,
        reposts: 0,
        url: "https://threadreaderapp.com/thread/1988351918448714207.html"
      },
      {
        id: "2",
        content: "Why even non-agents need bash. My advice to companies boils down to: 'use the bash tool more'. Concrete example from email agent: write emails to a file, let agent grep across them instead of dumping into context.",
        date: "2026-08",
        likes: 0,
        reposts: 0,
        url: "https://www.techtwitter.com/profiles/trq212"
      },
      {
        id: "3",
        content: "I'm sad it took me this long to actually type /design but working on frontend with Claude Design and Claude Code is actually so good.",
        date: "2026-08",
        likes: 0,
        reposts: 0,
        url: "https://www.techtwitter.com/profiles/trq212"
      }
    ]
  },
  "karpathy": {
    id: "karpathy",
    name: "Andrej Karpathy",
    platform: "X (Twitter)",
    handle: "@karpathy",
    bio: "Anthropic AI researcher. Co-founded OpenAI. Previously Tesla Autopilot. Eureka Labs founder. Coinc 'vibe coding'.",
    avatar: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_200x200.jpg",
    followers: "120万",
    categories: ["深度学习", "AI", "Vibe Coding"],
    recentPosts: [
      {
        id: "0",
        content: "LLMs not as chatbots, but the kernel process of a new Operating System. Orchestrating modalities (text, vision, audio I/O), tools (code interpreter, browser), file system resources, apps. Currently single-threaded at ~10Hz (tok/s). Windows/OSX/Linux <-> GPT/PaLM/Claude/Llama.",
        date: "2026-08-17",
        likes: 0,
        reposts: 0,
        url: "https://www.unrollnow.com/status/1707437820045062561"
      },
      {
        id: "1",
        content: "Gave Opus 5 the first paragraph of Lord of the Rings, a 1M token budget (~$10), asked for a three.js render. Opus wrote 5500 lines of code that procedurally rendered the story in 2 hours. Excited about creating hyper custom ephemeral GTA-like worlds on demand.",
        date: "2026-08-02",
        likes: 0,
        reposts: 0,
        url: "https://unrollnow.com/status/2083749667410727319"
      },
      {
        id: "2",
        content: "The race for LLM 'cognitive core': a few billion param model that maximally sacrifices encyclopedic knowledge for capability. Lives always-on on every computer. Natively multimodal, Matryoshka architecture, on-device LoRA slots, delegates to cloud oracles when available.",
        date: "2026-07-26",
        likes: 0,
        reposts: 0,
        url: "https://unrollnow.com/status/1938626382248149433"
      },
      {
        id: "3",
        content: "Sequoia Ascent 2026: Software 3.0 is programming through prompting. LLMs are no longer chatbots, they are becoming a new programmable layer for digital work. 'Traditional computers automate what you can specify in code. This latest round of LLMs can automate what you can verify.'",
        date: "2026-07",
        likes: 0,
        reposts: 0,
        url: "https://karpathy.bearblog.dev/sequoia-ascent-2026/"
      },
      {
        id: "4",
        content: "Sometimes I turn on voice mode and ramble at an LLM for ~10 minutes. 'Total mess, anything goes, full stream of consciousness.' The LLM needs more bits to understand what you're trying to achieve. Stop writing beautiful prompts. Just ramble.",
        date: "2026-07-24",
        likes: 0,
        reposts: 0,
        url: "https://www.businessinsider.com/andrej-karpathy-ramble-llm-ai-anthropic-2026-7"
      }
    ]
  },
  "ylecun": {
    id: "ylecun",
    name: "Yann LeCun",
    platform: "X (Twitter) / LinkedIn / Threads",
    handle: "@ylecun",
    bio: "NYU教授，AMI Labs联合创始人(2025年底离开Meta)。图灵奖得主。2024年12月起不再在X上发布原创内容，主要活跃于LinkedIn和Threads。",
    avatar: "https://pbs.twimg.com/profile_images/1483577865056702469/rWA-3_T7_200x200.jpg",
    followers: "100万",
    categories: ["深度学习", "AI理论", "世界模型", "JEPA"],
    recentPosts: [
      {
        id: "0",
        content: "New paper: RelArena-α (open-source relational learning benchmark), TabPFN-Rel (#1 on benchmark), RPI (model-agnostic prediction interface). Prior Labs first release.",
        date: "2026-08-17",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2608.16319"
      },
      {
        id: "1",
        content: "LeDXA: JEPA-based self-supervised learning on DXA scans. Outperforms DINOv3 on disease prediction with 150,000x fewer training images. Biological age prediction r=0.88.",
        date: "2026-08-03",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2608.02208"
      },
      {
        id: "2",
        content: "HP-JEPA: Hierarchical multi-resolution graph JEPA. Outperforms fixed-resolution Graph-JEPA on 6/8 tasks.",
        date: "2026-08-01",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2608.00491"
      },
      {
        id: "3",
        content: "Patch Policy: Dense ViT patch tokens for robot control. 40% improvement over global-pooled representations, surpasses OpenVLA-OFT by 18% with 0.7% of parameters.",
        date: "2026-07-20",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2607.18236"
      },
      {
        id: "4",
        content: "Music-JEPA: Learning a world model of piano sound from action. Audio as state, pianoroll as action. Supports beat tracking, composer ID, key estimation, and piano transcription via planning.",
        date: "2026-07-24",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2607.22000"
      }
    ]
  },
  "kaiming": {
    id: "kaiming",
    name: "Kaiming He",
    platform: "X (Twitter)",
    handle: "@kaiming",
    bio: "FAIR研究科学家，Mask R-CNN, ResNet作者。近期聚焦于生成式视觉预训练作为通用CV基础模型。",
    avatar: "",
    followers: "3",
    categories: ["深度学习", "计算机视觉", "生成式视觉预训练"],
    recentPosts: [
      {
        id: "0",
        content: "GenCeption: Video generation models as general-purpose vision learners. SOTA on depth, surface normal, camera pose, referring segmentation, 3D keypoints. ECCV 2026.",
        date: "2026-07-10",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2607.09024"
      },
      {
        id: "1",
        content: "Vision Banana: Image generators are generalist vision learners. Instruction-tuning NBP to reframe perception as image generation. Beats SAM3 on segmentation, Depth Anything on metric depth.",
        date: "2026-06-03",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2604.20329"
      },
      {
        id: "2",
        content: "ELF: Embedded Language Flows. Continuous diffusion language model via Flow Matching in embedding space. Outperforms leading discrete and continuous DLMs.",
        date: "2026-06-25",
        likes: 0,
        reposts: 0,
        url: "https://arxiv.org/abs/2605.10938"
      }
    ]
  },
  "sanjay": {
    id: "sanjay",
    name: "Sanjay Geist",
    platform: "X (Twitter)",
    handle: "@sanjaygim",
    bio: "谷歌DeepMind具身智能研究负责人。领导RT系列机器人模型的研究。",
    avatar: "https://pbs.twimg.com/profile_images/1583677086482845696/0Hv7gJ7z_400x400.jpg",
    followers: "45万",
    categories: ["具身智能", "机器人", "RT模型", "Google DeepMind"],
    recentPosts: [
      {
        id: "1",
        content: "RT-3发布：机器人基础模型的新里程碑...",
        date: "2026-03-01",
        likes: 3200,
        reposts: 580,
        url: "https://twitter.com/sanjaygim/status/xxx"
      }
    ]
  }
};

export default socialData;
