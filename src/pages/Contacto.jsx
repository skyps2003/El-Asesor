import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, Clock, Building2 } from 'lucide-react';

const Contacto = () => {
  const sedes = [
    { city: "LIMA", address: "Av. Cristóbal de Peralta Sur 1545 Dpto.1602 Valle Hermoso Santiago de Surco." },
    { city: "LIMA", address: "Av. Paseo de la República N° 291 Piso 15 Oficina 1501 Cercado Lima." },
    { city: "CUSCO", address: "Urb. Los Nogales, calle Marcavalle Mz. N Lote 15, San Sebastian Cusco." },
    { city: "ABANCAY", address: "Av. Ayacucho Mz B Lote 7 Urb. Patibamba Baja- Distrito y Provincia de Abancay – Apurimac." },
    { city: "CHALLHUAHUACHO", address: "Calle Coronel Francisco Bolognesi S/N – Plaza de Armas." }
  ];

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

    const textoWhatsApp = `Hola El Asesor Juan Jaramillo , me gustaría comunicarme con ustedes.

*Nombre:* ${nombre}
${empresa ? `*Empresa:* ${empresa}\n` : ''}*Correo:* ${email}

*Mensaje:*
${mensaje}`;

    const numeroWhatsApp = "51994715485";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(url, '_blank');
    e.target.reset();
  };

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
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-4 block">Atención Inmediata</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Hablemos de su próximo <span className="text-cta">paso estratégico</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Estamos aquí para resolver sus dudas y brindarle el respaldo que su empresa necesita. Contáctenos hoy mismo y un especialista atenderá su requerimiento.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Contact Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Horarios Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-5 items-start group hover:border-cta/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Horario de Atención</h3>
                <ul className="space-y-2 text-body">
                  <li className="flex justify-between gap-4"><span className="font-medium">Lunes a Viernes:</span> <span>8:00 am – 6:00 pm</span></li>
                  <li className="flex justify-between gap-4"><span className="font-medium">Sábados:</span> <span>9:00 am – 1:00 pm</span></li>
                </ul>
              </div>
            </div>

            {/* Canales Digitales Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-5 items-start group hover:border-cta/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors">
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
            </div>

            {/* Sedes Accordion/List */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-cta/30 transition-colors">
              <div className="flex gap-5 items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-bgalt text-primary group-hover:bg-primary group-hover:text-cta flex items-center justify-center shrink-0 transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Nuestras Sedes</h3>
              </div>

              <div className="space-y-5">
                {sedes.map((sede, i) => (
                  <div key={i} className="flex gap-3 items-start border-l-2 border-bgalt pl-4 hover:border-cta transition-colors">
                    <MapPin className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-primary text-sm mb-1">{sede.city}</span>
                      <p className="text-body text-sm leading-relaxed">{sede.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form & Map (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex-grow">
              <h2 className="text-2xl font-bold text-primary mb-2">Envíenos un mensaje</h2>
              <p className="text-gray-500 mb-8 text-sm">Completando este formulario, un asesor estratégico se comunicará con usted a la brevedad.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-bold text-primary mb-2">Nombre Completo <span className="text-cta">*</span></label>
                    <input type="text" id="nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50" placeholder="Ej. Juan Jarramillo" />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-bold text-primary mb-2">Empresa (Opcional)</label>
                    <input type="text" id="empresa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50" placeholder="Su Empresa S.A.C." />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Correo Electrónico <span className="text-cta">*</span></label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50" placeholder="correo@estudioelasesor.com" />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-primary mb-2">Mensaje o Consulta <span className="text-cta">*</span></label>
                  <textarea id="mensaje" required rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-all bg-bgmain/50 resize-none" placeholder="Describa brevemente su requerimiento..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] outline-none hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>

            {/* Embedded Google Map (Full width of right column) */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80 w-full relative bg-white p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <iframe
                  title="Mapa Sede Principal"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Plaza+de+Armas+Challhuahuacho+Apurimac&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
