import { useState } from 'react';
import { Globe2, Send, Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4a3a3]/20 bg-[#fefcfb]/90 backdrop-blur-xl shadow-[0_10px_45px_rgba(212,163,163,0.08)] transition-all duration-500 dark:border-[#d4a3a3]/30 dark:bg-[#fffdfd]/90 dark:shadow-[#d4a3a3]/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em] text-[#c99292] transition-transform duration-300 hover:scale-105 dark:text-[#c99292]">
          <span className="rounded-full bg-gradient-to-br from-[#d4a3a3] to-[#c99292] p-2 text-white shadow-lg shadow-[#d4a3a3]/20">
            <Sparkles size={16} />
          </span>
          MALAK
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4a3b3b] transition-colors duration-300 hover:text-[#c99292] dark:text-[#4a3b3b] dark:hover:text-[#c99292]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="luxury-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]" aria-label="GitHub">
            <Globe2 size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="luxury-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]" aria-label="LinkedIn">
            <Send size={18} />
          </a>

          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setDarkMode((value) => !value)}
            className="luxury-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] text-[#c99292] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]"
          >
            {darkMode ? <Sun size={18} className="transition-transform duration-500" /> : <Moon size={18} className="transition-transform duration-500" />}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            className="luxury-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a3a3]/25 bg-[#fffaf8] text-[#c99292] md:hidden dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7] dark:text-[#c99292]"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden px-4 pb-4 md:hidden ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="rounded-2xl border border-[#d4a3a3]/20 bg-[#fffaf8] p-4 shadow-[0_12px_35px_rgba(212,163,163,0.06)] dark:border-[#d4a3a3]/30 dark:bg-[#fdf7f7]">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-[#4a3b3b] transition-colors duration-300 hover:bg-[#d4a3a3] hover:text-white dark:text-[#4a3b3b] dark:hover:bg-[#d4a3a3]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
