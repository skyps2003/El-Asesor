import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/Logo.png';

const staggerNav = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemNav = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

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
          <motion.img 
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            src={logoImg} 
            alt="El Asesor Logo" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
          />
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight group-hover:text-cta transition-colors duration-300"
          >
            El Asesor
          </motion.span>
        </NavLink>

        {/* Desktop Nav */}
        <motion.nav 
          variants={staggerNav}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-8 font-medium items-center"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemNav}>
              <NavLink 
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
            </motion.div>
          ))}
          <motion.div variants={itemNav}>
            <NavLink 
              to="/contacto"
              className="bg-cta hover:bg-[#A38A66] text-bgmain font-semibold py-2.5 px-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:scale-95"
            >
              Consulta Rápida
            </NavLink>
          </motion.div>
        </motion.nav>

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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 } },
              hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } }
            }}
            className="md:hidden absolute top-full left-0 w-full bg-bgmain text-primary shadow-xl border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemNav}>
                  <NavLink 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-md transition-colors active:scale-95 ${
                        isActive ? 'bg-bgalt text-cta font-semibold' : 'hover:bg-bgalt'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={itemNav} className="pt-4 border-t border-gray-200">
                <NavLink 
                  to="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-cta hover:bg-[#A38A66] active:scale-95 text-bgmain font-semibold py-3 rounded-lg transition-transform"
                >
                  Consulta Rápida
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
