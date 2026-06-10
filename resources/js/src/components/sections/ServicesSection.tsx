import { Code, Smartphone, Palette, Cloud, Phone, Users, ArrowRight, Bot, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    slug: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'From marketing websites to complex web applications, we build platforms that load fast, rank well, and convert visitors into customers.',
    features: ['React & Next.js', 'Node.js & Python', 'E-commerce Platforms'],
    color: 'accent',
  },
  {
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS and Android applications built for real-world use. We handle everything from initial concept through App Store submission.',
    features: ['Native iOS & Android', 'React Native', 'Flutter Development'],
    color: 'teal',
  },
  {
    slug: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Research-backed design that puts your users first. We create interfaces that feel intuitive from the first click.',
    features: ['User Research', 'Interface Design', 'Usability Testing'],
    color: 'gold',
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Move to the cloud with confidence. We architect, migrate, and manage infrastructure on AWS, Azure, and Google Cloud.',
    features: ['Cloud Migration', 'DevOps Setup', 'Cost Optimization'],
    color: 'accent',
  },
  {
    slug: 'voip-services',
    icon: Phone,
    title: 'VOIP Services',
    description: 'Business phone systems that work anywhere. Cut your telecom costs while improving call quality and reliability.',
    features: ['Business Phone Systems', 'Call Center Setup', 'SIP Trunking'],
    color: 'teal',
  },
  {
    slug: 'consultancy',
    icon: Users,
    title: 'IT Consultancy',
    description: 'Need a second opinion on your tech stack? We audit existing systems and recommend practical improvements.',
    features: ['Tech Stack Review', 'Architecture Planning', 'Vendor Selection'],
    color: 'gold',
  },
  {
    slug: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description: 'Automate the busywork. We build AI agents, chatbots, and end-to-end workflow automations that give your team hours back every week.',
    features: ['AI Chatbots & Agents', 'Workflow Automation', 'Document Processing'],
    color: 'accent',
  },
  {
    slug: 'ai-ml',
    icon: Brain,
    title: 'AI / ML Development',
    description: 'Turn your data into a competitive edge. Custom ML models, predictive analytics, computer vision, and generative AI built for production.',
    features: ['Predictive Analytics', 'Computer Vision & NLP', 'Custom LLM & RAG Apps'],
    color: 'teal',
  },
];

const colorClasses = {
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    hover: 'group-hover:bg-accent',
    dot: 'bg-accent',
  },
  teal: {
    bg: 'bg-teal/10',
    text: 'text-teal',
    hover: 'group-hover:bg-teal',
    dot: 'bg-teal',
  },
  gold: {
    bg: 'bg-gold/10',
    text: 'text-gold',
    hover: 'group-hover:bg-gold',
    dot: 'bg-gold',
  },
};

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            End-to-End Software Development Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom web and mobile app development to cloud engineering, VOIP and AI automation — Codes2cloud partners with startups, SMEs and enterprises across the <strong>USA, UK, UAE, Canada and Australia</strong> to ship reliable, scalable, search-friendly digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-5 transition-colors`}>
                  <service.icon className={`w-6 h-6 ${colors.text} group-hover:text-accent-foreground transition-colors`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-xs text-foreground/80">
                      <div className={`w-1 h-1 rounded-full ${colors.dot}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  to={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 ${colors.text} font-medium text-sm group/link`}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
