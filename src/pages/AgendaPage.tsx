
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    title: 'Corpus Christi 2026',
    date: '04 Junio 2026',
    category: 'FESTIVIDAD TRADICIONAL',
    description: 'La fiesta más importante de Toledo. Las calles se cubren de toldos y tomillo, y la Custodia de Arfe procesiona en un ambiente de fervor y tradición único en el mundo.',
    img: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Fiestas de la Virgen del Sagrario',
    date: '15 Agosto 2026',
    category: 'TRADICIÓN POPULAR',
    description: 'Celebración de la patrona de Toledo. Es tradición beber "el agua de la Virgen" en los botijos instalados en el Claustro de la Catedral.',
    img: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Luz Toledo 2026',
    date: 'Septiembre 2026',
    category: 'ESPECTÁCULO VISUAL',
    description: 'Impactante espectáculo de video-mapping y sonido sobre las fachadas de los monumentos más emblemáticos de la ciudad, transformando la piedra en arte dinámico.',
    img: 'https://images.unsplash.com/photo-1514300354021-0e12157ba3b8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Festival de Jazz de Toledo',
    date: 'Agosto 2026',
    category: 'MÚSICA',
    description: 'Noches mágicas con los mejores ritmos de Jazz en escenarios históricos al aire libre, aprovechando las frescas noches del verano toledano.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Certamen de Vinos de Castilla-La Mancha',
    date: 'Octubre 2026',
    category: 'GASTRONOMÍA',
    description: 'Encuentro de las principales bodegas de la región. Una oportunidad única para degustar los mejores caldos de nuestra tierra en un entorno histórico.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function AgendaPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-48 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-stone hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Volver</span>
        </button>

        <div className="mb-20">
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">VIVE LA CIUDAD</span>
          <h1 className="text-6xl md:text-8xl mb-8">Agenda <br /><span className="italic font-light">Cultural 2026</span></h1>
          <p className="max-w-xl text-brand-stone text-lg font-light leading-relaxed">
            Toledo es una ciudad viva. Planifique su estancia coincidiendo con los grandes eventos que definen el alma de nuestra antigua capital.
          </p>
        </div>

        <div className="space-y-32">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-[2px] premium-shadow">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-brand-gold font-bold text-[10px] tracking-widest uppercase bg-brand-cream px-3 py-1">
                    {event.category}
                  </span>
                  <div className="flex items-center gap-2 text-brand-stone text-[10px] font-bold tracking-widest uppercase">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif italic mb-6 text-brand-charcoal">
                  {event.title}
                </h3>
                
                <p className="text-brand-stone text-lg font-light leading-relaxed mb-10">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-brand-gold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-brand-stone font-bold">Ubicación</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Casco Histórico</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-brand-gold">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-brand-stone font-bold">Recomendación</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Reserva Anticipada</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-black/5">
                  <button 
                    onClick={() => navigate('/habitaciones')}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase group flex items-center gap-4 hover:text-brand-gold transition-colors"
                  >
                    RESERVAR ESTANCIA PARA ESTA FECHA
                    <div className="w-12 h-px bg-brand-charcoal group-hover:bg-brand-gold group-hover:w-20 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
