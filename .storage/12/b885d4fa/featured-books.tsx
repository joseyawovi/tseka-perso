import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { books } from '@/lib/data';

export function FeaturedBooks() {
  // Display only first 2 books on homepage
  const featuredBooks = books.slice(0, 2);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
            Livres Récents
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Découvrez mes ouvrages explorant la communication, le leadership et le développement personnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={book.coverImage} 
                      alt={`Couverture de ${book.title}`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <h3 className="mb-2 font-playfair text-xl font-bold">{book.title}</h3>
                      <p className="mb-4 text-muted-foreground">{book.summary}</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                        <a href={book.buyLink} target="_blank" rel="noopener noreferrer">Acheter</a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to={`/livres#${book.id}`}>En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-secondary">
            <Link to="/livres">Voir tous mes livres</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}