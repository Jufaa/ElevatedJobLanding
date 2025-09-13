import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
export function AboutSection() {
  return <section id="sobre-mí" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Conoce un poco más sobre mi experiencia, educación y pasión por el
            desarrollo web.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" alt="Working on laptop" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-blue-600 text-white px-6 py-3 rounded">
                <div className="font-bold text-2xl">5+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Desarrollador web apasionado y diseñador creativo
            </h3>
            <p className="text-slate-600">
              Soy un desarrollador full-stack con experiencia en la creación de
              aplicaciones web modernas y atractivas. Me apasiona construir
              productos digitales que sean tanto funcionales como estéticamente
              agradables.
            </p>
            <p className="text-slate-600">
              Mi objetivo es combinar mis habilidades técnicas y creativas para
              desarrollar soluciones que no solo cumplan con los requisitos,
              sino que también proporcionen una experiencia excepcional para el
              usuario final.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={24} />
                <div>
                  <div className="font-medium">Experiencia</div>
                  <div className="text-sm text-slate-600">5+ años</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <GraduationCap className="text-purple-600" size={24} />
                <div>
                  <div className="font-medium">Educación</div>
                  <div className="text-sm text-slate-600">Ing. en Sistemas</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Award className="text-green-600" size={24} />
                <div>
                  <div className="font-medium">Proyectos</div>
                  <div className="text-sm text-slate-600">50+ completados</div>
                </div>
              </div>
            </div>
            <a href="#contacto" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-4">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>;
}