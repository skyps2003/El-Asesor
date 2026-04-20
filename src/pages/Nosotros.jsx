import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, ShieldCheck, Users, Award, Scale, Quote, Mail 
} from 'lucide-react';

const Avatar = ({ name }) => {
  // Extract initials (up to 2 characters) ignoring titles like "Dr." or "MG."
  const cleanName = name.replace(/^(Dr\.|Dr\.H\.C\.|MG\.CPCC\.)\s*/i, '');
  const initials = cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  
  return (
    <div className="w-24 h-24 rounded-full bg-cta flex items-center justify-center shadow-lg border-4 border-bgmain mx-auto -mt-12 relative z-10 text-3xl font-bold text-bgmain">
      {initials}
    </div>
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
      <section className="bg-primary pt-24 pb-32 px-6 text-center border-b-8 border-cta relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nuestra Firma</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bgmain mb-6 leading-tight">
            Trayectoria y Excelencia Multidisciplinaria
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Respaldamos su gestión con un equipo de especialistas de alto nivel.
          </p>
        </motion.div>
      </section>

      {/* Highlights (Floating Badges) */}
      <section className="container mx-auto px-6 max-w-5xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Expertos Multidisciplinarios", icon: <Users className="w-8 h-8 text-cta" /> },
            { title: "Más de 20 Años de Trayectoria", icon: <Award className="w-8 h-8 text-cta" /> },
            { title: "Rigor Técnico y Procesal", icon: <Scale className="w-8 h-8 text-cta" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-5 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-bgalt flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <h3 className="font-bold text-primary leading-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="container mx-auto px-6 mt-32 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-bgalt p-10 rounded-3xl relative overflow-hidden group hover:bg-primary transition-colors duration-500"
          >
            <Target className="w-12 h-12 text-primary group-hover:text-cta transition-colors duration-500 mb-6" />
            <h2 className="text-2xl font-bold text-primary group-hover:text-bgmain transition-colors duration-500 mb-4">Misión</h2>
            <p className="text-body group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-sm md:text-base relative z-10">
              Proveer servicios contables y jurídicos especializados de alta calidad, bajo estrictos principios éticos. Nos compromtemos a fortalecer la confianza de nuestros clientes mediante una asesoría integral y un ejercicio profesional responsable que garantice solidez en cada uno de sus proyectos.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-bgalt p-10 rounded-3xl relative overflow-hidden group hover:bg-primary transition-colors duration-500"
          >
            <Eye className="w-12 h-12 text-primary group-hover:text-cta transition-colors duration-500 mb-6" />
            <h2 className="text-2xl font-bold text-primary group-hover:text-bgmain transition-colors duration-500 mb-4">Visión</h2>
            <p className="text-body group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-sm md:text-base relative z-10">
              Ser la firma líder en consultoría contable y jurídica, referente por nuestra excelencia, innovación y eficiencia. Aspiramos a generar valor tangible para nuestros aliados, integrando tecnología de vanguardia para ofrecer soluciones profesionales que se anticipen a los retos del mercado global.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-bgalt p-10 rounded-3xl relative overflow-hidden group hover:bg-primary transition-colors duration-500"
          >
            <ShieldCheck className="w-12 h-12 text-primary group-hover:text-cta transition-colors duration-500 mb-6" />
            <h2 className="text-2xl font-bold text-primary group-hover:text-bgmain transition-colors duration-500 mb-4">Valores</h2>
            <p className="text-body group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-sm md:text-base relative z-10">
              Nos conducimos con integridad, confidencialidad y objetividad. Actuamos bajo pilares de transparencia y responsabilidad, adoptando la innovación tecnológica para asegurar un acompañamiento integral. Nuestro compromiso es transformar el rigor técnico en confianza real para nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="container mx-auto px-6 mt-32 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-10 md:p-16 relative shadow-2xl flex flex-col md:flex-row gap-12 items-center"
        >
          <Quote className="absolute top-10 left-10 w-32 h-32 text-cta opacity-10" />
          
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-bgmain border-4 border-cta shadow-xl flex items-center justify-center text-4xl font-bold text-primary mb-6">
              JJ
            </div>
            <h3 className="text-xl font-bold text-bgmain">MG.CPCC.<br/>Juan Jaramillo Guillén</h3>
            <p className="text-cta text-sm mt-2 font-medium tracking-wide uppercase">CEO, Fundador & Director Ejecutivo</p>
          </div>

          <div className="md:w-2/3 relative z-10">
            <p className="text-bgmain text-lg md:text-xl leading-relaxed font-light italic mb-6">
              «Cuando fundamos El Asesor, lo hicimos con una convicción clara: las empresas y personas necesitan más que una simple asesoría; necesitan un respaldo estratégico que les brinde seguridad absoluta en un entorno cada vez más complejo.
            </p>
            <p className="text-bgmain text-lg md:text-xl leading-relaxed font-light italic">
              Mi compromiso personal, y el de todo mi equipo, es garantizar que cada cliente encuentre en nosotros no solo a especialistas técnicos en el área contable y legal, sino a aliados leales que protegen su patrimonio y aseguran el éxito de sus proyectos con integridad y excelencia. Gracias por confiar en nosotros para ser parte de su historia de crecimiento.»
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
          className="mb-16"
        >
          <span className="text-cta font-bold tracking-widest uppercase text-sm mb-3 block">Perfiles Estratégicos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nuestro Equipo de Especialistas</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Contamos con profesionales altamente capacitados en las áreas jurídica, contable y financiera. Un equipo multidisciplinario comprometido con la excelencia y la entrega de soluciones estratégicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mt-20">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 pt-0 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center h-full"
            >
              <Avatar name={member.name} />
              
              <h3 className="text-xl font-bold text-primary mt-6 mb-3 min-h-[56px] flex items-center justify-center">
                {member.name}
              </h3>
              
              <p className="text-body text-sm leading-relaxed mb-8 flex-grow">
                {member.desc}
              </p>
              
              <a 
                href={`mailto:${member.email}`} 
                className="w-full bg-bgalt hover:bg-cta text-primary hover:text-bgmain font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs truncate">{member.email}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
