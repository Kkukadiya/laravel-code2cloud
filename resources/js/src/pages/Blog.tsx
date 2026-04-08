import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';

const blogs = [
  {
    id: 1,
    title: 'How to Choose the Right Tech Stack for Your Startup in 2025',
    excerpt: 'Picking between React and Vue, or deciding on AWS versus Google Cloud, can feel overwhelming. Here is a practical framework for making these decisions based on your specific needs.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    author: 'Amit Patel',
    date: 'Jan 5, 2025',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Cloud Migration Mistakes That Cost Companies Thousands',
    excerpt: 'After helping 50+ businesses move to the cloud, we have seen the same errors repeat. Learn how to avoid them before they drain your budget.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    author: 'Sarah Mitchell',
    date: 'Jan 2, 2025',
    category: 'Cloud',
  },
  {
    id: 3,
    title: 'Why Your Mobile App Users Are Leaving (And How to Fix It)',
    excerpt: 'App uninstall rates are at an all-time high. We break down the UX patterns that keep users engaged and coming back for more.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    author: 'Lisa Chen',
    date: 'Dec 28, 2024',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Building APIs That Developers Actually Want to Use',
    excerpt: 'Good documentation is just the start. Learn how to design REST and GraphQL APIs that are intuitive, consistent, and a joy to integrate.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    author: 'Dev Kumar',
    date: 'Dec 22, 2024',
    category: 'Development',
  },
  {
    id: 5,
    title: 'VOIP for Remote Teams: What We Learned Running a Global Company',
    excerpt: 'With offices across three continents, we have tested every communication tool out there. Here is what actually works for distributed teams.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    author: 'Rachel Torres',
    date: 'Dec 18, 2024',
    category: 'Operations',
  },
  {
    id: 6,
    title: 'Security Basics Every Small Business Should Know',
    excerpt: 'You do not need a full-time security team to protect your business. These straightforward practices will cover 90 percent of common threats.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    author: 'James Wilson',
    date: 'Dec 15, 2024',
    category: 'Security',
  },
];

const categories = ['All', 'Development', 'Cloud', 'Design', 'Operations', 'Security'];

const Blog = () => {
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
                Our Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
                Insights &
                <span className="text-accent"> Practical Advice</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Lessons learned from building software for 15 years. No marketing fluff — just honest takes on development, design, and running a tech business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button variant="coral" size="lg" asChild>
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all border border-border hover:border-accent hover:text-accent"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-border bg-background focus:border-accent focus:outline-none w-64"
                />
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article 
                  key={blog.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="coral" size="lg">
                Load More Articles
              </Button>
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

export default Blog;
