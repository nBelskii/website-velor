import { MetadataRoute } from 'next';
import { site } from '@/lib/site';
const routes=['','/products','/services','/case-studies','/pricing','/about','/contact','/legal/privacy','/legal/terms'];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((r)=>({ url: `${site.url}${r||'/'}`, lastModified: new Date() })); }
