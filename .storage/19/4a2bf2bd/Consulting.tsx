import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { consultingServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServiceIcon } from '@/components/ui/site-icons';

export default function Consulting() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Consulting</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Services d'accompagnement personnalisé pour les organisations et les individus souhaitant 
                perfectionner leur communication et développer leur potentiel.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
                Mes Services
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Une approche sur mesure pour répondre à vos besoins spécifiques en matière de communication 
                et de développement professionnel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {consultingServices.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 h-14 w-14 rounded-full bg-secondary/20 p-3 text-secondary flex items-center justify-center">
                      {getServiceIcon(service.icon, "h-8 w-8")}
                    </div>
                    <CardTitle className="font-playfair text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-lg">{service.description}</p>
                    <div className="space-y-4">
                      <h4 className="font-bold">Ce service inclut:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Analyse approfondie de vos besoins</li>
                        <li>Élaboration d'une stratégie personnalisée</li>
                        <li>Accompagnement et coaching individuel</li>
                        <li>Évaluation des résultats et ajustements</li>
                      </ul>
                      
                      <div className="pt-4">
                        <Button className="bg-secondary text-primary hover:bg-secondary/90">
                          Prendre rendez-vous
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly Integration */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-4">Réservez une Consultation</h2>
                <p className="text-lg mb-6">
                  Prenez rendez-vous pour une consultation initiale de 30 minutes. 
                  Nous discuterons de vos besoins et déterminerons comment je peux vous accompagner au mieux.
                </p>
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                  Voir les disponibilités
                </Button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="aspect-[4/3] bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-center text-muted-foreground">
                    Calendrier Calendly ici<br />
                    (Intégré via l'API Calendly)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
                Témoignages Clients
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Découvrez ce que mes clients disent de mon accompagnement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-italianno text-2xl text-primary mb-4">
                    "L'accompagnement de Jean a transformé notre stratégie de communication. Ses conseils ont apporté une clarté et une cohérence remarquables."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src="/assets/testimonials/client1.jpg" 
                        alt="Portrait de Marie Dubois" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-playfair font-bold">Marie Dubois</p>
                      <p className="text-sm text-muted-foreground">Directrice Communication, Groupe AXA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="font-italianno text-2xl text-primary mb-4">
                    "Sa capacité à analyser rapidement les enjeux et à proposer des solutions concrètes m'a permis de transformer ma prise de parole publique."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src="/assets/testimonials/client2.jpg" 
                        alt="Portrait de Pierre Martin" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-playfair font-bold">Pierre Martin</p>
                      <p className="text-sm text-muted-foreground">CEO, Startup Innovation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="font-italianno text-2xl text-primary mb-4">
                    "Jean a su identifier les points faibles de notre communication politique et nous guider vers une approche plus authentique et impactante."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src="/assets/testimonials/client3.jpg" 
                        alt="Portrait de Sophie Laurent" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-playfair font-bold">Sophie Laurent</p>
                      <p className="text-sm text-muted-foreground">Directrice de Cabinet, Mairie de Lyon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}