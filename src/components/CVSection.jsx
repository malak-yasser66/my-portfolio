import { Download, FileText } from 'lucide-react';

export default function CVSection() {
  return (
    <section id="cv" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d4a3a3]/25 bg-[#ffffff]/95 p-8 shadow-[0_20px_60px_rgba(212,163,163,0.08)] dark:border-[#d4a3a3]/25 dark:bg-[#fffdfd]/90 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">Resume</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">View or download my professional CV and get a deeper look at my experience.</h2>
            <p className="mt-4 text-lg leading-8 text-[#4a3b3b] dark:text-[#4a3b3b]">
              This section is designed to help recruiters quickly access my background, education, and technical strengths in a polished format.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#d4a3a3]/20 bg-[#fffaf8] p-6 shadow-sm shadow-[#d4a3a3]/10 dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-[#d4a3a3] to-[#c99292] p-3 text-white shadow-lg shadow-[#d4a3a3]/20">
                <FileText size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#c99292] dark:text-[#c99292]">Professional CV</p>
                <p className="text-sm text-[#4a3b3b] dark:text-[#4a3b3b]">PDF • Updated 2026</p>
              </div>
            </div>

            <a href="/cv.pdf" download className="luxury-btn mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a3a3] to-[#c99292] px-5 py-3 text-sm font-semibold text-white">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
