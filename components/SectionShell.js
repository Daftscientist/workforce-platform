'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SectionShell({ sections, allTocs, children }) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef(null);

  // Derive section info from the current URL
  const slug = pathname?.match(/\/sections\/([^/]+)/)?.[1] ?? '';
  const sectionIndex = sections.findIndex(s => s.slug === slug);
  const section = sectionIndex >= 0 ? sections[sectionIndex] : null;
  const toc = allTocs[slug] ?? [];
  const prev = sectionIndex > 0 ? sections[sectionIndex - 1] : null;
  const next = sectionIndex < sections.length - 1 ? sections[sectionIndex + 1] : null;

  // Reset scroll position and active heading when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveId('');
  }, [pathname]);

  // Re-attach IntersectionObserver whenever content changes
  useEffect(() => {
    observerRef.current?.disconnect();

    // rAF gives React time to flush the new section's DOM before we query headings
    const raf = requestAnimationFrame(() => {
      const headings = document.querySelectorAll(
        '.prose h1, .prose h2, .prose h3, .prose h4'
      );
      if (!headings.length) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length > 0) setActiveId(visible[0].target.id);
        },
        { rootMargin: '-48px 0px -55% 0px', threshold: 0 }
      );

      headings.forEach(h => observerRef.current.observe(h));
    });

    return () => {
      cancelAnimationFrame(raf);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Update the URL hash so the link is shareable
      window.history.pushState(null, '', `${pathname}#${id}`);
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">

      {/* ── Topbar ─────────────────────────────────────────────────── */}
      <header className="h-12 border-b border-[#e0d9d0] bg-white fixed top-0 left-0 right-0 z-50 flex items-center px-4 gap-3">
        <button
          className="lg:hidden p-1.5 -ml-1 rounded hover:bg-[#f5f1ec] text-[#666] transition-colors"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="Toggle sidebar"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href="/sections/analysis/" className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded bg-[#9D3511] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-tight">IW</span>
          </div>
          <span className="text-[13px] font-semibold text-[#1a1a1a] hidden sm:block leading-none">
            Integrated Workforce Management Platform
          </span>
          <span className="text-[13px] font-semibold text-[#1a1a1a] sm:hidden">IWMP</span>
        </Link>

        {section && (
          <>
            <span className="text-[#ddd] hidden sm:block">/</span>
            <span className="text-[13px] text-[#888] hidden sm:block truncate flex-1">
              {section.title}
            </span>
          </>
        )}

        <span className="text-[11px] text-[#ccc] font-mono hidden md:block ml-auto">OCR H446-03</span>
      </header>

      {/* ── Mobile sidebar overlay ──────────────────────────────────── */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 top-12 z-40 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Fixed sidebar ──────────────────────────────────────────── */}
      <aside
        className={`
          fixed top-12 left-0 z-40 h-[calc(100vh-48px)] w-64
          bg-white border-r border-[#e0d9d0] flex flex-col overflow-hidden
          transition-transform duration-200 ease-in-out
          lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="px-3 mb-3 text-[10px] font-mono uppercase tracking-widest text-[#c0b4aa]">
            Contents
          </div>

          {sections.map((s) => {
            const isActive = s.slug === slug;
            const sectionToc = allTocs[s.slug] ?? [];

            return (
              <div key={s.slug}>
                <Link
                  href={`/sections/${s.slug}/`}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-md text-[13px] font-medium
                    transition-colors duration-150 mb-0.5
                    ${isActive
                      ? 'bg-[#fdf0eb] text-[#9D3511]'
                      : 'text-[#555] hover:bg-[#f5f1ec] hover:text-[#2a2a2a]'
                    }
                  `}
                >
                  <span className={`font-mono text-[10px] shrink-0 w-5 ${isActive ? 'text-[#c44a1c]' : 'text-[#ccc]'}`}>
                    {s.number}
                  </span>
                  {s.title}
                </Link>

                {/* Expanded TOC — only for the active section */}
                {isActive && sectionToc.length > 0 && (
                  <div className="mb-2 ml-8 pl-3 border-l-2 border-[#f0d5c4] space-y-px">
                    {sectionToc.map((item, i) => {
                      const isActiveHeading = activeId === item.id;
                      // h1/h2 → no indent, h3 → 10px, h4 → 20px
                      const indent = Math.max(0, item.level - 2) * 10;
                      return (
                        <button
                          key={i}
                          onClick={() => scrollToHeading(item.id)}
                          style={{ paddingLeft: `${4 + indent}px` }}
                          className={`
                            block w-full text-left text-[11.5px] py-0.5 px-1 rounded
                            leading-snug transition-colors duration-100
                            ${isActiveHeading
                              ? 'text-[#9D3511] font-semibold'
                              : 'text-[#aaa] hover:text-[#555]'
                            }
                          `}
                        >
                          {item.text}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="shrink-0 px-4 py-3 border-t border-[#e0d9d0] text-[11px] leading-snug">
          <div className="font-medium text-[#999]">Leo Johnston</div>
          <div className="font-mono text-[#c0b4aa]">A-Level CS NEA</div>
        </div>
      </aside>

      {/* ── Main content — pushed right of sidebar on desktop ───────── */}
      <div className="lg:pl-64 pt-12">
        <main className="max-w-3xl mx-auto px-6 sm:px-10 py-10">

          {/* Page content (article) injected here by [slug]/page.js */}
          {children}

          {/* Prev / Next section navigation */}
          <nav className="mt-16 pt-8 border-t border-[#e0d9d0] flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/sections/${prev.slug}/`}
                className="group flex items-center gap-3 text-sm text-[#666] hover:text-[#9D3511] transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-[11px] text-[#bbb] font-mono">Previous</div>
                  <div className="font-semibold group-hover:text-[#9D3511] transition-colors">{prev.title}</div>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/sections/${next.slug}/`}
                className="group flex items-center gap-3 text-sm text-[#666] hover:text-[#9D3511] transition-colors text-right"
              >
                <div>
                  <div className="text-[11px] text-[#bbb] font-mono">Next</div>
                  <div className="font-semibold group-hover:text-[#9D3511] transition-colors">{next.title}</div>
                </div>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </nav>

        </main>
      </div>

    </div>
  );
}
