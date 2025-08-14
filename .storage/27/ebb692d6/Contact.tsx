import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { socialLinks } from '@/lib/data';
import { MapPin, Phone, Mail, Calendar, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Contact</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                N'hésitez pas à me contacter pour toute question concernant mes livres,
                formations, services de consulting ou pour une simple prise de contact.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">Envoyez-moi un message</h2>
                
                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                    Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                      required
                    />
                    <Label htmlFor="consent" className="text-sm">
                      J'accepte que mes informations soient traitées pour recevoir une réponse à ma demande
                    </Label>
                  </div>
                  
                  <Button type="submit" className="bg-secondary text-primary hover:bg-secondary/90">
                    Envoyer le message
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">Informations de contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <p className="font-bold">Adresse</p>
                        <address className="not-italic text-muted-foreground">
                          123 Avenue des Lumières<br />
                          69000 Lyon, France
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-secondary" />
                      <div>
                        <p className="font-bold">Téléphone</p>
                        <a href="tel:+33123456789" className="text-muted-foreground hover:text-secondary">
                          +33 1 23 45 67 89
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-secondary" />
                      <div>
                        <p className="font-bold">Email</p>
                        <a href="mailto:contact@jeandupont.fr" className="text-muted-foreground hover:text-secondary">
                          contact@jeandupont.fr
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-secondary" />
                      <div>
                        <p className="font-bold">Prendre rendez-vous</p>
                        <a href="#" className="text-muted-foreground hover:text-secondary">
                          Voir mes disponibilités sur Calendly
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-bold mb-4">Me suivre</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const Icon = socialIcons[link.icon];
                      return (
                        <a 
                          key={link.platform} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          <span className="sr-only">{link.platform}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-100">
                    {/* Here you would add a Google Maps iframe */}
                    <div className="h-full w-full flex items-center justify-center text-center p-4">
                      <p className="text-muted-foreground">
                        Carte Google Maps<br />
                        (Intégrée avec l'API Google Maps)
                      </p>
                    </div>
                  </div>
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