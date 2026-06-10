import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-global-tech.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
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
                Global Software &amp; AI Development Partner
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Custom Software,
              <span className="block">
                Web &amp; <span className="text-accent">AI Solutions</span>
              </span>
              <span className="block">That Scale Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              Codes2cloud builds bespoke web applications, mobile apps, cloud infrastructure, VOIP systems and AI automation for startups and enterprises across the <strong>USA, UK, UAE, Canada and Australia</strong>. From discovery to deployment, we deliver reliable, scalable digital products engineered for growth.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/80 text-sm md:text-base">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Web &amp; Mobile App Development</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Cloud &amp; DevOps Engineering</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> AI Automation &amp; ML Solutions</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group" aria-label="Get a free software development consultation">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-primary-foreground/60 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
