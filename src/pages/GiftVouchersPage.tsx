
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const vouchers = [
  {
    title: 'Ruta nocturna guiada Toledo Desconocido',
    description: 'Escapada a Toledo con ruta basada en anécdotas, curiosidades y leyendas de las calles por donde transcurre el paseo. Duración aproximada 2 horas.',
    price: '210€',
    img: 'https://i.postimg.cc/yddzMCW3/image.png'
  },
  {
    title: 'Tirolina sobre el río Tajo',
    description: 'Escapada de aventura en Toledo. Atrévete a cruzar volando el río más largo de la península Ibérica. La Gran Tirolina Toledo atraviesa el Tajo a su paso por la ciudad de Toledo cerca del Puente de San Martín (s. XIV). Más de 180 metros de vuelo en la tirolina urbana más larga de Europa.',
    price: '208€',
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Escapada 1 Noche Romántica en Toledo',
    description: 'Regala una escapada a la bella ciudad de Toledo, en nuestro hotel con encanto, desayuno buffet y botella de cava.',
    price: '205€',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Escapada 1 Noche Relax en Toledo',
    description: 'Escapada relajante con acceso a Baños Árabes Termales, incluye una noche en nuestro hotel con encanto en Toledo y desayuno tipo buffet.',
    price: '236€',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function GiftVouchersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-48 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-stone hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Volver</span>
        </button>

        <div className="mb-20">
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">MOMENTOS INOLVIDABLES</span>
          <h1 className="text-6xl md:text-8xl mb-8">Nuestros <br /><span className="italic font-light">Bonos Regalo</span></h1>
          <p className="max-w-xl text-brand-stone text-lg font-light leading-relaxed">
            Sorprenda con una experiencia única. Regale Toledo, regale historia y regale confort en Hotel Abad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vouchers.map((voucher, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={voucher.img} 
                  alt={voucher.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-center mb-4 min-h-[56px] flex items-center justify-center">
                  {voucher.title}
                </h3>
                <p className="text-brand-stone text-sm text-center leading-relaxed mb-8 flex-1">
                  {voucher.description}
                </p>
                <div className="text-center mb-8">
                  <span className="text-[11px] font-bold tracking-widest text-brand-stone uppercase">Desde </span>
                  <span className="text-lg font-bold">{voucher.price}</span>
                </div>
                <button 
                  className="w-full border border-black py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                  onClick={() => window.open('https://wa.me/34925283500', '_blank')}
                >
                  CONTACTAR
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
