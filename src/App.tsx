import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Livres from './pages/Livres';
import Formations from './pages/Formations';
import Consulting from './pages/Consulting';
import Projets from './pages/Projets';
import Galerie from './pages/Galerie';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/livres" element={<Livres />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;