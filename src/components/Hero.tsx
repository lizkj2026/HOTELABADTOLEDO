/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-charcoal">
        <img 
          src="https://i.postimg.cc/fL81TQc0/Chat-GPT-Image-14-may-2026-12-18-58.png" 
          alt="Hotel Abad Toledo Hero" 
          className="w-full h-full object-cover opacity-90 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 text-center px-8 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Content removed to maintain visibility of the background image as per user request */}
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
        >
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
