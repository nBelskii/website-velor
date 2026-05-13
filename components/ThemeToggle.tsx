'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) {
    return <button aria-label="Toggle theme" className="h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-slate-300/90 bg-white/80 transition-all duration-500 hover:scale-105 dark:border-slate-700 dark:bg-slate-900/70"
    >
      <span className={`absolute inset-0 bg-gradient-to-br from-amber-300/35 to-emerald-300/30 transition-opacity duration-500 ${dark ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`absolute inset-0 bg-gradient-to-br from-teal-400/25 to-indigo-500/35 transition-opacity duration-500 ${dark ? 'opacity-100' : 'opacity-0'}`} />
      <svg viewBox="0 0 24 24" className={`relative z-10 h-4 w-4 text-amber-500 transition-all duration-500 ${dark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} aria-hidden>
        <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1Zm0 13a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Zm8-5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM7 12a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm10.657-5.243a1 1 0 0 1 0 1.414l-.707.708a1 1 0 0 1-1.414-1.415l.707-.707a1 1 0 0 1 1.414 0ZM8.464 15.536a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm9.9 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM8.464 8.464a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 7.757 6.343l.707.707a1 1 0 0 1 0 1.414ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"/>
      </svg>
      <svg viewBox="0 0 24 24" className={`absolute z-10 h-4 w-4 text-teal-300 transition-all duration-500 ${dark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} aria-hidden>
        <path fill="currentColor" d="M20 15.313A9 9 0 1 1 8.687 4a7 7 0 1 0 11.313 11.313Z"/>
      </svg>
    </button>
  );
}
