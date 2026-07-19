import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#d4a3a3]/20 bg-[#fefcfb]/80 px-4 py-8 text-center text-sm text-[#4a3b3b] backdrop-blur dark:border-[#d4a3a3]/25 dark:bg-[#fffdfd]/80 dark:text-[#4a3b3b] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© <span>{new Date().getFullYear()}</span> Malak Yasser. Crafted with passion and precision.</p>
        <p className="inline-flex items-center gap-1">
          Made with <Heart size={14} className="text-[#c99292]" /> in React + Tailwind
        </p>
      </div>
    </footer>
  );
}
