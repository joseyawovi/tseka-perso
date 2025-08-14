import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { projects } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function Projets() {
  // All unique categories
  const categories = ['tous', ...new Set(projects.map(project => project.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Projets & Engagements</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Découvrez les différents projets et engagements qui m'animent dans les domaines
                du business, de la politique et de l'action sociale.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="tous" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="capitalize"
                    >
                      {category === 'tous' ? 'Tous' : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value="tous" className="mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              {categories.filter(c => c !== 'tous').map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
                Impact et Résultats
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Des projets qui ont un impact concret sur les individus, les organisations et la société.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 h-16 w-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold">500+</h3>
                <p className="text-muted-foreground">Jeunes entrepreneurs accompagnés</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-4 h-16 w-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold">12</h3>
                <p className="text-muted-foreground">Propositions de loi inspirées</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-4 h-16 w-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold">1500+</h3>
                <p className="text-muted-foreground">Bénéficiaires des programmes sociaux</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className={`
            inline-block px-3 py-1 rounded-full text-xs font-semibold 
            ${project.category === 'business' ? 'bg-blue-100 text-blue-800' : ''}
            ${project.category === 'politique' ? 'bg-purple-100 text-purple-800' : ''}
            ${project.category === 'social' ? 'bg-green-100 text-green-800' : ''}
          `}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
        <h3 className="font-playfair text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        {project.link && (
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              En savoir plus <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}