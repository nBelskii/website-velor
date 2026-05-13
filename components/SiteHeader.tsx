'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav } from '@/lib/site';
import { Logo } from './Logo';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl dark:border-slate-800 dark:bg-[#050807]/75'>
      <div className='container-wrap flex h-16 items-center justify-between'>
        <Link href='/' className='transition-transform duration-300 hover:scale-[1.02]'><Logo /></Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className='group relative text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-300'>
              {n.label}
              <span className='absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300 group-hover:w-full' />
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <ThemeToggle />
          <Button href='/contact'>Book a Demo</Button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className='md:hidden rounded-lg border border-slate-300 px-3 py-1 text-xs uppercase tracking-widest dark:border-slate-700'>Menu</button>
      </div>

      <div className={`md:hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className='container-wrap pb-5'>
          <div className='gradient-border rounded-2xl p-[1px]'>
            <div className='rounded-2xl bg-white/95 p-4 dark:bg-[#0B1210]'>
              <div className='mb-3 text-xs uppercase tracking-[0.2em] text-emerald-500'>Navigation</div>
              <div className='grid gap-3'>
                {nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className='rounded-lg px-2 py-2 text-sm hover:bg-emerald-500/10'>{n.label}</Link>)}
              </div>
              <div className='mt-4 flex items-center justify-between'><ThemeToggle /><Button href='/contact'>Book a Demo</Button></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
