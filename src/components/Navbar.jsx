import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

const NavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // الحركة دي بتقلب ألوان الموقع كله بالكامل (التاسك كله) في ثانية واحدة
    if (darkMode) {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      // السطر ده عشان الصور والأيقونات متتقلبش ألوانها وتبوظ، تفضل بشكلها الطبيعي
      document.querySelectorAll('img, video, svg, button span').forEach(el => {
        if(!el.closest('button')) el.style.filter = 'invert(1) hue-rotate(180deg)';
      });
    } else {
      document.documentElement.style.filter = 'none';
      document.querySelectorAll('img, video, svg, button span').forEach(el => el.style.filter = 'none');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4a3a3]/20 bg-[#fefcfb]/90 backdrop-blur-md transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-wider text-slate-900">
          <span className="rounded-full bg-gradient-to-br from-[#d4a3a3] to-[#c99292] p-1 text-white">
            <Sparkles size={16} />
          </span>
          MALAK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#d4a3a3] transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-600"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-200 bg-[#fefcfb] px-4 py-4 transition-colors">
          <div className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-[#d4a3a3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 