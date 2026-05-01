import Link from 'next/link';
import { ReactNode } from 'react';

export function Button({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  return (
    <Link href={href} className={`group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 ${variant === 'primary' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_0_1px_rgba(16,185,129,.45),0_20px_40px_rgba(16,185,129,.28)] hover:-translate-y-0.5' : 'border border-slate-300/80 bg-white/70 text-slate-800 hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100'}`}>
      <span className="absolute inset-0 rounded-xl bg-white/0 transition group-hover:bg-white/10" aria-hidden />
      <span className="relative">{children}</span>
    </Link>
  );
}

export const SectionHeader = ({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub: string }) => (
  <div className="mb-10 max-w-3xl">
    {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-500">{eyebrow}</p>}
    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    <p className="mt-3 text-slate-600 dark:text-slate-300">{sub}</p>
  </div>
);

export const FeatureCard = ({ title, text }: { title: string; text: string }) => <article className="card"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p></article>;
export const ProductCard = ({ title, text }: { title: string; text: string }) => <article className="card"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p><div className="mt-5"><Button href="/contact">Book a Demo</Button></div></article>;
export const PricingCard = ({ title, text }: { title: string; text: string }) => <article className="card"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-emerald-500">Starting from tailored scope</p><p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p><div className="mt-5"><Button href="/contact">Book a call</Button></div></article>;
export const TestimonialCard = ({ quote, who }: { quote: string; who: string }) => <article className="card"><p className="text-slate-700 dark:text-slate-200">“{quote}”</p><p className="mt-4 text-sm text-slate-500">{who}</p></article>;
