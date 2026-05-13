import { Button, FeatureCard, ProductCard, PricingCard, SectionHeader, TestimonialCard } from '@/components/ui';
import { FAQAccordion } from '@/components/FAQAccordion';
import { AnimatedBackground, HeroMockup, MetricCards, AbstractOrbit } from '@/components/visuals';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Northfield | Premium Website as a Service & Software Products', 'Northfield delivers premium Website as a Service packages, custom software, and modern business products.', '/');

export default function HomePage() {
  return <main className='relative overflow-hidden'><AnimatedBackground />
    <section className='section container-wrap'>
      <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
        <div>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500'>Northfield Systems</p>
          <h1 className='bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-5xl font-semibold leading-tight text-transparent dark:from-slate-100 dark:via-emerald-300 dark:to-cyan-300 md:text-6xl'>Premium Website-as-a-Service and digital products for modern operators.</h1>
          <p className='mt-6 text-lg text-slate-600 dark:text-slate-300'>We ship design-forward websites, monthly growth systems, and real products like Hydroforce for Hydrovac companies.</p>
          <div className='mt-8 flex flex-wrap gap-4'><Button href='/contact'>Start Monthly Plan</Button><Button href='/products' variant='secondary'>View Products</Button></div>
          <div className='mt-8 grid grid-cols-3 gap-3 text-center text-xs'><div className='card py-3'>Fast Launches</div><div className='card py-3'>Premium Design</div><div className='card py-3'>Monthly Iteration</div></div>
        </div>
        <div className='space-y-6'><HeroMockup /><div className='flex justify-center'><AbstractOrbit /></div></div>
      </div>
    </section>

    <section className='section container-wrap'><MetricCards /></section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='Why teams choose Northfield' title='Not just a website. A system that keeps getting better.' sub='We combine strategy, design, and engineering into one ongoing execution engine.'/>
      <div className='grid gap-5 md:grid-cols-3'>{['Product-level design quality','Clear conversion architecture','Technical SEO and speed','Structured content growth','Visual trust for premium pricing','Long-term partner mindset'].map(x=><FeatureCard key={x} title={x} text='Built for service businesses, startups, and product teams.'/>)}</div>
    </section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='Products' title='Hydroforce in development + expanding product stack' sub='Hydroforce is currently in progress as an operations app for Hydrovac crews.'/>
      <div className='grid gap-5 md:grid-cols-2'><ProductCard title='Hydroforce (In Progress)' text='Dispatch workflows, team coordination, and reporting for field-heavy operations.'/><ProductCard title='Northfield WaaS Platform' text='Our internal system powering monthly website execution and optimization.'/></div>
    </section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='Services' title='Website as a Service packages' sub='Monthly engagements designed to compound value over time.'/>
      <div className='grid gap-5 md:grid-cols-4'>{['Strategy & positioning','Design & branding','Development & integrations','Conversion optimization'].map(x=><FeatureCard key={x} title={x} text='Delivered in weekly execution cycles.'/>)}</div>
    </section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='Case studies' title='Proof over promises' sub='Execution quality that translates into trust, leads, and momentum.'/>
      <div className='grid gap-5 md:grid-cols-3'><TestimonialCard quote='Our company finally looks as premium as our service.' who='Service founder'/><TestimonialCard quote='Monthly model helped us improve conversion every sprint.' who='SMB operator'/><TestimonialCard quote='Northfield gave us a strong launch base for product expansion.' who='Product team'/></div>
    </section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='Pricing' title='Flexible monthly models' sub='Choose the pace and depth that fits your stage.'/>
      <div className='grid gap-5 md:grid-cols-3'><PricingCard title='Core Monthly' text='Best for premium company websites and credibility rebuilds.'/><PricingCard title='Growth Monthly' text='Best for iterative conversion and content expansion.'/><PricingCard title='Product Monthly' text='Best for product-led pages and advanced system design.'/></div>
    </section>

    <section className='section container-wrap'>
      <SectionHeader eyebrow='FAQ' title='Common pre-launch questions' sub='Answers on ownership, timeline, stack, and ongoing support.'/>
      <FAQAccordion />
    </section>
  </main>;
}
