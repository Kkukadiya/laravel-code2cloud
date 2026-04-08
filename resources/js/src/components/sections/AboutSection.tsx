import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Full-stack development across 50+ technologies',
  'On-time delivery with milestone-based approach',
  'Direct access to your dedicated project team',
  'Post-launch support and maintenance included',
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* 15+ Years Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-accent text-accent-foreground px-4 py-3 rounded-2xl shadow-lg">
              <div className="font-display font-bold text-2xl">15+</div>
              <div className="text-sm font-medium">Years</div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Our professional team collaborating on digital projects"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Technology That
                <span className="text-accent"> Delivers Results</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Codes2cloud started with a straightforward goal: build software that actually solves problems. Over the past 15 years, we have worked with startups launching their first product and enterprises modernizing legacy systems. Each project taught us something new about what makes technology truly useful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of developers, designers, and cloud architects work from offices in India, Canada, and New Zealand. This setup means there is always someone available when you need to discuss your project, regardless of your time zone.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <CheckCircle className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="coral" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
