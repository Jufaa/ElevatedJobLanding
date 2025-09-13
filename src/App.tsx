import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/SkillsSection';
import { ProductShowcase } from './components/ProjectsSection';
import { Testimonials } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans bg-white text-slate-800">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}