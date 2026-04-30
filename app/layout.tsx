import './globals.css';
import { site } from '@/lib/site';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = { metadataBase: new URL(site.url), title: site.name, description: site.description };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', name: 'Velora', url: site.url }, { '@type': 'WebSite', name: 'Velora', url: site.url }] };
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
