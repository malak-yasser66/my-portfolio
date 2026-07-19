import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('malak-theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    window.localStorage.setItem('malak-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(212,163,163,0.16),_transparent_30%),linear-gradient(135deg,_#fcf9f9_0%,_#f8efed_100%)] text-[#4a3b3b] transition-all duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(212,163,163,0.22),_transparent_32%),linear-gradient(135deg,_#f7eee9_0%,_#f3e6de_100%)] dark:text-[#4a3b3b]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)] opacity-20" />
        <div className="relative">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
              <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d4a3a3]/70 bg-[#fefcfb] p-2 shadow-[0_0_80px_rgba(212,163,163,0.14)] sm:p-3">
                <div className="rounded-[1.5rem] border border-[#d4a3a3] border-l-4 bg-[#ffffff] px-6 py-8 shadow-inner shadow-[#d4a3a3]/10 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                  <div className="mx-auto max-w-5xl">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#c99292] sm:text-sm">
                      The Signature Manifesto
                    </p>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="mt-1 text-6xl font-serif leading-none text-[#c99292] sm:text-7xl lg:text-8xl">“</span>
                      <div className="flex-1">
                        <p className="text-base leading-8 text-[#4a3b3b] sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
                          I don’t just build interfaces, and I don’t just analyze numbers. My signature is blending the analytical precision of a Data Analyst with the aesthetic craft of a Frontend Engineer, driven by the strategic vision of Business Information Technology. Pushing code to its absolute limit at 3 AM is not just a routine—it’s where high performance meets perfection.
                        </p>
                        <p className="mt-6 text-right font-serif text-lg italic text-[#c99292] sm:text-xl lg:text-2xl">
                          — Malak Yasser
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d4a3a3]/70 bg-[#fefcfb] p-2 shadow-[0_0_70px_rgba(212,163,163,0.12)] sm:p-3">
                <div className="rounded-[1.5rem] border border-[#d4a3a3]/70 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] px-5 py-6 shadow-inner shadow-[#d4a3a3]/10 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
                  <div className="mb-5 flex items-center gap-2 sm:mb-6">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#f8c84b]" />
                      <span className="h-3 w-3 rounded-full bg-[#2edb67]" />
                    </div>
                    <p className="ml-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#c99292] sm:text-base">
                      Malak's Live Workspace
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <article className="group rounded-[1.25rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-5 shadow-[0_12px_30px_rgba(212,163,163,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a3a3] hover:shadow-[0_20px_45px_rgba(212,163,163,0.18)]">
                      <h3 className="text-lg font-semibold text-[#3f3f46]">Current Vibe</h3>
                      <div className="mt-4 flex items-center gap-2 text-sm leading-7 text-[#4a3b3b] sm:text-base">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a3a3] opacity-70" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#c99292]" />
                        </span>
                        <span>Deep in the zone, fixing 3 AM bugs ☕✨</span>
                      </div>
                    </article>

                    <article className="group rounded-[1.25rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-5 shadow-[0_12px_30px_rgba(212,163,163,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a3a3] hover:shadow-[0_20px_45px_rgba(212,163,163,0.18)]">
                      <h3 className="text-lg font-semibold text-[#3f3f46]">Active Focus</h3>
                      <p className="mt-4 text-sm leading-7 text-[#4a3b3b] sm:text-base">
                        Pushing React component structures and Tailwind layouts to absolute perfection 💅🛠️
                      </p>
                    </article>

                    <article className="group rounded-[1.25rem] border border-[#d4a3a3]/25 bg-[linear-gradient(135deg,_#ffffff_0%,_#fcf5f5_100%)] p-5 shadow-[0_12px_30px_rgba(212,163,163,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a3a3] hover:shadow-[0_20px_45px_rgba(212,163,163,0.18)]">
                      <h3 className="text-lg font-semibold text-[#3f3f46]">Malak's Recipe</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-[#d4a3a3]/30 bg-[#fffaf9] px-3 py-1 text-xs font-medium text-[#4a3b3b] sm:text-sm">React ⚛️</span>
                        <span className="rounded-full border border-[#d4a3a3]/30 bg-[#fffaf9] px-3 py-1 text-xs font-medium text-[#4a3b3b] sm:text-sm">Tailwind 🎨</span>
                        <span className="rounded-full border border-[#d4a3a3]/30 bg-[#fffaf9] px-3 py-1 text-xs font-medium text-[#4a3b3b] sm:text-sm">Business Intelligence 📈</span>
                        <span className="rounded-full border border-[#d4a3a3]/30 bg-[#fffaf9] px-3 py-1 text-xs font-medium text-[#4a3b3b] sm:text-sm">Lots of Caffeine 🧋</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>

            <About />
            <Skills />
            <Projects />
            <CVSection />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
