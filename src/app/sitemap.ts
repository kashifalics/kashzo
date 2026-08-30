import type { MetadataRoute } from 'next';
import { services } from '@/lib/config/services';
import { siteMetadata } from '@/lib/config/site-config';
import { projects } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/insights',
    '/services',
    '/work',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
  ];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const projectPaths = projects.map((project) => `/work/${project.slug}`);

  return [...staticPaths, ...servicePaths, ...projectPaths].map((path) => ({
    url: `${siteMetadata.url}${path}`,
    lastModified: new Date(),
  }));
}
