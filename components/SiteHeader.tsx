import Link from 'next/link';
import { nav } from '@/lib/site';
import { Logo } from './Logo';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';
export function SiteHeader(){return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-brand-darkBg/80"><div className="container-wrap flex h-16 items-center justify-between"><Link href="/"><Logo/></Link><nav className="hidden gap-6 text-sm md:flex">{nav.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}</nav><div className="flex items-center gap-3"><ThemeToggle/><Button href="/contact">Book a Demo</Button></div></div></header>}
