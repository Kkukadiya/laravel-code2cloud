import { Shield, Award, CheckCircle, BadgeCheck, ShieldCheck } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const colorClasses = {
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    hover: 'group-hover:bg-accent',
  },
  teal: {
    bg: 'bg-teal/10',
    text: 'text-teal',
    hover: 'group-hover:bg-teal',
  },
  gold: {
    bg: 'bg-gold/10',
    text: 'text-gold',
    hover: 'group-hover:bg-gold',
  },
};

const iconMap: Record<string, any> = {
  copyscape: BadgeCheck,
  dmca: ShieldCheck,
  shield: Shield,
  award: Award,
  checkCircle: CheckCircle,
  default: Shield,
};

const CertificationsSection = () => {
  const { content } = useSiteContent();
  const sectionLabel = getNestedValue(content, 'certifications.sectionLabel', 'Recognition & Standards');
  const title = getNestedValue(content, 'certifications.title', 'Certified Excellence');
  const description = getNestedValue(
    content,
    'certifications.description',
    'We earn our partnerships and certifications through consistent delivery. Here is the proof that we take quality seriously.'
  );

  const clutchBadges = getNestedValue(content, 'certifications.clutchBadges', []);
  const trustBadges = getNestedValue(content, 'certifications.trustBadges', []);
  const partners = getNestedValue(content, 'certifications.partners', []);
  const compliance = getNestedValue(content, 'certifications.compliance', []);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {sectionLabel}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        {/* Clutch Badges Grid */}
        <div className="mb-12">
          <h3 className="text-center text-muted-foreground font-medium mb-8 uppercase tracking-wider text-sm">
            Clutch Awards
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clutchBadges.map((badge: any, index: number) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-full aspect-square flex flex-col items-center justify-center rounded-lg mb-2 ${
                  badge.isGlobal ? 'bg-gradient-to-br from-green-500/20 to-green-600/20' :
                  badge.isChampion ? 'bg-gradient-to-br from-gold/20 to-amber-500/20' :
                  'bg-accent/5'
                }`}>
                  <div className="text-[10px] text-muted-foreground font-medium mb-1 uppercase tracking-wide">
                    {badge.title}
                  </div>
                  <div className={`font-display text-sm font-bold ${
                    badge.isGlobal ? 'text-green-500' :
                    badge.isChampion ? 'text-gold' :
                    'text-accent'
                  }`}>
                    Clutch
                  </div>
                  {badge.isGlobal && (
                    <span className="text-xs font-bold text-green-500 mt-1">GLOBAL</span>
                  )}
                  {badge.isChampion && (
                    <span className="text-xs font-bold text-gold mt-1">CHAMPION</span>
                  )}
                  <div className="text-[9px] text-muted-foreground mt-1">
                    {badge.subtitle}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  {badge.label && <span>{badge.label}</span>}
                  {badge.year && <span className="font-semibold text-foreground">{badge.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Trust Badges - Copyscape, DMCA */}
        <div className="mb-12">
          <h3 className="text-center text-muted-foreground font-medium mb-8 uppercase tracking-wider text-sm">
            Trust & Protection
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {trustBadges.map((badge: any, index: number) => {
              const IconComponent = iconMap[badge.type] || iconMap.default;
              const colors = colorClasses[badge.color as keyof typeof colorClasses] ?? colorClasses.accent;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }} />
                  </div>

                  <div className={`relative w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`w-7 h-7 ${colors.text} group-hover:text-accent-foreground transition-colors`} />
                  </div>

                  <h4 className="relative font-display text-lg font-bold text-foreground mb-1">{badge.name}</h4>

                  <span className={`relative inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} mb-2`}>
                    {badge.badge}
                  </span>

                  <p className="relative text-sm text-muted-foreground">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-12">
          <h3 className="text-center text-muted-foreground font-medium mb-8 uppercase tracking-wider text-sm">
            Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner: any, index: number) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Certifications */}
        <div>
          <h3 className="text-center text-muted-foreground font-medium mb-8 uppercase tracking-wider text-sm">
            Security & Compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {compliance.map((cert: any, index: number) => {
              const IconComponent = iconMap[cert.type] || iconMap.default;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
