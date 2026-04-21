import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, Clock, Building2 } from 'lucide-react';
import { LocationContext } from '../context/LocationContext';

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

const Contacto = () => {
  const { sedesData, selectedLocation, setSelectedLocation } = useContext(LocationContext);

  const emails = [
    "info@estudioelasesor.com",
    "cpccjaramillo2012@gmail.com",
    "cpccjaramillo12@outlook.com",
    "juan.jaramillo@estudioelasesor.com"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const empresa = e.target.empresa.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value;

    const textoWhatsApp = `Hola El Asesor Juan Jaramillo , me gustaría comunicarme con ustedes.\n\n*Nombre:* ${nombre}\n${empresa ? `*Empresa:* ${empresa}\n` : ''}*Correo:* ${email}\n\n*Mensaje:*\n${mensaje}`;

    const numeroWhatsApp = "51994715485";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(url, '_blank');
    e.target.reset();
  };

  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-32 pb-32 px-6 text-center border-b-[6px] border-cta relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-cta blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cta font-bold tracking-widest uppercase text-sm mb-6 border border-white/10 backdrop-blur-sm">Atención Inmediata</motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Hablemos de su próximo <br/><span className="text-cta">paso estratégico</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Estamos aquí para resolver sus dudas y brindarle el respaldo que su empresa necesita. Contáctenos hoy mismo y un especialista atenderá su requerimiento de inmediato.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Contact Info (Left Column) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Horarios Card */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-5 items-start group hover:border-cta/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:rotate-6">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Horario de Atención</h3>
                <ul className="space-y-2 text-body">
                  <li className="flex justify-between gap-4"><span className="font-medium">Lunes a Viernes:</span> <span>8:00 am – 6:00 pm</span></li>
                  <li className="flex justify-between gap-4"><span className="font-medium">Sábados:</span> <span>9:00 am – 1:00 pm</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Canales Digitales Card */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-5 items-start group hover:border-cta/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:-rotate-6">
                <Mail className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-primary mb-3">Canales Digitales</h3>
                <div className="space-y-3">
                  {emails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="block text-body hover:text-cta transition-colors text-sm font-medium">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sedes Accordion/List */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-cta/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cta/5 rounded-full blur-2xl"></div>
              <div className="flex gap-5 items-center mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Nuestras Sedes</h3>
              </div>

              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 relative z-10">
                {sedesData.map((sede) => (
                  <motion.button
                    variants={fadeInUp}
                    key={sede.id}
                    onClick={() => setSelectedLocation(sede)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 flex gap-4 items-start group focus:outline-none focus:ring-2 focus:ring-cta/50 relative overflow-hidden ${selectedLocation.id === sede.id
                      ? 'border-cta bg-cta/5 shadow-md transform scale-[1.02]'
                      : 'border-transparent bg-gray-50 hover:bg-white hover:shadow-md hover:border-cta/30'
                      }`}
                  >
                    {selectedLocation.id === sede.id && (
                      <motion.div layoutId="activeSede" className="absolute left-0 top-0 w-1 h-full bg-cta" />
                    )}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${selectedLocation.id === sede.id
                      ? 'bg-cta text-white shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white text-gray-400 group-hover:text-cta shadow-sm'
                      }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`block font-bold text-sm mb-1 transition-colors ${selectedLocation.id === sede.id ? 'text-cta' : 'text-primary'
                        }`}>{sede.city}</span>
                      <p className={`text-sm leading-relaxed transition-colors ${selectedLocation.id === sede.id ? 'text-gray-800 font-medium' : 'text-gray-500'
                        }`}>{sede.address}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form & Map (Right Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-gray-100 h-fit relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-primary mb-2 relative z-10">Envíenos un mensaje</h2>
              <p className="text-gray-500 mb-8 text-sm relative z-10">Completando este formulario, un asesor estratégico se comunicará con usted a la brevedad.</p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="transition-transform">
                    <label htmlFor="nombre" className="block text-sm font-bold text-primary mb-2">Nombre Completo <span className="text-cta">*</span></label>
                    <input type="text" id="nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50 focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]" placeholder="Ej. Juan Jarramillo" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="transition-transform">
                    <label htmlFor="empresa" className="block text-sm font-bold text-primary mb-2">Empresa (Opcional)</label>
                    <input type="text" id="empresa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50 focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]" placeholder="Su Empresa S.A.C." />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.01 }} className="transition-transform">
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Correo Electrónico <span className="text-cta">*</span></label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50 focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]" placeholder="correo@estudioelasesor.com" />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }} className="transition-transform">
                  <label htmlFor="mensaje" className="block text-sm font-bold text-primary mb-2">Mensaje o Consulta <span className="text-cta">*</span></label>
                  <textarea id="mensaje" required rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50 focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] resize-none" placeholder="Describa brevemente su requerimiento..."></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-all flex justify-center items-center gap-2 focus:ring-4 focus:ring-[#25D366]/50 outline-none group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Enviar por WhatsApp
                </motion.button>
              </form>
            </div>

            {/* Embedded Google Map */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex-grow min-h-[320px] w-full relative bg-white p-2 group hover:shadow-2xl hover:border-cta/30 transition-all duration-500"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  key={selectedLocation.id}
                  title={`Mapa Sede ${selectedLocation.city}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={selectedLocation.mapSrc}
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
