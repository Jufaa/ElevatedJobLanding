import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ElevatedJob
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Inicio', 'Características', 'Productos', 'Testimonios', 'Contacto'].map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`font-medium transition-colors hover:text-indigo-600 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                {item}
              </a>)}
            <a href="#contacto" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Comenzar Ahora
            </a>
          </nav>
          {/* Mobile Navigation Button */}
          <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {['Inicio', 'Características', 'Productos', 'Testimonios', 'Contacto'].map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-medium text-slate-800 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
                  {item}
                </a>)}
              <a href="#contacto" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors text-center" onClick={() => setIsOpen(false)}>
                Comenzar Ahora
              </a>
            </div>
          </div>
        </div>}
    </header>;
}