import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, ShieldCheck, Users, Award, Scale, Quote, Mail 
} from 'lucide-react';

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

const Avatar = ({ name }) => {
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
  const team = [
    {
      name: "Dr. Cesar Holguino H.",
      desc: "Abogado penalista, ex fiscal de Puerto Maldonado, Chalhuanca y Challhuahuacho.",
      email: "cesar.holguino@estudioelasesor.com"
    },
    {
      name: "Dr. Jorge Ayquipa Mendoza",
      desc: "Abogado colegiado (CAL 32129), especialista en procesos laborales y civiles.",
      email: "jorge.ayquipa@estudioelasesor.com"
    },
    {
      name: "José André Jaramillo A.",
      desc: "Economista especializado en comercio internacional, análisis econométrico y finanzas globales.",
      email: "andre.jaramillo@estudioelasesor.com"
    },
    {
      name: "Dr.H.C. Víctor Aguirre Loaiza",
      desc: "Doctor Univ. CIDAE (México), autor, ex magistrado del Poder Judicial y docente universitario.",
      email: "victor.aguirre@estudioelasesor.com"
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
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cta font-bold tracking-widest uppercase text-sm mb-6 border border-white/10 backdrop-blur-sm">
            Sobre Nuestra Firma
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Trayectoria y Excelencia <br/> <span className="text-cta">Multidisciplinaria</span>
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
          viewport={{ once: true, margin: "-50px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1A2620] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 transform group-hover:-rotate-3 group-hover:scale-110">
                <item.icon className="w-8 h-8 text-primary group-hover:text-cta transition-colors duration-500" />
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
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-40 h-40 rounded-full bg-bgmain border-[6px] border-cta shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-5xl font-bold text-primary mb-8"
            >
              JJ
            </motion.div>
            <h3 className="text-2xl font-bold text-bgmain">MG.CPCC.<br/>Juan Jaramillo</h3>
            <p className="text-cta text-sm mt-3 font-bold tracking-widest uppercase">Fundador & CEO</p>
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
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mt-24"
        >
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={scaleIn}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[2rem] p-8 pt-0 shadow-lg border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-cta/30 transition-all duration-500 flex flex-col items-center h-full group"
            >
              <Avatar name={member.name} />
              
              <h3 className="text-xl font-bold text-primary mt-8 mb-4 min-h-[56px] flex items-center justify-center group-hover:text-cta transition-colors">
                {member.name}
              </h3>
              
              <p className="text-body text-sm leading-relaxed mb-8 flex-grow">
                {member.desc}
              </p>
              
              <a 
                href={`mailto:${member.email}`} 
                className="w-full bg-[#F9F8F6] hover:bg-cta text-primary hover:text-bgmain font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group/btn"
              >
                <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[11px] truncate">{member.email}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Nosotros;
