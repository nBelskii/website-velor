import { ContactForm } from '@/components/ContactForm'; import { SectionHeader } from '@/components/ui'; import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Contact | Velora','Book a demo to discuss your custom software goals.','/contact');
export default function Page(){return <main className='section container-wrap'><SectionHeader title='Contact Velora' sub='Book a demo and tell us what you want to build.'/><ContactForm/></main>}
