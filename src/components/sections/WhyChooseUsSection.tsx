import { Shield, Clock, Users, Award, HeartHandshake, Zap } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const iconMap: Record<string, any> = {
  shield: Shield,
  clock: Clock,
  users: Users,
  award: Award,
  heartHandshake: HeartHandshake,
  zap: Zap,
  default: Shield,
};

const WhyChooseUsSection = () => {
  const { content } = useSiteContent();
  const sectionLabel = getNestedValue(content, 'whyChooseUs.sectionLabel', 'What Sets Us Apart');
  const title = getNestedValue(content, 'whyChooseUs.title', 'Why Businesses Choose Us');
  const description = getNestedValue(
    content,
    'whyChooseUs.description',
    'Plenty of agencies can write code. The difference is whether they understand your business goals and can actually deliver on their promises.'
  );
  const stats = getNestedValue(content, 'whyChooseUs.stats', []) as Array<any>;
  const reasons = getNestedValue(content, 'whyChooseUs.reasons', []) as Array<any>;

  return (
    <section className="py-16 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-4">
              {sectionLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center border-t pt-4 sm:border-t-0 sm:border-l-0">
                  <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = iconMap[reason.iconKey || 'default'];
              return (
                <div
                  key={index}
                  className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
