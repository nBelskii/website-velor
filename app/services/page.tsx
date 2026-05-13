import { SectionHeader, FeatureCard } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Services | Northfield', 'Website as a Service monthly packages and software builds.', '/services');
export default function Page(){const items=['Website as a Service (monthly)','Premium website redesigns','Landing pages & conversion systems','UI/UX design direction','Performance and SEO optimization','Product website architecture','Analytics and reporting','Ongoing growth iterations'];return <main className='section container-wrap'><SectionHeader eyebrow='Services' title='Website as a Service, done properly' sub='Subscription delivery with premium design and technical quality.'/><div className='grid gap-5 md:grid-cols-2'>{items.map(i=><FeatureCard key={i} title={i} text='Delivered with practical execution and ongoing support.'/>)}</div></main>}
