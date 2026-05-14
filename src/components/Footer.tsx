/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const navItems = [
    { name: 'Historia', href: '/' },
    { name: 'Habitaciones', href: '/habitaciones' },
    { name: 'Apartamentos', href: '/apartamentos' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Actividades', href: '/actividades' },
    { name: 'Fotos', href: '/galeria' },
    { name: 'Bonos Regalo', href: '/bonos-regalo' },
    { name: 'Agenda 2026', href: '/agenda' },
    { name: 'Vivir Toledo', href: '/' },
  ];

  return (
    <footer className="bg-brand-charcoal pt-32 pb-48 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-[0.02] -translate-y-1/2 translate-x-1/3 pointer-events-none">
        <span className="text-[30rem] font-serif font-light leading-none">HA</span>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32 relative z-10">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-12">
              <span className="font-serif text-5xl tracking-tighter text-white">HA</span>
              <div className="flex flex-col mt-4 border-l border-white/10 pl-6">
                <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase">HOTEL ABAD</span>
                <span className="text-[10px] tracking-[0.5em] text-brand-gold mt-1 uppercase">Toledo</span>
              </div>
            </div>
            <p className="text-brand-stone text-sm leading-relaxed mb-10 max-w-sm">
              Una experiencia histórica reinterpretada bajo un prisma de lujo contemporáneo y calidez boutique.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/hotelabadtoledo/' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-white/30 hover:text-brand-gold transition-colors"
                >
                  <social.Icon className="w-5 h-5 stroke-[1.5]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-12 border-b border-white/5 pb-4">Navegación</h4>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-brand-stone text-sm hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group italic font-serif">
                    <div className="w-0 h-[1px] bg-brand-gold group-hover:w-4 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contacto">
            <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-12 border-b border-white/5 pb-4">Hablemos</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-brand-gold">
                   <MapPin className="w-4 h-4" />
                </div>
                <span className="text-brand-stone text-sm leading-relaxed">Real del Arrabal, 1 <br />45003 Toledo, España</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-brand-gold">
                   <Phone className="w-4 h-4" />
                </div>
                <span className="text-brand-stone text-sm">+34 925 283 500</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-brand-gold">
                   <Mail className="w-4 h-4" />
                </div>
                <span className="text-brand-stone text-sm">info@hotelabad.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-12 border-b border-white/5 pb-4">Privilegios</h4>
            <p className="text-brand-stone text-xs mb-8 leading-relaxed italic">Únase a nuestra lista para recibir invitaciones exclusivas y novedades.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-brand-gold w-full transition-all"
              />
              <button className="text-brand-gold font-bold text-[10px] tracking-[0.3em] uppercase mt-4 hover:text-white transition-colors text-right">
                SUSCRIBIRSE +
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-stone/40 text-[9px] tracking-[0.3em] uppercase">
            © 2026 Hotel Abad Toledo. Una joya histórica en el corazón de castilla.
          </p>
          <div className="flex gap-12">
            {['Privacidad', 'Cookies', 'Aviso Legal'].map((item) => (
              <a key={item} href="#" className="text-brand-stone/40 text-[9px] tracking-[0.3em] uppercase hover:text-white transition-colors font-bold">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
