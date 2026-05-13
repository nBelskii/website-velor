import { Metadata } from 'next';
import { site } from './site';

export const pageMetadata = (title: string, description: string, path = '/'): Metadata => ({
  title,
  description,
  alternates: { canonical: `${site.url}${path}` },
  openGraph: { title, description, url: `${site.url}${path}`, siteName: site.name, type: 'website' },
  twitter: { card: 'summary_large_image', title, description }
});
