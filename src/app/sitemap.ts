import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mintsy.ai';
  
  const routes = [
    '',
    '/create-ai-art',
    '/how-it-works',
    '/ai-art-pricing',
    '/about',
    '/ai-art-faqs',
    '/terms-of-service',
    '/privacy-policy',
    '/refund-policy',
    '/help-support',
    '/affiliate-program',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 