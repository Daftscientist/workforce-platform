import { SECTIONS, getAllSectionTOCs } from '@/lib/content';
import SectionShell from '@/components/SectionShell';

// This layout wraps every /sections/[slug] page.
// Because it lives at the sections/ level it stays MOUNTED during client-side
// navigation between sections — only {children} (the article) swaps out.
export default function SectionsLayout({ children }) {
  const allTocs = getAllSectionTOCs();
  return (
    <SectionShell sections={SECTIONS} allTocs={allTocs}>
      {children}
    </SectionShell>
  );
}
