/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname === '/book' || location.pathname === '/habitaciones' || location.pathname === '/apartamentos' || location.pathname === '/bonos-regalo' || location.pathname === '/agenda' || location.pathname === '/galeria' || location.pathname === '/ofertas' || location.pathname === '/actividades';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EL HOTEL', href: '/' },
    { name: 'HABITACIONES', href: '/habitaciones' },
    { name: 'APARTAMENTOS', href: '/apartamentos' },
    { name: 'OFERTAS', href: '/ofertas' },
    { name: 'ACTIVIDADES', href: '/actividades' },
    { name: 'FOTOS', href: '/galeria' },
    { name: 'AGENDA', href: '/agenda' },
    { name: 'BONOS REGALO', href: '/bonos-regalo' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  const getTextColor = () => {
    if (isScrolled) return 'text-brand-charcoal';
    if (isDarkPage) return 'text-brand-charcoal';
    return 'text-white';
  };

  const getSubTextColor = () => {
    if (isScrolled || isDarkPage) return 'text-brand-stone';
    return 'text-white/80';
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ${
          isScrolled ? 'py-4 glass border-b border-black/5 shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group cursor-pointer lg:flex-1">
            <div className="relative flex items-center">
              <span className="text-4xl md:text-5xl font-serif text-brand-gold font-light leading-none tracking-tighter">HA</span>
            </div>
            <div className={`flex flex-col border-l border-white/20 pl-4 py-1 transition-colors ${isScrolled || isDarkPage ? 'border-brand-charcoal/10' : 'border-white/20'}`}>
              <h1 className={`font-sans text-[11px] font-bold tracking-[0.2em] leading-tight ${getTextColor()}`}>
                HOTEL ABAD
              </h1>
              <span className={`text-[10px] tracking-[0.3em] font-light ${getSubTextColor()}`}>TOLEDO</span>
              <div className="flex gap-1 mt-1">
                {[1,2,3,4].map(s => <div key={s} className="w-1 h-1 rounded-full bg-brand-gold/80" />)}
              </div>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-8 justify-center lg:flex-1 pt-1">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-[9.5px] font-bold tracking-[0.2em] uppercase hover:text-brand-gold transition-all duration-300 ${getTextColor()}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-[9.5px] font-bold tracking-[0.2em] uppercase hover:text-brand-gold transition-all duration-300 ${getTextColor()}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-6 lg:flex-1 justify-end">
            <div className="hidden xl:flex items-center gap-6">
              <Link to="/book" className={`border border-brand-gold/40 px-8 py-3 rounded-[2px] font-bold text-[9px] uppercase tracking-[0.15em] transition-all duration-500 hover:bg-brand-gold hover:text-white ${
                (isScrolled || isDarkPage)
                  ? 'text-brand-charcoal' 
                  : 'text-white'
              }`}>
                RESERVAR AHORA
              </Link>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className={`text-[10px] font-bold tracking-widest ${getTextColor()}`}>ES</span>
                <svg className={`w-2.5 h-2.5 opacity-60 transition-transform group-hover:translate-y-0.5 ${getTextColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button 
              className="xl:hidden p-2 rounded-full glass"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={`w-6 h-6 ${getTextColor()}`} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-brand-charcoal flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-4xl font-serif text-white hover:text-brand-gold transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-4xl font-serif text-white hover:text-brand-gold transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-auto border-t border-white/10 pt-8 flex items-center justify-between">
              <span className="text-brand-stone text-sm tracking-widest uppercase">Toledo, España</span>
              <div className="flex items-center gap-4">
                <span className="text-white font-bold">ES</span>
                <span className="text-white/40">EN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
