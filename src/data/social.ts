// 大V社交媒体数据 - 由 cron 任务每日更新

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
    bio: "科技领域知名博主，专注于AI、加密货币等前沿科技话题。",
    avatar: "https://pbs.twimg.com/profile_images/1886389973236011008/7EZHFw9k_200x200.jpg",
    followers: "",
    categories: ["科技", "AI", "加密货币"],
    recentPosts: [
      {
        id: "0",
        content: "Benchmarked Fable 5 vs Opus 4.8 for PR quality. 100 blind tests across 50 brands. Fable beat Opus 77% of the time using GPT-5.5 xhigh as neutral judge. Fable swept 6/7 quality dimensions. Open-source at newsjack.sh",
        date: "2026-06-10",
        likes: 0,
        reposts: 0,
        url: "https://www.linkedin.com/posts/elvissun_we-benchmarked-fable-5-vs-opus-48-for-pr-activity-7470470613267234816-2xZo"
      },
      {
        id: "1",
        content: "2.9M views in one day. Karpathy called my agent swarm setup 'brilliant or severe AI psychosis.' Building a $17k/mo SaaS as a solo founder with a 4-year-old and 6-month-old.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun/status/2026628017158762790"
      },
      {
        id: "2",
        content: "Unpopular opinion: The best founders now are devs who learned marketing.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun"
      },
      {
        id: "3",
        content: "If you can code + understand marketing, you'll never go broke.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun"
      }
    ]
  },
  "trg212": {
    id: "trg212",
    name: "Tharig",
    platform: "X (Twitter)",
    handle: "@trg212",
    bio: "科技领域知名博主。",
    avatar: "",
    followers: "",
    categories: ["科技", "AI"],
    recentPosts: [
      {
        id: "0",
        content: "Opus 4.8 is as smart as its benchmarks show but expresses intelligence in a warm and collaborative way. Workflows are a great way to utilize it.",
        date: "2026-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/trq212"
      },
      {
        id: "1",
        content: "Used Fable to edit its own launch video - wrote code for transcription, ffmpeg, colorgrading, Figma MCP, Remotion UI rendering. No video editor touched.",
        date: "2026-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/trq212"
      }
    ]: {
    id: "karpathy",
    name: "Andrej Karpathy",
    platform: "X (Twitter)",
    handle: "@karpathy",
    bio: "特斯拉前AI总监，OpenAI创始成员。专注于自动驾驶、神经网络和计算机视觉。",
    avatar: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_200x200.jpg",
    followers: "120万",
    recentPosts: [
      {
        id: "0",
        content: "No new public tweets found this week. Active primarily on X/Twitter (requires authenticated access).",
        date: "2026-06-22",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy"
      },
      {
        id: "1",
        id: "1",
        content: "Replied to Sarah Guo's No Priors podcast: on the phase shift in engineering, AI psychosis, claws, AutoResearch, SETI-at-Home movement in AI, model landscape, and second order effects. 575K+ views.",
        date: "2026-03-21",
        likes: 361,
        reposts: 250,
        url: "https://x.com/karpathy/status/2035158351357911527"
      },
      {
        id: "2",
        content: "Andy Weir showing spreadsheets underlying calculations in the book. 'It's not quality scifi if it doesn't come with a supplementary whitepaper.'",
        date: "2026-03-20",
        likes: 46,
        reposts: 36,
        url: "https://x.com/karpathy/status/2034873049753997619"
      },
      {
        id: "3",
        content: "Project Hail Mary movie review: stays close to book in content and tone, well executed. Praised scientific depth of alien portrayal. 'Does really well where it counts - on Rocky and the bromance.'",
        date: "2026-03-20",
        likes: 307,
        reposts: 333,
        url: "https://x.com/karpathy/status/2034865693544604001"
      },
      {
        id: "4",
        content: "Ugh X breaks time links, it's at 26:17",
        date: "2026-03-18",
        likes: 5,
        reposts: 22,
        url: "https://x.com/karpathy/status/2034329390377762848"
      }
    ]
  },
  "ylecun": {
    id: "ylecun",
    name: "Yann LeCun",
    platform: "X (Twitter)",
    handle: "@ylecun",
    bio: "Meta AI首席科学家，NYU教授，图灵奖得主。对深度学习和AI有着独特的见解。",
    avatar: "https://pbs.twimg.com/profile_images/1483577865056702469/rWA-3_T7_200x200.jpg",
    followers: "100万",
    categories: ["深度学习", "AI理论", "开源", "VLA模型"],
    recentPosts: [
      {
        id: "0",
        content: "Called xAI 'kind of a failure' in CNBC interview. Founding team left or was fired. Warned AI industry bubble: all companies losing money, use funded by investors, can't go on very long. AMI Labs raised ~$1bn on world model thesis.",
        date: "2026-06-18",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "1",
        content: "Over 80 technical papers published since January 2022. What about you?",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "2",
        content: "X is a $44 billion propaganda machine. Yet it attempts to disguise itself as a defender of unfettered free speech.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "3",
        content: "Llama-v2 is open source with commercial license. This is going to change the landscape of the LLM market.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "4",
        content: "The best defense against a mind virus is intelligence, knowledge, and science.",
        date: "2026-03-06",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      }
    ]
  },
  "kaiming": {
    id: "kaiming",
    name: "Kaiming He",
    platform: "X (Twitter)",
    handle: "@kaiming",
    bio: "FAIR研究科学家，Mask R-CNN, ResNet作者。",
    avatar: "",
    followers: "3",
    categories: ["深度学习", "计算机视觉"],
    recentPosts: []
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
