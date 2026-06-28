import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FORMATIONS } from '../data';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, User, HelpCircle, ArrowRight } from 'lucide-react';

export const Formations: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Nos Formations"
        subtitle="Découvrez nos cursus de conduite théoriques et pratiques de haute qualité pour obtenir votre permis en toute sécurité."
        badge="Offres & Cursus"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Formations list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FORMATIONS.map((f, index) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-neutral-800 flex flex-col justify-between h-full group card-hover"
            >
              <div>
                {/* Thumbnail */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 py-1 px-3 bg-brand-yellow text-brand-black text-xs font-bold uppercase rounded shadow-sm">
                    {f.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide group-hover:text-brand-red transition-colors">
                    {f.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2.5 leading-relaxed">
                    {f.description}
                  </p>

                  {/* Requirements details */}
                  <div className="mt-6 pt-5 border-t border-gray-100 dark:border-neutral-800">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red dark:text-brand-yellow mb-3 flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      Conditions de candidature :
                    </h4>
                    <ul className="space-y-2">
                      {f.conditions.map((cond, condIdx) => (
                        <li key={condIdx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5" />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom footer with CTA */}
              <div className="p-6 bg-gray-50/50 dark:bg-neutral-950/40 border-t border-gray-100 dark:border-neutral-800/80 mt-auto flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={15} className="text-brand-yellow" />
                    <span>Durée : <strong className="text-gray-800 dark:text-white font-medium">{f.duration}</strong></span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-medium">Tarif formation</p>
                    <p className="text-lg font-bold text-brand-red">
                      {f.price.toLocaleString()} <span className="text-xs">FCFA</span>
                    </p>
                  </div>
                </div>

                <Link
                  to={`/inscription?formation=${f.id}`}
                  className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-center text-sm shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  S'inscrire à cette formation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative alert box */}
        <div className="mt-16 p-6 rounded-2xl bg-brand-red/5 border border-brand-red/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0">
              <HelpCircle size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Des questions sur l'obtention des permis ?</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-2xl leading-relaxed">
                Les conditions de candidature sont fixées en accord avec la réglementation nationale de la sécurité routière au Sénégal. Des facilités de paiement peuvent être négociées lors de votre entretien à notre bureau à Mbacké.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-brand-black dark:bg-white text-white dark:text-brand-black hover:bg-neutral-900 dark:hover:bg-neutral-100 text-xs font-bold rounded-lg whitespace-nowrap tracking-wide shrink-0 transition-colors"
          >
            Poser une question
          </Link>
        </div>

      </div>
    </div>
  );
};
