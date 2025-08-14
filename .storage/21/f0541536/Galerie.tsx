import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { galleryItems } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function Galerie() {
  // All unique categories
  const categories = ['Toutes', ...new Set(galleryItems.map(item => item.category))];
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Galerie</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explorez mes voyages, les coulisses de mon travail et les sources d'inspiration
                à travers cette galerie de photos et vidéos.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="Toutes" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value="Toutes" className="mt-0">
                <GalleryGrid 
                  items={galleryItems} 
                  onItemSelect={setSelectedItem}
                />
              </TabsContent>
              
              {categories.filter(c => c !== 'Toutes').map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <GalleryGrid 
                    items={galleryItems.filter(item => item.category === category)} 
                    onItemSelect={setSelectedItem}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Media Viewer */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Fermer</span>
            </button>
            
            {selectedItem && selectedItem.type === 'image' ? (
              <div className="w-full h-full max-h-[80vh] flex items-center justify-center">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
            ) : selectedItem && (
              <div className="w-full aspect-video">
                <iframe
                  src={selectedItem.src}
                  title={selectedItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="font-playfair text-xl font-bold">{selectedItem?.title}</h3>
              <p className="text-muted-foreground">{selectedItem?.category}</p>
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}

function GalleryGrid({ items, onItemSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="cursor-pointer group overflow-hidden rounded-md aspect-square relative"
          onClick={() => onItemSelect(item)}
        >
          <img 
            src={item.type === 'image' ? item.src : item.thumbnail} 
            alt={item.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105" 
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
            <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="font-playfair font-bold">{item.title}</h3>
              {item.type === 'video' && (
                <div className="mt-2 p-2 rounded-full bg-secondary flex items-center justify-center h-10 w-10 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}