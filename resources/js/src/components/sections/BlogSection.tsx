import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const blogs = [
  {
    id: 1,
    title: 'How to Choose the Right Tech Stack for Your Startup in 2025',
    excerpt: 'Picking between React and Vue, or deciding on AWS versus Google Cloud, can feel overwhelming. Here is a practical framework for making these decisions.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    author: 'Amit Patel',
    date: 'Jan 5, 2025',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Cloud Migration Mistakes That Cost Companies Thousands',
    excerpt: 'After helping 50+ businesses move to the cloud, we have seen the same errors repeat. Learn how to avoid them before they drain your budget.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    author: 'Sarah Mitchell',
    date: 'Jan 2, 2025',
    category: 'Cloud',
  },
  {
    id: 3,
    title: 'Why Your Mobile App Users Are Leaving (And How to Fix It)',
    excerpt: 'App uninstall rates are at an all-time high. We break down the UX patterns that keep users engaged and coming back.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop',
    author: 'Lisa Chen',
    date: 'Dec 28, 2024',
    category: 'Design',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            From Our Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Insights & <span className="text-accent">Practical Advice</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No fluff, no jargon. Just actionable insights from our team on building better software and running smarter tech operations.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
