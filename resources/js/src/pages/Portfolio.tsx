import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'Web Development',
    description: 'A real-time financial analytics platform for investment firms. Processes over 10,000 transactions per second with sub-second visualization updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'MedConnect Patient Portal',
    category: 'Cloud Solutions',
    description: 'HIPAA-compliant telemedicine platform serving 200+ clinics. Includes video consultations, prescription management, and EHR integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
  },
  {
    title: 'QuickShip Driver App',
    category: 'Mobile App',
    description: 'Offline-capable delivery tracking app used by 5,000+ drivers daily. Reduced customer support tickets by 60 percent.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop',
  },
  {
    title: 'EduBridge Learning Platform',
    category: 'Web Development',
    description: 'E-learning platform built to handle 50,000 concurrent users. Features live classes, progress tracking, and automated assessments.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
  },
  {
    title: 'RetailFlow Inventory System',
    category: 'Cloud Solutions',
    description: 'Multi-warehouse inventory management for a retail chain. Real-time stock tracking across 150 locations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
  {
    title: 'TravelBuddy Booking App',
    category: 'Mobile App',
    description: 'Cross-platform travel booking app with offline itinerary access. 4.8-star rating across both app stores.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6 animate-fade-in">
                Our Work
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
                Projects That
                <span className="text-accent"> Shipped</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Every project here is live and serving real users. These are not concepts or mockups — they are working products we helped bring to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button variant="coral" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-4 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto group/btn">
                      View Case Study 
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
