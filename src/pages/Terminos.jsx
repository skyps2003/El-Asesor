import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Terminos = () => {
  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-24 pb-32 px-6 text-center border-b-8 border-cta relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-4 block">Documentación Oficial</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Términos y <span className="text-cta">Condiciones</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Normativas que regulan el uso de nuestro sitio web y servicios informativos.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-4xl -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-bgalt text-primary flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Reglamento de Uso</h2>
          </div>
          
          <p className="text-body mb-6 leading-relaxed">
            Bienvenido a <span className="font-bold text-primary">El Asesor</span>. Al acceder a este sitio web, usted acepta cumplir con los siguientes términos:
          </p>

          <ul className="space-y-6 text-body">
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Finalidad:</span>
              <span className="leading-relaxed">Este sitio web tiene carácter estrictamente informativo sobre nuestros servicios legales, contables y de auditoría.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Propiedad Intelectual:</span>
              <span className="leading-relaxed">Todos los contenidos, logotipos y textos son propiedad de El Asesor. Queda prohibida su reproducción total o parcial sin autorización.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Limitación de Responsabilidad:</span>
              <span className="leading-relaxed">La información publicada no constituye una asesoría legal o contable vinculante. Cada caso es único y requiere una consulta directa con nuestros especialistas.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Uso del Sitio:</span>
              <span className="leading-relaxed">El usuario se compromete a hacer un uso lícito del sitio, evitando cualquier acción que pueda dañar la infraestructura tecnológica de la firma.</span>
            </li>
          </ul>
          
          <div className="pt-8 mt-12 border-t border-gray-100 text-sm text-gray-400 text-center">
            Última actualización: Abril 2026.
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terminos;
