
import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1545622902-602888983d61?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 mb-16 flex justify-between items-end">
        <div>
          <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-6">GALERÍA VISUAL</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-charcoal italic">Nuestro Universo</h2>
        </div>
        <button className="text-[10px] font-bold tracking-[0.2em] border-b border-brand-gold pb-1 text-brand-gold uppercase hover:text-brand-charcoal transition-colors">
          Ver todas las fotos
        </button>
      </div>

      <div className="flex gap-4 animate-marquee hover:pause whitespace-nowrap">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="inline-block w-[400px] aspect-[4/5] overflow-hidden group">
            <img 
              src={img} 
              alt="Gallery" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
