import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, Send } from 'lucide-react';
import { profile } from '../data/portfolioData';

const rolePhrases = ['Frontend Developer', 'Data Analyst', 'Business Information Technology Student'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = rolePhrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText((prev) => currentPhrase.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % rolePhrases.length);
      }
    }, isDeleting ? 55 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/20 bg-[#fffaf8] px-3 py-1 text-sm font-medium text-[#c99292] shadow-sm shadow-[#d4a3a3]/10 dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d4a3a3]" />
            Available for internships & freelance opportunities
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-[#3f3f46] sm:text-5xl lg:text-7xl dark:text-[#3f3f46]">
            Hi, I’m <span className="text-[#c99292]">{profile.name.split(' ')[0]}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a3b3b] dark:text-[#4a3b3b] sm:text-xl">
            <span className="typewriter font-semibold text-[#c99292] dark:text-[#c99292]">{displayText}</span>
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#4a3b3b] dark:text-[#4a3b3b] sm:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="luxury-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a3a3] to-[#c99292] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="luxury-btn inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] px-6 py-3 text-sm font-semibold text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]"
            >
              Let’s Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/malak-yasser66" target="_blank" rel="noreferrer" className="luxury-btn rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] p-3 text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]">
              <Globe2 size={18} />
            </a>
            <a href="https://www.linkedin.com/in/malak-yasser-524a75409?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="luxury-btn rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] p-3 text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#d4a3a3]/20 via-[#e1b3b3]/20 to-[#c99292]/20 blur-3xl" />
          <div className="rounded-[2rem] border border-[#d4a3a3]/25 bg-[#fffaf8] p-6 shadow-[0_25px_80px_rgba(212,163,163,0.08)] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7]">
            <div className="rounded-[1.5rem] border border-[#d4a3a3]/20 bg-[#fffefd] p-6 text-[#3f3f46] shadow-inner shadow-[#d4a3a3]/10">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#f4b2b2]" />
                <span className="h-3 w-3 rounded-full bg-[#d4a3a3]" />
                <span className="h-3 w-3 rounded-full bg-[#fffaf8]" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#d4a3a3]/25 bg-[#fffaf8] p-4">
                  <p className="text-sm text-[#4a3b3b]">Current focus</p>
                  <p className="mt-2 text-lg font-semibold">Crafting polished interfaces with React & Tailwind</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#d4a3a3]/25 bg-[#fffaf8] p-4">
                    <p className="text-sm text-[#4a3b3b]">Speed</p>
                    <p className="mt-2 text-xl font-semibold">Fast & scalable</p>
                  </div>
                  <div className="rounded-2xl border border-[#d4a3a3]/25 bg-[#fffaf8] p-4">
                    <p className="text-sm text-[#4a3b3b]">UX</p>
                    <p className="mt-2 text-xl font-semibold">Thoughtful & intuitive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
