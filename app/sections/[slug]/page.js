import { getSectionContent, extractTOC, SECTIONS } from '@/lib/content';
import SectionView from '@/components/SectionView';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SECTIONS.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const section = SECTIONS.find(s => s.slug === slug);
  if (!section) return {};
  return {
    title: `${section.title} — Integrated Workforce Management Platform`,
  };
}

export default async function SectionPage({ params }) {
  const { slug } = await params;
  const section = SECTIONS.find(s => s.slug === slug);
  if (!section) notFound();

  const content = getSectionContent(slug);
  if (!content) notFound();

  const toc = extractTOC(content);
  const currentIndex = SECTIONS.findIndex(s => s.slug === slug);
  const prev = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const next = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <SectionView
      section={section}
      content={content}
      toc={toc}
      prev={prev}
      next={next}
      allSections={SECTIONS}
    />
  );
}
