import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
export function ContactSection() {
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
    const elements = document.querySelectorAll('.contact-animate');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section id="contacto" className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 contact-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza Hoy Mismo
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-indigo-100 text-lg">
            Contacta con nuestro equipo y descubre cómo podemos ayudarte a
            alcanzar tus objetivos
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 text-slate-800 contact-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <h3 className="text-2xl font-bold mb-6">
              Solicita una Demo Gratuita
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre
                  </label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="tu@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Empresa
                </label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="Nombre de tu empresa" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje
                </label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="¿Cómo podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Solicitar Demo
                <Send size={18} />
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between contact-animate opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <div>
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <p className="text-indigo-100 mb-8">
                Nos dedicamos a ofrecer soluciones innovadoras que realmente
                marcan la diferencia en tu negocio. Nuestro equipo de expertos
                está listo para ayudarte a alcanzar tus objetivos.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">
                      Implementación Rápida
                    </h4>
                    <p className="text-indigo-100">
                      Configuración e implementación en menos de 24 horas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Soporte Premium</h4>
                    <p className="text-indigo-100">
                      Atención personalizada 24/7 por nuestro equipo de expertos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Sin Riesgos</h4>
                    <p className="text-indigo-100">
                      30 días de garantía de devolución sin preguntas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold mb-2">10k+</div>
                <div className="text-indigo-100">Clientes Satisfechos</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-indigo-100">Tiempo de Actividad</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-indigo-100">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}