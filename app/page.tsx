import { BackgroundDecor } from '@/components/BackgroundDecor';
import { Button, FeatureCard, PricingCard, ProductCard, SectionHeader, TestimonialCard } from '@/components/ui';
import { FAQAccordion } from '@/components/FAQAccordion';
import { pageMetadata } from '@/lib/seo';
import { ParallaxOrbs } from '@/components/ParallaxOrbs';
import Image from 'next/image';

export const metadata = pageMetadata('Velora | Custom Software, SaaS Apps & Business Automation', 'Velora builds custom software, SaaS platforms, CRM systems, dashboards, and automation tools for modern businesses.', '/');

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundDecor />
      <ParallaxOrbs />
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div>
        <div className="relative glass grid-lines rounded-3xl p-10 md:p-14">
          <p className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">Premium software studio for SMBs</p>
          <h1 className="display-gradient max-w-4xl text-5xl md:text-6xl">Software systems built for modern businesses.</h1>
          <p className="pointer-events-none absolute right-4 top-4 hidden text-[11rem] font-black uppercase leading-none text-emerald-500/[0.06] lg:block">V</p>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Velora designs and builds custom apps, SaaS platforms, CRM systems, and automation tools for businesses that want to move faster.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Button href="/contact">Book a Demo</Button><Button href="/products" secondary>View Products</Button></div>
        </div>
      </section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="Built for ambitious operators" sub="Trusted by service businesses, ecommerce teams, startups, and local companies." /><div className="grid gap-5 md:grid-cols-3">{['Field service', 'Ecommerce', 'SMB teams'].map((x) => <TestimonialCard key={x} quote={`Built for ${x.toLowerCase()} to scale operations.`} who={x} />)}</div></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="What we build" sub="Custom software development, SaaS development, CRM systems for small business, and business automation software." /><div className="grid gap-5 md:grid-cols-2">{['Custom web apps', 'SaaS platforms', 'CRM systems', 'Automation workflows'].map((x) => <FeatureCard key={x} title={x} text="Production-grade systems focused on growth and efficiency." />)}</div></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="Featured product: HydroOps" sub="A modern operations platform for hydrovac and field service companies." /><ProductCard title="HydroOps" text="Scheduling, dispatch, job costing, reporting, and mobile workflows for field teams." /></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="Why Velora" sub="Founder-led product mindset, practical execution, and long-term partnership." /><div className="grid gap-5 md:grid-cols-3"><FeatureCard title="Practical" text="We solve business problems, not vanity features." /><FeatureCard title="Fast" text="Lean teams shipping high-quality code weekly." /><FeatureCard title="Reliable" text="Built with secure, scalable architecture." /></div></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="Process" sub="Discover, design, build, optimize." /><ol className="grid gap-4 md:grid-cols-4">{['Discovery', 'System Design', 'Build & Integrate', 'Scale & Support'].map((x) => <li key={x} className="card font-medium">{x}</li>)}</ol></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="Engagement models" sub="Flexible packages for each growth stage." /><div className="grid gap-5 md:grid-cols-3"><PricingCard title="Starter Build" text="Launch a focused product fast." /><PricingCard title="Growth System" text="Expand with automation and analytics." /><PricingCard title="Custom Platform" text="End-to-end platform for complex operations." /></div></section>
      <section className="section container-wrap">
        <div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Premium abstract technology background placeholder image' width={1200} height={420} className='h-[220px] w-full object-cover'/></div><SectionHeader title="FAQ" sub="Answers to common questions." /><FAQAccordion /></section>
      <section className="section container-wrap text-center"><h2 className="text-3xl font-semibold">Ready to build your next software advantage?</h2><p className="mt-4 text-slate-600 dark:text-slate-300">Talk with Velora about affordable custom software development, SaaS growth systems, and automation apps for field service companies.</p><div className="mt-6"><Button href="/contact">Book a Demo</Button></div></section>
    </main>
  );
}
