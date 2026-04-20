import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  ClipboardCheck, LineChart, Receipt, Search, Leaf, Box,
  Scale, Gavel, Building, ShieldPlus, FileText,
  FolderOpen, Calculator,
  Briefcase, Home, Building2, Users, TrendingUp,
  FileSpreadsheet, Landmark, Rocket,
  Globe, Settings, Target, CircleDollarSign, Network,
  ShieldAlert, FileCheck, SearchCheck, ShieldCheck, ChevronRight, ChevronDown
} from 'lucide-react';

const divisions = [
  {
    id: "01",
    title: "División de Auditoría",
    desc: "Proporcionamos una visión objetiva e independiente de su organización, garantizando la transparencia de su información y la optimización de sus recursos.",
    icon: <ClipboardCheck className="w-8 h-8" />,
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
    title: "División Legal y Defensa Jurídica",
    desc: "Brindamos un respaldo legal sólido y estratégico en diversas ramas del derecho, enfocándonos en la protección de sus derechos y la prevención de contingencias legales.",
    icon: <Scale className="w-8 h-8" />,
    items: [
      { title: "Litigios y Procesos", desc: "Defensa experta en procesos laborales, civiles, penales, constitucionales y de familia. Especialistas en accidentes de trabajo.", icon: <Gavel className="w-6 h-6" /> },
      { title: "Derecho Administrativo", desc: "Representación ante organismos reguladores (INDECOPI, SUTRAN, SUNASS, OSINERGMIN) y gestión municipal.", icon: <Building className="w-6 h-6" /> },
      { title: "Seguridad Social", desc: "Asesoría especializada en Jubilación Minera (Ley 25009) y Seguro de Trabajo de Riesgo (SCTR).", icon: <ShieldPlus className="w-6 h-6" /> },
      { title: "Contratos y Propiedades", desc: "Elaboración de contratos mineros/civiles y saneamiento físico-legal de predios urbanos, rurales y comunidades.", icon: <FileText className="w-6 h-6" /> },
    ]
  },
  {
    id: "03",
    title: "División de Peritaje Judicial",
    desc: "Proporcionamos dictámenes claros y técnicos sobre información contable-financiera en expedientes judiciales para respaldar decisiones administrativas y de justicia.",
    icon: <FileCheck className="w-8 h-8" />,
    items: [
      { title: "Soporte en Contenciones", desc: "Asesoría técnica en procesos administrativos y judiciales de alta complejidad.", icon: <FolderOpen className="w-6 h-6" /> },
      { title: "Peritajes de Oficio y de Parte", desc: "Elaboración de informes periciales contables y fiscales con rigor técnico y validez legal.", icon: <Scale className="w-6 h-6" /> },
      { title: "Delitos Económicos", desc: "Especialistas en casos de lavado de activos, peculado, malversación de fondos y desbalances patrimoniales.", icon: <Search className="w-6 h-6" /> },
      { title: "Cálculos Especializados", desc: "Liquidación de intereses legales, laborales y financieros bajo normativa vigente de la SBS.", icon: <Calculator className="w-6 h-6" /> },
    ]
  },
  {
    id: "04",
    title: "División de Consultoría",
    desc: "Brindamos soluciones integrales para la optimización corporativa, el saneamiento de activos y la viabilidad de inversiones en todos los sectores económicos.",
    icon: <Briefcase className="w-8 h-8" />,
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
    items: [
      { title: "Soporte Técnico Especializado", desc: "Emisión de informes y dictámenes claros y comprensibles que facilitan la toma de decisiones en el ámbito judicial.", icon: <FileCheck className="w-6 h-6" /> },
      { title: "Litigios Penales", desc: "Defensa y representación experta en procesos penales generales, delitos económicos y procedimientos administrativos contenciosos.", icon: <Gavel className="w-6 h-6" /> },
      { title: "Peritaje y Evidencia", desc: "Evaluación técnica de documentos y estados financieros para el análisis de evidencia contable dentro de procesos penales.", icon: <SearchCheck className="w-6 h-6" /> },
      { title: "Prevención y Compliance", desc: "Consultoría preventiva sobre riesgos penales y diseño de procedimientos internos para garantizar el cumplimiento normativo.", icon: <ShieldCheck className="w-6 h-6" /> },
    ]
  }
];

const DivisionAccordion = ({ div, isOpen, onToggle }) => {
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? "#FFFFFF" : "#E8DFD5" }}
      className={`border border-gray-200 rounded-3xl overflow-hidden transition-shadow duration-300 ${isOpen ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-10 relative' : 'shadow-sm hover:shadow-md'}`}
    >
      <button 
        onClick={onToggle}
        className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cta text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6">
          <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm ${isOpen ? 'bg-primary text-bgmain' : 'bg-white text-primary'}`}>
            {div.icon}
          </div>
          <div>
            <span className="text-cta font-bold tracking-widest text-xs uppercase mb-1 block">DIVISIÓN {div.id}</span>
            <h2 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
              {div.title}
            </h2>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 ml-4"
        >
          <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-cta' : 'text-primary'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 border-t border-gray-100">
              <p className="text-body leading-relaxed text-lg mb-10 max-w-4xl mt-6">
                {div.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {div.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="flex gap-5 p-6 rounded-2xl bg-[#F9F8F6] border border-transparent hover:border-cta/30 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-sm group-hover:text-bgmain group-hover:bg-primary transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2 leading-tight">{item.title}</h3>
                      <p className="text-body text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Servicios = () => {
  const [expandedId, setExpandedId] = useState(divisions[0].id);

  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-24 pb-20 px-6 text-center border-b-8 border-cta relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Enfoques de Soluciones</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Su Aliado Estratégico en Gestión y Defensa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Transformamos la complejidad legal y tributaria en tranquilidad y crecimiento para su patrimonio.
          </p>
        </motion.div>
      </section>

      {/* Accordion List Section */}
      <section className="container mx-auto px-6 mt-16 max-w-5xl">
        <div className="space-y-4">
          {divisions.map((div, idx) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <DivisionAccordion 
                div={div} 
                isOpen={expandedId === div.id} 
                onToggle={() => setExpandedId(expandedId === div.id ? false : div.id)} 
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-32 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cta/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-bgmain mb-6 leading-tight">
              ¿Listo para fortalecer <br/> su organización?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Ahora que conoce nuestras especialidades, dé el siguiente paso con el respaldo de un equipo técnico de alto nivel. Estamos listos para brindarle la seguridad jurídica y contable que su gestión requiere.
            </p>
            <NavLink 
              to="/contacto" 
              className="inline-flex items-center gap-2 bg-cta hover:bg-[#A38A66] text-bgmain font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-cta/50 outline-none"
            >
              SOLICITAR ASESORÍA <ChevronRight className="w-6 h-6" />
            </NavLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Servicios;
