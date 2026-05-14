
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, MapPin, Clock, Star, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const activities = [
  {
    title: 'Baños Árabes Medina Mudéjar',
    subtitle: 'Sumérjase en la historia de Toledo',
    description: 'Revitalice y estimule el cuerpo en piscinas a diferentes temperaturas – fría, templada y caliente. Disfrute del baño turco y relájese en la sala de descanso mientras degusta un té moruno. Un viaje sensorial al Toledo del s. XII.',
    details: 'Situados en pleno casco histórico, recogen la tradición de los múltiples baños que existieron en la ciudad medieval.',
    img: 'https://i.postimg.cc/bwjSpZzq/image.png',
    tags: ['Relax', 'Historia', 'Bienestar'],
    link: 'https://wa.me/34925283500'
  },
  {
    title: 'Puy du Fou España',
    subtitle: 'La historia te espera',
    description: 'Elegido el mejor parque del mundo. Disfrute de espectáculos grandiosos que le harán viajar a través de los siglos. No se pierda "El Sueño de Toledo", el espectáculo nocturno más grande de España.',
    details: 'A tan solo 10 minutos del hotel. Una experiencia imprescindible para toda la familia.',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
    tags: ['Espectáculo', 'Familia', 'Historia'],
    link: 'https://www.puydufou.com/espana/es'
  },
  {
    title: 'Visitas Guiadas "Toledo Mágico"',
    subtitle: 'Leyendas y misterios bajo la luna',
    description: 'Descubra los secretos mejor guardados de la ciudad de las tres culturas. Rutas nocturnas por subterráneos, callejones y lugares encantados cargados de anécdotas y curiosidades.',
    details: 'Paseos de aproximadamente 2 horas con guías oficiales expertos en la historia toledana.',
    img: 'https://i.postimg.cc/3wF6rSz3/image.png',
    tags: ['Cultura', 'Nocturno', 'Aventura'],
    link: 'https://wa.me/34925283500'
  },
  {
    title: 'Cata de Vinos y Quesos Manchegos',
    subtitle: 'Sabor a nuestra tierra',
    description: 'Una experiencia gastronómica para los sentidos. Deguste los mejores vinos de Denominación de Origen La Mancha acompañados del auténtico queso manchego en un entorno inigualable.',
    details: 'Organizamos catas privadas en locales con encanto del casco histórico.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop',
    tags: ['Gastronomía', 'Local', 'Premium'],
    link: 'https://wa.me/34925283500'
  }
];

export default function ActivitiesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-48 px-6 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-stone hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Volver</span>
        </button>

        <div className="mb-24 text-center md:text-left">
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">DESCUBRA TOLEDO</span>
          <h1 className="text-6xl md:text-9xl mb-8 leading-tight">Actividades <br /><span className="italic font-light">Memorables</span></h1>
          <p className="max-w-2xl text-brand-stone text-xl font-light leading-relaxed">
            Hemos diseñado una selección de experiencias exclusivas para que su estancia en nuestra ciudad sea verdaderamente inolvidable. Del relax más profundo a la aventura histórica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {activities.map((activity, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 group relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm premium-shadow">
                  <img 
                    src={activity.img} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Floating Price/Tag Badge */}
                <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-8 shadow-2xl hidden md:block border border-black/5">
                  <Star className="w-6 h-6 text-brand-gold mb-4" />
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-stone">Experiencia</span>
                  <p className="font-serif italic text-xl">Recomendada</p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex flex-wrap gap-2 mb-8">
                  {activity.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest uppercase border border-brand-stone/20 px-3 py-1 text-brand-stone">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-brand-gold font-bold text-[11px] tracking-[0.3em] uppercase block mb-4">
                  {activity.subtitle}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif italic mb-8 text-brand-charcoal leading-tight">
                  {activity.title}
                </h3>
                
                <p className="text-brand-stone text-lg font-light leading-relaxed mb-8">
                  {activity.description}
                </p>

                <div className="bg-brand-cream/30 p-8 border-l-2 border-brand-gold mb-12">
                   <div className="flex gap-4 items-start">
                    <Info className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                    <p className="text-brand-stone text-sm italic leading-relaxed">
                      {activity.details}
                    </p>
                   </div>
                </div>

                <button 
                  onClick={() => window.open(activity.link, '_blank')}
                  className="group flex items-center gap-6 text-[11px] font-bold tracking-[0.4em] uppercase hover:text-brand-gold transition-colors"
                >
                  RESERVAR EXPERIENCIA
                  <div className="relative">
                    <div className="w-16 h-px bg-brand-charcoal group-hover:bg-brand-gold transition-all" />
                    <div className="absolute top-0 right-0 w-16 h-px bg-brand-gold origin-right scale-x-0 group-hover:scale-x-125 transition-transform" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 text-center bg-white p-20 shadow-sm border border-black/5">
          <MapPin className="w-8 h-8 text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl font-serif italic mb-6">Ubicación Estratégica</h2>
          <p className="max-w-xl mx-auto text-brand-stone text-lg font-light leading-relaxed mb-12">
            El Hotel Abad se encuentra en el epicentro de todas estas actividades. Nuestro equipo estará encantado de gestionar cualquier reserva o transporte que necesite.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/34925283500', '_blank')}
            className="bg-brand-charcoal text-white px-16 py-6 text-[11px] font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-all"
          >
            HABLAR CON CONSERJERÍA
          </button>
        </div>
      </div>
    </div>
  );
}
