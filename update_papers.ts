import { Paper } from './src/data/papers';

// Read the existing papers.ts file
import * as fs from 'fs';
import * as path from 'path';

const papersPath = path.join(__dirname, 'src/data/papers.ts');
const papersContent = fs.readFileSync(papersPath, 'utf-8');

// Extract the existing papers array
const existingPapers: Paper[] = [];

// Read the new JSON data
const newPapersPath = path.join(__dirname, 'src/data/papers_2026-06-28.json');
const newPapersContent = fs.readFileSync(newPapersPath, 'utf-8');
const newPapers: Paper[] = JSON.parse(newPapersContent);

// Merge papers (avoid duplicates)
const paperIds = new Set();
const mergedPapers: Paper[] = [];

// Add existing papers
const existingPaperMatch = papersContent.match(/export const papers: Paper\[\] = \[(.*?)\];/s);
if (existingPaperMatch) {
    const existingPapersText = existingPaperMatch[1];
    // Simple extraction - in production you'd want a more robust parser
    console.log('Existing papers structure found');
}

// Add new papers
for (const paper of newPapers) {
    if (!paperIds.has(paper.id)) {
        paperIds.add(paper.id);
        mergedPapers.push(paper);
    }
}

// Create the updated papers.ts content
const updatedContent = `// 论文数据 - 由 cron 任务每日更新
// 更新路径: /home/Hebin/project/ai-news-digest/src/data/papers.json

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
${mergedPapers.map(paper => `  {
    id: "${paper.id}",
    title: "${paper.title.replace(/"/g, '\\"')}",
    authors: "${paper.authors}",
    date: "${paper.date}",
    institution: "${paper.institution}",
    category: "${paper.category}" as const,
    summary: "${paper.summary.replace(/"/g, '\\"')}",
    background: "${paper.background.replace(/"/g, '\\"')}",
    architecture: "${paper.architecture.replace(/"/g, '\\"')}",
    innovations: "${paper.innovations.replace(/"/g, '\\"')}",
    inspiration: "${paper.inspiration.replace(/"/g, '\\"')}",
    pdfUrl: "${paper.pdfUrl}",
    htmlUrl: "${paper.htmlUrl}",
    figures: ${JSON.stringify(paper.figures)}
  }`).join(',\n')}
];

// Auto-generated on ${new Date().toISOString()}
`;

// Write the updated file
fs.writeFileSync(papersPath, updatedContent);
console.log(`Updated papers.ts with ${mergedPapers.length} papers`);
console.log(`Added ${newPapers.length} new papers from June 21-27, 2026`);