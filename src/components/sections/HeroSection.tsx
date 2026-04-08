import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const HeroSection = () => {
  const { content } = useSiteContent();
  const sectionLabel = getNestedValue(content, 'hero.sectionLabel', 'Your Technology Partner Since 2009');
  const title = getNestedValue(content, 'hero.title', 'We Build Software That Works');
  const description = getNestedValue(content, 'hero.description', 'From web apps to mobile platforms, cloud infrastructure to VOIP systems — we handle the technical heavy lifting so you can focus on growing your business.');
  const ctaLabel = getNestedValue(content, 'hero.ctaLabel', 'Talk to Our Team');
  const ctaHref = getNestedValue(content, 'hero.ctaHref', '/contact');
  const backgroundImage = getNestedValue(content, 'hero.backgroundImage', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop');
  const scrollHint = getNestedValue(content, 'hero.scrollHint', 'Scroll to explore');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/60" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {sectionLabel}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group" asChild>
                <Link to={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-primary-foreground/60 text-sm">{scrollHint}</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
