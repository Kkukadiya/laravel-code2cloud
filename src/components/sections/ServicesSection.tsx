import { Code, Smartphone, Palette, Cloud, Phone, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

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

const iconMap: Record<string, any> = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  cloud: Cloud,
  phone: Phone,
  users: Users,
  default: Code,
};

const ServicesSection = () => {
  const { content } = useSiteContent();
  const sectionLabel = getNestedValue(content, 'services.sectionLabel', 'How We Can Help');
  const title = getNestedValue(content, 'services.title', 'Our Services');
  const description = getNestedValue(
    content,
    'services.description',
    'Every business has different technology needs. Here is what we do best — pick what matters most to you, and we will handle the rest.'
  );
  const services = getNestedValue(content, 'services.items', []) as Array<any>;
  const viewAllLabel = getNestedValue(content, 'services.viewAllLabel', 'View All Services');

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
            {sectionLabel}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colorKey = service.color || 'accent';
            const colors = colorClasses[colorKey as keyof typeof colorClasses] ?? colorClasses.accent;
            const Icon = iconMap[service.iconKey] || iconMap.default;

            return (
              <div
                key={service.slug || service.title || index}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-5 transition-colors`}>
                  <Icon className={`w-6 h-6 ${colors.text} group-hover:text-accent-foreground transition-colors`} />
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
                  {(service.features || []).map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-center gap-2 text-xs text-foreground/80">
                      <div className={`w-1 h-1 rounded-full ${colors.dot}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={service.slug ? `/services/${service.slug}` : '/services'}
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
            {viewAllLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
