import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getNestedValue } from '@/lib/site-content';

const Footer = () => {
  const { content } = useSiteContent();
  const currentYear = new Date().getFullYear();
  const companyDescription = getNestedValue(
    content,
    'footer.companyDescription',
    'Software development and cloud solutions for businesses that want to grow. Since 2009, we have helped companies build products that work.'
  );
  const quickLinks = getNestedValue(content, 'footer.quickLinks', [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]) as Array<{ name: string; href: string }>;
  const servicesLinks = getNestedValue(content, 'footer.servicesLinks', [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/design' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'VOIP Services', href: '/services/voip-services' },
    { name: 'IT Consultancy', href: '/services/consultancy' },
  ]) as Array<{ name: string; href: string }>;
  const offices = getNestedValue(content, 'footer.offices', [
    { country: 'India', label: '123 Tech Park, Sector 62, Noida, UP 201301' },
    { country: 'Canada', label: '456 Innovation Blvd, Toronto, ON M5V 2T6' },
    { country: 'New Zealand', label: '789 Digital Lane, Auckland CBD 1010' },
  ]) as Array<{ country: string; label: string }>;
  const phone = getNestedValue(content, 'footer.phone', '+1 (234) 567-890');
  const email = getNestedValue(content, 'footer.email', 'hello@codes2cloud.com');
  const legalLinks = getNestedValue(content, 'footer.legalLinks', [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Sitemap', href: '/sitemap' },
  ]) as Array<{ name: string; href: string }>;

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">{companyDescription}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((linkItem) => (
                <li key={linkItem.name}>
                  <Link
                    to={linkItem.href}
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Multiple Locations */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-semibold text-lg mb-6">Our Offices</h4>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.country}>
                  <h5 className="font-semibold text-accent text-sm mb-2">{office.country}</h5>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/70 text-sm">{office.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} {getNestedValue(content, 'footer.companyName', 'Codes2cloud')}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
