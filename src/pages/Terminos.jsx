import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Terminos = () => {
  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-32 pb-32 px-6 text-center border-b-[6px] border-cta relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-cta blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-widest uppercase text-sm mb-6 border border-white/10 backdrop-blur-sm">
            Documentación Oficial
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Términos y <br/><span className="text-white">Condiciones</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Normativas que regulan el uso de nuestro ecosistema digital y los servicios informativos brindados.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-4xl -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-gray-100 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none"></div>

          <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100 relative z-10">
            <motion.div 
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-50 text-primary flex items-center justify-center shrink-0 group-hover:text-cta transition-all duration-300"
            >
              <FileText className="w-7 h-7" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-cta transition-colors">Reglamento de Uso</h2>
          </div>
          
          <div className="relative z-10">
            <p className="text-body mb-8 leading-relaxed text-lg">
              Bienvenido al portal oficial de <span className="font-bold text-primary">El Asesor</span>. Al acceder y navegar en este sitio web, usted acepta cumplir con los siguientes lineamientos:
            </p>

            <ul className="space-y-8 text-body">
              <motion.li whileHover={{ x: 5 }} className="flex flex-col transition-transform">
                <span className="font-bold text-primary mb-2 text-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full"></div> Finalidad del Sitio:
                </span>
                <span className="leading-relaxed text-gray-600 pl-4 border-l-2 border-gray-100 ml-1">Este ecosistema digital tiene un propósito estrictamente informativo e institucional. Presenta nuestro portafolio de servicios en auditoría, defensa jurídica y consultoría corporativa.</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex flex-col transition-transform">
                <span className="font-bold text-primary mb-2 text-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full"></div> Propiedad Intelectual e Industrial:
                </span>
                <span className="leading-relaxed text-gray-600 pl-4 border-l-2 border-gray-100 ml-1">Todos los contenidos, diseños, logotipos, textos, gráficos y estructura de este sitio son propiedad exclusiva de El Asesor o de sus legítimos licenciantes. Queda estrictamente prohibida su reproducción, distribución o modificación no autorizada.</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex flex-col transition-transform">
                <span className="font-bold text-primary mb-2 text-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full"></div> Exención de Asesoría Vinculante:
                </span>
                <span className="leading-relaxed text-gray-600 pl-4 border-l-2 border-gray-100 ml-1">La información y artículos publicados aquí <span className="font-semibold text-primary">no</span> constituyen una asesoría legal, contable o fiscal vinculante. Dado que cada situación corporativa es única, las decisiones estratégicas deben tomarse únicamente tras una evaluación personalizada formal con nuestros especialistas.</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex flex-col transition-transform">
                <span className="font-bold text-primary mb-2 text-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full"></div> Obligaciones del Usuario:
                </span>
                <span className="leading-relaxed text-gray-600 pl-4 border-l-2 border-gray-100 ml-1">El usuario se compromete a hacer un uso lícito y ético del sitio web, evitando cualquier acción que pueda dañar la infraestructura tecnológica, saturar el servicio o intentar acceder a áreas restringidas del sistema.</span>
              </motion.li>
            </ul>
          </div>
          
          <div className="pt-8 mt-12 border-t border-gray-100 text-sm text-gray-400 text-center font-medium">
            Última actualización: Abril 2026.
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terminos;
