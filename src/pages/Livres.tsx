import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { books, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Livres() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Mes Livres</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Découvrez mes ouvrages sur la communication, le leadership, et le développement personnel.
                Des livres conçus pour vous accompagner dans votre croissance professionnelle et personnelle.
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-12">
              {books.map((book) => (
                <Card 
                  key={book.id} 
                  className="overflow-hidden border-none shadow-lg"
                  id={book.id}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-80 md:h-auto">
                        <img 
                          src={book.coverImage} 
                          alt={`Couverture de ${book.title}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="col-span-2 flex flex-col justify-between p-6 md:p-8">
                        <div>
                          <h2 className="mb-4 font-playfair text-2xl md:text-3xl font-bold">{book.title}</h2>
                          <p className="mb-6 text-lg">{book.summary}</p>
                          <div className="mb-6 prose max-w-none">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, 
                              eget aliquam nisl nisl sit amet nisl.
                            </p>
                            <p>
                              Vivamus consequat, ex ac ultrices blandit, nisi nisl aliquam nisl, 
                              eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, 
                              nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                            <a href={book.buyLink} target="_blank" rel="noopener noreferrer">Acheter</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Témoignages de Lecteurs</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full">
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex-grow">
                      <p className="font-italianno text-2xl text-primary mb-4">"{testimonial.text}"</p>
                    </div>
                    <div>
                      <p className="font-playfair font-bold">{testimonial.name}</p>
                      {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}