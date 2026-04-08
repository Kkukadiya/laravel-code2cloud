import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sitemap = () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'IT Consulting', path: '/services' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            Sitemap
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Pages Section */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                Pages
              </h2>
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.name}>
                    <Link 
                      to={page.path}
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                Services
              </h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path}
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Legal Section */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                Legal
              </h2>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
