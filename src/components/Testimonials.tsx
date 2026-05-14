/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:py-32 bg-brand-charcoal overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold tracking-[0.4em] text-brand-gold uppercase mb-4 block">
            VOCES DE NUESTROS HUÉSPEDES
          </span>
          <h2 className="text-white text-5xl md:text-7xl">Experiencias memorables</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-12 rounded-[2rem] border border-white/10 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-white/90 font-serif leading-relaxed mb-8">
                  {i === 1 
                    ? "Al despertarme, las vistas del casco histórico eran simplemente mágicas. El desayuno artesano y la amabilidad del equipo superaron todas nuestras expectativas."
                    : "El mejor hotel boutique en el que hemos estado. La fusión del edificio histórico del siglo XII con las comodidades modernas es sencillamente perfecta."}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs">
                    {i === 1 ? 'JD' : 'ML'}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">{i === 1 ? 'Javier Domínguez' : 'Maria Lorenz'}</span>
                    <span className="text-[10px] tracking-widest text-brand-stone uppercase">Huésped de {i === 1 ? 'Madrid' : 'Berlín'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop" 
                alt="Happy guests" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-brand-gold p-8 rounded-full hidden xl:block animate-bounce shadow-2xl">
              <span className="text-brand-charcoal font-bold text-xl">9.4/10</span>
              <p className="text-brand-charcoal/60 text-[10px] uppercase tracking-widest font-bold">Booking.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
