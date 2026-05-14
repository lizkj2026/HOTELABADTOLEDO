/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

export default function BookingBar() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
  const [guests, setGuests] = useState(2);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleSearch = () => {
    navigate(`/habitaciones?searching=true&in=${format(checkIn, 'yyyy-MM-dd')}&out=${format(checkOut, 'yyyy-MM-dd')}&guests=${guests}`);
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="glass text-brand-charcoal rounded-[4px] p-1.5 flex items-center justify-between shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-black/5 relative">
        <div className="hidden lg:flex items-center gap-1">
          {/* Check-in */}
          <div className="flex flex-col px-10 border-r border-black/5 cursor-pointer hover:bg-black/[0.02] py-4 transition-all relative group">
            <span className="text-[8px] uppercase tracking-[0.3em] text-brand-stone mb-1 font-bold group-hover:text-brand-gold">Entrada</span>
            <div className="flex items-center gap-2 relative">
              <CalendarIcon className="w-3 h-3 text-brand-gold" />
              <DatePicker
                selected={checkIn}
                onChange={(date) => date && setCheckIn(date)}
                minDate={new Date()}
                dateFormat="dd . MM . yy"
                className="text-xs font-bold tracking-widest uppercase bg-transparent outline-none cursor-pointer w-32"
                popperPlacement="top-start"
              />
            </div>
          </div>
          
          {/* Check-out */}
          <div className="flex flex-col px-10 border-r border-black/5 cursor-pointer hover:bg-black/[0.02] py-4 transition-all relative group">
            <span className="text-[8px] uppercase tracking-[0.3em] text-brand-stone mb-1 font-bold group-hover:text-brand-gold">Salida</span>
            <div className="flex items-center gap-2 relative">
              <CalendarIcon className="w-3 h-3 text-brand-gold" />
              <DatePicker
                selected={checkOut}
                onChange={(date) => date && setCheckOut(date)}
                minDate={checkIn}
                dateFormat="dd . MM . yy"
                className="text-xs font-bold tracking-widest uppercase bg-transparent outline-none cursor-pointer w-32"
                popperPlacement="top-start"
              />
            </div>
          </div>
          
          {/* Guests */}
          <div 
            className="flex flex-col px-10 cursor-pointer hover:bg-black/[0.02] py-4 transition-all relative group"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            <span className="text-[8px] uppercase tracking-[0.3em] text-brand-stone mb-1 font-bold group-hover:text-brand-gold">Huéspedes</span>
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 text-brand-gold" />
              <span className="text-xs font-bold tracking-widest uppercase">{guests.toString().padStart(2, '0')} {guests === 1 ? 'Adulto' : 'Adultos'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${showGuestDropdown ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {showGuestDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-full mb-4 left-0 w-full bg-white shadow-2xl rounded-lg p-4 border border-black/5 flex flex-col gap-2 z-50 text-center"
                >
                  <span className="text-[8px] uppercase tracking-widest font-bold text-brand-stone mb-2">Seleccionar</span>
                  {[1, 2, 3, 4].map((num) => (
                    <button 
                      key={num}
                      onClick={(e) => {
                        e.stopPropagation();
                        setGuests(num);
                        setShowGuestDropdown(false);
                      }}
                      className={`py-2 text-xs font-bold hover:bg-brand-cream transition-colors rounded ${guests === num ? 'text-brand-gold' : 'text-brand-stone'}`}
                    >
                      {num} {num === 1 ? 'Persona' : 'Personas'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex-1 lg:hidden pl-6">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic font-serif">Reserva Directa</span>
        </div>

        <button 
          id="book-now-button"
          onClick={handleSearch}
          className="bg-brand-charcoal hover:bg-brand-gold text-white px-12 py-5 rounded-[2px] font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-700 flex items-center gap-4 group"
        >
          DISPONIBILIDAD
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
