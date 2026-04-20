import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bgmain/95 backdrop-blur-md shadow-md py-3 text-primary' 
          : 'bg-primary/90 backdrop-blur-sm py-5 text-bgmain'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="El Asesor Logo" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-2xl font-bold tracking-tight">El Asesor</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `relative px-2 py-1 transition-colors duration-300 hover:text-cta ${
                  isActive ? 'text-cta font-semibold' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-cta" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink 
            to="/contacto"
            className="bg-cta hover:bg-[#A38A66] text-bgmain font-semibold py-2 px-6 rounded-lg shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            Consulta Rápida
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-current hover:text-cta transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-bgmain text-primary shadow-xl border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-bgalt text-cta font-semibold' : 'hover:bg-bgalt'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <NavLink 
                  to="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-cta text-bgmain font-semibold py-3 rounded-lg"
                >
                  Consulta Rápida
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
