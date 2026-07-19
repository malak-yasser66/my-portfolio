import { useState } from 'react';
import { ArrowUpRight, Globe2, Sparkles } from 'lucide-react';
import { projects as projectData } from '../data/portfolioData';

const filters = ['All', 'Frontend', 'Data Analysis'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = projectData.filter((project) => activeFilter === 'All' || project.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">Selected work that blends thoughtful UX and practical impact.</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-2 text-sm font-medium text-[#c99292] shadow-sm shadow-[#d4a3a3]/10 dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#c99292]">
            <Sparkles size={16} />
            Designed to impress recruiters and clients
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`luxury-btn rounded-full border px-4 py-2 text-sm font-semibold ${activeFilter === filter ? 'border-[#d4a3a3] bg-[#d4a3a3] text-white shadow-lg shadow-[#d4a3a3]/20' : 'border-[#d4a3a3]/20 bg-[#fffaf8] text-[#c99292] dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#c99292]'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article key={project.title} className="glass-shine luxury-card overflow-hidden rounded-[2rem] border border-[#d4a3a3]/20 bg-[#ffffff] p-0 shadow-[0_20px_50px_rgba(212,163,163,0.06)] dark:border-[#d4a3a3]/25 dark:bg-[#fffdfd]">
              <div className="h-40 bg-gradient-to-br from-[#d4a3a3] via-[#e1b3b3] to-[#c99292]" />
              <div className="relative p-7">
                <h3 className="text-2xl font-semibold text-[#c99292] dark:text-[#c99292]">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#4a3b3b] dark:text-[#4a3b3b]">{project.description}</p>

                <ul className="mt-5 space-y-2 text-sm leading-7 text-[#4a3b3b] dark:text-[#4a3b3b]">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d4a3a3]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-1.5 text-sm font-medium text-[#4a3b3b] dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#4a3b3b]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://github.com/malak-yasser66" target="_blank" rel="noreferrer" className="luxury-btn inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/25 px-4 py-2 text-sm font-medium text-[#c99292] dark:border-[#d4a3a3]/25 dark:text-[#c99292]">
                    <Globe2 size={16} />
                    GitHub
                  </a>
                  <a href="my-portfolio-nine-puce-52.vercel.app" target="_blank" rel="noreferrer" className="luxury-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a3a3] to-[#c99292] px-4 py-2 text-sm font-medium text-white">
                    <ArrowUpRight size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
