/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-brand-stone hover:text-brand-charcoal transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Volver</span>
        </button>

        <div className="glass rounded-[3rem] p-8 md:p-16 shadow-2xl">
          <div className="mb-12">
            <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-4">Motor de Reservas Directas</span>
            <h1 className="text-4xl md:text-6xl mb-6">Completa tu reserva</h1>
            <p className="text-brand-stone font-light italic">Estás a un paso de vivir la historia de Toledo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-stone block ml-4">Nombre Completo</label>
                <input type="text" placeholder="Tu nombre..." className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-stone block ml-4">Email de Contacto</label>
                <input type="email" placeholder="email@ejemplo.com" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-all" />
              </div>
              <button 
                className="w-full bg-brand-charcoal text-white py-6 rounded-2xl font-bold uppercase letter-spacing-wide hover:bg-brand-moss transition-all shadow-xl"
                onClick={() => alert('¡Reserva confirmada! (Simulación)')}
              >
                Confirmar Reserva Online
              </button>
            </div>

            <div className="bg-brand-charcoal/5 rounded-[2rem] p-8 space-y-6">
              <h3 className="text-xl font-serif">Resumen del Viaje</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-stone">Habitación</span>
                  <span className="font-bold">Dúplex Histórica</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-stone">Fechas</span>
                  <span className="font-bold">14 May - 16 May 2026</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-stone">Huéspedes</span>
                  <span className="font-bold">2 Adultos</span>
                </div>
                <div className="pt-4 border-t border-black/10 flex justify-between items-end">
                  <span className="text-brand-stone text-xs uppercase font-bold">Total Estancia</span>
                  <span className="text-3xl font-serif text-brand-gold">370€</span>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                {[
                  'Desayuno artesano incluido',
                  'Cancelación gratuita',
                  'Wifi Premium de alta velocidad',
                  'Acceso a la terraza secreta'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-brand-stone">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
