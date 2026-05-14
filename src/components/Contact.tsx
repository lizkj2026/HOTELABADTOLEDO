
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-brand-cream">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-6">EN CONTACTO</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-12 italic">Escríbanos</h2>
          
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 rounded-full text-brand-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] tracking-widest uppercase mb-2">Ubicación</h4>
                <p className="text-brand-stone text-lg">Real del Arrabal, 1 - 45003 Toledo, España</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 rounded-full text-brand-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] tracking-widest uppercase mb-2">Teléfono</h4>
                <p className="text-brand-stone text-lg">+34 925 283 500</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 rounded-full text-brand-gold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] tracking-widest uppercase mb-2">Email</h4>
                <p className="text-brand-stone text-lg">info@hotelabad.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-stone">Nombre</label>
                <input type="text" className="w-full border-b border-black/10 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="Su nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-stone">Email</label>
                <input type="email" className="w-full border-b border-black/10 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="email@ejemplo.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-stone">Asunto</label>
              <select className="w-full border-b border-black/10 py-3 focus:border-brand-gold outline-none transition-colors bg-transparent">
                <option>Reserva General</option>
                <option>Evento Especial</option>
                <option>Consulta Apartamentos</option>
                <option>Otros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-stone">Mensaje</label>
              <textarea rows={4} className="w-full border-b border-black/10 py-3 focus:border-brand-gold outline-none transition-colors resize-none" placeholder="¿Cómo podemos ayudarle?"></textarea>
            </div>
            
            <button className="btn-premium w-full flex items-center justify-center gap-3">
              ENVIAR MENSAJE <Send className="w-3 h-3" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
