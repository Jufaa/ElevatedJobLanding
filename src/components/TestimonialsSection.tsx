import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Ana Martínez',
    position: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987',
    content: 'Implementar esta solución ha transformado completamente nuestro negocio. La eficiencia ha aumentado en un 40% y nuestros clientes están más satisfechos que nunca.',
    rating: 5
  }, {
    name: 'Carlos Rodríguez',
    position: 'Director de Marketing, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987',
    content: 'Nunca había visto un producto con una interfaz tan intuitiva y potente a la vez. El soporte técnico es excepcional y las actualizaciones constantes mantienen el sistema siempre a la vanguardia.',
    rating: 5
  }, {
    name: 'Elena Gómez',
    position: 'Fundadora, DesignPro',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061',
    content: 'Después de probar varias alternativas, esta plataforma es sin duda la mejor inversión que hemos hecho. El ROI fue evidente en el primer mes de uso.',
    rating: 5
  }, {
    name: 'Miguel Sánchez',
    position: 'CTO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=987',
    content: 'La seguridad y el rendimiento son impresionantes. Como CTO, valoro enormemente la robustez y escalabilidad que ofrece esta solución para nuestras operaciones.',
    rating: 5
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.testimonial-animate');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 testimonial-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Miles de empresas confían en nuestra plataforma para optimizar sus
            operaciones
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto testimonial-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {/* Navigation Buttons */}
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-indigo-50 transition-colors" aria-label="Testimonio anterior">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-indigo-50 transition-colors" aria-label="Testimonio siguiente">
            <ChevronRight size={24} />
          </button>
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-indigo-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 mb-4">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-center">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-600 text-sm text-center">
                  {testimonials[currentIndex].position}
                </p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-4xl text-indigo-600 font-serif mb-4">
                  "
                </div>
                <p className="text-slate-700 text-lg italic mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div className="text-4xl text-indigo-600 font-serif text-right">
                  "
                </div>
              </div>
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-indigo-600' : 'bg-slate-300'}`} aria-label={`Ir al testimonio ${index + 1}`} />)}
          </div>
        </div>
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto testimonial-animate opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                ¿Listo para transformar tu negocio?
              </h3>
              <p className="text-slate-600">
                Únete a más de 10,000 empresas que ya confían en nosotros
              </p>
            </div>
            <a href="#contacto" className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap">
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>;
}