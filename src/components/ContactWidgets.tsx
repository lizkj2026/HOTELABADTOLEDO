
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Eres el asistente virtual del Hotel Abad y Apartamentos Abad en Toledo. Responde de manera profesional, amable y elegante. Utiliza la siguiente información para responder a las preguntas frecuentes de los huéspedes:
- Check-in: A partir de las 14:00 (Hotel) o 15:00 (Apartamentos).
- Check-out: Hasta las 12:00.
- Desayuno: Buffet disponible de 8:00 a 11:00 en el hotel (precio: 12€/persona aprox). Se sirve en la bodega histórica del hotel.
- Mascotas: No se admiten en el hotel. En apartamentos, consultar disponibilidad previa.
- Parking: Disponemos de parking privado concertado a 100m. Es necesaria reserva previa (20€/noche aprox).
- Ubicación: C. de la Silla, 2, 45003 Toledo. Junto a la Puerta del Sol.
- Wi-Fi: Gratuito en todo el establecimiento.
- Consigna: Sí, disponemos de consigna gratuita para equipajes.
- Climatización: Todos nuestros alojamientos disponen de aire acondicionado y calefacción.
- Servicios: Recepción 24h, información turística, reserva de tours.
- Fianza: En los apartamentos se requiere una fianza reembolsable.
- Limpieza: Servicio diario en hotel. En apartamentos, para estancias largas se realiza cada 3 o 4 días.
- Cancelación: Según la tarifa seleccionada. Las tarifas no reembolsables no permiten cambios ni cancelaciones.

Responde siempre en español a menos que te pregunten en otro idioma. Sé conciso y ofrece contactar por WhatsApp o email (info@hotelabad.com) para gestiones específicas o reservas directas.`;

export default function ContactWidgets() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente virtual de Abad Toledo. ¿Tienes alguna duda sobre tu estancia?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);
  
  const suggestedQuestions = [
    "¿A qué hora es el check-in?",
    "¿Tenéis parking?",
    "¿Hay desayuno?",
    "¿Admitís mascotas?",
    "¿Dónde estáis?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const initChat = () => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      chatSessionRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }
    return chatSessionRef.current;
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    if (!textOverride) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const chat = initChat();
      const result = await chat.sendMessage({ message: textToSend });
      const botResponse = result.text || "No entiendo la pregunta. ¿Podrías repetirla o contactar con nuestra recepción?";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Disculpa, he tenido un problema técnico. ¿Podrías intentar de nuevo o consultarme otra duda?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col gap-4 items-end pointer-events-none">
      {/* Bot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] md:w-[400px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-black/5 mb-4 pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-brand-charcoal p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-charcoal" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wider">Asistente Abad</h4>
                  <span className="text-brand-gold text-[9px] uppercase font-bold tracking-[0.2em] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
                    En línea
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fcfcfc]"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-gold text-brand-charcoal rounded-tr-none font-medium' 
                      : 'bg-white text-brand-stone shadow-sm border border-black/5 rounded-tl-none font-light'
                  }`}>
                    {msg.role === 'bot' ? (
                      <div className="prose prose-sm prose-stone">
                        {msg.text}
                      </div>
                    ) : msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-brand-stone shadow-sm border border-black/5 rounded-2xl rounded-tl-none px-5 py-4 flex gap-1.5 items-center">
                    <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input & Suggested Questions */}
            <div className="p-4 bg-white border-t border-black/5">
              {/* Suggested Questions */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    disabled={isLoading}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-black/5 bg-[#f8f8f8] text-[10px] font-bold text-brand-stone hover:border-brand-gold hover:text-brand-gold transition-all shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div className="relative flex items-center gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-[#f8f8f8] border border-black/5 rounded-full py-4 px-6 text-[13px] focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 rounded-full bg-brand-charcoal text-white flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all disabled:opacity-30 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 pointer-events-auto">
        {/* ChatBot Toggle */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-gold text-brand-charcoal' : 'bg-brand-charcoal text-brand-gold ring-1 ring-brand-gold/20'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          {!isOpen && (
            <span className="absolute right-full mr-4 bg-white text-brand-charcoal px-4 py-2 rounded-lg text-[10px] font-bold shadow-xl opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest border border-black/5">
              Chat con IA
            </span>
          )}
        </motion.button>

        {/* WhatsApp Link */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/34925283500" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group relative"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute right-full mr-4 bg-white text-brand-charcoal px-4 py-2 rounded-lg text-[10px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest border border-black/5">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </div>
  );
}
