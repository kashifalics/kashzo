export interface WebsitePackage {
  name: string;
  price: string;
  highlighted: boolean;
  bestFor: string;
  scope: string[];
}

export const websitePackages: WebsitePackage[] = [
  {
    name: 'Launch Website',
    price: '£349+',
    highlighted: false,
    bestFor: 'Small businesses, professionals and startups needing a polished online presence.',
    scope: ['Up to 3 core pages', 'Responsive design and professional styling', 'Contact or enquiry form', 'Social media integration', 'Basic technical SEO', 'Basic performance optimisation', 'Deployment'],
  },
  {
    name: 'Business Website',
    price: '£699+',
    highlighted: true,
    bestFor: 'Established and growing service businesses requiring stronger lead generation.',
    scope: ['Up to 6 core pages', 'Responsive custom UI', 'Enquiry and contact forms', 'CMS where appropriate', 'Portfolio or case-study section', 'Analytics and SEO foundations', 'Social integrations and conversion CTAs', 'Performance optimisation'],
  },
  {
    name: 'Growth Website',
    price: '£1,249+',
    highlighted: false,
    bestFor: 'Businesses requiring advanced functionality and a more customized digital experience.',
    scope: ['Up to 10 core pages', 'Custom UX/UI and advanced responsive design', 'CMS and insights publishing', 'Portfolio or case studies', 'Advanced, restrained animation', 'Analytics and technical SEO architecture', 'Conversion-focused structure', 'Performance optimisation and richer integrations'],
  },
];
