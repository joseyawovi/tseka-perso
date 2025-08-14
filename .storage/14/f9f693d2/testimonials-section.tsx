import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Découvrez les témoignages de lecteurs et participants à mes formations.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none bg-gray-50 shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-6 md:p-10 text-center">
                    <blockquote className="mb-6">
                      <p className="font-italianno text-3xl md:text-4xl text-primary/80 mb-6">
                        "{testimonial.text}"
                      </p>
                      <footer>
                        <p className="font-playfair text-lg font-bold">{testimonial.name}</p>
                        {testimonial.role && (
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        )}
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === activeIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}