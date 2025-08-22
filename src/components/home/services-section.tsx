import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceIcon } from '@/components/ui/site-icons';
import { consultingServices } from '@/lib/data';

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
            Services de Consulting
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Expertise et accompagnement personnalisé pour répondre à vos besoins en communication et développement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {consultingServices.map((service) => (
            <Link 
              to="/consulting" 
              key={service.id}
              className="group transition-transform hover:-translate-y-1"
            >
              <Card className="h-full border-2 border-transparent hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="mb-3 h-12 w-12 rounded-lg bg-secondary/20 p-2 text-secondary">
                    {getServiceIcon(service.icon, "h-8 w-8")}
                  </div>
                  <CardTitle className="font-playfair">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/consulting"
            className="inline-flex items-center text-primary underline underline-offset-4 hover:text-secondary"
          >
            Découvrir tous mes services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}