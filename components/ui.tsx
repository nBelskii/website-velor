import Link from 'next/link';
import { ReactNode } from 'react';

export const Button = ({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) => (
  <Link
    href={href}
    className={`group relative inline-flex items-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${secondary ? 'border border-slate-300 dark:border-slate-700 hover:border-emerald-500/50' : 'bg-emerald-500 text-white shadow-glow hover:-translate-y-0.5 hover:bg-emerald-400 glow-pulse'}`}
  >
    {!secondary && <span className="btn-shine absolute inset-0 opacity-60" aria-hidden />}
    <span className="relative z-10">{children}</span>
  </Link>
);

export const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="mb-10 max-w-3xl">
    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    <p className="mt-3 text-slate-600 dark:text-slate-300">{sub}</p>
  </div>
);

export const FeatureCard = ({ title, text }: { title: string; text: string }) => (
  <article className="card group">
    <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-24" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p>
  </article>
);

export const ProductCard = FeatureCard;

export const PricingCard = ({ title, text }: { title: string; text: string }) => (
  <article className="card">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-emerald-500">Starting from tailored scope</p>
    <p className="mt-2 text-slate-600 dark:text-slate-300">{text}</p>
    <div className="mt-5"><Button href="/contact">Book a call</Button></div>
  </article>
);

export const TestimonialCard = ({ quote, who }: { quote: string; who: string }) => (
  <article className="card">
    <p className="text-slate-700 dark:text-slate-200">“{quote}”</p>
    <p className="mt-4 text-sm text-slate-500">{who}</p>
  </article>
);
