
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    title: 'Suite Principal',
    category: 'Habitaciones'
  },
  {
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
    title: 'Detalles de Piedra',
    category: 'Arquitectura'
  },
  {
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
    title: 'Suite con Balcón',
    category: 'Habitaciones'
  },
  {
    url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
    title: 'Baño de Lujo',
    category: 'Bienestar'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
    title: 'Apartamento Sol',
    category: 'Apartamentos'
  },
  {
    url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
    title: 'Vistas al Tajo',
    category: 'Vistas'
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=2070&auto=format&fit=crop',
    title: 'Zona de Estar',
    category: 'Zonas Comunes'
  },
  {
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9759678?q=80&w=2070&auto=format&fit=crop',
    title: 'Recepción Histórica',
    category: 'Arquitectura'
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    title: 'Desayuno Buffet',
    category: 'Gastronomía'
  }
];

export default function GalleryPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-48 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Volver</span>
        </button>

        <div className="mb-20">
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase block mb-4">UNA MIRADA INTERIOR</span>
          <h1 className="text-6xl md:text-8xl mb-8">Galería <br /><span className="italic font-light">Visual</span></h1>
          <p className="max-w-xl text-white/60 text-lg font-light leading-relaxed">
            Sumérjase en la atmósfera única de nuestro hotel. Un viaje visual por la piedra, la luz y el diseño que dan forma a su próxima estancia.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group cursor-zoom-in overflow-hidden rounded-[2px]"
              onClick={() => setSelectedImage(i)}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <span className="text-brand-gold text-[9px] font-bold tracking-widest uppercase mb-1">
                  {image.category}
                </span>
                <h3 className="text-xl font-serif italic text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-20"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            >
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].title} 
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                 <span className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">
                  {galleryImages[selectedImage].category}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif italic">{galleryImages[selectedImage].title}</h2>
              </div>
            </motion.div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs font-mono">
              {String(selectedImage + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
