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
  "karpathy": {
    id: "karpathy",
    name: "Andrej Karpathy",
    platform: "X (Twitter)",
    handle: "@karpathy",
    bio: "特斯拉前AI总监，OpenAI创始成员。专注于自动驾驶、神经网络和计算机视觉。",
    avatar: "https://pbs.twimg.com/profile_images/1594518828893073408/0mqrk5rv_400x400.jpg",
    followers: "120万",
    categories: ["自动驾驶", "深度学习", "VLA模型", "教育"],
    recentPosts: [
      {
        id: "1",
        content: "关于VLA模型的最新思考：端到端架构正在改变机器人学习的范式...",
        date: "2026-03-01",
        likes: 5200,
        reposts: 890,
        url: "https://twitter.com/karpathy/status/xxx"
      },
      {
        id: "2",
        content: "教育改革：让每个人都学会编程的时代已经到来",
        date: "2026-02-28",
        likes: 3800,
        reposts: 420,
        url: "https://twitter.com/karpathy/status/xxx"
      }
    ]
  },
  "ylecun": {
    id: "ylecun",
    name: "Yann LeCun",
    platform: "X (Twitter)",
    handle: "@ylecun",
    bio: "Meta AI首席科学家，NYU教授，图灵奖得主。对深度学习和AI有着独特的见解。",
    avatar: "https://pbs.twimg.com/profile_images/1438663072583655425/xs-Fpz0z_400x400.jpg",
    followers: "100万",
    categories: ["深度学习", "AI理论", "开源", "VLA模型"],
    recentPosts: [
      {
        id: "1",
        content: "关于自主智能的思考：我们需要能够学习的AI，而不是仅仅记忆的AI...",
        date: "2026-03-01",
        likes: 4800,
        reposts: 720,
        url: "https://twitter.com/ylecun/status/xxx"
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
