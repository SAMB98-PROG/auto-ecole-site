import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { GALLERY } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export const Galerie: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'vehicles', label: 'Véhicules' },
    { id: 'classroom', label: 'Salles de cours' },
    { id: 'students', label: 'Élèves' },
    { id: 'exams', label: 'Examens' },
    { id: 'practice', label: 'Séances pratiques' },
    { id: 'awards', label: 'Remise des permis' },
  ];

  // Filter gallery items
  const filteredGallery = activeCategory === 'all'
    ? GALLERY
    : GALLERY.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="Notre Galerie"
        subtitle="Explorez l'univers de notre auto-école : cours théoriques, séances de conduite pratique et moments forts de réussite."
        badge="Instant Photos"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Category Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-gray-100 dark:border-neutral-800/80 bg-neutral-900"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left z-10">
                  <div className="p-2.5 rounded-full bg-brand-red text-white w-fit mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={18} />
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-brand-yellow text-xs font-semibold uppercase tracking-wider mt-1">
                    {item.category.toUpperCase()}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when category is empty */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-neutral-900 rounded-3xl border border-dashed border-gray-200 dark:border-neutral-800 mt-6">
            <Compass className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-spin-slow" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">Aucune photo disponible dans cette catégorie pour le moment.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-brand-black/95 z-50 flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-900 text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            {/* Left Control */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-brand-red transition-all cursor-pointer z-10"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Photo frame with caption */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain border border-neutral-800"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-bold text-base md:text-lg uppercase tracking-wide">
                  {filteredGallery[lightboxIndex].title}
                </h3>
                <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest mt-1">
                  Catégorie : {categories.find(c => c.id === filteredGallery[lightboxIndex].category)?.label || filteredGallery[lightboxIndex].category}
                </p>
              </div>
            </motion.div>

            {/* Right Control */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-brand-red transition-all cursor-pointer z-10"
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
