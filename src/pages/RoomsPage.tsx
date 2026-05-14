/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Coffee, Wind, Mountain, Wifi, CheckCircle2 } from 'lucide-react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const allRooms = [
  {
    id: 'duplex',
    title: 'Dúplex Histórica',
    type: 'HABITACIÓN',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    price: '185€',
    maxGuests: 4
  },
  {
    id: 'individual',
    title: 'Individual Premium',
    type: 'HABITACIÓN',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
    price: '115€',
    maxGuests: 1
  },
  {
    id: 'suite',
    title: 'Suite del Alquimista',
    type: 'HABITACIÓN',
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
    price: '240€',
    maxGuests: 2
  },
  {
    id: 'doble',
    title: 'Doble de Forja',
    type: 'HABITACIÓN',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
    price: '155€',
    maxGuests: 2
  },
  {
    id: 'apt-sol',
    title: 'Apartamento Puerta del Sol',
    type: 'APARTAMENTO',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
    price: '210€',
    maxGuests: 4
  },
  {
    id: 'apt-rio',
    title: 'Apartamento Vista Tajo',
    type: 'APARTAMENTO',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
    price: '225€',
    maxGuests: 3
  }
];

export default function RoomsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isSearching = searchParams.get('searching') === 'true';
  const guests = parseInt(searchParams.get('guests') || '0');

  const isApartmentsPage = location.pathname === '/apartamentos';

  const filteredRooms = useMemo(() => {
    let rooms = allRooms;
    
    // Filter by type based on path
    if (isApartmentsPage) {
      rooms = rooms.filter(room => room.type === 'APARTAMENTO');
    } else {
      rooms = rooms.filter(room => room.type === 'HABITACIÓN');
    }

    if (!isSearching) return rooms;
    // Simple mock filter logic based on guests
    return rooms.filter(room => room.maxGuests >= guests);
  }, [isSearching, guests, isApartmentsPage]);

  return (
    <div className="min-h-screen pt-32 pb-48 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-stone hover:text-brand-charcoal transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Volver al inicio</span>
        </button>

        <div className="mb-20">
          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div
                key="search-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block">RESULTADOS DE BÚSQUEDA</span>
                   <div className="h-px flex-1 bg-brand-gold/20" />
                </div>
                <h1 className="text-6xl md:text-8xl mb-8">Disponibles <br /><span className="italic font-light">para ti</span></h1>
                <p className="text-brand-stone text-lg font-light leading-relaxed mb-8">
                  Hemos seleccionado las mejores estancias para {guests} {guests === 1 ? 'persona' : 'personas'} del {searchParams.get('in')} al {searchParams.get('out')}.
                </p>
                <button 
                  onClick={() => navigate('/habitaciones')}
                  className="text-[10px] font-bold tracking-widest uppercase border border-black/10 px-6 py-3 hover:bg-black hover:text-white transition-all"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="default-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">
                  {isApartmentsPage ? 'PRIVACIDAD Y LUJO' : 'NUESTROS SANTUARIOS'}
                </span>
                <h1 className="text-6xl md:text-8xl mb-8">
                  Nuestros <br /><span className="italic font-light">{isApartmentsPage ? 'Apartamentos' : 'Estancias'}</span>
                </h1>
                <p className="max-w-xl text-brand-stone text-lg font-light leading-relaxed">
                  {isApartmentsPage 
                    ? 'Descubra la libertad de vivir Toledo en su propio apartamento de lujo, con todo el confort de un hotel boutique.'
                    : 'Cada estancia es un diálogo entre el pasado y el presente, diseñada para proporcionar un refugio de paz en el bullicio histórico de Toledo.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {filteredRooms.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[14/10] overflow-hidden rounded-[2px] mb-8 relative">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8">
                   <span className="bg-white px-4 py-2 border border-black/5 text-[9px] font-bold tracking-widest uppercase text-brand-charcoal">
                    {room.type}
                  </span>
                </div>
                {isSearching && (
                  <div className="absolute top-8 right-8 animate-fade-in">
                    <span className="bg-brand-gold text-white px-4 py-2 text-[9px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-xl">
                      <CheckCircle2 className="w-3 h-3" /> Disponible
                    </span>
                  </div>
                )}
                <div className="absolute bottom-8 right-8">
                  <span className="bg-white/90 backdrop-blur-xl text-brand-charcoal px-8 py-4 rounded-[2px] font-bold text-sm shadow-2xl border border-black/5">
                    Desde {room.price}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-serif italic">{room.title}</h3>
                <div className="flex gap-3">
                  {[Coffee, Wind, Mountain, Wifi].map((Icon, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-brand-stone hover:text-brand-gold transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.25]" />
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-brand-stone mb-10 max-w-md font-light leading-relaxed">
                Equilibrio perfecto entre arquitectura original de piedra del siglo XIX y confort tecnológico de vanguardia. Un refugio exclusivo con vistas inmejorables.
              </p>
              
              <button 
                onClick={() => navigate('/book')}
                className="btn-premium w-full text-center"
              >
                RESERVAR AHORA
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
