import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacidad = () => {
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
            Política de <span className="text-cta">Privacidad</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Transparencia y seguridad en el manejo de su información profesional.
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
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Manejo de Datos</h2>
          </div>
          
          <p className="text-body mb-6 leading-relaxed">
            En <span className="font-bold text-primary">El Asesor</span>, nos tomamos muy en serio la confidencialidad de la información.
          </p>

          <ul className="space-y-6 text-body">
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Recopilación de Datos:</span>
              <span className="leading-relaxed">Este sitio web es informativo. Solo recopilamos datos personales (nombre, correo, teléfono) si usted decide voluntariamente contactarnos a través de nuestros canales de WhatsApp o correo electrónico.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Uso de la Información:</span>
              <span className="leading-relaxed mb-2">Los datos proporcionados se utilizarán exclusivamente para:</span>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
                <li>Atender sus consultas y solicitudes de asesoría.</li>
                <li>Agendar citas o evaluaciones iniciales.</li>
                <li>Mantener la comunicación directa sobre su caso.</li>
              </ul>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">No Cesión a Terceros:</span>
              <span className="leading-relaxed">El Asesor no vende, alquila ni comparte sus datos personales con terceras personas o empresas ajenas a la prestación del servicio solicitado, salvo por obligación legal.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Seguridad:</span>
              <span className="leading-relaxed">Implementamos medidas técnicas para proteger sus datos contra acceso no autorizado o pérdida.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-primary mb-1 text-lg">Sus Derechos:</span>
              <span className="leading-relaxed">Usted puede solicitar en cualquier momento la actualización, rectificación o eliminación de sus datos enviándonos un correo a nuestras direcciones oficiales.</span>
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

export default Privacidad;
