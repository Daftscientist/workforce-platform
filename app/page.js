import Link from 'next/link';

const sections = [
  {
    slug: 'analysis',
    title: 'Analysis',
    number: '01',
    description: 'Project overview, stakeholder research, MoSCoW analysis, feature prioritisation, and development requirements.',
    topics: ['Project Overview', 'Suitability of Computational Solution', 'Stakeholders', 'MoSCoW Analysis', 'Development Requirements'],
  },
  {
    slug: 'design',
    title: 'Design',
    number: '02',
    description: 'System decomposition, wireframe designs for employee and management areas, data storage design, and algorithm pseudocode.',
    topics: ['System Decomposition', 'Screen Designs', 'Data Storage', 'Algorithm Designs', 'Stakeholder Feedback'],
  },
  {
    slug: 'development',
    title: 'Development',
    number: '03',
    description: 'Technical prototyping across frameworks and databases, followed by iterative implementation of all 13 project modules.',
    topics: ['Python Web Framework', 'Client-Server Architecture', 'Frontend Framework', 'Database Integration', '13 Iterative Modules'],
  },
  {
    slug: 'testing',
    title: 'Testing',
    number: '04',
    description: 'Alpha testing, stakeholder testing, functional, robustness, and usability test plans and results.',
    topics: ['Alpha Testing', 'Stakeholder Testing', 'Functional Tests', 'Robustness Tests', 'Usability Tests'],
  },
  {
    slug: 'evaluation',
    title: 'Evaluation',
    number: '05',
    description: 'Project success evaluation against MoSCoW criteria, usability assessment, limitations, maintenance plan, and future development.',
    topics: ['Project Success', 'Usability', 'Limitations', 'Maintenance', 'Future Development'],
  },
  {
    slug: 'appendices',
    title: 'Appendices',
    number: '06',
    description: 'Alpha testing video transcript and bibliography.',
    topics: ['Alpha Testing Transcript', 'Bibliography'],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[#e0d9d0] bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#9D3511] flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-tight">IW</span>
            </div>
            <span className="font-semibold text-sm text-[#1a1a1a]">Integrated Workforce Management Platform</span>
            <span className="text-[#aaa] text-sm hidden sm:block">/ NEA Write-up</span>
          </div>
          <div className="text-xs text-[#888] font-mono">H446-03 · OCR A-Level CS</div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-[#e0d9d0]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#9D3511] bg-[#fdf0eb] border border-[#f0c8b4] rounded px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9D3511] inline-block"></span>
              OCR H446-03 · Component 3: Programming Project
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4" style={{fontFamily: "'Source Serif 4', Georgia, serif"}}>
              Integrated Workforce Management Platform
            </h1>
            <p className="text-xl text-[#555] mb-2 font-light leading-relaxed">
              A system for rota scheduling, time tracking, and payroll automation
            </p>
            <p className="text-sm text-[#888] mb-8">
              Leo Johnston
            </p>
            <p className="text-[#444] leading-relaxed max-w-2xl">
              A full-stack web application built with Python/Sanic on the backend and React on the frontend,
              featuring shift scheduling, PTO management, time tracking, payroll automation, and comprehensive
              audit logging — designed for small to medium organisations.
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Python · Sanic', 'React · Tailwind', 'SQLAlchemy · PostgreSQL', 'REST API', 'JWT Auth', 'Audit Logging'].map(t => (
              <span key={t} className="text-xs font-mono bg-[#f5f1ec] border border-[#e0d9d0] text-[#555] px-3 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section cards */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#999] mb-8">Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((sec) => (
            <Link
              key={sec.slug}
              href={`/sections/${sec.slug}/`}
              className="group block bg-white border border-[#e0d9d0] rounded-lg p-6 hover:border-[#9D3511] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl font-bold text-[#e8e2db] font-mono group-hover:text-[#f0c8b4] transition-colors">
                  {sec.number}
                </span>
                <svg className="w-4 h-4 text-[#bbb] group-hover:text-[#9D3511] transition-colors mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#9D3511] transition-colors">
                {sec.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">{sec.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {sec.topics.slice(0, 3).map(t => (
                  <span key={t} className="text-xs text-[#888] bg-[#f5f1ec] px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
                {sec.topics.length > 3 && (
                  <span className="text-xs text-[#aaa] px-1">+{sec.topics.length - 3} more</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e0d9d0] mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#aaa] font-mono">Integrated Workforce Management Platform · OCR H446-03</span>
          <span className="text-xs text-[#aaa]">Leo Johnston</span>
        </div>
      </footer>
    </div>
  );
}
