import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kashzo.com';

  return [
    '',
    '/about',
    '/contact',
    '/industries',
    '/services',
    '/work',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
