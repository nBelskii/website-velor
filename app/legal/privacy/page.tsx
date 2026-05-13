import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Privacy Policy | Northfield', 'Northfield privacy policy and data handling practices.', '/legal/privacy');

export default function Page() {
  return <main className='section container-wrap max-w-3xl'><h1 className='text-3xl font-semibold'>Privacy Policy</h1><p className='mt-6 text-slate-600 dark:text-slate-300'>Northfield collects inquiry details (name, email, company information, and project context) only to respond to requests, scope services, and provide support. We do not sell personal data.</p><p className='mt-4 text-slate-600 dark:text-slate-300'>If you submit a contact request, your information may be stored in secure internal systems used for proposal and project communication. You can request data removal at any time.</p></main>;
}
