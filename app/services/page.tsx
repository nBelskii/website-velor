import { SectionHeader } from '@/components/ui';
import { ServiceIcon } from '@/components/visuals';
import { pageMetadata } from '@/lib/seo';

const items=['Custom web apps','SaaS development','CRM systems','Business automation','AI workflows','Dashboards and reporting','Client portals','API integrations'];
export const metadata = pageMetadata('Services | Velora','Custom software and SaaS development services for growing businesses.','/services');
export default function Page(){return <main className='section container-wrap'><SectionHeader eyebrow='Services' title='Conversion-focused software delivery' sub='High-quality builds with premium UX and measurable operational impact.'/><div className='grid gap-5 md:grid-cols-2'>{items.map(i=><article key={i} className='gradient-border rounded-2xl p-[1px] reveal'><div className='card flex items-start gap-4'><ServiceIcon kind={i} /><div><h3 className='font-semibold'>{i}</h3><p className='mt-2 text-slate-600 dark:text-slate-300'>Designed and delivered for speed, clarity, and scale.</p></div></div></article>)}</div></main>}
