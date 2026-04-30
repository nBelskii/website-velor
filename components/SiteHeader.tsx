'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/site';
import { Logo } from './Logo';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-500 ${
        scrolled
          ? 'border-emerald-500/20 bg-white/75 shadow-[0_8px_30px_rgba(5,8,7,0.08)] dark:bg-brand-darkBg/75'
          : 'border-slate-200/70 bg-white/60 dark:border-slate-800 dark:bg-brand-darkBg/60'
      }`}
    >
      <div className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="transition-transform duration-300 hover:scale-[1.02]"><Logo /></Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="group relative py-1 text-slate-700 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300">
              {n.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact">Book a Demo</Button>
        </div>
      </div>
      <div className={`h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  );
}
