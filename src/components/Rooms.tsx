/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Maximize2, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    id: 'duplex',
    title: 'Dúplex Histórica',
    desc: 'Un espacio de dos niveles con vigas de madera originales y vistas panorámicas del Tajo.',
    size: '45m²',
    price: '185€',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'individual',
    title: 'Individual Premium',
    desc: 'La esencia de la soledad elegante, con piedra vista y detalles de forja artesanal.',
    size: '22m²',
    price: '115€',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 'suite',
    title: 'Suite del Alquimista',
    desc: 'Nuestro refugio más exclusivo, con terraza privada y baño de mármol de Carrara.',
    size: '60m²',
    price: '240€',
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop'
  }
];

export default function Rooms() {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 md:py-48 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-8">NUESTROS SANTUARIOS</span>
            <h2 className="text-6xl md:text-[5.5rem] leading-[1.1] font-serif font-light">
              Donde cada rincón tiene <br />
              <span className="italic">personalidad propia.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10 items-start lg:items-end flex-1">
            <p className="max-w-md text-brand-stone text-xl font-light leading-relaxed lg:text-right">
              Espacios diseñados para respetar la arquitectura original, integrando el lujo contemporáneo para un descanso absoluto en el corazón de Toledo.
            </p>
            <button 
              onClick={() => navigate('/habitaciones')}
              className="text-[11px] font-bold tracking-[0.25em] uppercase border-b border-brand-charcoal pb-1.5 hover:text-brand-gold hover:border-brand-gold transition-all"
            >
              VER TODAS LAS HABITACIONES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {rooms.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group cursor-pointer"
            >
              <div 
                className="aspect-[4/5] overflow-hidden rounded-[0.5rem] mb-10 relative shadow-xl"
                onClick={() => navigate('/habitaciones')}
              >
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigate('/book'); }}
                    className="glass px-6 py-3 rounded-[2px] transition-all hover:bg-brand-gold hover:text-white"
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase">RESERVAR</span>
                  </button>
                  <span className="text-white text-xs font-bold tracking-widest drop-shadow-lg">DESDE {room.price}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-serif font-light">{room.title}</h3>
                <p className="text-brand-stone font-light text-lg italic leading-relaxed">
                  {room.desc}
                </p>
                <div className="flex items-center gap-6 text-brand-stone/60 pt-6 border-t border-black/5">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">BOUTIQUE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
