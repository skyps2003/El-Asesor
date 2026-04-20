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
  Download
} from 'lucide-react';

const Counter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

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
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-bgmain blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-transparent"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cta font-medium text-sm mb-6 border border-white/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cta"></span>
          Estudio Jurídico-Contable
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain leading-tight mb-6"
        >
          Experiencia y ética al <br className="hidden md:block" />
          <span className="text-cta">servicio de su empresa.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
        >
          En <span className="font-semibold text-bgmain">El Asesor</span>, transformamos la complejidad legal y tributaria en tranquilidad para nuestros clientes. Brindamos un acompañamiento profesional basado en la transparencia, la innovación tecnológica y el compromiso real con sus objetivos.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <NavLink to="/contacto" className="bg-cta hover:bg-[#A38A66] text-bgmain font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none">
            Cotizar Servicio <ChevronRight className="w-5 h-5" />
          </NavLink>
          <NavLink to="/nosotros" className="bg-white/10 hover:bg-white/20 text-bgmain font-semibold py-3 px-8 rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-white outline-none text-center">
            Conocer Más
          </NavLink>
        </motion.div>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    {
      title: "Asesoría Integral",
      desc: "Sincronizamos la defensa legal con la gestión contable. Un enfoque 360° para que su empresa o patrimonio cumpla con la normativa de manera eficiente y segura.",
      icon: <ShieldCheck className="w-8 h-8 text-cta" />
    },
    {
      title: "Auditorías Preventivas",
      desc: "Realizamos revisiones exhaustivas de sus estados financieros y procesos internos para detectar riesgos a tiempo y garantizar la transparencia total ante entidades reguladoras.",
      icon: <Search className="w-8 h-8 text-cta" />
    },
    {
      title: "Peritajes Especializados",
      desc: "Elaboramos dictámenes periciales con rigor técnico y objetividad. Somos expertos en análisis forense y técnico, fundamentales para la resolución de conflictos judiciales y administrativos.",
      icon: <Scale className="w-8 h-8 text-cta" />
    },
    {
      title: "Innovación y Ética",
      desc: "Aplicamos tecnología de vanguardia en cada análisis pericial y contable, actuando siempre bajo principios éticos que restablecen la confianza en el ejercicio profesional.",
      icon: <Lightbulb className="w-8 h-8 text-cta" />
    }
  ];

  return (
    <section className="py-16 bg-bgalt relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24 lg:-mt-32 relative z-20">
          {pillars.map((pillar, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-bgmain rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-cta group focus-within:ring-2 focus-within:ring-cta outline-none"
              tabIndex={0}
            >
              <div className="w-16 h-16 rounded-full bg-bgalt flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-primary py-16 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
        {[
          { num: 310, suffix: "+", label: "Clientes Satisfechos" },
          { num: 98, suffix: "%", label: "Efectividad en Casos" },
          { num: 10, suffix: "+", label: "Años de Experiencia" },
          { num: 200, suffix: "+", label: "Asesorías Completadas" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4"
          >
            <h4 className="text-4xl md:text-5xl font-bold text-cta mb-2">
              <Counter from={0} to={stat.num} />{stat.suffix}
            </h4>
            <p className="text-gray-300 font-medium tracking-wide uppercase text-xs md:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesPreview = () => {
  const services = [
    {
      title: "Derecho Corporativo y Civil",
      desc: "Asesoría en contratos, constitución de empresas, sociedades y defensa de intereses civiles.",
      icon: <Briefcase className="w-6 h-6 text-bgmain" />
    },
    {
      title: "Gestión Contable y Tributaria",
      desc: "Externalización contable, liquidación de impuestos y planeamiento tributario para optimizar sus recursos.",
      icon: <Calculator className="w-6 h-6 text-bgmain" />
    },
    {
      title: "Auditoría Integral",
      desc: "Examen crítico y sistemático de estados financieros y procesos operativos para garantizar transparencia.",
      icon: <FileCheck className="w-6 h-6 text-bgmain" />
    }
  ];

  return (
    <section className="py-24 bg-bgmain">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-cta tracking-widest uppercase mb-3">Nuestras Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Áreas de Práctica</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Soluciones integrales que combinan la técnica contable, el rigor jurídico y la precisión pericial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-bgalt hover:bg-secondary hover:text-bgmain transition-all duration-300 shadow-sm hover:shadow-xl focus-within:ring-2 focus-within:ring-cta outline-none"
              tabIndex={0}
            >
              <div className="w-12 h-12 rounded-lg bg-primary group-hover:bg-cta flex items-center justify-center mb-6 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-primary group-hover:text-bgmain mb-3 transition-colors duration-300">{service.title}</h4>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <NavLink to="/servicios" className="bg-cta hover:bg-[#A38A66] text-bgmain font-bold py-4 px-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none">
            VER TODOS LOS SERVICIOS <ChevronRight className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

const DownloadBrochure = () => (
  <section className="bg-bgalt py-20">
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cta/20 rounded-full blur-3xl"></div>
        
        <div className="lg:w-2/3 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-bgmain mb-6">Conozca nuestro portafolio de soluciones integrales.</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Descargue nuestra presentación corporativa y descubra cómo nuestras unidades de derecho, contabilidad y peritajes pueden fortalecer su empresa.
          </p>
        </div>
        
        <div className="lg:w-1/3 flex justify-end relative z-10">
          <button 
            className="bg-cta hover:bg-[#A38A66] text-bgmain font-bold py-4 px-8 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center focus:ring-2 focus:ring-offset-2 focus:ring-cta outline-none"
            aria-label="Descargar Brochure PDF"
          >
            <Download className="w-5 h-5" />
            <span className="text-left leading-tight">DESCARGAR BROCHURE<br/>(PDF)</span>
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

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
