import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Scale } from 'lucide-react';

// ── Paleta oficial del sitio ──────────────────────────────────────────────────
const C = {
  primary:   '#36454F', // Gris Carbón Profundo
  primaryDk: '#28363D', // hover oscuro
  cta:       '#600101', // Rojo Borgoña (acento)
  ctaDk:     '#7a0101', // hover cta
  bgMain:    '#F8F9FA', // Blanco Off-white (fondo chat)
  bgAlt:     '#F0F2F4', // Gris Niebla (burbuja bot)
  body:      '#2A3A42', // Texto principal
  border:    '#DDE1E5', // Borde sutil
};

// Mensaje de bienvenida idéntico al backend
const BIENVENIDA = `¡Hola! 👋 Bienvenido a **El Asesor**.
*Su Aliado Estratégico en Gestión y Defensa.*

Soy tu asistente virtual. Por favor, responde con el **NÚMERO** de la opción que deseas consultar:

1️⃣ Nuestros Servicios
2️⃣ Nuestras Sedes y Ubicaciones
3️⃣ Conoce a Nuestro Equipo
4️⃣ Horarios de Atención y Contacto
5️⃣ Hablar con un asesor`;

// Convierte **negrita** e *itálica* a HTML
function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// userId persistente por sesión de navegador
function getOrCreateUserId() {
  let id = sessionStorage.getItem('chatbot_userId');
  if (!id) {
    id = 'user_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('chatbot_userId', id);
  }
  return id;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen]     = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: BIENVENIDA }]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [userId]                = useState(getOrCreateUserId);
  const messagesEndRef          = useRef(null);
  const inputRef                = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://el-asesor-back.railway.internal/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, mensaje: trimmed })
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.respuesta }]);
    } catch {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: '⚠️ No pude conectarme al servidor. Por favor, intenta nuevamente.'
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* ── Botón flotante ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: 0.3, type: 'spring' },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir asistente virtual"
            style={{ backgroundColor: C.primary, bottom: '104px', right: '24px' }}
            className="fixed w-16 h-16 text-white rounded-full shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDk}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
          >
            {/* Ping de atención con color CTA */}
            <span
              className="absolute inset-0 rounded-full opacity-30 animate-ping"
              style={{ backgroundColor: C.cta, animationDuration: '3s' }}
            />
            <div className="relative z-10">
              <Bot className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              {/* Badge con rojo borgoña */}
              <div
                className="absolute -bottom-1 -right-2 rounded-full p-[3px] shadow-md group-hover:rotate-12 transition-transform duration-300"
                style={{ backgroundColor: C.cta, color: 'white' }}
              >
                <Scale className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Ventana de chat ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 w-[360px] sm:w-[400px] h-[570px] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ border: `1px solid ${C.border}`, background: C.bgMain }}
          >
            {/* Cabecera – Gris Carbón con franja CTA */}
            <div
              className="shrink-0 flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: C.primary }}
            >
              {/* Franja acento izquierda */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-tl-2xl" style={{ backgroundColor: C.cta }} />

              <div className="flex items-center gap-3 pl-2">
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white leading-none tracking-wide">
                    Asistente El Asesor
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Responde al instante · 24/7
                  </p>
                </div>
              </div>

              {/* Punto online */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#4ade80' }} />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar chat"
                  className="text-white/70 hover:text-white transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Área de mensajes */}
            <div
              className="flex-1 overflow-y-auto px-3 py-4 space-y-3"
              style={{ background: C.bgAlt }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[86%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-relaxed shadow-sm whitespace-pre-wrap"
                    style={
                      msg.sender === 'user'
                        ? {
                            background: C.primary,
                            color: 'white',
                            borderTopRightRadius: '4px',
                          }
                        : {
                            background: 'white',
                            color: C.body,
                            borderTopLeftRadius: '4px',
                            border: `1px solid ${C.border}`,
                          }
                    }
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}
                  />
                </motion.div>
              ))}

              {/* Indicador de carga */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className="rounded-2xl px-4 py-3 shadow-sm flex gap-1.5 items-center"
                    style={{ background: 'white', border: `1px solid ${C.border}` }}
                  >
                    {[0, 1, 2].map(j => (
                      <span
                        key={j}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ backgroundColor: C.cta, animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Barra de input */}
            <form
              onSubmit={handleSend}
              className="flex items-center shrink-0"
              style={{ background: 'white', borderTop: `1px solid ${C.border}` }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={loading}
                className="flex-1 px-4 py-4 text-[15px] outline-none bg-transparent disabled:opacity-50"
                style={{ color: C.body }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Enviar"
                className="w-14 h-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: C.cta }}
                onMouseEnter={e => { if (!loading && input.trim()) e.currentTarget.style.backgroundColor = C.ctaDk; }}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.cta}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
