import Link from 'next/link';
import { ReactNode } from 'react';

export const Button = ({ href, children, secondary=false }: { href: string; children: ReactNode; secondary?: boolean }) => (
  <Link href={href} className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition ${secondary ? 'border border-slate-300 dark:border-slate-700' : 'bg-emerald-500 text-white shadow-glow hover:bg-emerald-400'}`}>
    {children}
  </Link>
);

export const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="mb-10 max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2><p className="mt-3 text-slate-600 dark:text-slate-300">{sub}</p></div>
);

export const FeatureCard = ({ title, text }: { title: string; text: string }) => <article className="card"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p></article>;
export const ProductCard = FeatureCard;
export const PricingCard = ({ title, text }: { title: string; text: string }) => <article className="card"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-emerald-500">Starting from tailored scope</p><p className="mt-2 text-slate-600 dark:text-slate-300">{text}</p><Button href="/contact">Book a call</Button></article>;
export const TestimonialCard = ({ quote, who }: { quote: string; who: string }) => <article className="card"><p className="text-slate-700 dark:text-slate-200">“{quote}”</p><p className="mt-4 text-sm text-slate-500">{who}</p></article>;
