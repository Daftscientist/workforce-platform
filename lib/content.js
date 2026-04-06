import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export const SECTIONS = [
  { slug: 'analysis',    title: 'Analysis',     number: '01' },
  { slug: 'design',      title: 'Design',        number: '02' },
  { slug: 'development', title: 'Development',   number: '03' },
  { slug: 'testing',     title: 'Testing',       number: '04' },
  { slug: 'evaluation',  title: 'Evaluation',    number: '05' },
  { slug: 'appendices',  title: 'Appendices',    number: '06' },
];

export function getSectionContent(slug) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export function extractTOC(markdown) {
  const lines = markdown.split('\n');
  const headings = [];
  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      headings.push({ level, text, id });
    }
  }
  return headings;
}

export function getAllSectionSlugs() {
  return SECTIONS.map(s => s.slug);
}
