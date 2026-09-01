export interface WebsitePackage {
  name: string;
  originalPrice: string;
  price: string;
  highlighted: boolean;
  bestFor: string;
  scope: string[];
}

export const websitePackages: WebsitePackage[] = [
  { name: 'Launch Website', originalPrice: '£349', price: '£209', highlighted: false, bestFor: 'Startups, professionals and small businesses needing a clean online presence.', scope: ['Up to 3 core pages', 'Mobile-responsive design', 'Professional styling', 'Contact / enquiry form', 'Social media integration', 'Basic technical SEO', 'Performance optimisation', 'Deployment setup'] },
  { name: 'Business Website', originalPrice: '£699', price: '£419', highlighted: true, bestFor: 'Established businesses needing stronger content, credibility and lead-generation functionality.', scope: ['Up to 6 core pages', 'Custom responsive UI', 'Contact / enquiry forms', 'CMS where appropriate', 'Portfolio / case-study section', 'Analytics setup', 'SEO foundations', 'Social integration', 'Conversion-focused CTAs', 'Performance optimisation'] },
  { name: 'Growth Website', originalPrice: '£1,249', price: '£749', highlighted: false, bestFor: 'Growing businesses requiring a richer marketing website and more advanced functionality.', scope: ['Up to 10 core pages', 'Custom UX/UI', 'Advanced responsive layouts', 'CMS', 'Blog / Insights', 'Portfolio / case studies', 'Advanced animations', 'Analytics', 'Stronger technical SEO structure', 'Conversion-focused architecture', 'Performance optimisation'] },
];
