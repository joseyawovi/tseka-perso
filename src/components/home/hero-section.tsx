import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-background to-background/90 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="font-playfair text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
              Histoires, savoirs et images pour <span className="text-secondary">inspirer</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Auteur, formateur et consultant en communication, j'accompagne les individus et les organisations dans leur développement et leur expression authentique.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                <Link to="/livres">Découvrir mes livres</Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-primary hover:bg-secondary/10">
                <Link to="/formations">Voir mes formations</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/images/Conference.jpg" 
              alt="Jean Dupont en conférence" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}