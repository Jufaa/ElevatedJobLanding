import React, { useEffect } from 'react';
import { Zap, Shield, Gauge, Users, BarChart3, Globe } from 'lucide-react';
export function FeaturesSection() {
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
    const featureElements = document.querySelectorAll('.feature-item');
    featureElements.forEach(el => observer.observe(el));
    return () => {
      featureElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const features = [{
    icon: <Zap size={32} className="text-indigo-600" />,
    title: 'Rápido y Eficiente',
    description: 'Optimiza tus procesos y aumenta la productividad con nuestra plataforma de alta velocidad.',
    delay: '0'
  }, {
    icon: <Shield size={32} className="text-purple-600" />,
    title: 'Seguridad Avanzada',
    description: 'Protección de datos de nivel empresarial con encriptación de última generación.',
    delay: '100'
  }, {
    icon: <Gauge size={32} className="text-pink-600" />,
    title: 'Rendimiento Superior',
    description: 'Disfruta de un rendimiento excepcional incluso con grandes volúmenes de datos.',
    delay: '200'
  }, {
    icon: <Users size={32} className="text-blue-600" />,
    title: 'Colaboración en Equipo',
    description: 'Herramientas colaborativas que mejoran la comunicación y productividad de tu equipo.',
    delay: '300'
  }, {
    icon: <BarChart3 size={32} className="text-green-600" />,
    title: 'Análisis Detallado',
    description: 'Obtén insights valiosos con nuestras herramientas analíticas avanzadas.',
    delay: '400'
  }, {
    icon: <Globe size={32} className="text-amber-600" />,
    title: 'Acceso Global',
    description: 'Accede a tu información desde cualquier lugar del mundo, en cualquier dispositivo.',
    delay: '500'
  }];
  return <section id="características" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-1000 feature-item">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Características Destacadas
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Descubre por qué nuestra plataforma es la elección perfecta para
            impulsar tu negocio al siguiente nivel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-100 group feature-item opacity-0 translate-y-10" style={{
          transitionDelay: `${parseInt(feature.delay) + 200}ms`
        }}>
              <div className="p-3 rounded-full bg-slate-100 w-fit mb-4 group-hover:bg-indigo-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}