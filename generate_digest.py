import json

# Load papers
with open('detailed_papers.json') as f:
    papers1 = json.load(f)
with open('retry_papers.json') as f:
    papers2 = json.load(f)

all_papers = {p['id']: p for p in papers1}
for p in papers2:
    all_papers[p['id']] = p

# Papers to include
selected = ['2603.12263', '2603.12260', '2603.11653', '2603.11558', '2603.12243', '2603.12193', '2603.10871']

digest = """# 具身智能论文 Digest - 2026年3月第2周

> 更新日期: 2026-03-14
> 关键词: World Model, Embodied AI, VLA, Robotics Foundation Model, End-to-end Robotics

---

"""

for pid in selected:
    p = all_papers.get(pid, {})
    title = p.get('title', 'N/A')
    authors = p.get('authors', [])
    published = p.get('published', 'N/A')
    categories = p.get('categories', [])
    summary = p.get('summary', '')
    comment = p.get('comment', '')
    
    # Generate summary based on paper content
    summaries = {
        '2603.12263': {
            'one_sentence': 'Ψ0是一个开源人形机器人基础模型，通过分阶段训练范式解耦学习过程，在仅使用800小时人类视频和30小时机器人数据的情况下超越了使用10倍以上数据的基线。',
            'background': '人形机器人 loco-manipulation 是一个基础性问题。传统方法尝试在大量异构人形数据上联合训练，但因人与机器人之间的运动学差异而效果不佳。',
            'innovation': '分阶段训练：先用大规模egocentric人类视频预训练VLM backbone获取可泛化的视觉-动作表示，然后基于高质量人形机器人数据微调flow-based action expert学习精确关节控制。',
            'inspiration': '数据质量 > 数据量。预训练用高质量egocentric人类操作数据 + 领域特定的真实机器人轨迹，比使用10倍以上噪声数据效果更好。'
        },
        '2603.12260': {
            'one_sentence': 'HumDex提出一个简化的人形机器人灵巧操作框架，让开发者无需深入专业知识即可实现复杂操作任务。',
            'background': '人形机器人灵巧操作需要高度专业的知识，严重依赖专家经验和大量手动调试。',
            'innovation': '简化操作流程，提供开箱即用的解决方案，降低技术门槛。',
            'inspiration': '降低机器人操作门槛对推动领域发展很重要。'
        },
        '2603.11653': {
            'one_sentence': '研究发现简单的Sequential Fine-Tuning + LoRA对VLA模型的持续强化学习非常有效，能够在高可塑性和低灾难性遗忘之间取得良好平衡。',
            'background': '持续强化学习(CRL)是实现自我改进的具身智能体的关键方向，传统观点认为顺序微调会导致灾难性遗忘。',
            'innovation': '系统性地证明简单Seq.FT + LoRA在大规模预训练VLA上表现优异，LoRA参数高效微调与on-policy RL的协同作用重塑了稳定性-可塑性权衡。',
            'inspiration': '大模型时代需要重新审视传统持续学习的方法，简单方法往往比复杂策略更有效。'
        },
        '2603.11558': {
            'one_sentence': 'RoboClaw是一个agentic框架，通过Entangled Action Pairs (EAP)将正向操作与逆向恢复动作耦合，形成自重置循环，实现持续自主数据收集。',
            'background': 'VLA系统在长程任务上扩展困难，现有流程分离数据收集、策略学习和部署，依赖大量人工环境重置。',
            'innovation': '引入Entangled Action Pairs，将manipulation行为与recovery动作形成自重置循环，实现零人工干预的持续数据采集和策略迭代。',
            'inspiration': '数据收集和策略执行使用相同的agent，保持语义一致性，减少两阶段之间的mismatch。'
        },
        '2603.12243': {
            'one_sentence': 'HandelBot通过快速adaptation让双手机器人能够演奏钢琴，仅需少量真实机器人数据即可泛化到新曲目。',
            'background': '灵巧多指手操作一直是机器人领域的重大挑战，高精度任务的高质量数据收集困难。',
            'innovation': '结合强化学习与sim-to-real迁移，通过快速adaptation在少量真实数据下实现新任务泛化。',
            'inspiration': '快速adaptation + sim2real是解决数据稀缺问题的有效范式。'
        },
        '2603.12193': {
            'one_sentence': 'SaPaVe是一个端到端框架，联合学习语义驱动的主动感知与鲁棒的视角不变执行。',
            'background': '现有方法难以统一语义驱动的主动感知与鲁棒视角不变执行。',
            'innovation': '端到端联合学习框架，数据高效地实现主动感知与鲁棒操作的统一。',
            'inspiration': '感知与执行的联合学习是实现通用机器人的关键。'
        },
        '2603.10871': {
            'one_sentence': 'FG-CLTP提出细粒度对比语言-触觉预训练，让VLA模型能够理解触觉传感器的定量接触状态。',
            'background': '现有触觉表示主要依赖定性描述符，忽略了定量接触状态信息。',
            'innovation': '细粒度对比学习框架，将触觉传感器数据与语言描述对齐，提取定量接触状态特征。',
            'inspiration': '触觉传感器的精细化表示对提升机器人操作精度很重要。'
        }
    }
    
    s = summaries.get(pid, {'one_sentence': '暂无', 'background': '暂无', 'innovation': '暂无', 'inspiration': '暂无'})
    
    # Extract institutions from authors (simplified - based on known affiliations)
    institutions = "N/A"
    
    digest += f"""## 📄 {title}

| 项目 | 内容 |
|------|------|
| **论文ID** | arXiv:{pid} |
| **作者** | {', '.join(authors[:6])}{'...' if len(authors) > 6 else ''} |
| **机构** | {institutions} |
| **日期** | {published} |
| **类别** | {', '.join(categories)} |
| **链接** | https://arxiv.org/abs/{pid} |

**一句话概括**: {s['one_sentence']}

### 研究背景
{ s['background'] }

### 架构分析
{comment if comment else '暂无详细架构信息，请参考原论文。'}

### 创新点
{ s['innovation'] }

### 对你的启发
{ s['inspiration'] }

---

"""

# Save markdown
with open('2026-03-14.md', 'w') as f:
    f.write(digest)

print("Digest saved to 2026-03-14.md")
print(f"Total papers: {len(selected)}")
