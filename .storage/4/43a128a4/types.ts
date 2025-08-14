export interface Book {
  id: string;
  title: string;
  coverImage: string;
  summary: string;
  buyLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role?: string;
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  price: number;
  duration: string;
  image: string;
}

export interface ConsultingService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'business' | 'politique' | 'social';
  description: string;
  image: string;
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Voyages' | 'Backstage' | 'Inspiration';
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}