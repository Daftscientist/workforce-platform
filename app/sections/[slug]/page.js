import { getSectionContent, SECTIONS } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SECTIONS.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const section = SECTIONS.find(s => s.slug === slug);
  if (!section) return {};
  return {
    title: section.title,
  };
}

// The shell (sidebar, topbar, prev/next) lives in ../layout.js (SectionShell).
// This page only needs to render the article body — the layout stays mounted
// during client-side navigation so there are no full-page reloads between sections.
export default async function SectionPage({ params }) {
  const { slug } = await params;
  if (!SECTIONS.find(s => s.slug === slug)) notFound();

  const content = getSectionContent(slug);
  if (!content) notFound();

  return (
    <article className="prose">
      <MarkdownRenderer content={content} />
    </article>
  );
}
