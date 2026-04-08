import { Search, Lightbulb, Code2, Rocket, Settings, Headphones } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const iconMap: Record<string, any> = {
  search: Search,
  lightbulb: Lightbulb,
  code2: Code2,
  rocket: Rocket,
  settings: Settings,
  headphones: Headphones,
  default: Search,
};

const ProcessSection = () => {
  const { content } = useSiteContent();
  const sectionLabel = getNestedValue(content, 'process.sectionLabel', 'How We Work');
  const title = getNestedValue(content, 'process.title', 'Our Process');
  const description = getNestedValue(
    content,
    'process.description',
    'No black boxes here. We keep you informed at every step so you always know where your project stands and what comes next.'
  );
  const steps = getNestedValue(content, 'process.steps', []) as Array<any>;

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
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

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = iconMap[step.iconKey || step.icon || 'default'];

              return (
                <div key={step.number || index} className="relative group">
                  {/* Card */}
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground font-display font-bold flex items-center justify-center text-sm shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 mt-4 group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Dot (visible on lg) */}
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
