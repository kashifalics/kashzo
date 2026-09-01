export interface WebsitePackage {
  name: string;
  originalPrice: string;
  price: string;
  highlighted: boolean;
  bestFor: string;
  scope: string[];
}

export const websitePackages: WebsitePackage[] = [
  { name: 'Launch Website', originalPrice: '£349', price: '£209', highlighted: false, bestFor: 'Startups & small businesses', scope: ['Up to 3 pages', 'Responsive design', 'Contact form', 'Social integration', 'Basic SEO', 'Performance optimisation', 'Deployment'] },
  { name: 'Business Website', originalPrice: '£699', price: '£419', highlighted: true, bestFor: 'Established service businesses', scope: ['Up to 6 pages', 'Custom responsive UI', 'CMS where appropriate', 'Portfolio / case studies', 'Analytics', 'SEO foundations', 'Conversion CTAs', 'Performance optimisation'] },
  { name: 'Growth Website', originalPrice: '£1,249', price: '£749', highlighted: false, bestFor: 'Growing businesses', scope: ['Up to 10 pages', 'Custom UX/UI', 'CMS', 'Blog / Insights', 'Advanced animations', 'Analytics', 'Technical SEO', 'Conversion-focused architecture', 'Performance optimisation'] },
];
