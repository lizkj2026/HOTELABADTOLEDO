/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Bed, Gift, Headphones, Lock } from 'lucide-react';

export default function BenefitsBar() {
  const benefits = [
    { icon: MapPin, text: 'Ubicación privilegiada' },
    { icon: Bed, text: 'Habitaciones con encanto' },
    { icon: Gift, text: 'Mejor precio garantizado' },
    { icon: Headphones, text: 'Atención personalizada' },
    { icon: Lock, text: 'Pago 100% seguro' },
  ];

  return (
    <div className="bg-white border-b border-black/5 py-14 px-6">
      <div className="max-w-[1500px] mx-auto flex flex-wrap justify-between items-center gap-12">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group flex-1 min-w-[150px]">
            <div className="text-brand-stone/40 transition-all duration-700 group-hover:text-brand-gold group-hover:scale-110">
              <benefit.icon className="w-6 h-6 stroke-[1]" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-stone/80 text-center leading-relaxed">
              {benefit.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
