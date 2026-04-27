import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import {
  Scale,
  ShieldCheck,
  Search,
  Lightbulb,
  Briefcase,
  Calculator,
  FileCheck,
  ChevronRight,
  Download,
  Clock,
  Users,
  CheckCircle2,
  Award,
  FileText
} from 'lucide-react';

import img1 from '../assets/inicio/01-asesoria.jpg';
import img2 from '../assets/inicio/02-auditoria.jpg';
import img3 from '../assets/inicio/03-peritaje.jpg';
import img4 from '../assets/inicio/04-innovacion.jpg';
import img5 from '../assets/inicio/05-derecho.jpg';
import img6 from '../assets/inicio/06-contable.jpg';
import img7 from '../assets/inicio/07-auditoria-int.jpg';
import imgJuan from '../assets/inicio/juan para el uniio.png';


// --- Shared Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// --- Components ---

const Counter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
};


const Hero = () => (
  <section className="relative bg-primary pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    {/* Juan Image Background (Right Side) */}
    <div className="absolute top-0 right-0 w-full h-full md:w-3/4 lg:w-1/2 z-0 pointer-events-none">
      <img
        src={imgJuan}
        alt=""
        className="w-full h-full object-cover object-top opacity-99 filter grayscale"
        style={{
          maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
        }}
      />
    </div>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-bgmain blur-[100px]"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-transparent"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/10 backdrop-blur-sm hover:border-cta hover:bg-white/20 transition-colors duration-300 cursor-default">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse"></span>
          Estudio Jurídico-Contable
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain leading-tight mb-6">
          Experiencia y ética al <br className="hidden md:block" />
          <span className="text-white relative inline-block">
            servicio de su empresa.
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-cta rounded-full opacity-50"
            />
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
          En <span className="font-semibold text-bgmain">El Asesor</span>, transformamos la complejidad legal y tributaria en tranquilidad para nuestros clientes. Brindamos un acompañamiento profesional basado en la transparencia, la innovación tecnológica y el compromiso real con sus objetivos.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <NavLink to="/contacto" className="bg-cta hover:bg-[#7a0101] text-white font-semibold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(96,1,1,0.3)] hover:shadow-[0_0_30px_rgba(96,1,1,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none">
            Cotizar Servicio <ChevronRight className="w-5 h-5" />
          </NavLink>
          <NavLink to="/nosotros" className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-white outline-none text-center">
            Conocer Más
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    {
      title: "Asesoría Integral",
      desc: "Sincronizamos la defensa legal con la gestión contable. Un enfoque 360° para que su empresa o patrimonio cumpla con la normativa.",
      icon: <ShieldCheck className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img1
    },
    {
      title: "Auditorías Preventivas",
      desc: "Revisiones exhaustivas de sus estados financieros y procesos internos para detectar riesgos a tiempo y garantizar la transparencia.",
      icon: <Search className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img2
    },
    {
      title: "Peritajes Especializados",
      desc: "Elaboramos dictámenes periciales con rigor técnico y objetividad, fundamentales para la resolución de conflictos judiciales.",
      icon: <Scale className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img3
    },
    {
      title: "Innovación y Ética",
      desc: "Aplicamos tecnología de vanguardia en cada análisis pericial y contable, actuando siempre bajo principios éticos sólidos.",
      icon: <Lightbulb className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img4
    }
  ];

  return (
    <section className="py-16 bg-bgalt relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24 lg:-mt-32 relative z-20"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl h-[380px] focus-within:ring-4 focus-within:ring-cta/50 outline-none transition-all duration-500"
            >
              <img src={pillar.image} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-black/30 transition-opacity duration-500 group-hover:from-primary group-hover:via-primary/80"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-xl transform group-hover:-translate-y-2 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-3 drop-shadow-md">{pillar.title}</h2>
                <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-primary py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/10 text-center"
      >
        {[
          { num: 310, suffix: "+", label: "Clientes Satisfechos", icon: Users },
          { num: 98, suffix: "%", label: "Efectividad en Casos", icon: CheckCircle2 },
          { num: 10, suffix: "+", label: "Años de Experiencia", icon: Award },
          { num: 200, suffix: "+", label: "Asesorías Completadas", icon: FileText }
        ].map((stat, i) => (
          <motion.div key={i} variants={scaleIn} className="p-4 relative group flex flex-col items-center">
            <div className="absolute inset-0 bg-cta/0 group-hover:bg-cta/5 blur-xl rounded-full transition-colors duration-500"></div>
            <div className="mb-6 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-cta transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
              <stat.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h4 className="text-4xl md:text-6xl font-bold text-white mb-3 relative z-10 drop-shadow-lg group-hover:text-cta transition-colors duration-300">
              <Counter from={0} to={stat.num} />{stat.suffix}
            </h4>
            <p className="text-gray-300 font-medium tracking-widest uppercase text-xs md:text-sm relative z-10 group-hover:text-white transition-colors duration-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const ServicesPreview = () => {
  const services = [
    {
      title: "Derecho Corporativo y Civil",
      desc: "Asesoría en contratos, constitución de empresas, sociedades y defensa de intereses civiles.",
      icon: <Briefcase className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img5
    },
    {
      title: "Gestión Contable y Tributaria",
      desc: "Externalización contable, liquidación de impuestos y planeamiento tributario para optimizar sus recursos.",
      icon: <Calculator className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img6
    },
    {
      title: "Auditoría Integral",
      desc: "Examen crítico y sistemático de estados financieros y procesos operativos para garantizar transparencia.",
      icon: <FileCheck className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />,
      image: img7
    }
  ];

  return (
    <section className="py-24 bg-bgmain relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bgalt/50 -skew-x-12 transform origin-top-right -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold text-cta tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-cta"></span> Nuestras Especialidades <span className="w-8 h-[2px] bg-cta"></span>
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Áreas de Práctica</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Soluciones integrales que combinan la técnica contable, el rigor jurídico y la precisión pericial.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="group rounded-[2rem] overflow-hidden relative shadow-lg hover:shadow-2xl h-[400px] focus-within:ring-4 focus-within:ring-cta/50 outline-none transition-all duration-500"
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-black/10 transition-opacity duration-500 group-hover:from-primary group-hover:via-primary/80"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl transform group-hover:-translate-y-2 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{service.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed drop-shadow-md">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <NavLink to="/servicios" className="bg-cta hover:bg-[#7a0101] text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(96,1,1,0.3)] hover:shadow-[0_0_30px_rgba(96,1,1,0.5)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none group">
            VER TODOS LOS SERVICIOS
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

const DownloadBrochure = () => {
  return (
    <section className="bg-bgalt py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glowing orb */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-cta rounded-full blur-[100px]"
          />

          <div className="lg:w-2/3 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Conozca nuestro portafolio de <span className="text-white">soluciones integrales.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Descargue nuestra presentación corporativa y descubra cómo nuestras unidades de derecho, contabilidad y peritajes pueden fortalecer, proteger y hacer crecer su empresa.
            </p>
          </div>

          <div className="lg:w-1/3 flex justify-end relative z-10">
            <motion.a
              href="/brochure-el-asesor.pdf"
              download="Brochure-El-Asesor.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cta hover:bg-[#7a0101] text-white hover:shadow-[0_0_20px_rgba(96,1,1,0.4)] font-bold py-5 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-4 w-full sm:w-[300px] focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none transition-all duration-300"
              aria-label="Descargar Brochure PDF"
            >
              <Download className="w-6 h-6 shrink-0" />
              <div className="text-left flex flex-col justify-center">
                <span className="leading-tight text-[15px] block">DESCARGAR BROCHURE</span>
                <span className="leading-tight text-[11px] opacity-80 tracking-wider mt-0.5 block">(VERSIÓN PDF)</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Inicio = () => {
  return (
    <>
      <Hero />
      <Pillars />
      <Stats />
      <ServicesPreview />
      <DownloadBrochure />
    </>
  );
};

export default Inicio;
