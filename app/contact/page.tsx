import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Contact | Velora', 'Book a demo with Velora for custom software, SaaS development, and automation systems.', '/contact');

export default function Page() {
  return <main className='section container-wrap'><SectionHeader eyebrow='Contact' title='Let’s map your software roadmap' sub='Book a strategy call and get a practical plan for custom software development.'/><div className='grid gap-6 lg:grid-cols-3'><div className='lg:col-span-2'><ContactForm /></div><aside className='card space-y-4'><h3 className='text-xl font-semibold'>Contact Info</h3><p className='text-slate-600 dark:text-slate-300'>Velora builds custom web apps, SaaS platforms, CRM systems, and business automation software for small and medium businesses.</p><ul className='space-y-2 text-sm text-slate-600 dark:text-slate-300'><li>Email: hello@velora.software</li><li>Location: Canada</li><li>Response time: within 1 business day</li></ul></aside></div></main>;
}
