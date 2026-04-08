import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
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
  {
    id: 3,
    name: 'Carlos Vega',
    role: 'Operations Director, QuickShip Logistics',
    rating: 5,
    text: 'Our drivers needed a mobile app that worked offline in rural areas. Codes2cloud built exactly that. The real-time tracking feature cut our customer support calls by 60 percent.',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'CEO, EduBridge Learning',
    rating: 5,
    text: 'Launching an e-learning platform during peak demand was stressful, but their cloud team scaled our infrastructure without any crashes. Over 50,000 concurrent users and the platform held steady.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-accent/10">
        <Quote className="w-48 h-48" />
      </div>
      <div className="absolute bottom-10 right-10 text-accent/10 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results from <span className="text-accent">Real Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do not just take our word for it. Here is what happens when we work together on projects that matter.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>

            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">Trusted by growing companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['FinTrack', 'MedConnect', 'QuickShip', 'EduBridge', 'RetailFlow'].map((company) => (
              <div key={company} className="font-display font-bold text-xl text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
