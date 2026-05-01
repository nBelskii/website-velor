import { ProductCard, SectionHeader } from '@/components/ui';
import { ProductVisual } from '@/components/visuals';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Products | Velora', 'Explore the Velora product ecosystem for SaaS, CRM, and field service operations.', '/products');

export default function Page() {
  return <main className='section container-wrap'><SectionHeader eyebrow='Products' title='Velora product ecosystem' sub='Custom-coded product experiences for operations, CRM, and ecommerce intelligence.'/><div className='grid gap-6 md:grid-cols-2'><div className='card'><ProductVisual type='hydro' /><ProductCard title='HydroOps' text='Operations platform for hydrovac and field service companies.'/></div><div className='card'><ProductVisual type='crm' /><ProductCard title='Velora CRM' text='Internal CRM and client management system.'/></div><div className='card'><ProductVisual type='dropship' /><ProductCard title='Dropshipping Research' text='Product research and ecommerce intelligence tool.'/></div><ProductCard title='Custom Apps' text='Tailored systems for specific businesses.'/></div></main>;
}
