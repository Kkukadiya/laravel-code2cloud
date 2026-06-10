import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Eye, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  Users, 
  Zap,
  DollarSign,
  Clock,
  UserCheck,
  Building2,
  Rocket,
  Briefcase,
  Store,
  Globe
} from 'lucide-react';

// Why Choose Us Data
const whyChooseUs = [
  {
    number: '01',
    title: 'We Start with Your Business',
    description: 'Before writing any code, we dig into your market, users, and competition. This groundwork prevents expensive mistakes later.',
  },
  {
    number: '02',
    title: 'Every Project Ships',
    description: 'We do not take on work we cannot finish. Every project we have started is now live and serving real users.',
  },
  {
    number: '03',
    title: 'Tech Stack Flexibility',
    description: 'React, Node, Python, Flutter, AWS, Azure — we work across 50+ technologies so we can pick what fits your needs, not what we happen to know.',
  },
  {
    number: '04',
    title: 'No Surprises',
    description: 'Weekly updates, shared project boards, clear documentation. You always know exactly where your project stands.',
  },
];

// Engagement Models
const engagementModels = [
  {
    icon: DollarSign,
    title: 'Fixed Price',
    description: 'You know the scope, we give you a firm quote. Clear milestones, predictable costs, no surprises on the invoice.',
    features: ['Defined scope upfront', 'Fixed budget', 'Milestone payments', 'Works best for MVPs'],
  },
  {
    icon: UserCheck,
    title: 'Dedicated Team',
    description: 'Hire developers who work only on your project. Full-time attention, seamless collaboration, feels like your own team.',
    features: ['Exclusive focus', 'Direct communication', 'Scale as needed', 'Best for ongoing work'],
  },
  {
    icon: Clock,
    title: 'Time & Materials',
    description: 'Perfect when requirements evolve. Pay for actual hours worked with full visibility into where time goes.',
    features: ['Maximum flexibility', 'Pay as you go', 'Weekly reports', 'Good for R&D'],
  },
];

// Who We Work With
const clientTypes = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'From MVP to Series A. We help founders build products that attract users and investors alike.',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Legacy system modernization, custom integrations, and platforms built to handle enterprise-scale traffic.',
  },
  {
    icon: Briefcase,
    title: 'Growing Businesses',
    description: 'You have outgrown spreadsheets and basic tools. We build systems that scale with your ambitions.',
  },
  {
    icon: Store,
    title: 'E-commerce',
    description: 'High-converting storefronts, inventory systems, and the integrations that tie everything together.',
  },
  {
    icon: Globe,
    title: 'Agencies',
    description: 'White-label development for agencies who need reliable tech partners on overflow work.',
  },
  {
    icon: Users,
    title: 'SaaS Companies',
    description: 'Subscription platforms, usage analytics, user management — the building blocks of SaaS done right.',
  },
];

// Core Values
const coreValues = [
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'We adopt new technologies when they solve real problems, not because they are trendy.',
  },
  {
    icon: Shield,
    title: 'Honest Communication',
    description: 'If something will not work, we tell you early. Bad news does not improve with age.',
  },
  {
    icon: Zap,
    title: 'Quality Over Speed',
    description: 'Rushing leads to technical debt. We build things right the first time so they do not haunt you later.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'Your success is our success. We are not just vendors — we are invested in your outcomes.',
  },
];

const About = () => {
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
                About Codes2cloud — Global Software Development Company
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
                Engineering Trusted Digital Products
                <span className="text-accent"> Worldwide</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Codes2cloud is a full-stack software development company helping startups and enterprises across the <strong>USA, UK, UAE, Canada and Australia</strong> design, build and scale custom web apps, mobile applications, cloud infrastructure and AI-powered automation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button variant="coral" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '100+', label: 'Expert Team' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                How We Work
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Software That Actually Solves Problems
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  For over 15 years, Codes2cloud has delivered <strong>custom software development, cloud engineering and AI automation services</strong> to founders launching their first MVP and enterprises modernising legacy platforms. Every engagement is built on the same promise — software that is reliable, scalable, and measurably tied to your business outcomes.
                </p>
                <p>
                  With delivery teams operating across <strong>India, Canada and New Zealand</strong>, we provide near-time-zone coverage for clients in the <strong>United States, United Kingdom, United Arab Emirates and Australia</strong>. That means real conversations during your working hours — whether you are in New York, London, Dubai, Toronto or Sydney.
                </p>
                <p>
                  We are not the cheapest software development agency, and we do not aim to be. We are the long-term technology partner you call when the project actually has to ship, perform, and rank.
                </p>
              </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-accent/10 to-teal/10 p-8 rounded-3xl border border-accent/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Users, label: 'Skilled Team', desc: 'Expert developers & designers' },
                      { icon: Zap, label: 'Fast Delivery', desc: 'Agile development process' },
                      { icon: Shield, label: 'Quality First', desc: 'Industry best practices' },
                      { icon: Lightbulb, label: 'Innovation', desc: 'Cutting-edge solutions' },
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 md:p-12 rounded-3xl border border-accent/20 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">Where We Are Headed</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We want to be the team companies call when they need software that actually works. Not the biggest agency, not the flashiest — just consistently reliable partners who deliver what they promise.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 p-8 md:p-12 rounded-3xl border border-teal/20 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal/10 rounded-full blur-2xl group-hover:bg-teal/20 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-teal" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">What Drives Us</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Every line of code we write should make someone's job easier or someone's life better. We focus on understanding what you actually need, building it right the first time, and supporting it for the long haul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                What We Believe
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These are not just words on a wall. They shape every decision we make and every project we take on.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card p-8 rounded-2xl shadow-card border border-border/50 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground text-lg">
                After 500+ projects, we have figured out what works. Here is why clients keep coming back.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="font-display text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models Section */}
        <section className="py-24 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-4">
                Ways to Work With Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Engagement Models
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                Different projects need different approaches. Pick the model that fits how you work best.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <div 
                  key={index}
                  className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-border/50 hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <model.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Our Clients
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who We Work With
              </h2>
              <p className="text-muted-foreground text-lg">
                From first-time founders to Fortune 500 IT departments — if you are serious about building great software, we want to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientTypes.map((client, index) => (
                <div 
                  key={index}
                  className="group bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <client.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{client.title}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
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

export default About;
