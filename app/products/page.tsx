import { SectionHeader, ProductCard } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';
import { ProductVisual } from '@/components/visuals';

export const metadata = pageMetadata('Products | Northfield', 'Explore Northfield products including Hydroforce in progress.', '/products');

export default function Page(){return <main className='section container-wrap'><SectionHeader eyebrow='Products' title='Built products, not just ideas' sub='Focused products for real business operations.'/><div className='grid gap-6 md:grid-cols-2'><div className='card'><ProductVisual type='hydro'/><ProductCard title='Hydroforce (In Progress)' text='Hydrovac field app for crews and companies.'/></div><div className='card'><ProductVisual type='crm'/><ProductCard title='Northfield WaaS Toolkit' text='Internal platform for premium website subscription delivery.'/></div></div></main>}
