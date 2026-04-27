import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/Logo.png';
import { LocationContext } from '../context/LocationContext';

const Footer = () => {
  const phone = import.meta.env.VITE_PHONE || '+51 994 715 485';
  const email = import.meta.env.VITE_EMAIL || 'info@estudioelasesor.com';
  const facebookUrl = import.meta.env.VITE_FACEBOOK || '#';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM || '#';
  const tiktokUrl = import.meta.env.VITE_TIKTOK || '#';
  const youtubeUrl = import.meta.env.VITE_YOUTUBE || '#';
  const { sedesData } = useContext(LocationContext);
  const sedePrincipal = sedesData.find(s => s.id === 'abancay') || sedesData[0];

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
    <footer className="bg-primary text-bgmain relative overflow-hidden border-t-4 border-cta">
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
              <div className="bg-white p-2 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105">
                <img src={logoImg} alt="El Asesor Logo" className="h-12 w-auto object-contain" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors duration-300">El Asesor</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-8 pr-4">
              Firma líder multidisciplinaria dedicada a transformar la complejidad legal, contable y pericial en tranquilidad absoluta y crecimiento sostenido para su organización.
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-8">Navegación</h4>
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
                    <ChevronRight className="w-4 h-4 text-cta/0 group-hover:text-white transition-all -ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Sede Central (Location) */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-8">Sede Principal - {sedePrincipal.city}</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cta/50 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] group relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cta/10 rounded-full blur-xl group-hover:bg-cta/20 transition-all duration-500"></div>
              <MapPin className="w-10 h-10 text-cta mb-4 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-gray-300 text-sm mb-4 font-medium">
                Encuentra esta y todas nuestras sedes en el mapa interactivo.
              </p>
              <NavLink to="/contacto" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider bg-cta/80 hover:bg-cta px-4 py-2 rounded-xl transition-colors shadow-lg">
                Ver Mapa <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
            <div className="mt-4 flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-cta shrink-0 mt-0.5" />
              <p className="leading-relaxed">{sedePrincipal.address}</p>
            </div>
          </motion.div>

          {/* Column 4: Contact Info & Socials */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-8">Comuníquese</h4>
            <ul className="space-y-6 mb-8">
              <li>
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group focus:outline-none hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-colors shadow-lg">
                    <Phone className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Llámenos</span>
                    <span className="text-white text-sm font-medium group-hover:text-gray-300 transition-colors">{phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-4 group focus:outline-none hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-colors shadow-lg">
                    <Mail className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Escríbanos</span>
                    <span className="text-white text-sm font-medium group-hover:text-gray-300 transition-colors truncate max-w-[200px] block">{email}</span>
                  </div>
                </a>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4 mt-8">Síganos</h4>
            <div className="flex gap-3">
              {[
                { name: 'Facebook', url: facebookUrl, icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                )},
                { name: 'Instagram', url: instagramUrl, icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                )},
                { name: 'TikTok', url: tiktokUrl, icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                )},
                { name: 'YouTube', url: youtubeUrl, icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2.5 7.1C2.5 7.1 2 8.9 2 12s.5 4.9.5 4.9c.3 1.1 1.2 2 2.3 2.2C7.1 19.5 12 19.5 12 19.5s4.9 0 7.2-.4c1.1-.3 2-1.2 2.3-2.2.5 0 .5-1.8.5-4.9s-.5-4.9-.5-4.9c-.3-1.1-1.2-2-2.3-2.2-2.3-.4-7.2-.4-7.2-.4s-4.9 0-7.2.4c-1.1.2-2 1.1-2.3 2.2z"/>
                    <polygon points="10 15 15.5 12 10 9"/>
                  </svg>
                )}
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.name}`}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cta hover:border-cta hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left max-w-2xl leading-relaxed">
            © 2026 Practicantes de CONSTRUCTORA Y CONSULTORA CONTRATISTAS GENERALES ASOCIADOS INTEROCEANICA JJJA S.R.L - Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium items-center">
            <NavLink to="/terminos" className="hover:text-white transition-colors">Términos Legales</NavLink>
            <NavLink to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</NavLink>
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
