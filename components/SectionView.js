'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MarkdownRenderer from './MarkdownRenderer';

export default function SectionView({ section, content, toc, prev, next, allSections }) {
  const [activeId, setActiveId] = useState('');
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4');
    if (!headings.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach(h => observerRef.current.observe(h));
    return () => observerRef.current?.disconnect();
  }, [content]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTocOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <header className="border-b border-[#e0d9d0] bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded bg-[#9D3511] flex items-center justify-center">
              <span className="text-white text-xs font-bold">IW</span>
            </div>
            <span className="font-semibold text-sm text-[#1a1a1a] hidden sm:block">Integrated Workforce Management Platform</span>
          </Link>

          <span className="text-[#ddd] hidden sm:block">/</span>

          {/* Section nav pills */}
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none flex-1">
            {allSections.map(s => (
              <Link
                key={s.slug}
                href={`/sections/${s.slug}/`}
                className={`shrink-0 text-xs px-3 py-1.5 rounded transition-colors ${
                  s.slug === section.slug
                    ? 'bg-[#9D3511] text-white font-semibold'
                    : 'text-[#666] hover:text-[#9D3511] hover:bg-[#fdf0eb]'
                }`}
              >
                {s.title}
              </Link>
            ))}
          </nav>

          {/* Mobile TOC toggle */}
          <button
            onClick={() => setTocOpen(o => !o)}
            className="lg:hidden shrink-0 text-xs border border-[#e0d9d0] rounded px-3 py-1.5 text-[#666] hover:border-[#9D3511] hover:text-[#9D3511] transition-colors"
          >
            Contents
          </button>
        </div>
      </header>

      {/* Mobile TOC dropdown */}
      {tocOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-40 bg-black/30" onClick={() => setTocOpen(false)}>
          <div
            className="bg-white border-r border-[#e0d9d0] w-72 h-full overflow-y-auto p-4 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-[#999] mb-4">Contents</p>
            <TocList toc={toc} activeId={activeId} onSelect={scrollToHeading} />
          </div>
        </div>
      )}

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 flex gap-8">
        {/* Sidebar TOC — desktop */}
        <aside className="hidden lg:block w-60 xl:w-72 shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#999] mb-4">Contents</p>
            <TocList toc={toc} activeId={activeId} onSelect={scrollToHeading} />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Section header */}
          <div className="mb-8 pb-6 border-b border-[#e0d9d0]">
            <div className="text-5xl font-bold text-[#ede7de] font-mono mb-2 select-none">
              {section.number}
            </div>
            <h1 className="text-3xl font-bold text-[#9D3511]" style={{fontFamily: "'Source Serif 4', Georgia, serif"}}>
              {section.title}
            </h1>
          </div>

          {/* Markdown content */}
          <article className="prose">
            <MarkdownRenderer content={content} />
          </article>

          {/* Prev / Next navigation */}
          <nav className="mt-16 pt-8 border-t border-[#e0d9d0] flex justify-between gap-4">
            {prev ? (
              <Link
                href={`/sections/${prev.slug}/`}
                className="group flex items-center gap-3 text-sm text-[#666] hover:text-[#9D3511] transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-xs text-[#aaa] font-mono">Previous</div>
                  <div className="font-semibold group-hover:text-[#9D3511]">{prev.title}</div>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/sections/${next.slug}/`}
                className="group flex items-center gap-3 text-sm text-[#666] hover:text-[#9D3511] transition-colors text-right"
              >
                <div>
                  <div className="text-xs text-[#aaa] font-mono">Next</div>
                  <div className="font-semibold group-hover:text-[#9D3511]">{next.title}</div>
                </div>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </nav>
        </main>
      </div>

      <footer className="border-t border-[#e0d9d0] mt-4">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-xs text-[#aaa] font-mono">
          <Link href="/" className="hover:text-[#9D3511] transition-colors">← Back to overview</Link>
          <span>H446-03 · Leo Johnston</span>
        </div>
      </footer>
    </div>
  );
}

function TocList({ toc, activeId, onSelect }) {
  return (
    <ul className="space-y-0.5">
      {toc.map((item, i) => {
        const isActive = activeId === item.id;
        const indent = (item.level - 1) * 10;
        return (
          <li key={i}>
            <button
              onClick={() => onSelect(item.id)}
              className={`w-full text-left text-xs leading-snug py-1 px-2 rounded transition-all duration-150 ${
                isActive
                  ? 'text-[#9D3511] font-semibold bg-[#fdf0eb]'
                  : 'text-[#777] hover:text-[#9D3511] hover:bg-[#f5f1ec]'
              }`}
              style={{ paddingLeft: `${8 + indent}px` }}
            >
              {item.level === 1 && (
                <span className="font-bold text-[#555] mr-1">§</span>
              )}
              {item.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
