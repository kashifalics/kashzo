export interface WebsitePackage {
  name: string;
  originalPrice: string;
  price: string;
  highlighted: boolean;
  bestFor: string;
  scope: string[];
}

export const websiteDiscount = '50%';

export const websitePackages: WebsitePackage[] = [
  { name: 'Basic', originalPrice: '£399', price: '£199', highlighted: false, bestFor: 'Startups & small businesses', scope: ['Up to 3 pages', 'Responsive design', 'Contact form', 'Social integration', 'Basic SEO', 'Performance optimisation', 'Deployment'] },
  { name: 'Standard', originalPrice: '£799', price: '£399', highlighted: true, bestFor: 'Established service businesses', scope: ['Up to 6 pages', 'Custom responsive UI', 'CMS where appropriate', 'Portfolio / case studies', 'Analytics', 'SEO foundations', 'Conversion CTAs', 'Performance optimisation'] },
  { name: 'Premium', originalPrice: '£1,499', price: '£749', highlighted: false, bestFor: 'Growing businesses', scope: ['Up to 10 pages', 'Custom UX/UI', 'CMS', 'Blog / Insights', 'Advanced animations', 'Analytics', 'Technical SEO', 'Conversion-focused architecture', 'Performance optimisation'] },
];
