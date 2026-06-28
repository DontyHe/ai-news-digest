#!/usr/bin/env python3
"""
Update papers.ts with today's papers from 2026-06-26.md
"""
import re
import json

# Papers from today's digest
papers = [
    {
        "id": "insight-260624884",
        "title": "InSight: Self-Guided Skill Acquisition via Steerable VLAs",
        "authors": "Maggie Wang, Lars Osterberg, Stephen Tian, Ola Shorinwa, Jiajun Wu, Mac Schwager",
        "institution": "Stanford University, Princeton University",
        "date": "2026-06-23",
        "category": "vla",
        "summary": "将VLA分解为primitive-level可控单元，VLM自动发现缺失primitive并自主补全，实现零人类示范的技能获取。5个任务最高96%成功率，14-primitive长时域任务80%。",
        "background": "现有VLA模型的能力受限于训练数据中的技能种类。与策略学习主要关注最优动作不同，世界模型必须在更广泛的次优动作范围内保持可靠。InSight解决的核心问题是：如何让VLA系统自动扩展其技能库，而不需要为每个新技能提供人类示范。",
        "architecture": "两阶段框架：(1) 自动将遥操作示范分割为带标签的原始动作(primitive)，使VLA可通过primitive标签被精确控制；(2) VLM驱动的数据飞轮，自动识别新任务中缺失的primitive，通过VLM提出的底层控制参数自主尝试演示，成功后自动标注并整合进VLA训练集。",
        "innovations": "1. 从\"固定primitive集合\"到\"动态技能获取\"；2. VLM的新角色：作为主动agent识别缺失primitive、生成成功rollout、回写VLA训练数据；3. 零目标技能示范：仅需基础技能的示范，新技能完全通过自主交互获得。",
        "inspiration": "VLA的实时部署瓶颈集中在推理速度上。InSight展示了VLA系统如何从固定技能库走向动态技能扩展，primitive-level的可操控性为技能获取提供了基础架构，解决了VLA受限于训练数据的根本瓶颈。",
        "pdfUrl": "https://arxiv.org/pdf/2606.24884",
        "htmlUrl": "https://arxiv.org/abs/2606.24884",
        "figures": []
    },
    {
        "id": "wvm-260624742",
        "title": "World Value Models for Robotic Manipulation",
        "authors": "Zhihao Wang, Jianxiong Li, Yu Cui, Yuan Gao, Xianyuan Zhan, Junzhi Yu, Xiao Ma",
        "institution": "",
        "date": "2026-06-23",
        "category": "worldmodel",
        "summary": "将世界模型的时序建模能力与价值估计结合，构建通用价值模型WVM。在混合质量数据上SOTA VOC，提出Suboptimal-Value-Bench(800条次优轨迹+人工标注)。",
        "background": "通用价值模型在从大规模混合质量数据中扩展机器人策略学习中起关键作用。准确的价值估计需要深度时序理解能力：既要利用历史上下文确定当前信念，又要对未来结果进行规划。然而现有机器人价值模型多基于VLM backbone，VLM主要在静态或时序稀疏的视觉观测上预训练，缺乏价值估计所需的时序建模能力。",
        "architecture": "WVM将世界模型的时序表征能力引入价值估计：1) 世界模型提供对历史上下文的状态编码和对未来的规划能力；2) 在此基础上训练价值函数，评估轨迹的任务进展质量；3) 价值模型用于筛选和加权混合质量数据，指导策略学习。",
        "innovations": "1. World Model + Value Estimation：首次系统性地将世界模型作为价值函数的backbone；2. Suboptimal-Value-Bench：填补了现有评估套件只含专家数据的空白；3. 即插即用的数据质量评估器：WVM可直接用于大规模机器人数据集的质量评估和筛选。",
        "inspiration": "世界模型的多功能化是一个重要趋势。WVM表明世界模型不仅可用于imagination-based planning，还可作为数据质量评估器和奖励模型。在具身AI研究中，我们应该重新考虑world model的价值，它可能比VLM更适合处理需要时序推理的任务。",
        "pdfUrl": "https://arxiv.org/pdf/2606.24742",
        "htmlUrl": "https://arxiv.org/abs/2606.24742",
        "figures": []
    },
    {
        "id": "g3vla-260624472",
        "title": "G³VLA: Geometric Inductive Bias for VLA Models",
        "authors": "Yue Peng, Yongzhe Zhao, Artur Habuda, Khuyen Pham, Yanheng Zhu, Tran Nguyen Le, Fares Abu-Dakka, Li Guo",
        "institution": "NYU Shanghai, Technical University of Denmark, MBZUAI, NYU Abu Dhabi",
        "date": "2026-06-23",
        "category": "vla",
        "summary": "Ray embeddings + PRoPE + 跨视角融合，零侵入向VLA注入标定几何先验。在π₀/π₀.₅上一致提升，发现几何信号需直接参与action pathway才有效。",
        "background": "VLA模型利用预训练视觉语言backbone的语义知识在通用机器人操纵上取得进展，但其视觉token仍锚定于2D图像坐标，而非机器人相机的标定几何。这在多相机设置中尤为突出：视角通过已知的内外参耦合，却被当作独立图像处理。",
        "architecture": "三个几何模块：1) Intrinsic-conditioned Ray Embeddings：利用相机内参矩阵的逆，将每个ViT patch token标记其反向投影的视线方向；2) Projective Positional Encoding (PRoPE)：在标准rotary positional embedding基础上增加相机标定的偏置编码；3) Bidirectional Cross-view Fusion：在token到达action model之前，双向交换几何上下文。",
        "innovations": "1. 零侵入式几何注入：不修改backbone、不改变action space；2. π³X几何蒸馏：无需深度传感器或人工标注；3. 多架构验证：在π₀、π₀.₅、GR00T 1.5三个不同架构上验证几何归纳偏置的迁移性；4. 架构洞察：发现几何注入效果与geometry-aware token到action pathway的直接程度相关。",
        "inspiration": "VLA的几何缺陷是一个被忽视的重要问题。G³VLA表明，仅通过RGB + 相机标定参数，就能在不增加传感器负担的情况下显著提升VLA的空间感知能力。这提示我们需要重新考虑VLA的架构设计，以更好地利用几何信息。",
        "pdfUrl": "https://arxiv.org/pdf/2606.24472",
        "htmlUrl": "https://arxiv.org/abs/2606.24472",
        "figures": []
    },
    {
        "id": "gra-260624448",
        "title": "GRA: Supervise What Survives (Geometry-Guided VLA Adaptation)",
        "authors": "Danze Chen, Yanzhe Chen, Qiming Huang, Zhijun Cao, Chen Gao, Mike Zheng Shou",
        "institution": "Show Lab, National University of Singapore",
        "date": "2026-06-23",
        "category": "vla",
        "summary": "提出\"非对称保留原则\"，将合成机器人视频中的几何信息(而非伪动作)路由到VLA视觉backbone，结合真实示范训练动作头，实现sim2real的VLA适应。",
        "background": "VLA模型需要大规模视频-动作对，但真实遥操作数据稀缺。合成机器人视频提供可扩展替代方案，但现有方法将其视为缺失动作标签的示范，从合成像素中恢复伪动作(pseudo-action)。这种做法忽略了合成视频中两类信息的不对称保留：几何信息保留，控制信息丢失。",
        "architecture": "两阶段流程：1) Stage 1: Geometric Pretraining：从源人类视频提取future 2D end-effector waypoints，通过pose→retarget→sim→project pipeline计算几何信息，更新视觉backbone；2) Stage 2: Action Fine-tuning with Spatial Anchor：仅在真实示范上微调动作头，保留Stage 1的waypoint head作为空间表征锚点，防止动作微调侵蚀几何感知。",
        "innovations": "1. 非对称保留原则：首次形式化合成视频中几何vs控制信息的不等量保留问题；2. 监督路由：几何信息走视觉backbone，控制信息走动作头，两条路径解耦；3. 空间表征锚点：发现并解决了动作微调侵蚀几何表征的问题。",
        "inspiration": "GRA对合成数据的利用方式提出了全新思路。不要试图从合成视频恢复伪动作，而是利用其中可靠的几何信息增强感知模块。这表明在具身AI研究中，我们应该更加关注数据生成过程中不同类型信息的保留特性，而不是盲目追求端到端的解决方案。",
        "pdfUrl": "https://arxiv.org/pdf/2606.24448",
        "htmlUrl": "https://arxiv.org/abs/2606.24448",
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
    
    # Insert new papers at the beginning
    existing_papers = content[start_idx + len(start_marker):end_idx - len(end_marker)]
    lines = existing_papers.split('\n')
    
    # Insert at the beginning
    updated_papers = new_papers_content + lines
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
        print(f"Processing {len(papers)} papers from 2026-06-26")
        
        # Update papers.ts
        update_papers_ts(papers)
        print(f"Successfully updated papers.ts with {len(papers)} new papers")
        
        # Git commit and push
        import subprocess
        try:
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git add .'], shell=True, check=True)
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git commit -m "Update papers: 2026-06-26"'], shell=True, check=True)
            subprocess.run(['cd /home/Hebin/project/ai-news-digest && git push origin main'], shell=True, check=True)
            print("Successfully committed and pushed changes to GitHub")
        except subprocess.CalledProcessError as e:
            print(f"Git error: {e}")
    else:
        print("No papers to process")

if __name__ == "__main__":
    main()