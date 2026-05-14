
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    title: 'Habitaciones',
    description: 'Espacios cálidos con vistas únicas al casco histórico o al río Tajo.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    link: '/habitaciones'
  },
  {
    title: 'Apartamentos',
    description: 'Independencia y lujo en el centro de Toledo para estancias prolongadas.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
    link: '#'
  }
];

export default function RoomsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-6">ESTANCIA PREMIUM</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-charcoal">Sueños a medida</h2>
          </div>
          <p className="text-brand-stone max-w-md text-right leading-relaxed italic">
            "Cada una de nuestras estancias ha sido diseñada para ofrecer una experiencia de descanso absoluto, respetando las vigas de madera y las paredes de piedra originales."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-8">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-serif mb-4 flex items-center justify-between">
                {room.title}
                <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-gold" />
              </h3>
              <p className="text-brand-stone mb-6 max-w-sm">{room.description}</p>
              <button className="text-[10px] font-bold tracking-[0.2em] border-b border-brand-gold pb-1 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                Ver Detalles
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
