export const defaultSiteContent = {
  header: {
    callToAction: 'Get Started',
    navItems: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },

  hero: {
    sectionLabel: 'Your Technology Partner Since 2009',
    title: 'We Build Software That Works',
    description:
      'From web apps to mobile platforms, cloud infrastructure to VOIP systems — we handle the technical heavy lifting so you can focus on growing your business.',
    ctaLabel: 'Talk to Our Team',
    ctaHref: '/contact',
    backgroundImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop',
    scrollHint: 'Scroll to explore',
  },

  about: {
    sectionLabel: 'Who We Are',
    title: 'Technology That Delivers Results',
    description:
      'Codes2cloud started with a straightforward goal: build software that actually solves problems. Over the past 15 years, we have worked with startups launching their first product and enterprises modernizing legacy systems.',
    secondaryDescription:
      'Our team of developers, designers, and cloud architects work from offices in India, Canada, and New Zealand. This setup means there is always someone available when you need to discuss your project, regardless of your time zone.',
    badgeText: '15+ Years',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    ctaLabel: 'Learn More About Us',
    ctaHref: '/about',
    features: [
      'Full-stack development across 50+ technologies',
      'On-time delivery with milestone-based approach',
      'Direct access to your dedicated project team',
      'Post-launch support and maintenance included',
    ],
  },

  services: {
    sectionLabel: 'How We Can Help',
    title: 'Our Services',
    description:
      'Every business has different technology needs. Here is what we do best — pick what matters most to you, and we will handle the rest.',
    viewAllLabel: 'View All Services',
    items: [
      {
        slug: 'web-development',
        iconKey: 'code',
        title: 'Web Development',
        description:
          'From marketing websites to complex web applications, we build platforms that load fast, rank well, and convert visitors into customers.',
        features: ['React & Next.js', 'Node.js & Python', 'E-commerce Platforms'],
        color: 'accent',
      },
      {
        slug: 'mobile-apps',
        iconKey: 'smartphone',
        title: 'Mobile Apps',
        description:
          'iOS and Android applications built for real-world use. We handle everything from initial concept through App Store submission.',
        features: ['Native iOS & Android', 'React Native', 'Flutter Development'],
        color: 'teal',
      },
      {
        slug: 'design',
        iconKey: 'palette',
        title: 'UI/UX Design',
        description:
          'Research-backed design that puts your users first. We create interfaces that feel intuitive from the first click.',
        features: ['User Research', 'Interface Design', 'Usability Testing'],
        color: 'gold',
      },
      {
        slug: 'cloud-solutions',
        iconKey: 'cloud',
        title: 'Cloud Solutions',
        description:
          'Move to the cloud with confidence. We architect, migrate, and manage infrastructure on AWS, Azure, and Google Cloud.',
        features: ['Cloud Migration', 'DevOps Setup', 'Cost Optimization'],
        color: 'accent',
      },
      {
        slug: 'voip-services',
        iconKey: 'phone',
        title: 'VOIP Services',
        description:
          'Business phone systems that work anywhere. Cut your telecom costs while improving call quality and reliability.',
        features: ['Business Phone Systems', 'Call Center Setup', 'SIP Trunking'],
        color: 'teal',
      },
      {
        slug: 'consultancy',
        iconKey: 'users',
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
      {
        number: '01',
        iconKey: 'search',
        title: 'Discovery',
        description:
          'We start by listening. What problem are you solving? Who are your users? What has worked before and what has not?',
      },
      {
        number: '02',
        iconKey: 'lightbulb',
        title: 'Planning',
        description:
          'Based on your goals and budget, we map out the technical approach, timeline, and milestones you can actually track.',
      },
      {
        number: '03',
        iconKey: 'code2',
        title: 'Build',
        description:
          'Our developers write clean, documented code. You get regular updates and access to staging environments throughout.',
      },
      {
        number: '04',
        iconKey: 'settings',
        title: 'Quality Check',
        description:
          'Every feature goes through manual and automated testing. We catch bugs before your users do.',
      },
      {
        number: '05',
        iconKey: 'rocket',
        title: 'Go Live',
        description:
          'Deployment day should be boring — no surprises, no downtime. We handle the technical details of getting you live.',
      },
      {
        number: '06',
        iconKey: 'headphones',
        title: 'Ongoing Support',
        description:
          'Software needs care after launch. We offer maintenance plans that keep your systems secure and running smoothly.',
      },
    ],
  },

  whyChooseUs: {
    sectionLabel: 'What Sets Us Apart',
    title: 'Why Businesses Choose Us',
    description:
      'Plenty of agencies can write code. The difference is whether they understand your business goals and can actually deliver on their promises.',
    stats: [
      { value: '500+', label: 'Projects' },
      { value: '98%', label: 'Satisfaction' },
      { value: '24/7', label: 'Support' },
    ],
    reasons: [
      {
        iconKey: 'shield',
        title: 'Battle-Tested Experience',
        description:
          '500+ projects shipped since 2009. We have seen what works and what does not across dozens of industries.',
      },
      {
        iconKey: 'clock',
        title: 'Deadlines We Actually Meet',
        description:
          'Milestone-based delivery means you know exactly when each piece will be ready. No endless delays.',
      },
      {
        iconKey: 'users',
        title: 'Your Dedicated Team',
        description:
          'Not a rotating cast of contractors. You work with the same developers and designers throughout your project.',
      },
      {
        iconKey: 'award',
        title: 'Code That Lasts',
        description:
          'We write maintainable, documented code. When you need changes down the road, they will not cost a fortune.',
      },
      {
        iconKey: 'heartHandshake',
        title: 'Straight Talk',
        description:
          'If something will not work, we tell you early. No surprises, no hidden costs, no scope creep.',
      },
      {
        iconKey: 'zap',
        title: 'Modern Tech Stack',
        description:
          'React, Node, AWS, Flutter — we use proven technologies that have active communities and long-term support.',
      },
    ],
  },

  certifications: {
    sectionLabel: 'Recognition & Standards',
    title: 'Certified Excellence',
    description:
      'We earn our partnerships and certifications through consistent delivery. Here is the proof that we take quality seriously.',
    clutchBadges: [
      { title: '#1 GENERATIVE AI', subtitle: 'DEVELOPMENT COMPANY', label: 'AHMEDABAD', year: '2024' },
      { title: 'ARTS, ENTERTAINMENT', subtitle: 'AND MUSIC', label: 'INDIA', year: '2024' },
      { title: 'GLOBAL', subtitle: 'FALL 2024', isGlobal: true },
      { title: 'CHAMPION', subtitle: 'FALL 2024', isChampion: true },
    ],
    trustBadges: [
      {
        name: 'Copyscape',
        type: 'copyscape',
        description: '100% Original Content',
        badge: 'Verified',
        color: 'teal',
      },
      {
        name: 'DMCA Protected',
        type: 'dmca',
        description: 'Content Protection',
        badge: 'Protected',
        color: 'gold',
      },
    ],
    partners: [
      { name: 'AWS Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'Microsoft Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
      { name: 'Google Cloud Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    ],
    compliance: [
      { name: 'ISO 27001', type: 'shield', description: 'Information Security' },
      { name: 'SOC 2 Type II', type: 'award', description: 'Security & Availability' },
      { name: 'GDPR Compliant', type: 'check-circle', description: 'Data Protection' },
    ],
  },

  testimonials: {
    sectionLabel: 'Client Stories',
    title: 'Real Results from Real Projects',
    description:
      'Do not just take our word for it. Here is what happens when we work together on projects that matter.',
    items: [
      {
        id: 1,
        name: 'Rajesh Mehta',
        role: 'Founder, FinTrack Solutions',
        rating: 5,
        text: 'We came to Codes2cloud with a rough idea for a fintech dashboard. Six months later, we had a polished product that our beta users loved. Their developers actually understood the financial regulations we needed to work within.',
      },
      {
        id: 2,
        name: 'Amanda Foster',
        role: 'CTO, MedConnect Health',
        rating: 5,
        text: 'Migrating our legacy patient records system to the cloud seemed impossible until we found this team. They handled HIPAA compliance, data migration, and staff training. Zero downtime during the transition.',
      },
    ],
    companyLogos: ['FinTrack', 'MedConnect', 'QuickShip', 'EduBridge', 'RetailFlow'],
  },

  blog: {
    sectionLabel: 'From Our Blog',
    title: 'Insights & Practical Advice',
    description:
      'No fluff, no jargon. Just actionable insights from our team on building better software and running smarter tech operations.',
    items: [
      {
        id: 1,
        title: 'How to Choose the Right Tech Stack for Your Startup in 2025',
        excerpt:
          'Picking between React and Vue, or deciding on AWS versus Google Cloud, can feel overwhelming. Here is a practical framework for making these decisions.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
        author: 'Amit Patel',
        date: 'Jan 5, 2025',
        category: 'Development',
      },
      {
        id: 2,
        title: 'Cloud Migration Mistakes That Cost Companies Thousands',
        excerpt:
          'After helping 50+ businesses move to the cloud, we have seen the same errors repeat. Learn how to avoid them before they drain your budget.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
        author: 'Sarah Mitchell',
        date: 'Jan 2, 2025',
        category: 'Cloud',
      },
    ],
    viewAllLabel: 'View All Articles',
  },

  ctaSection: {
    title: 'Ready to Build Something?',
    description:
      'Let\'s talk about your project. No sales pitch, just an honest conversation about what you need and whether we are the right fit.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
    secondaryLabel: 'Explore Services',
    secondaryHref: '/services',
  },

  footer: {
    companyDescription:
      'Software development and cloud solutions for businesses that want to grow. Since 2009, we have helped companies build products that work.',
    quickLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    servicesLinks: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'VOIP Services', href: '/services/voip-services' },
      { name: 'IT Consultancy', href: '/services/consultancy' },
    ],
    offices: [
      {
        country: 'India',
        label: '123 Tech Park, Sector 62, Noida, UP 201301',
      },
      {
        country: 'Canada',
        label: '456 Innovation Blvd, Toronto, ON M5V 2T6',
      },
      {
        country: 'New Zealand',
        label: '789 Digital Lane, Auckland CBD 1010',
      },
    ],
    phone: '+1 (234) 567-890',
    email: 'hello@codes2cloud.com',
    companyName: 'Codes2cloud',
    legalLinks: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
};

export const getNestedValue = <T = any>(object: any, path: string, fallback: T): T => {
  const parts = path.split('.');
  let current: any = object;

  for (const part of parts) {
    if (current == null) {
      return fallback;
    }
    current = current[part];
  }

  return current === undefined || current === null ? fallback : current;
};

export const setNestedValue = (object: any, path: string, value: any): void => {
  const parts = path.split('.');
  let current = object;

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = value;
      return;
    }

    if (!current[part] || typeof current[part] !== 'object' || Array.isArray(current[part])) {
      current[part] = {};
    }
    current = current[part];
  }
};

const mergeDeep = (target: any, source: any) => {
  if (typeof target !== 'object' || target === null) {
    return source;
  }

  const output = Array.isArray(target) ? [...target] : { ...target };

  if (typeof source !== 'object' || source === null) {
    return source;
  }

  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      output[key] = value;
    } else if (typeof value === 'object' && value !== null) {
      output[key] = mergeDeep(output[key], value);
    } else {
      output[key] = value;
    }
  });

  return output;
};

export const buildSiteContent = (raw: Record<string, any>) => {
  const content = mergeDeep(defaultSiteContent, {});

  Object.entries(raw || {}).forEach(([key, value]) => {
    setNestedValue(content, key, value);
  });

  return content;
};

export const formatValueForEditor = (value: any) => {
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};
