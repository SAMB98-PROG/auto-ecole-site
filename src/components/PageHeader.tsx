import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  backgroundImage = 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=80',
}) => {
  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-brand-black mb-12">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-brand-black/60 to-brand-black z-10 dark:from-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest text-black bg-brand-yellow rounded-full mb-3"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base mt-3 max-w-2xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Aesthetic bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-50 dark:bg-neutral-950 z-30 rounded-t-2xl" />
    </div>
  );
};
