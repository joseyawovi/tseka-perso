import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { formations } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

export default function Formations() {
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Formations</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Développez vos compétences en communication, leadership et prise de parole
                avec des formations professionnelles conçues pour avoir un impact immédiat.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Video */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/EXAMPLE"
                title="Vidéo d'introduction aux formations"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Formations */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Programmes Disponibles</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {formations.map((formation) => (
                <Card key={formation.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair">{formation.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span className="text-secondary font-bold">{formation.price} €</span>
                      <span>•</span>
                      <span>{formation.duration}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{formation.description}</p>
                    <h4 className="font-bold mb-2">Objectifs:</h4>
                    <ul className="space-y-1">
                      {formation.objectives.slice(0, 2).map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span>{objective}</span>
                        </li>
                      ))}
                      {formation.objectives.length > 2 && (
                        <li className="text-muted-foreground text-sm">
                          +{formation.objectives.length - 2} autres objectifs
                        </li>
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          onClick={() => setSelectedFormation(formation.id)}
                          variant="outline"
                        >
                          Détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="font-playfair">{formation.title}</DialogTitle>
                          <DialogDescription className="flex items-center gap-2">
                            <span className="text-secondary font-bold">{formation.price} €</span>
                            <span>•</span>
                            <span>{formation.duration}</span>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <p>{formation.description}</p>
                          
                          <div>
                            <h4 className="font-bold mb-2">Objectifs détaillés:</h4>
                            <ul className="space-y-1">
                              {formation.objectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                  <span>{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="pt-4">
                            <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                              S'inscrire maintenant
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button className="flex-1 bg-secondary text-primary hover:bg-secondary/90">
                      S'inscrire
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PayPal Integration Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-4">Paiement Sécurisé</h2>
                <p className="text-lg mb-6">
                  Toutes les transactions sont sécurisées via PayPal, pour une expérience d'achat sereine.
                  Vous pouvez payer directement par carte bancaire, sans avoir besoin d'un compte PayPal.
                </p>
                <div className="flex items-center gap-4">
                  <img src="/images/paymentsp.jpg" alt="PayPal" className="h-10" />
                  <div className="flex gap-2">
                    <img src="/images/Visa.jpg" alt="Visa" className="h-8" />
                    <img src="/images/Mastercard.jpg" alt="Mastercard" className="h-8" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="font-playfair text-xl font-bold mb-4">Questions fréquentes</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-bold">Comment se déroulent les formations ?</p>
                      <p className="text-muted-foreground">
                        Les formations sont dispensées en présentiel dans nos locaux à Paris et Lyon, ou à distance via Zoom.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Puis-je obtenir une prise en charge ?</p>
                      <p className="text-muted-foreground">
                        Oui, nos formations sont éligibles à une prise en charge par votre OPCO. Contactez-nous pour plus d'informations.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Que se passe-t-il si je dois annuler ?</p>
                      <p className="text-muted-foreground">
                        Toute annulation jusqu'à 15 jours avant la formation donne lieu à un remboursement intégral.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}