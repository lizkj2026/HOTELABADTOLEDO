
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-charcoal overflow-hidden py-24">
      <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-1/3 overflow-hidden opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1545622902-602888983d61?q=80&w=2070&auto=format&fit=crop" 
          alt="Toledo Panorama" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1500px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 z-10 gap-20">
        <div className="lg:col-start-2 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-10">DESCUBRE LA CIUDAD</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 italic leading-[0.9]">
              Toledo: <br />
              <span className="text-brand-stone non-italic">Donde el tiempo <br /> se detuvo</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/70 leading-relaxed text-lg">
              <div className="space-y-6">
                <p>
                  Desde nuestra ubicación privilegiada, toda la historia de Toledo está a sus pies. Piérdase por sus callejones laberínticos y descubra por qué es Patrimonio de la Humanidad.
                </p>
                <div className="p-8 border border-white/10 glass-dark">
                  <h4 className="text-white font-serif text-2xl mb-4 italic">Agenda Cultural</h4>
                  <p className="text-sm">Consulte los eventos y exposiciones actuales en los museos de la ciudad.</p>
                  <button className="mt-6 text-brand-gold font-bold text-[9px] tracking-widest uppercase flex items-center gap-2">
                    VER AGENDA <div className={`w-8 h-[1px] bg-brand-gold`} />
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <p>
                  Ofrecemos experiencias personalizadas: desde tours privados nocturnos hasta catas de vinos locales y aceite de oliva de los Montes de Toledo.
                </p>
                <div className="aspect-video overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop" 
                    alt="Toledo Streets" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
