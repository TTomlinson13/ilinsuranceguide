export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const STATE_NAME = 'Illinois';

export const blogPosts: BlogPost[] = [
  {
    slug: 'guide-to-il-insurance',
    title: 'Complete Guide to Illinois Insurance',
    date: '2025-01-15',
    excerpt: 'Everything you need to know about insurance in Illinois.',
    content: `Insurance in Illinois can be complex. This guide covers the basics of home, auto, and life insurance for Illinois residents. Working with an independent agent is the best way to find affordable coverage.`
  },
  {
    slug: 'il-auto-insurance-tips',
    title: 'Illinois Auto Insurance: Top 5 Money-Saving Tips',
    date: '2025-02-01',
    excerpt: 'Save money on your auto insurance with these proven strategies.',
    content: `Auto insurance in Illinois doesn't have to break the bank. Here are five ways to reduce your premiums while maintaining adequate coverage.`
  },
  {
    slug: 'homeowners-insurance-il',
    title: 'Homeowners Insurance in Illinois: What You Need to Know',
    date: '2025-02-20',
    excerpt: 'Protect your biggest investment with the right Illinois homeowners insurance.',
    content: `Your home is likely your most valuable asset. In Illinois, homeowners insurance protects against fire, theft, liability, and more.`
  },
  {
    slug: 'il-insurance-laws',
    title: 'Illinois Insurance Laws Every Resident Should Know',
    date: '2025-03-10',
    excerpt: 'Stay compliant with Illinois insurance requirements.',
    content: `Illinois has specific insurance requirements that all residents must follow. Understanding these laws helps you stay protected and avoid penalties.`
  },
  {
    slug: 'best-insurance-companies-il',
    title: 'Best Insurance Companies in Illinois for 2025',
    date: '2025-03-25',
    excerpt: 'Our top picks for Illinois insurance carriers this year.',
    content: `Choosing the right insurance company in Illinois requires comparing coverage options, customer service, and pricing. Here are our top recommendations.`
  }
];
