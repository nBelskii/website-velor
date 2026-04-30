import Image from 'next/image';
import { ProductCard, SectionHeader } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Products | Velora', 'Explore the Velora product ecosystem for SaaS, CRM, and field service operations.', '/products');

export default function Page() {
  return <main className='section container-wrap'><SectionHeader title='Product ecosystem built to scale' sub='Practical products and affordable custom software systems for real operators.'/><div className='mb-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800'><Image src='/placeholder-grid.svg' alt='Abstract product platform preview placeholder graphic' width={1200} height={500} className='h-[280px] w-full object-cover'/></div><p className='mb-8 max-w-4xl text-slate-600 dark:text-slate-300'>We build custom software development systems with founder-level speed: SaaS development, CRM systems for small business, and business automation software that improves margins without enterprise-level pricing.</p><div className='grid gap-5 md:grid-cols-2'><ProductCard title='HydroOps' text='Operations platform for hydrovac and field service companies.'/><ProductCard title='Velora CRM' text='Internal CRM and client management system.'/><ProductCard title='Dropshipping Research' text='Product research and ecommerce intelligence tool.'/><ProductCard title='Custom Apps' text='Tailored systems for specific businesses.'/></div></main>;
}
