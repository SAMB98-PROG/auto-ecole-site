import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass } from 'lucide-react';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="app-loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Spinning Steering Wheel Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="text-brand-red mb-6"
            >
              <Compass size={64} strokeWidth={1.5} />
            </motion.div>

            {/* Title / Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white text-2xl font-bold tracking-wider uppercase text-center"
            >
              Auto-École <span className="text-brand-yellow">Ndiouck - Dickel</span>
            </motion.h1>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-xs mt-2 font-mono uppercase tracking-widest"
            >
              Mbacké, Sénégal
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-neutral-800 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-brand-red to-brand-yellow"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
