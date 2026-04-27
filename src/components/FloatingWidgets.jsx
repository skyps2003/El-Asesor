import React from 'react';
import { Bot, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWidgets = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-5 z-50">
      {/* Botón de Chatbot Judicial */}
      <div className="relative">
        <span className="absolute w-full h-full rounded-full bg-[#007B7A] opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <motion.button 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
          transition={{ 
            scale: { duration: 0.3, delay: 0.5, type: "spring" },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="relative w-16 h-16 rounded-full flex items-center justify-center text-white bg-[#007B7A] hover:bg-[#005A59] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#007B7A]/50 z-10"
          aria-label="Abrir Asistente Legal"
          onClick={() => {
            console.log("Chatbot button clicked");
          }}
        >
          <div className="relative">
            <Bot className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute -bottom-1 -right-2 bg-white text-[#007B7A] rounded-full p-[3px] shadow-md transform group-hover:rotate-12 transition-transform duration-300">
              <Scale className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </motion.button>
      </div>

      {/* Botón de WhatsApp */}
      <motion.a
        href="https://wa.me/51994715485?text=Hola,%20vengo%20de%20su%20sitio%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
        transition={{ 
          scale: { duration: 0.3, delay: 0.6, type: "spring" },
          y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }
        }}
        className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-[#25D366] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default FloatingWidgets;
