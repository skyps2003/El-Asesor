import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/Logo.png';
import { LocationContext } from '../context/LocationContext';

const Footer = () => {
  const phone = import.meta.env.VITE_PHONE || '+51 994 715 485';
  const email = import.meta.env.VITE_EMAIL || 'info@estudioelasesor.com';
  const { selectedLocation } = useContext(LocationContext);

  // Visit counter state
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Simulated realistic global counter
    const baseVisits = 14258;
    const localVisitsKey = 'elasesor_visits';

    let currentVisits = parseInt(localStorage.getItem(localVisitsKey) || '0');
    currentVisits += 1;
    localStorage.setItem(localVisitsKey, currentVisits.toString());

    // Add realistic progression based on date and time to simulate global traffic
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const simulatedDailyVisits = dayOfYear * 12 + today.getHours() * 2;

    setVisits(baseVisits + simulatedDailyVisits + currentVisits);
  }, []);

  const staggerFooter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#1A2620] text-bgmain relative overflow-hidden border-t-4 border-cta">
      {/* Decorative background element */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cta/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <motion.div 
          variants={staggerFooter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 mb-16"
        >

          {/* Column 1: Brand & Description */}
          <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 mb-8 group">
              <div className="bg-white p-2 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-cta/20 group-hover:border-cta transition-colors duration-300">
                <img src={logoImg} alt="El Asesor Logo" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white group-hover:text-cta transition-colors duration-300">El Asesor</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-8 pr-4">
              Firma líder multidisciplinaria dedicada a transformar la complejidad legal, contable y pericial en tranquilidad absoluta y crecimiento sostenido para su organización.
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h4 className="text-sm font-bold text-cta tracking-widest uppercase mb-8">Navegación</h4>
            <ul className="space-y-4">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Sobre Nosotros', path: '/nosotros' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-cta/0 group-hover:text-cta transition-all -ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Sede Central (Map) */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-cta tracking-widest uppercase mb-8">Sede  - {selectedLocation.city}</h4>
            <div className="bg-white/5 p-1 rounded-2xl border border-white/10 hover:border-cta/50 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] group">
              <div className="w-full h-32 rounded-xl overflow-hidden relative">
                <iframe
                  key={selectedLocation.id}
                  title={`Mapa Sede ${selectedLocation.city}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={selectedLocation.mapSrc}
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                ></iframe>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-cta shrink-0 mt-0.5" />
              <p className="leading-relaxed">{selectedLocation.address}</p>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-cta tracking-widest uppercase mb-8">Comuníquese</h4>
            <ul className="space-y-6">
              <li>
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group focus:outline-none hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cta group-hover:border-cta transition-colors shadow-lg">
                    <Phone className="w-4 h-4 text-white group-hover:text-bgmain transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Llámenos</span>
                    <span className="text-white text-sm font-medium group-hover:text-cta transition-colors">{phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-4 group focus:outline-none hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cta group-hover:border-cta transition-colors shadow-lg">
                    <Mail className="w-4 h-4 text-white group-hover:text-bgmain transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Escríbanos</span>
                    <span className="text-white text-sm font-medium group-hover:text-cta transition-colors truncate max-w-[200px] block">{email}</span>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left max-w-2xl leading-relaxed">
            © 2026 Practicantes de CONSTRUCTORA Y CONSULTORA CONTRATISTAS GENERALES ASOCIADOS INTEROCEANICA JJJA S.R.L - Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium items-center">
            <NavLink to="/terminos" className="hover:text-cta transition-colors">Términos Legales</NavLink>
            <NavLink to="/privacidad" className="hover:text-cta transition-colors">Política de Privacidad</NavLink>
            {/* Contador muy disimulado */}
            {visits > 0 && (
              <span
                className="opacity-20 cursor-default font-mono tracking-widest hover:opacity-80 transition-opacity ml-4 text-[10px]"
                title="Visitas de la página"
              >
                v.{visits.toString().padStart(6, '0')}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
