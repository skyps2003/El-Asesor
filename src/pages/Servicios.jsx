import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  ClipboardCheck, LineChart, Receipt, Search, Leaf, Box,
  Scale, Gavel, Building, ShieldPlus, FileText,
  FolderOpen, Calculator,
  Briefcase, Home, Building2, Users, TrendingUp,
  FileSpreadsheet, Landmark, Rocket,
  Globe, Settings, Target, CircleDollarSign, Network,
  ShieldAlert, FileCheck, SearchCheck, ShieldCheck, ChevronRight, X
} from 'lucide-react';

import img1 from '../assets/servicios/01-auditoria.jpg';
import img2 from '../assets/servicios/02-legal.jpg';
import img3 from '../assets/servicios/03-peritaje.jpg';
import img4 from '../assets/servicios/04-consultoria.jpg';
import img5 from '../assets/servicios/05-contabilidad.jpg';
import img6 from '../assets/servicios/06-inversion.jpg';
import img7 from '../assets/servicios/07-penales.jpg';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const divisions = [
  {
    id: "01",
    title: "Auditoría",
    desc: "Proporcionamos una visión objetiva e independiente de su organización, garantizando la transparencia de su información y la optimización de sus recursos.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    image: img1,
    className: "md:col-span-2 md:row-span-2",
    items: [
      { title: "Auditoría Financiera y Operativa", desc: "Opinión sobre estados financieros y evaluación de procesos para maximizar la productividad.", icon: <LineChart className="w-6 h-6" /> },
      { title: "Auditoría Tributaria y de Proyectos", desc: "Control de obligaciones fiscales y evaluación de viabilidad en proyectos públicos y privados.", icon: <Receipt className="w-6 h-6" /> },
      { title: "Exámenes Especiales y Lavado de Activos", desc: "Investigación técnica de desbalances patrimoniales, riesgos financieros y peritajes específicos.", icon: <Search className="w-6 h-6" /> },
      { title: "Auditoría Ambiental y Tasaciones", desc: "Cumplimiento normativo ambiental y valoración certificada de inmuebles y activos estratégicos.", icon: <Leaf className="w-6 h-6" /> },
      { title: "Control Interno", desc: "Verificación y mejora en la gestión de inventarios y toma física de activos.", icon: <Box className="w-6 h-6" /> },
    ]
  },
  {
    id: "02",
    title: "Legal y Defensa Jurídica",
    desc: "Brindamos un respaldo legal sólido y estratégico en diversas ramas del derecho, enfocándonos en la protección de sus derechos y la prevención de contingencias legales.",
    icon: <Scale className="w-8 h-8" />,
    image: img2,
    className: "md:col-span-2 md:row-span-1",
    items: [
      { title: "Litigios y Procesos", desc: "Defensa experta en procesos laborales, civiles, penales, constitucionales y de familia. Especialistas en accidentes de trabajo.", icon: <Gavel className="w-6 h-6" /> },
      { title: "Derecho Administrativo", desc: "Representación ante organismos reguladores (INDECOPI, SUTRAN, SUNASS, OSINERGMIN) y gestión municipal.", icon: <Building className="w-6 h-6" /> },
      { title: "Seguridad Social", desc: "Asesoría especializada en Jubilación Minera (Ley 25009) y Seguro de Trabajo de Riesgo (SCTR).", icon: <ShieldPlus className="w-6 h-6" /> },
      { title: "Contratos y Propiedades", desc: "Elaboración de contratos mineros/civiles y saneamiento físico-legal de predios urbanos, rurales y comunidades.", icon: <FileText className="w-6 h-6" /> },
    ]
  },
  {
    id: "03",
    title: "Peritaje Judicial",
    desc: "Proporcionamos dictámenes claros y técnicos sobre información contable-financiera en expedientes judiciales para respaldar decisiones administrativas y de justicia.",
    icon: <FileCheck className="w-8 h-8" />,
    image: img3,
    className: "md:col-span-1 md:row-span-1",
    items: [
      { title: "Soporte en Contenciones", desc: "Asesoría técnica en procesos administrativos y judiciales de alta complejidad.", icon: <FolderOpen className="w-6 h-6" /> },
      { title: "Peritajes de Oficio y de Parte", desc: "Elaboración de informes periciales contables y fiscales con rigor técnico y validez legal.", icon: <Scale className="w-6 h-6" /> },
      { title: "Delitos Económicos", desc: "Especialistas en casos de lavado de activos, peculado, malversación de fondos y desbalances patrimoniales.", icon: <Search className="w-6 h-6" /> },
      { title: "Cálculos Especializados", desc: "Liquidación de intereses legales, laborales y financieros bajo normativa vigente de la SBS.", icon: <Calculator className="w-6 h-6" /> },
    ]
  },
  {
    id: "04",
    title: "Consultoría",
    desc: "Brindamos soluciones integrales para la optimización corporativa, el saneamiento de activos y la viabilidad de inversiones en todos los sectores económicos.",
    icon: <Briefcase className="w-8 h-8" />,
    image: img4,
    className: "md:col-span-1 md:row-span-1",
    items: [
      { title: "Saneamiento de Bienes", desc: "Regularización físico-legal de predios urbanos, rurales y comunidades campesinas (incluyendo deslindes).", icon: <Home className="w-6 h-6" /> },
      { title: "Consultoría Empresarial", desc: "Especialistas en reestructuración patrimonial, fusiones, adquisiciones y procesos de liquidación ante INDECOPI.", icon: <Building2 className="w-6 h-6" /> },
      { title: "Gestión y Outsourcing", desc: "Externalización integral contable, laboral y financiera, junto a la elaboración de instrumentos de gestión institucional.", icon: <Users className="w-6 h-6" /> },
      { title: "Inversión y Proyectos", desc: "Evaluación y asesoría técnica en proyectos de inversión y liquidación de obras públicas y privadas.", icon: <TrendingUp className="w-6 h-6" /> },
    ]
  },
  {
    id: "05",
    title: "Contabilidad y Tributación",
    desc: "Ofrecemos una gestión contable y fiscal integral, alineada a la normativa vigente para garantizar la salud financiera y el cumplimiento normativo de su empresa.",
    icon: <Calculator className="w-8 h-8" />,
    image: img5,
    className: "md:col-span-2 md:row-span-1",
    items: [
      { title: "Defensa Administrativa", desc: "Patrocinio experto en procesos de reclamo y fiscalizaciones ante entidades gubernamentales.", icon: <Scale className="w-6 h-6" /> },
      { title: "Contabilidad y Finanzas", desc: "Registro de libros electrónicos (PLE-SIRE), elaboración de estados financieros bajo NIIF y conciliaciones bancarias.", icon: <FileSpreadsheet className="w-6 h-6" /> },
      { title: "Gestión Tributaria", desc: "Declaración de impuestos (PDT 621, 601), recuperación de impuestos ante SUNAT y revisiones fiscales preventivas.", icon: <Landmark className="w-6 h-6" /> },
      { title: "Gestión Laboral", desc: "Elaboración de planillas, cálculo de beneficios sociales (CTS, gratificaciones) y asesoría en regímenes pensionarios (AFP/ONP).", icon: <Users className="w-6 h-6" /> },
      { title: "Constitución y Due Diligence", desc: "Formalización de empresas, consorcios y comunidades; inscripción en el RNP y auditorías para inversión extranjera.", icon: <Rocket className="w-6 h-6" /> },
    ]
  },
  {
    id: "06",
    title: "Inversión y Negocios Internacionales",
    desc: "Impulsamos el crecimiento de su organización mediante estrategias de mercado, estructuración financiera y asesoría corporativa de alto nivel.",
    icon: <Globe className="w-8 h-8" />,
    image: img6,
    className: "md:col-span-2 md:row-span-1",
    items: [
      { title: "Asesoría Integral 360°", desc: "Soporte especializado en las áreas legal, contable, financiera, tributaria, administrativa y logística para operaciones globales.", icon: <Settings className="w-6 h-6" /> },
      { title: "Estrategia y Negocios", desc: "Desarrollo de estrategias corporativas, inteligencia digital, alianzas estratégicas y gestión optimizada del capital humano.", icon: <Target className="w-6 h-6" /> },
      { title: "Financiamiento y Proyectos", desc: "Asesoría en alternativas de financiamiento y evaluación técnica de proyectos de inversión nacionales e internacionales.", icon: <CircleDollarSign className="w-6 h-6" /> },
      { title: "Estructura Societaria", desc: "Constitución y consultoría para todo tipo de sociedades (E.I.R.L., S.A.C., S.A.) bajo la Ley General de Sociedades.", icon: <Network className="w-6 h-6" /> },
    ]
  },
  {
    id: "07",
    title: "Asesoría en Procesos Penales",
    desc: "Brindamos soporte integral y defensa especializada mediante análisis técnicos detallados para garantizar decisiones judiciales y administrativas justas y razonadas.",
    icon: <ShieldAlert className="w-8 h-8" />,
    image: img7,
    className: "md:col-span-1 md:col-span-4 md:row-span-1",
    items: [
      { title: "Soporte Técnico Especializado", desc: "Emisión de informes y dictámenes claros y comprensibles que facilitan la toma de decisiones en el ámbito judicial.", icon: <FileCheck className="w-6 h-6" /> },
      { title: "Litigios Penales", desc: "Defensa y representación experta en procesos penales generales, delitos económicos y procedimientos administrativos contenciosos.", icon: <Gavel className="w-6 h-6" /> },
      { title: "Peritaje y Evidencia", desc: "Evaluación técnica de documentos y estados financieros para el análisis de evidencia contable dentro de procesos penales.", icon: <SearchCheck className="w-6 h-6" /> },
      { title: "Prevención y Compliance", desc: "Consultoría preventiva sobre riesgos penales y diseño de procedimientos internos para garantizar el cumplimiento normativo.", icon: <ShieldCheck className="w-6 h-6" /> },
    ]
  }
];

