import { NextResponse } from 'next/server';
import papers from '../../../data/papers';

export async function GET() {
  const articles = papers.map(paper => ({
    title: paper.title,
    summary: paper.summary,
    published: paper.date,
    url: paper.htmlUrl || '',
    category: paper.category
  }));

  return NextResponse.json({ articles });
}
