'use client';
import Link from 'next/link';
import { useState } from 'react';
import { nav } from '@/lib/site';
import { Logo } from './Logo';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-brand-darkBg/75'><div className='container-wrap flex h-16 items-center justify-between'><Link href='/'><Logo /></Link><nav className='hidden items-center gap-6 md:flex'>{nav.map(n => <Link key={n.href} href={n.href} className='text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-300'>{n.label}</Link>)}</nav><div className='hidden items-center gap-3 md:flex'><ThemeToggle /><Button href='/contact'>Book a Demo</Button></div><button onClick={()=>setOpen(!open)} className='md:hidden text-sm'>Menu</button></div>{open && <div className='container-wrap pb-4 md:hidden'><div className='grid gap-3'>{nav.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}<Button href='/contact'>Book a Demo</Button></div></div>}</header>;
}