const Servicios = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [shuffledDivisions] = useState(() => {
    const shapes = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-2 md:row-span-2",
      "md:col-span-2 md:row-span-1",
      "md:col-span-2 md:row-span-1",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1"
    ];
    const shuffledShapes = [...shapes].sort(() => Math.random() - 0.5);
    const shuffledDivs = [...divisions].sort(() => Math.random() - 0.5);
    
    return shuffledDivs.map((div, index) => ({
      ...div,
      className: shuffledShapes[index]
    }));
  });

  const filteredDivisions = useMemo(() => {
    if (!searchTerm) return shuffledDivisions;
    const lowerSearch = searchTerm.toLowerCase();
    return shuffledDivisions.filter(div => {
      if (div.title.toLowerCase().includes(lowerSearch)) return true;
      if (div.desc.toLowerCase().includes(lowerSearch)) return true;
      if (div.items.some(item => 
        item.title.toLowerCase().includes(lowerSearch) || 
        item.desc.toLowerCase().includes(lowerSearch)
      )) return true;
      return false;
    });
  }, [searchTerm, shuffledDivisions]);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedId]);

  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-32 pb-24 px-6 text-center border-b-[6px] border-cta relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-cta/10 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-widest uppercase text-sm mb-6 border border-white/10 backdrop-blur-sm">Nuestros Enfoques de Soluciones</motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Su Aliado Estratégico en <br/> <span className="text-white">Gestión y Defensa</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            Transformamos la complejidad legal y tributaria en tranquilidad y crecimiento sostenido para su patrimonio corporativo.
          </motion.p>
        </motion.div>
      </section>

      {/* Search Bar Section */}
      <section className="container mx-auto px-6 mt-12 max-w-3xl relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400 group-focus-within:text-cta transition-colors duration-300" />
          </div>
          <input
            type="text"
            placeholder="Buscar por servicio, asesoría, tema legal o contable..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-14 pr-12 py-5 bg-white border-2 border-transparent text-primary rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-4 focus:ring-cta/20 focus:border-cta transition-all duration-300 text-lg placeholder-gray-400 font-medium"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-cta transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-6 mt-16 max-w-[1400px]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[320px] grid-flow-dense"
        >
          {filteredDivisions.length > 0 ? (
            filteredDivisions.map((div) => (
              <motion.div
                layoutId={`card-${div.id}`}
                key={div.id}
              onClick={() => setSelectedId(div.id)}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-2xl hover:ring-4 ring-cta/50 transition-all duration-300 ${searchTerm ? 'md:col-span-2 md:row-span-1' : div.className}`}
            >
              <div className="absolute inset-0">
                <img src={div.image} alt={div.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cta p-3 rounded-2xl text-white shadow-lg backdrop-blur-md">
                    {div.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white transition-colors drop-shadow-md">{div.title}</h2>
                <p className="text-gray-200 text-sm line-clamp-2 md:line-clamp-3 drop-shadow-md">{div.desc}</p>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500 flex flex-col items-center">
              <Search className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">No se encontraron servicios</h3>
              <p className="text-lg">Intenta con otros términos de búsqueda.</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedId(null)}
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-10 pointer-events-none">
              {(() => {
                const div = divisions.find(d => d.id === selectedId);
                return (
                  <motion.div
                    layoutId={`card-${div.id}`}
                    className="bg-bgmain w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
                  >
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/40 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
                      <img src={div.image} alt={div.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                        <div className="bg-cta inline-block p-4 rounded-2xl mb-4 shadow-lg">
                          {div.icon}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight text-white">{div.title}</h2>
                      </div>
                    </div>

                    <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-12 bg-bgmain">
                      <p className="text-body text-lg leading-relaxed mb-8 font-medium">{div.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {div.items.map((item, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            key={idx} 
                            className="flex gap-4 group"
                          >
                            <div className="shrink-0 w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-bold text-primary mb-1 text-sm md:text-base group-hover:text-cta transition-colors">{item.title}</h3>
                              <p className="text-xs md:text-sm text-body/80 leading-relaxed">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-32 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-cta rounded-full blur-[100px]"
          />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-bgmain mb-6 leading-tight">
              ¿Listo para fortalecer <br/> su organización?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Ahora que conoce nuestras especialidades, dé el siguiente paso con el respaldo de un equipo técnico de alto nivel. Estamos listos para brindarle la seguridad jurídica y contable que su gestión requiere.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink 
                to="/contacto" 
                className="inline-flex items-center gap-2 bg-cta hover:bg-[#7a0101] text-bgmain font-bold py-5 px-10 rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(96,1,1,0.4)] transition-all duration-300 focus:ring-4 focus:ring-cta/50 outline-none"
              >
                SOLICITAR ASESORÍA <ChevronRight className="w-6 h-6" />
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Servicios;
