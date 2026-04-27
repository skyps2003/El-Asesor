import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, ShieldCheck, Users, Award, Scale, Quote, Mail 
} from 'lucide-react';

import imgJuan from '../assets/team/juan.png';
import imgCesar from '../assets/team/cesar.png';
import imgJorge from '../assets/team/jorge.png';
import imgAndre from '../assets/team/andre.png';
import imgVictor from '../assets/team/victor.png';

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

const Avatar = ({ name, image }) => {
  if (image) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-24 h-24 rounded-full bg-bgalt flex items-center justify-center shadow-lg border-4 border-bgmain mx-auto -mt-12 relative z-10 overflow-hidden"
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </motion.div>
    );
  }

  const cleanName = name.replace(/^(Dr\.|Dr\.H\.C\.|MG\.CPCC\.)\s*/i, '');
  const initials = cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  
  return (
    <motion.div 
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-24 h-24 rounded-full bg-cta flex items-center justify-center shadow-lg border-4 border-bgmain mx-auto -mt-12 relative z-10 text-3xl font-bold text-bgmain"
    >
      {initials}
    </motion.div>
  );
};

const Nosotros = () => {
  const predefinedWsMsg = encodeURIComponent("Hola, vengo del sitio web y quiero más información.");

  const team = [
    {
      name: "Dr. Cesar Holguino H.",
      role: "Abogado Penalista",
      desc: "Ex fiscal de Puerto Maldonado, Chalhuanca y Challhuahuacho.",
      email: "cesar.holguino@estudioelasesor.com",
      image: imgCesar,
      socials: { fb: '#', linkedin: '#', whatsapp: '51999999991' }
    },
    {
      name: "Dr. Jorge Ayquipa Mendoza",
      role: "Abogado Colegiado",
      desc: "Especialista en procesos laborales y civiles (CAL 32129).",
      email: "jorge.ayquipa@estudioelasesor.com",
      image: imgJorge,
      socials: { fb: '#', linkedin: '#', whatsapp: '51999999992' }
    },
    {
      name: "José André Jaramillo A.",
      role: "Economista Especializado",
      desc: "Especialista en comercio internacional, análisis econométrico y finanzas globales.",
      email: "andre.jaramillo@estudioelasesor.com",
      image: imgAndre,
      socials: { fb: '#', linkedin: '#', whatsapp: '51999999993' }
    },
    {
      name: "Dr.H.C. Víctor Aguirre Loaiza",
      role: "Doctor Univ. CIDAE (México)",
      desc: "Autor, ex magistrado del Poder Judicial y docente universitario.",
      email: "victor.aguirre@estudioelasesor.com",
      image: imgVictor,
      socials: { fb: '#', linkedin: '#', whatsapp: '51999999994' }
    }
  ];

  return (
    <div className="bg-bgmain min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-primary pt-32 pb-32 px-6 text-center border-b-[6px] border-cta relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-cta/10 blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold tracking-widest uppercase text-sm mb-6 border border-white/10 backdrop-blur-sm">
            Sobre Nuestra Firma
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trayectoria y Excelencia <br/> <span className="text-white">Multidisciplinaria</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Respaldamos su gestión corporativa y patrimonial con un equipo de especialistas técnicos de alto nivel.
          </motion.p>
        </motion.div>
      </section>

      {/* Highlights (Floating Badges) */}
      <section className="container mx-auto px-6 max-w-5xl -mt-16 relative z-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Expertos Multidisciplinarios", icon: <Users className="w-8 h-8 text-cta" /> },
            { title: "Más de 20 Años de Trayectoria", icon: <Award className="w-8 h-8 text-cta" /> },
            { title: "Rigor Técnico y Procesal", icon: <Scale className="w-8 h-8 text-cta" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-5 border border-gray-100 group hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] hover:border-cta/30 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-bgalt flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300"
              >
                {React.cloneElement(item.icon, { className: "w-7 h-7 text-cta group-hover:text-bgmain transition-colors duration-300" })}
              </motion.div>
              <h3 className="font-bold text-primary leading-tight group-hover:text-cta transition-colors duration-300">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="container mx-auto px-6 mt-32 max-w-6xl relative">
        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { 
              icon: Target, 
              title: "Misión", 
              text: "Proveer servicios contables y jurídicos especializados de alta calidad, bajo estrictos principios éticos. Nos comprometemos a fortalecer la confianza de nuestros clientes mediante una asesoría integral y un ejercicio profesional responsable que garantice solidez en cada uno de sus proyectos."
            },
            { 
              icon: Eye, 
              title: "Visión", 
              text: "Ser la firma líder en consultoría contable y jurídica, referente por nuestra excelencia, innovación y eficiencia. Aspiramos a generar valor tangible para nuestros aliados, integrando tecnología de vanguardia para ofrecer soluciones profesionales que se anticipen a los retos del mercado global."
            },
            { 
              icon: ShieldCheck, 
              title: "Valores", 
              text: "Nos conducimos con integridad, confidencialidad y objetividad. Actuamos bajo pilares de transparencia y responsabilidad, adoptando la innovación tecnológica para asegurar un acompañamiento integral. Nuestro compromiso es transformar el rigor técnico en confianza real para nuestros clientes."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -15 }}
              className="bg-bgalt p-10 rounded-[2rem] relative overflow-hidden group hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-2xl border border-transparent hover:border-cta/50"
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cta to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cta group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 transform group-hover:-rotate-3 group-hover:scale-110">
                <item.icon className="w-8 h-8 text-white transition-colors duration-500" />
              </div>
              <h2 className="text-3xl font-bold text-primary group-hover:text-bgmain transition-colors duration-500 mb-5 relative inline-block">
                {item.title}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-cta rounded-full group-hover:w-full transition-all duration-500"></div>
              </h2>
              <p className="text-body group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-[15px] relative z-10 mt-6">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CEO Quote Section */}
      <section className="container mx-auto px-6 mt-32 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 relative shadow-2xl flex flex-col md:flex-row gap-16 items-center overflow-hidden"
        >
          {/* Animated Quote Mark */}
          <motion.div 
            animate={{ y: [0, -10, 0], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10"
          >
            <Quote className="w-40 h-40 text-cta" />
          </motion.div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl"></div>
          
          <div className="md:w-1/3 flex flex-col items-center text-center relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-40 h-40 rounded-full bg-bgalt border-[6px] border-cta shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-5xl font-bold text-primary mb-6 overflow-hidden"
            >
              <img src={imgJuan} alt="MG.CPCC. Juan Jaramillo" className="w-full h-full object-cover" />
            </motion.div>
            <h3 className="text-2xl font-bold text-bgmain mb-1">MG.CPCC.<br/>Juan Jaramillo</h3>
            <p className="text-[#E8A5A5] text-sm font-bold tracking-widest uppercase mb-6">Fundador & CEO</p>

            <div className="flex gap-3 justify-center relative z-20">
              <a href="https://www.facebook.com/profile.php?id=100006721081818" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={`https://wa.me/51994715485?text=${predefinedWsMsg}`} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:w-2/3 relative z-10">
            <p className="text-bgmain text-lg md:text-xl leading-relaxed font-light italic mb-8 relative">
              <span className="absolute -left-6 -top-4 text-4xl text-cta opacity-50">"</span>
              Cuando fundamos El Asesor, lo hicimos con una convicción clara: las empresas y personas necesitan más que una simple asesoría; necesitan un respaldo estratégico que les brinde seguridad absoluta en un entorno cada vez más complejo.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
              Mi compromiso personal, y el de todo mi equipo, es garantizar que cada cliente encuentre en nosotros no solo a especialistas técnicos en el área contable y legal, sino a aliados leales que protegen su patrimonio y aseguran el éxito de sus proyectos con integridad y excelencia.
              <span className="absolute -right-2 bottom-0 text-4xl text-cta opacity-50">"</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 mt-32 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-cta"></span> Perfiles Estratégicos <span className="w-8 h-[2px] bg-cta"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Nuestro Equipo de Especialistas</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Contamos con profesionales altamente capacitados en las áreas jurídica, contable y financiera. Un equipo multidisciplinario comprometido con la excelencia.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left"
        >
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-cta/30 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-[3px] border-gray-100 group-hover:border-cta transition-colors duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 group-hover:text-cta transition-colors">{member.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-[15px] sm:text-base">
                {member.desc}
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto w-full">
                <div className="flex gap-2">
                  <a href={member.socials.fb} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_4px_10px_rgba(24,119,242,0.3)] transition-all duration-300 hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_4px_10px_rgba(10,102,194,0.3)] transition-all duration-300 hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href={`https://wa.me/${member.socials.whatsapp}?text=${predefinedWsMsg}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_4px_10px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </a>
                </div>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-400 hover:text-cta transition-colors text-sm font-medium" title={member.email}>
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline-block">Email</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Nosotros;
