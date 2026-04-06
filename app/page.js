'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/sections/analysis/');
  }, [router]);

  // Minimal loading state while the redirect fires
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f7]">
      <div className="flex items-center gap-3 text-[#aaa]">
        <div className="w-7 h-7 rounded bg-[#9D3511] flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">IW</span>
        </div>
        <span className="text-sm font-mono">Loading…</span>
      </div>
    </div>
  );
}
