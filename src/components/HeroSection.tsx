import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
export function HeroSection() {
  const heroRef = useRef(null);
  useEffect(() => {
  const heroElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    },
    {
      threshold: 0.1,
    }
  );

  heroElements.forEach(el => {
    observer.observe(el);
    // Si el elemento ya está visible, aplica clases inmediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-10');
    }
  });

  return () => {
    heroElements.forEach(el => observer.unobserve(el));
  };
}, []);

  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900"></div>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10 pt-24">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 text-white space-y-6 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 translate-y-10 transition-all duration-1000 animate-on-scroll">
              La solución perfecta para{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                tu negocio
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-indigo-100 opacity-0 translate-y-10 transition-all duration-1000 delay-300 animate-on-scroll">
              Potencia tu empresa con nuestra plataforma innovadora
            </p>
            <p className="text-lg text-indigo-200 max-w-lg opacity-0 translate-y-10 transition-all duration-1000 delay-500 animate-on-scroll">
              Optimiza procesos, aumenta ventas y mejora la experiencia de tus
              clientes con nuestra solución integral.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10 transition-all duration-1000 delay-700 animate-on-scroll">
              <a href="#contacto" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                Comenzar Ahora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#características" className="px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
                Ver Características
              </a>
            </div>
            <div className="pt-8 space-y-3 opacity-0 translate-y-10 transition-all duration-1000 delay-1000 animate-on-scroll">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-indigo-300" />
                <span className="text-indigo-100">
                  Implementación en menos de 24 horas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-indigo-300" />
                <span className="text-indigo-100">Soporte técnico 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-indigo-300" />
                <span className="text-indigo-100">
                  30 días de garantía de devolución
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end py-8 md:py-0 opacity-0 translate-y-10 transition-all duration-1000 delay-500 animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-indigo-100 shadow-xl">
                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop" alt="Product Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.55,118.92,150.33,78.65,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>;
}