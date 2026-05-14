
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const offers = [
  {
    title: 'Baños Árabes Sábados, Domingos y Festivos',
    description: 'Relájate en un auténtico baño árabe toledano (1 hora) IMPRESCINDIBLE concertar cita/hora con antelación.',
    priceTag: 'PRECIO ESPECIAL',
    img: 'https://i.postimg.cc/bwjSpZzq/image.png'
  },
  {
    title: 'Baños Árabes de Lunes a Viernes',
    description: 'Relájate en un auténtico baño árabe toledano (1 hora) IMPRESCINDIBLE concertar cita/hora con antelación.',
    priceTag: 'PRECIO ESPECIAL',
    img: 'https://i.postimg.cc/bwjSpZzq/image.png'
  },
  {
    title: 'Baño Árabe + Masaje relajante 25 minutos - Lunes a Viernes',
    description: 'Disfruta en un auténtico baño árabe toledano (1 hora) y relájate con un masaje de 25 minutos IMPRESCINDIBLE concertar cita con antelación.',
    priceTag: 'PRECIO ESPECIAL',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Tirolina en Toledo sobre el río Tajo',
    description: 'Atrévete a cruzar volando el río más largo de la península ibérica. La Gran Tirolina Toledo atraviesa el Tajo a su paso por la ciudad imperial.',
    priceTag: 'PRECIO ESPECIAL',
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function OffersPage() {
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
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">EXPERIENCIAS EXCLUSIVAS</span>
          <h1 className="text-6xl md:text-8xl mb-8">Nuestras <br /><span className="italic font-light">Ofertas</span></h1>
          <p className="max-w-xl text-brand-stone text-lg font-light leading-relaxed">
            Hemos seleccionado las mejores experiencias locales para complementar su estancia en Toledo. Calidad y tradición a su alcance.
          </p>
        </div>

        <div className="space-y-6">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group flex flex-col md:flex-row items-stretch gap-0 md:gap-12 border border-black/5 hover:border-brand-gold/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
            >
              <div className="w-full md:w-80 h-64 md:h-auto overflow-hidden shrink-0">
                <img 
                  src={offer.img} 
                  alt={offer.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-brand-gold text-[9px] font-bold tracking-[0.3em] uppercase border border-brand-gold/20 px-2 py-0.5">
                        {offer.priceTag}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-brand-charcoal mb-4">
                      {offer.title}
                    </h3>
                    <p className="text-brand-stone text-sm leading-relaxed max-w-2xl">
                      {offer.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4 items-end shrink-0">
                     <button 
                      onClick={() => window.open('https://wa.me/34925283500', '_blank')}
                      className="px-12 py-4 border border-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all whitespace-nowrap"
                    >
                      CONSULTAR
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-brand-charcoal text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6">¿Busca algo más personalizado?</h2>
              <p className="text-brand-stone/80 text-lg font-light leading-relaxed">
                Contacte con nuestro equipo de conserjería para diseñar un paquete de experiencias a su medida. Estamos aquí para hacer su estancia inolvidable.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = 'mailto:info@hotelabad.com'}
              className="bg-brand-gold text-brand-charcoal px-14 py-6 text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-all whitespace-nowrap"
            >
              CONTACTAR AHORA
            </button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
