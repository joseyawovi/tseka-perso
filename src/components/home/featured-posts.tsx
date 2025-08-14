import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';

export function FeaturedPosts() {
  // Display only the 3 most recent posts on homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
            Dernières Chroniques
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Réflexions, analyses et partage d'expériences sur des thématiques variées.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-transform hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105" 
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-secondary">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="font-playfair line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-secondary">
            <Link to="/blog">Lire toutes les chroniques</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}