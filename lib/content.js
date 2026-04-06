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
  // Track seen base IDs to deduplicate — matches rehype-slug / github-slugger:
  // 1st "Prototype Purpose" → "prototype-purpose"
  // 2nd "Prototype Purpose" → "prototype-purpose-1"
  // 3rd "Prototype Purpose" → "prototype-purpose-2"
  const slugCount = {};

  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      // Strip markdown formatting (bold, italic, code) so text matches rendered output
      const text = match[2].trim()
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1');

      const baseId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      let id;
      if (slugCount[baseId] === undefined) {
        slugCount[baseId] = 0;
        id = baseId;
      } else {
        slugCount[baseId]++;
        id = `${baseId}-${slugCount[baseId]}`;
      }

      headings.push({ level, text, id });
    }
  }
  return headings;
}

// Pre-computes TOC for every section at build time.
// Returned as a plain object so it can be serialised as a layout prop.
export function getAllSectionTOCs() {
  const result = {};
  for (const section of SECTIONS) {
    const content = getSectionContent(section.slug);
    result[section.slug] = content ? extractTOC(content) : [];
  }
  return result;
}

export function getAllSectionSlugs() {
  return SECTIONS.map(s => s.slug);
}
