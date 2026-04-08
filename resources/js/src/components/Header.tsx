import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'VOIP Services', href: '/services/voip-services' },
      { name: 'IT Consultancy', href: '/services/consultancy' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep mobile menu positioned under the header (so logo + hamburger stay visible)
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    }

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro?.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo 
              variant="default" 
              size="md"
              className={cn(
                "transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1",
                    isScrolled
                      ? "text-foreground/80 hover:text-accent hover:bg-accent/10"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    location.pathname === item.href && "text-accent"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-lg border border-border/50 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="coral" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "hover:bg-muted" : "hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay (below header so logo/hamburger stay clickable) */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 bg-background/80 backdrop-blur-sm z-[45]"
            style={{ top: headerHeight }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu (drops down under the header) */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 bg-card border-t border-border shadow-2xl z-[46] transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-2 opacity-0 pointer-events-none"
          )}
          style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
        >
          <div className="flex h-full flex-col">
            {/* Mobile Menu Items */}
            <div
              className="flex-1 py-4 px-2 overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" } as any}
            >
              {navItems.map((item) => (
                <div key={item.name} className="mb-1">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all",
                          mobileDropdown === item.name 
                            ? "bg-accent/10 text-accent" 
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {item.name}
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileDropdown === item.name && "rotate-90"
                        )} />
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-200",
                        mobileDropdown === item.name ? "max-h-60" : "max-h-0"
                      )}>
                        <div className="pl-4 py-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors text-sm"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl font-medium transition-all",
                        location.pathname === item.href 
                          ? "bg-accent/10 text-accent" 
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-border bg-card flex justify-center">
              <Button variant="default" size="sm" className="px-6 bg-primary hover:bg-primary/90" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
