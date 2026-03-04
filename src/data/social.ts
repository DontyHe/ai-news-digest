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
        id: "1",
        content: "2.9M views in one day. Karpathy called my agent swarm setup 'brilliant or severe AI psychosis.' Building a $17k/mo SaaS as a solo founder with a 4-year-old and 6-month-old.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun/status/2026628017158762790"
      },
      {
        id: "2",
        content: "Unpopular opinion: The best founders now are devs who learned marketing.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/elvissun"
      },
      {
        id: "3",
        content: "If you can code + understand marketing, you'll never go broke.",
        date: "2026-03-04",
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
    recentPosts: []
  },
  "karpathy": {
    id: "karpathy",
    name: "Andrej Karpathy",
    platform: "X (Twitter)",
    handle: "@karpathy",
    bio: "特斯拉前AI总监，OpenAI创始成员。专注于自动驾驶、神经网络和计算机视觉。",
    avatar: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_200x200.jpg",
    followers: "120万",
    categories: ["自动驾驶", "深度学习", "VLA模型", "教育"],
    recentPosts: [
      {
        id: "1",
        content: "The hottest new programming language is English. Agency > Intelligence. Agency is significantly more powerful and significantly more scarce.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy"
      },
      {
        id: "2",
        content: "Excited to announce Eureka Labs - building a new kind of school that is AI native.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy/status/1813263734707790301"
      },
      {
        id: "3",
        content: "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy"
      },
      {
        id: "4",
        content: "Just vibe coded a whole iOS app in Swift (without having programmed in Swift before) in ~1 hour and it's running on my physical phone.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy"
      },
      {
        id: "5",
        content: "Took delivery of a new HW4 Tesla Model X. FSD test drive - it drives really, really well, smooth, confident, noticeably better.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/karpathy"
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
        id: "1",
        content: "Over 80 technical papers published since January 2022. What about you?",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "2",
        content: "X is a $44 billion propaganda machine. Yet it attempts to disguise itself as a defender of unfettered free speech.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "3",
        content: "Llama-v2 is open source with commercial license. This is going to change the landscape of the LLM market.",
        date: "2026-03-04",
        likes: 0,
        reposts: 0,
        url: "https://x.com/ylecun"
      },
      {
        id: "4",
        content: "The best defense against a mind virus is intelligence, knowledge, and science.",
        date: "2026-03-04",
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
