export const getNestedValue = (obj: Record<string, any>, path: string): any => {
  return path.split('.').reduce((current, key) => {
    if (current === null || current === undefined) return undefined;
    return current[key];
  }, obj);
};

export const setNestedValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): void => {
  const keys = path.split('.');
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
      return;
    }

    if (current[key] === undefined || current[key] === null) {
      current[key] = {};
    }

    current = current[key];
  });
};

export const buildSiteContent = (
  persistedContent: Record<string, any>
): Record<string, any> => {
  const defaultContent: Record<string, any> = {
    hero: {
      sectionLabel: 'Your Technology Partner Since 2009',
      title: 'We Build Software That Works',
      description:
        'From web apps to mobile platforms, cloud infrastructure to VOIP systems — we handle the technical heavy lifting so you can focus on growing your business.',
      primaryButton: {
        label: 'Talk to Our Team',
        href: '/contact',
      },
      scrollHint: 'Scroll to explore',
      backgroundImage: '/assets/hero-background.png',
    },
    header: {
      nav: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
      cta: {
        label: 'Get Started',
        href: '/contact',
      },
    },
    about: {
      sectionLabel: 'Who We Are',
      title: 'Technology That Delivers Results',
      description:
        'Codes2cloud started with a straightforward goal: build software that actually solves problems. Over the past 15 years, we have worked with startups launching their first product and enterprises modernizing legacy systems.',
      additionalText:
        'Each project taught us something new about what makes technology truly useful.',
      stats: [
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Projects Delivered' },
        { value: '100+', label: 'Expert Team' },
        { value: '98%', label: 'Client Satisfaction' },
      ],
      features: [
        'Full-stack development across 50+ technologies',
        'On-time delivery with milestone-based approach',
        'Direct access to your dedicated project team',
        'Post-launch support and maintenance included',
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      cardHighlights: [
        { title: 'Skilled Team', description: 'Expert developers & designers' },
        { title: 'Fast Delivery', description: 'Agile development process' },
        { title: 'Quality First', description: 'Industry best practices' },
        { title: 'Innovation', description: 'Cutting-edge solutions' },
      ],
    },
    services: {
      sectionLabel: 'How We Can Help',
      title: 'Our Services',
      description:
        'Every business has different technology needs. Here is what we do best — pick what matters most to you, and we will handle the rest.',
      cards: [
        {
          slug: 'web-development',
          title: 'Web Development',
          description:
            'From marketing websites to complex web applications, we build platforms that load fast, rank well, and convert visitors into customers.',
          features: ['React & Next.js', 'Node.js & Python', 'E-commerce Platforms'],
          color: 'accent',
        },
        {
          slug: 'mobile-apps',
          title: 'Mobile Apps',
          description:
            'iOS and Android applications built for real-world use. We handle everything from initial concept through App Store submission.',
          features: ['Native iOS & Android', 'React Native', 'Flutter Development'],
          color: 'teal',
        },
        {
          slug: 'design',
          title: 'UI/UX Design',
          description:
            'Research-backed design that puts your users first. We create interfaces that feel intuitive from the first click.',
          features: ['User Research', 'Interface Design', 'Usability Testing'],
          color: 'gold',
        },
        {
          slug: 'cloud-solutions',
          title: 'Cloud Solutions',
          description:
            'Move to the cloud with confidence. We architect, migrate, and manage infrastructure on AWS, Azure, and Google Cloud.',
          features: ['Cloud Migration', 'DevOps Setup', 'Cost Optimization'],
          color: 'accent',
        },
        {
          slug: 'voip-services',
          title: 'VOIP Services',
          description:
            'Business phone systems that work anywhere. Cut your telecom costs while improving call quality and reliability.',
          features: ['Business Phone Systems', 'Call Center Setup', 'SIP Trunking'],
          color: 'teal',
        },
        {
          slug: 'consultancy',
          title: 'IT Consultancy',
          description:
            'Need a second opinion on your tech stack? We audit existing systems and recommend practical improvements.',
          features: ['Tech Stack Review', 'Architecture Planning', 'Vendor Selection'],
          color: 'gold',
        },
      ],
    },
    process: {
      sectionLabel: 'How We Work',
      title: 'Our Process',
      description:
        'No black boxes here. We keep you informed at every step so you always know where your project stands and what comes next.',
      steps: [
        { number: '01', title: 'Discovery', description: 'We start by listening. What problem are you solving? Who are your users? What has worked before and what has not?' },
        { number: '02', title: 'Planning', description: 'Based on your goals and budget, we map out the technical approach, timeline, and milestones you can actually track.' },
        { number: '03', title: 'Build', description: 'Our developers write clean, documented code. You get regular updates and access to staging environments throughout.' },
        { number: '04', title: 'Quality Check', description: 'Every feature goes through manual and automated testing. We catch bugs before your users do.' },
        { number: '05', title: 'Go Live', description: 'Deployment day should be boring — no surprises, no downtime. We handle the technical details of getting you live.' },
        { number: '06', title: 'Ongoing Support', description: 'Software needs care after launch. We offer maintenance plans that keep your systems secure and running smoothly.' },
      ],
    },
    whyChooseUs: {
      sectionLabel: 'Why Choose Us',
      title: 'Why Companies Trust Us',
      description:
        'We combine design, development, and deep domain experience to build software that becomes a real business asset.',
      reasons: [
        { number: '01', title: 'We Start with Your Business', description: 'Before writing any code, we dig into your market, users, and competition. This groundwork prevents expensive mistakes later.' },
        { number: '02', title: 'Every Project Ships', description: 'We do not take on work we cannot finish. Every project we have started is now live and serving real users.' },
        { number: '03', title: 'Tech Stack Flexibility', description: 'React, Node, Python, Flutter, AWS, Azure — we work across 50+ technologies so we can pick what fits your needs, not what we happen to know.' },
        { number: '04', title: 'No Surprises', description: 'Weekly updates, shared project boards, clear documentation. You always know exactly where your project stands.' },
      ],
    },
    certifications: {
      sectionLabel: 'Our Certifications',
      title: 'Trusted by Global Brands',
      description:
        'Our certifications prove that we maintain top-tier security, performance, and delivery standards.',
      items: [
        { title: 'ISO 9001', description: 'Quality management systems that support consistent delivery.' },
        { title: 'ISO 27001', description: 'Information security practices built into every project.' },
        { title: 'AWS Partner', description: 'Cloud expertise for scalable, secure deployments.' },
        { title: 'Google Cloud Ready', description: 'Modern infrastructure for high-performance digital products.' },
      ],
    },
    testimonials: {
      sectionLabel: 'Client Success',
      title: 'What Clients Say',
      reviews: [
        {
          quote: 'Codes2cloud transformed our product vision into a polished, production-ready app far faster than we expected.',
          author: 'Ayesha Khan',
          role: 'Founder, BrightLabs',
          company: 'BrightLabs',
        },
        {
          quote: 'Their team helped us migrate to the cloud without disrupting our customers. The launch was smooth and on budget.',
          author: 'Liam O’Connor',
          role: 'CTO, QuickServe',
          company: 'QuickServe',
        },
        {
          quote: 'From initial design to the final release, the project was managed transparently and professionally.',
          author: 'Monica Patel',
          role: 'Product Lead, GreenHouse',
          company: 'GreenHouse',
        },
      ],
    },
    blog: {
      sectionLabel: 'Latest Insights',
      title: 'From Our Blog',
      description:
        'Real stories from our projects, tips for scaling product development, and practical advice for growing teams.',
      posts: [
        {
          id: '1',
          title: 'How to Choose the Right Tech Stack for Your Startup',
          excerpt: 'Avoid the most common mistakes early in the product lifecycle by matching your stack to your team and your customers.',
          author: 'Arun Sharma',
          date: 'March 18, 2025',
          href: '/blog/1',
        },
        {
          id: '2',
          title: '7 Signs Your Legacy System Needs a Rewrite',
          excerpt: 'Legacy does not have to be a liability. Learn when it is time to modernize and when to preserve what works.',
          author: 'Priya Singh',
          date: 'April 02, 2025',
          href: '/blog/2',
        },
        {
          id: '3',
          title: 'Building for Scale: Cloud Architecture Best Practices',
          excerpt: 'A practical guide to help teams avoid costly performance problems before they happen.',
          author: 'Neil Desai',
          date: 'April 18, 2025',
          href: '/blog/3',
        },
      ],
    },
    cta: {
      title: 'Ready to build something great?',
      description:
        'Talk to our team today and let us design a solution that matches your business goals.',
      buttonLabel: 'Start Your Project',
      buttonHref: '/contact',
    },
    footer: {
      sections: [
        {
          title: 'Services',
          links: [
            { label: 'Web Development', href: '/services/web-development' },
            { label: 'Mobile Apps', href: '/services/mobile-apps' },
            { label: 'Design', href: '/services/design' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms', href: '/privacy' },
          ],
        },
      ],
      copyright: '© 2025 Codes2cloud. All rights reserved.',
      social: [
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'GitHub', href: 'https://github.com' },
      ],
    },
  };

  const content = { ...defaultContent };

  Object.entries(persistedContent).forEach(([key, value]) => {
    setNestedValue(content, key, value);
  });

  return content;
};

export const formatValueForEditor = (value: any): string => {
  if (value === undefined || value === null) return '';
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }
  return String(value);
};
