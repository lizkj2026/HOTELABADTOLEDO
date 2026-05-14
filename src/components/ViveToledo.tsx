/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function ViveToledo() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
      alt: 'Detalle habitación'
    },
    {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      alt: 'Vistas desde balcón'
    },
    {
      url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
      alt: 'Pasillo hotel'
    }
  ];

  return (
    <section className="py-32 px-6 md:py-48 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-4 lg:pr-12">
            <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-10">VIVE TOLEDO</span>
            <h2 className="text-6xl md:text-[5.5rem] mb-12 leading-[1.1] font-serif font-light">
              Historia, cultura y <br />
              <span className="italic">belleza a tus pies</span>
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold mb-12" />
            <p className="text-brand-stone text-xl font-light leading-relaxed mb-10">
              Descubre una ciudad única y alójate en un hotel con alma, donde cada detalle está pensado para tu bienestar y descanso absoluto en el corazón histórico.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className={`aspect-[4/5] overflow-hidden rounded-[0.5rem] shadow-xl relative group ${
                  i === 1 ? 'md:-translate-y-20' : i === 2 ? 'md:translate-y-10' : ''
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-[2.5s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
