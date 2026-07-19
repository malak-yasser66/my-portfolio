import { Code2, Database, Palette, Rocket } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Palette,
  Code2,
  Database,
};

const skillGroups = skills;

const signatureCards = [
  {
    title: 'The BIT Perspective',
    body: 'As a Business Information Technology student, I do not just write code; I bridge the gap between advanced technical engineering and strategic business needs, ensuring every digital product delivers real-world value.',
  },
  {
    title: 'The AI Workflow',
    body: 'I actively leverage cutting-edge AI tools and engineering prompts to accelerate development cycles, optimize data analysis patterns, and build smarter user interfaces efficiently.',
  },
  {
    title: 'Behind the Code',
    body: [
      '💻 +10,000 Lines of Code Written',
      '☕ Countless Energy Drinks consumed during late-night debugging',
      '🛠️ Infinite Terminal & Tailwind tweaks to reach pixel perfection',
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d4a3a3]/20 bg-[#ffffff]/95 p-8 shadow-[0_20px_70px_rgba(212,163,163,0.08)] backdrop-blur dark:border-[#d4a3a3]/30 dark:bg-[#fffdfd]/90 lg:p-12">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">My Personal Signature</p>
              <h2 className="mt-3 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">The mindset, workflow, and edge that shape my work.</h2>
            </div>
            <div className="rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-2 text-sm font-medium text-[#c99292] shadow-sm shadow-[#d4a3a3]/10 dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#c99292]">
              A blend of strategy, technology, and craft
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {signatureCards.map((card) => (
              <article
                key={card.title}
                className="glass-shine luxury-card group relative overflow-hidden rounded-[1.75rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-7 shadow-[0_18px_45px_rgba(212,163,163,0.06)] dark:border-[#d4a3a3]/30 dark:bg-[linear-gradient(135deg,_#fffdfd_0%,_#f9efee_100%)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a3a3] to-transparent" />
                <h3 className="text-xl font-semibold text-[#c99292] transition-colors duration-300 group-hover:text-[#b97d7d] dark:text-[#c99292] dark:group-hover:text-[#b97d7d]">
                  {card.title}
                </h3>
                {Array.isArray(card.body) ? (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#4a3b3b] dark:text-[#4a3b3b]">
                    {card.body.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a3a3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-8 text-[#4a3b3b] dark:text-[#4a3b3b]">{card.body}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">Skills</p>
              <h2 className="mt-3 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">A modern toolkit shaped for premium web experiences.</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-2 text-sm font-medium text-[#c99292] shadow-sm shadow-[#d4a3a3]/10 dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#c99292]">
              <Rocket size={16} />
              Constantly learning and upgrading
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.icon];
              return (
                <div
                  key={group.category}
                  className="luxury-card group relative overflow-hidden rounded-[1.75rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-7 shadow-[0_18px_45px_rgba(212,163,163,0.06)] dark:border-[#d4a3a3]/30 dark:bg-[linear-gradient(135deg,_#fffdfd_0%,_#f9efee_100%)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a3a3] to-transparent" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4a3a3] to-[#c99292] text-white shadow-lg shadow-[#d4a3a3]/20">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-[#c99292] transition-colors duration-300 group-hover:text-[#b97d7d] dark:text-[#c99292] dark:group-hover:text-[#b97d7d]">
                        {group.category}
                      </h3>
                      <p className="mt-1 text-sm text-[#4a3b3b] dark:text-[#4a3b3b]">{group.proficiency}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-2 text-sm font-medium text-[#4a3b3b] transition-colors duration-300 dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#4a3b3b]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
