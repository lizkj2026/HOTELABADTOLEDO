
import { motion } from 'motion/react';

export default function Introduction() {
  return (
    <section id="hotel" className="section-padding bg-brand-cream">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-6">BIENVENIDOS AL HOTEL ABAD</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] text-brand-charcoal font-serif italic">
            Donde la historia <br /> se encuentra con <br /> la modernidad
          </h2>
          <div className="space-y-6 text-brand-stone leading-relaxed text-lg max-w-xl">
            <p>
              Ubicado en una antigua fragua del siglo XIX, el Hotel Abad Toledo nace fruto de una meticuosa rehabilitación que respeta la arquitectura tradicional toledana integrando el máximo confort contemporáneo.
            </p>
            <p>
              Situado en el corazón del casco histórico, junto a la emblemática Puerta del Sol y a pocos pasos de la Mezquita del Cristo de la Luz, somos el refugio perfecto para descubrir los secretos de la ciudad de las tres culturas.
            </p>
          </div>
          <button className="mt-12 group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:text-brand-gold">
            DESCUBRE NUESTRA HISTORIA
            <div className="w-12 h-[1px] bg-brand-charcoal group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
            alt="Hotel Interior" 
            className="w-full h-full object-cover grayscale-[0.2] hover:scale-110 transition-transform duration-[3s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-brand-gold text-white p-12 hidden md:block">
            <span className="text-4xl font-serif italic">1815</span>
            <p className="text-[10px] tracking-[0.2em] font-bold mt-2 uppercase">Edificio Histórico</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
