import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  
  // Get all unique categories
  const categories = ['Tous', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Blog / Chroniques</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Réflexions, analyses et partage d'expériences sur la communication, le leadership,
                la politique et le développement personnel.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <aside className="w-full md:w-1/4">
                <div className="sticky top-24 space-y-8">
                  {/* Search */}
                  <div>
                    <h3 className="font-playfair text-lg font-bold mb-4">Recherche</h3>
                    <div className="flex items-center space-x-2">
                      <Input
                        placeholder="Rechercher un article..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div>
                    <h3 className="font-playfair text-lg font-bold mb-4">Catégories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                              selectedCategory === category 
                                ? 'bg-secondary/20 text-secondary font-medium'
                                : 'hover:bg-secondary/10'
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Newsletter */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-playfair text-lg font-bold mb-2">Newsletter</h3>
                    <p className="text-muted-foreground mb-4">
                      Recevez mes derniers articles et actualités directement dans votre boîte mail.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Votre email"
                        required
                      />
                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        S'abonner
                      </Button>
                    </form>
                  </div>
                </div>
              </aside>
              
              {/* Blog Posts */}
              <div className="w-full md:w-3/4">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold mb-2">Aucun article trouvé</h3>
                    <p className="text-muted-foreground">
                      Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}