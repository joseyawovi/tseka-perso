import { Link } from 'react-router-dom';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-playfair text-xl font-bold">Jean Dupont</h3>
            <p className="mb-4">
              Auteur, formateur, consultant en communication, entrepreneur, et plus encore.
              Explorez les différentes facettes de mon travail et découvrez comment je peux vous accompagner.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-playfair text-xl font-bold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
              <Link to="/livres" className="hover:text-secondary transition-colors">Livres</Link>
              <Link to="/formations" className="hover:text-secondary transition-colors">Formations</Link>
              <Link to="/consulting" className="hover:text-secondary transition-colors">Consulting</Link>
              <Link to="/projets" className="hover:text-secondary transition-colors">Projets</Link>
              <Link to="/galerie" className="hover:text-secondary transition-colors">Galerie</Link>
              <Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link>
              <Link to="/a-propos" className="hover:text-secondary transition-colors">À Propos</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 font-playfair text-xl font-bold">Newsletter</h3>
            <p className="mb-4">
              Abonnez-vous pour recevoir mes dernières publications et actualités.
            </p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Votre email"
                required
                className="bg-background/90 text-primary"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-primary">
                S'abonner
              </Button>
            </form>
            
            <div className="mt-6">
              <h4 className="mb-2 font-playfair text-lg">Me suivre</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <a 
                      key={link.platform} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p>© {currentYear} Jean Dupont. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}