'use client';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  return <button aria-label="Toggle theme" onClick={toggle} className="rounded-full border border-slate-300 px-3 py-1 text-sm dark:border-slate-700">{dark ? 'Light' : 'Dark'}</button>;
}
