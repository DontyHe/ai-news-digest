# Social Media Tracker: Yann LeCun (@ylecun)

**Date**: 2026-06-09
**Platform**: Twitter/X
**Username**: @ylecun

---

## Profile Summary

- **Name**: Yann LeCun
- **Affiliation**: Founder of AMI Labs (Advanced Machine Intelligence), Professor at NYU
- **Former**: Chief AI Scientist at Meta / FAIR (left late 2025 after ~12 years)
- **Awards**: Turing Award 2018 for convolutional neural networks
- **Core Thesis**: LLMs are a dead-end for human-level intelligence; world models are the path forward

---

## Recent Major Updates (Last 30 Days)

### 1. AMI Labs — $1.03 Billion Seed Round (March 2026)
- Paris-headquartered startup
- Raised $1.03 billion at $3.5 billion pre-money valuation
- Largest seed round in European startup history
- Building world models using JEPA architecture
- First papers from research circle published May 2026

### 2. AMI Labs Technical Papers (May 2026)

**Paper 1: "When Does LeJEPA Learn a World Model?" (May 25, 2026)**
- Authors: David Klindt (Cold Spring Harbor Lab), LeCun, Randall Balestriero (Brown)
- Proves LeJEPA architecture can achieve "linear identifiability" — recovering true hidden variables (position, velocity) from raw observations
- Guarantee holds when: Gaussian latent variables + stationary additive-noise dynamics + broad uniform exploration of state space
- Signatures result: Gaussian is the unique latent distribution for which guarantee holds
- Proofs formalized in Lean 4 proof assistant
- **Critical caveat**: Goal-directed training data (typical robotic pipelines) can break the guarantee

**Paper 2: stable-worldmodel benchmark (May 20, 2026)**
- Authors: Lucas Maes (Mila/Université de Montréal), LeCun, Balestriero
- Open-source platform for evaluating world models
- Finding: Current systems remain brittle — success ~50% clean, drops to ~12% with object color change, ~6% with background shift
- Key finding: Prediction accuracy is a poor proxy for planning success
- A model can predict next frame correctly while latching onto background color instead of task geometry

### 3. Brown University Lecture (April 1, 2026)

**Key Quotes**:
- "AI sucks. We have systems that can manipulate language, and they fool us into thinking they are smart because they manipulate language. But in fact, they are completely helpless when it comes to the physical world."
- "Everybody these days in AI is talking about agentic systems — systems that can produce actions in the world — and almost none of those systems at the moment are capable of predicting the outcome of their actions."
- "There's literally hundreds of billions invested in an industry that basically is counting on the fact that LLMs are going to reach human-level intelligence. It's complete BS."
- "At the very best, we might be convinced that we're on a good path towards human intelligence — but not yet at human intelligence — within five years. But it's going to take a while, and it's almost certainly much harder than we think."

### 4. MIT Technology Review Interview (January 2026)

**AMI Labs Direction**:
- Developing AI systems that understand the real world, hold persistent memory, and reason and plan
- Applications: industrial process control, automation, wearable devices, robotics, healthcare
- JEPA = Joint Embedding Predictive Architecture
- "The world is unpredictable. If you try to build a generative model that predicts every detail of the future, it will fail."
- JEPA learns abstract representation of the world and makes predictions in that abstract space, ignoring unpredictable details

### 5. Podcast: "Yann LeCun on What Comes After LLMs" (May 15, 2026)

**Key Points**:
- LLMs do not have the ability to predict consequences of actions and have no planning abilities
- Reasoning is search through a world model — LLMs can't do this
- Chain-of-thought is "a very, very inefficient way of coercing autoregressive prediction systems to approach reasoning"
- Real reasoning is internal simulation, manipulating mental models, running counterfactuals, hierarchical planning
- Language models work well for coding and math because "symbol manipulation is the substrate of reasoning" in those domains
- JEPA will scale within ~1 year to general methodology for hierarchical world models across modalities
- Predicts industry will recognize paradigm shift by early 2027

### 6. On Departure from Meta
- Had zero technical influence on Llama despite public narrative
- Founded Tapestry project for sovereign open-source AI
- Left Meta after ~12 years as chief AI scientist

---

## Key Intellectual Contributions

| Theme | Core Idea |
|-------|-----------|
| **World Models** | AI must learn internal representation of how environment works |
| **JEPA Architecture** | Joint Embedding Predictive Architecture — predict in abstract space, not pixel space |
| **Moravec Paradox** | Perception/navigation easy for humans, hard for machines; LLM text is discrete and limited |
| **LLMs = Dead End** | Scaling LLMs will NOT reach human-level intelligence |
| **Reasoning = Search** | True reasoning is internal simulation/search through world model, not next-token prediction |
| **Open Source AI** | Future AI will be platform that tends toward open-source |
| **AMI Mission** | Build generic foundation models for physical world (manufacturing, robotics, healthcare) |

---

## Research Relevance for Embodied AI / VLA

Yann LeCun's work is directly relevant to:
- **World models for robotics**: His JEPA architecture is the foundation for systems that predict consequences of actions
- **VLA architecture**: Rejecting pure LLM-based action prediction in favor of world-model-guided planning
- **Sim2real**: Learning abstract representations that transfer across embodiments
- **Physical AI**: His emphasis on understanding the physical world is exactly the challenge in embodied AI

---

*Sources: MIT Technology Review (Jan 2026), Brown University (April 2026), YouTube (Lemley Lecture, Unsupervised Learning podcast), TechCrunch, TechTimes (June 2026), multiple web sources*
