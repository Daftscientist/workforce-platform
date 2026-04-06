'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [rehypeHighlight, { detect: true, ignoreMissing: true }],
      ]}
      components={{
        img({ src, alt }) {
          // Normalise both legacy absolute paths (/images/x) and the new
          // markdown-viewer-friendly relative paths (../public/images/x)
          // so they always resolve to the correct /images/x URL in the web app.
          let resolvedSrc = src;
          if (src?.startsWith('../public/images/')) {
            resolvedSrc = `${BASE}/images/${src.slice('../public/images/'.length)}`;
          } else if (src?.startsWith('/images/')) {
            resolvedSrc = `${BASE}${src}`;
          }
          return (
            <img
              src={resolvedSrc}
              alt={alt || ''}
              className="max-w-full rounded border border-[#e0dcd5] shadow-sm mx-auto block my-4"
              style={{ maxHeight: '600px', objectFit: 'contain' }}
              loading="lazy"
            />
          );
        },

        table({ children }) {
          return (
            <div className="overflow-x-auto my-5 rounded border border-[#e0d9d0] shadow-sm">
              <table>{children}</table>
            </div>
          );
        },

        a({ href, children }) {
          const isExternal = href?.startsWith('http');
          return (
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="text-[#9D3511] underline decoration-[#f0c8b4] underline-offset-2 hover:decoration-[#9D3511] transition-colors"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
