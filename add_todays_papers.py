#!/usr/bin/env python3
"""
Manually add papers from today's digest to papers.ts
"""
import re

# Manual paper data extracted from 2026-04-09.md
papers = [
    {
        "id": "paper-260405656",
        "title": "SnapFlow: One-Step Action Generation for Flow-Matching VLAs via Progressive Self-Distillation",
        "authors": "Wuyang Luan, Junhui Li, Weiguang Zhao, Wenjian Zhang, Tieru Wu, Rui Ma",
        "institution": "Rui Ma",
        "date": "2026-04-07",
        "category": "vla",
        "summary": "SnapFlow 通过渐进式自蒸馏将流匹配 VLA 的多步去噪压缩为单步推理，在 pi0.5 上达到 9.6x 加速且性能不降反升。",
        "background": "基于流匹配的 VLA 模型（如 pi0, pi0.5, SmolVLA）已成为 SOTA 通用操作方案，但迭代去噪（通常需要 10 步 ODE）导致推理延迟过高。去噪过程占用端到端推理时间的 80%。直接减少步数不可靠，因为速度场未针对单步跳跃进行校准。",
        "architecture": "插件式自蒸馏方法，将多步去噪压缩为单次前向传播（1-NFE）。混合标准流匹配样本与一致性样本，一致性样本的目标是模型自身边缘速度预测计算的二步 Euler 快捷速度。零初始化时间嵌入让网络在单一架构内切换局部速度估计和全局一步生成。",
        "innovations": "首个针对流匹配 VLA 的自蒸馏加速方法。在 pi0.5 四个 LIBERO 套件上达到 98.75% 平均成功率，超过 10 步教师（97.75%）。去噪加速 9.6x，端到端延迟从 274ms 降至 83ms。与层蒸馏、token 剪枝正交可组合。",
        "inspiration": "VLA 的实时部署瓶颈集中在推理速度上。自蒸馏思路不需要外部大模型做教师，用自身速度预测构建一致性目标，对 edge 部署意义重大。",
        "pdfUrl": "https://arxiv.org/pdf/2604.05656",
        "htmlUrl": "https://arxiv.org/abs/2604.05656",
        "figures": []
    },
    {
        "id": "paper-260405673", 
        "title": "RSBM: Rectified Schrödinger Bridge Matching for Few-Step Visual Navigation",
        "authors": "Wuyang Luan, et al.",
        "institution": "Wuyang Luan",
        "date": "2026-04-07",
        "category": "worldmodel",
        "summary": "RSBM 通过熵正则化参数的连续插值统一薛定谔桥和最优传输，仅需 3 步积分即可在视觉导航中达到 92% 成功率。",
        "background": "基于扩散模型和薛定谔桥的生成策略能有效捕获多模态动作分布，但由于高方差随机传输需要数十步积分，阻碍了实时机器人控制。",
        "architecture": "利用速度结构不变性，单个网络服务所有正则化强度。在 ε=1（最大熵传输）和 ε→0（确定性最优传输）之间插值，学习条件先验缩短传输距离。",
        "innovations": "发现标准桥和最优传输共享速度场结构，提供统一视角。仅 3 步积分达到 94% 余弦相似度和 92% 成功率，无需蒸馏或多阶段训练。",
        "inspiration": "将薛定谔桥和最优传输统一到连续谱上是优雅的数学洞察。理论驱动的少步推理方法比纯工程优化更有持久价值。",
        "pdfUrl": "https://arxiv.org/pdf/2604.05673",
        "htmlUrl": "https://arxiv.org/abs/2604.05673",
        "figures": []
    },
    {
        "id": "paper-260401985",
        "title": "WAV: World Action Verifier via Forward-Backward Asymmetry",
        "authors": "Yuejiang Liu, et al.",
        "institution": "Stanford (Chelsea Finn), MIT (Yilun Du)",
        "date": "2026-04-02",
        "category": "worldmodel",
        "summary": "WAV 将动作条件状态预测分解为状态合理性和动作可达性两个独立因子，利用无动作数据和低维动作特征的不对称性实现世界模型自验证和改进。",
        "background": "通用世界模型承诺可扩展的策略评估、优化和规划，但实现所需的鲁棒性仍然具有挑战性。与策略学习主要关注最优动作不同，世界模型必须在更广泛的次优动作范围内保持可靠。",
        "architecture": "核心洞察：动作条件状态预测可分解为两个因子：状态合理性（state plausibility）和动作可达性（action reachability）。利用前向-逆向不对称性进行验证。",
        "innovations": "首次提出世界模型自验证框架，利用前向-逆向不对称性降低验证难度。在 9 个任务上实现 2x 样本效率，策略性能提升 18%。",
        "inspiration": "世界模型的可靠性是具身 AI 落地的核心挑战。WAV 的思路：不直接改进前向预测，而是通过构建自验证机制来发现和修正模型的盲区。",
        "pdfUrl": "https://arxiv.org/pdf/2604.01985",
        "htmlUrl": "https://arxiv.org/abs/2604.01985",
        "figures": []
    }
]

def update_papers_ts(new_papers):
    """Update papers.ts with new papers"""
    # Read existing papers.ts
    with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing papers array
    start_marker = 'export const papers: Paper[] = ['
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker, start_idx) + len(end_marker)
    
    # Generate new papers content
    new_papers_content = []
    for paper in new_papers:
        paper_str = f'''  {{
    id: "{paper["id"]}",
    title: "{paper["title"]}",
    authors: "{paper["authors"]}",
    date: "{paper["date"]}",
    institution: "{paper["institution"]}",
    category: "{paper["category"]}",
    summary: "{paper["summary"]}",
    background: "{paper["background"]}",
    architecture: "{paper["architecture"]}",
    innovations: "{paper["innovations"]}",
    inspiration: "{paper["inspiration"]}",
    pdfUrl: "{paper["pdfUrl"]}",
    htmlUrl: "{paper["htmlUrl"]}",
    figures: {paper["figures"]},
  }}'''
        new_papers_content.append(paper_str)
    
    # Insert new papers after the first few existing papers
    existing_papers = content[start_idx + len(start_marker):end_idx - len(end_marker)]
    lines = existing_papers.split('\n')
    
    # Insert after first 5 papers
    insert_pos = 0
    for i, line in enumerate(lines):
        if '}, {' in line and i > 4:
            insert_pos = i + 1
            break
    
    # Combine papers
    updated_papers = lines[:insert_pos] + new_papers_content + lines[insert_pos:]
    updated_papers_str = '\n'.join(updated_papers)
    
    # Reconstruct the file
    new_content = content[:start_idx + len(start_marker)] + updated_papers_str + content[end_idx:]
    
    # Write back
    with open('/home/Hebin/project/ai-news-digest/src/data/papers.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated papers.ts with {len(new_papers)} new papers")

def main():
    """Main function"""
    if papers:
        print(f"Processing {len(papers)} papers from 2026-04-09.md")
        
        # Update papers.ts
        update_papers_ts(papers)
        print(f"Successfully updated papers.ts with {len(papers)} new papers")
        
        # Git commit and push
        import subprocess
        try:
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git add .'], shell=True, check=True)
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git commit -m "Update papers: 2026-04-09"'], shell=True, check=True)
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git push origin main'], shell=True, check=True)
            print("Successfully committed and pushed changes to GitHub")
        except subprocess.CalledProcessError as e:
            print(f"Git error: {e}")
    else:
        print("No papers to process")

if __name__ == "__main__":
    main()