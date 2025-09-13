import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
export function ProductShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    const elements = document.querySelectorAll('.product-animate');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const products = [{
    title: 'Plan Básico',
    price: '29',
    description: 'Perfecto para pequeñas empresas y emprendedores',
    features: ['Hasta 5 usuarios', 'Almacenamiento de 10GB', 'Soporte por email', 'Actualizaciones gratuitas', 'Acceso a funciones básicas'],
    popular: false,
    delay: '0'
  }, {
    title: 'Plan Profesional',
    price: '79',
    description: 'Ideal para empresas en crecimiento',
    features: ['Hasta 20 usuarios', 'Almacenamiento de 50GB', 'Soporte prioritario 24/7', 'Actualizaciones gratuitas', 'Acceso a todas las funciones', 'Integraciones avanzadas'],
    popular: true,
    delay: '200'
  }, {
    title: 'Plan Empresarial',
    price: '199',
    description: 'Para grandes empresas con necesidades específicas',
    features: ['Usuarios ilimitados', 'Almacenamiento de 200GB', 'Soporte dedicado 24/7', 'Actualizaciones prioritarias', 'Acceso a todas las funciones', 'Integraciones personalizadas', 'API de desarrollador'],
    popular: false,
    delay: '400'
  }];
  return <section id="productos" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 product-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes y Precios
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => <div key={index} className={`rounded-2xl overflow-hidden transition-all duration-500 product-animate opacity-0 translate-y-10 ${product.popular ? 'bg-white border-2 border-indigo-600 shadow-xl scale-105 z-10' : 'bg-white border border-slate-100 shadow-md'}`} style={{
          transitionDelay: `${product.delay}ms`
        }}>
              {product.popular && <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                  Más Popular
                </div>}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${product.price}</span>
                  <span className="text-slate-600 ml-2 mb-1">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-indigo-600" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                <a href="#contacto" className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${product.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                  Elegir Plan
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}