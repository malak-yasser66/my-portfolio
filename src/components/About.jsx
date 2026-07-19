import { BrainCircuit, GraduationCap, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolioData';

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Coding Preference',
    description: 'I enjoy building interactive interfaces with React, clean component architecture, and thoughtful motion.',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'I’m inspired by the way AI can accelerate design, improve productivity, and open new creative possibilities.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Background',
    description: 'I’m studying Business Information Technology, which strengthens my understanding of business strategy and digital systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d4a3a3]/25 bg-[#ffffff]/95 p-8 shadow-[0_20px_70px_rgba(212,163,163,0.08)] backdrop-blur dark:border-[#d4a3a3]/30 dark:bg-[#fffdfd]/90 dark:shadow-[#d4a3a3]/10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">About Me</p>
            <h2 className="mt-4 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">A hybrid thinker who blends polished frontend craft, analytical rigor, and business-minded product intuition.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#4a3b3b] dark:text-[#4a3b3b]">
            <p>{profile.bio}</p>
            <p>
              My academic training at {profile.college} has sharpened my ability to consider engineering decisions through a business-intelligence lens, where product clarity, user trust, and measurable outcomes matter just as much as technical elegance.
            </p>
            <p>
              I consistently prefer real coding challenges over superficial implementation, and I’m especially energized by integrating advanced AI workflows into modern development practice to unlock speed, creativity, and smarter product thinking.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="luxury-card group relative overflow-hidden rounded-[1.75rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-6 shadow-[0_16px_42px_rgba(212,163,163,0.08)] dark:border-[#d4a3a3]/30 dark:bg-[linear-gradient(135deg,_#fffdfd_0%,_#f9efee_100%)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a3a3] to-transparent" />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4a3a3] to-[#c99292] text-white shadow-lg shadow-[#d4a3a3]/20">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#3f3f46] transition-colors duration-300 group-hover:text-[#c99292] dark:text-[#3f3f46] dark:group-hover:text-[#c99292]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4a3b3b] dark:text-[#4a3b3b]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
