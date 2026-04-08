import { Shield, Clock, Users, Award, HeartHandshake, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Battle-Tested Experience',
    description: '500+ projects shipped since 2009. We have seen what works and what does not across dozens of industries.',
  },
  {
    icon: Clock,
    title: 'Deadlines We Actually Meet',
    description: 'Milestone-based delivery means you know exactly when each piece will be ready. No endless delays.',
  },
  {
    icon: Users,
    title: 'Your Dedicated Team',
    description: 'Not a rotating cast of contractors. You work with the same developers and designers throughout your project.',
  },
  {
    icon: Award,
    title: 'Code That Lasts',
    description: 'We write maintainable, documented code. When you need changes down the road, they will not cost a fortune.',
  },
  {
    icon: HeartHandshake,
    title: 'Straight Talk',
    description: 'If something will not work, we tell you early. No surprises, no hidden costs, no scope creep.',
  },
  {
    icon: Zap,
    title: 'Modern Tech Stack',
    description: 'React, Node, AWS, Flutter — we use proven technologies that have active communities and long-term support.',
  },
];

const WhyChooseUsSection = () => {
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
              What Sets Us Apart
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Why Businesses
              <span className="text-accent"> Choose Us</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Plenty of agencies can write code. The difference is whether they understand your business goals and can actually deliver on their promises. Here is why our clients stick around.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-accent">500+</div>
                <div className="text-primary-foreground/60 text-sm">Projects</div>
              </div>
              <div className="text-center border-x border-primary-foreground/10">
                <div className="font-display text-3xl font-bold text-accent">98%</div>
                <div className="text-primary-foreground/60 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-accent">24/7</div>
                <div className="text-primary-foreground/60 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
