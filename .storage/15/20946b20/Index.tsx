import { HeroSection } from "@/components/home/hero-section";
import { FeaturedBooks } from "@/components/home/featured-books";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedBooks />
        <ServicesSection />
        <TestimonialsSection />
        <FeaturedPosts />
      </main>
      <Footer />
    </div>
  );
}