import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="font-playfair text-6xl font-bold mb-6 text-primary">404</h1>
          <h2 className="text-2xl font-playfair mb-4">Page non trouvée</h2>
          <p className="mb-8 text-muted-foreground">
            La page que vous recherchez semble introuvable. Elle a peut-être été déplacée ou supprimée.
          </p>
          <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
            <Link to="/">Retourner à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}