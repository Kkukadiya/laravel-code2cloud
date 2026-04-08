import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const CTASection = () => {
  const { content } = useSiteContent();
  const title = getNestedValue(content, 'ctaSection.title', 'Ready to Build Something?');
  const description = getNestedValue(
    content,
    'ctaSection.description',
    'Let\'s talk about your project. No sales pitch, just an honest conversation about what you need and whether we are the right fit.'
  );
  const primaryLabel = getNestedValue(content, 'ctaSection.primaryLabel', 'Get Started');
  const primaryHref = getNestedValue(content, 'ctaSection.primaryHref', '/contact');
  const secondaryLabel = getNestedValue(content, 'ctaSection.secondaryLabel', 'Explore Services');
  const secondaryHref = getNestedValue(content, 'ctaSection.secondaryHref', '/services');

  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="coral" size="lg" asChild>
            <Link to={primaryHref}>
              {primaryLabel} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10" asChild>
            <Link to={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
