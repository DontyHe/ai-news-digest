# Research Tracker: Yann LeCun

**Date**: 2026-06-09
**Author**: Yann LeCun
**Affiliation**: Professor of Computer Science and Data Science, NYU; Executive Chairman, AMI Labs
**Former**: Chief AI Scientist at Meta / FAIR (founder)
**Awards**: Turing Award 2018

---

## Core Architecture: JEPA (Joint Embedding Predictive Architecture)

JEPA is LeCun's central research contribution since ~2020-2022. It trains AI models to understand the world through self-supervised learning on video/image data by:
1. Learning abstract representations of observations (not pixel-level prediction)
2. Predicting in that abstract space, ignoring unpredictable details
3. Enabling world models that can be used for planning

---

## Recent Papers (2026)

### 1. "When Does LeJEPA Learn a World Model?"
- **Authors**: David Klindt (Cold Spring Harbor Lab), Yann LeCun, Randall Balestriero (Brown)
- **Submitted**: May 25, 2026
- **Key Result**: Proved LeJEPA achieves "linear identifiability" — can recover true hidden variables (position, velocity) from raw observations
- **Conditions**: Gaussian latent variables, stationary additive-noise dynamics, roughly uniform exploration of state space
- **Signature Result**: Gaussian is the unique latent distribution where the guarantee holds
- **Method**: Proofs formalized in Lean 4 proof assistant
- **Critical Finding**: Goal-directed training data (common in robotic pipelines) can push observations into a regime where the identifiability guarantee no longer applies

### 2. stable-worldmodel Benchmark
- **Authors**: Lucas Maes (Mila/Université de Montréal), Yann LeCun, Randall Balestriero
- **Posted**: May 20, 2026
- **Purpose**: Open-source benchmark platform for evaluating world model robustness
- **Key Findings**:
  - Standard task (push object into target): ~50% success clean → ~12% with object color change → ~6% with background shift
  - Prediction accuracy is a poor proxy for planning success
  - Models can correctly predict next frame while latching onto background color instead of task geometry
- **Context**: One common planning algorithm had been independently reimplemented in at least 5 recent papers — field lacked reliable shared benchmark

---

## Major Venture: AMI Labs

- **Full Name**: Advanced Machine Intelligence (pronounced "ah-mee", French for "friend")
- **Founded**: Late 2025 / Early 2026
- **Location**: Paris
- **Funding**: $1.03 billion seed round (March 2026), $3.5B pre-money valuation
- **Investors**: Zetta (portfolio company), no Silicon Valley VC money
- **Team**: ~12 people, recruited from OpenAI, Google DeepMind, xAI
- **Mission**: Build world models for physical AI — industrial process control, automation, robotics, healthcare
- **Publications**: Plans to publish papers and open-source much of code

### AMI Technical Direction

1. **JEPA-based world models** trained on video, audio, sensor data (not just text)
2. **Action-conditioned models** that enable planning
3. **Hierarchical world models** across multiple modalities
4. **Industrial applications**: jet engines, steel mills, chemical plants, power grids, biological systems
5. **Robotics**: domestic robots, autonomous vehicles

### AMI vs Meta/LLM Approach
- Meta's focus was generative AI and LLMs (LeCun had zero technical influence on Llama despite public narrative)
- AMI focuses on world models for physical world understanding
- LeCun believes JEPA is architecturally different from and superior to LLM approach for physical AI

---

## Key Publications (Historical)

| Year | Work | Significance |
|------|------|--------------|
| 1989 | ConvNets (Bell Labs) | Foundational CNN work |
| 2018 | Turing Award | For convolutional neural networks |
| 2022 | JEPA vision paper | Foundation for world model research |
| 2023+ | DINO V1/V2/V3 | Self-supervised vision at Meta FAIR |

---

## Key Intellectual Positions

### Why LLMs Can't Reach Human-Level Intelligence
1. **No planning**: LLMs predict next token, don't search through a world model
2. **No physical understanding**: Moravec Paradox — perception/navigation easy for humans, hard for machines
3. **Text is discrete**: Physical world is continuous, high-dimensional, unpredictable at pixel level
4. **Can't predict consequences**: "If you're not able to predict the consequences of your actions, it might be dangerous"

### JEPA vs Generative Models
- Generative models fail because "trying to predict every detail of the future will fail"
- JEPA learns abstract representation ignoring unpredictable details
- Prediction in abstract space is more reliable

### On Academia vs Industry
- "LLMs are now technology development, not research"
- "Academia should work on long-term objectives beyond current capabilities"
- "Don't work on LLMs — there's no point. Work on something else. Invent new techniques."
- "The breakthroughs are not going to come from scaling up LLMs"

---

## Predictions

- Industry will recognize LLM limitations and shift toward world models by **early 2027**
- Domestic robots and Level 5 autonomous driving require world models to work reliably
- 5 years to be "on a good path" toward human-level intelligence, but "almost certainly much harder than we think"
- Robotics field will recognize need to move away from LLM-centric architectures by early 2027

---

## Research Relevance for Embodied AI / VLA

Yann LeCun's work is **directly foundational** to embodied AI:
- **World models**: JEPA is an architecture for learning world models from video — essential for sim2real, robot planning
- **VLA alternative**: His critique of direct VLA mapping (vision → action) and advocacy of world-model-guided planning is a counter-thesis to dominant VLA approach
- **Abstract representations**: Learning representations that transfer across embodiments is key to scaling robot learning
- **Common sense**: His emphasis on physical world understanding is exactly what's missing in current VLA systems
- **Hierarchical planning**: His vision of hierarchical world models (similar to human planning "top down") could inform VLA architecture design

---

*Sources: MIT Technology Review, Brown University, TechCrunch, TechTimes, arXiv, YouTube (Lemley Lecture, Unsupervised Learning), multiple web sources*
