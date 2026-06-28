import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FORMATIONS } from '../data';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CreditCard, Calendar, Check, Star, ShieldCheck } from 'lucide-react';

export const Tarifs: React.FC = () => {
  // Let's design some extra promo packs as recommended high-value offers!
  const promoPacks = [
    {
      id: 'pack-excellence',
      title: 'Pack Excellence Conduite',
      badge: 'Meilleure Vente',
      description: 'Permis B (Voiture) + Accès Illimité au Code de la Route + 5 Heures de Perfectionnement offertes.',
      price: 155000,
      originalPrice: 175000,
      savings: '20 000 FCFA d\'économie',
      duration: '6 à 8 semaines',
      features: [
        'Accès illimité à la salle de code',
        '30 heures de conduite pratique',
        'Accompagnement personnalisé à l\'examen',
        'Représentation gratuite au second essai',
        'Support d\'apprentissage numérique inclus',
      ],
      isPopular: true,
    },
    {
      id: 'pack-pro',
      title: 'Pack Double Permis A & B',
      badge: 'Spécial Jeunes',
      description: 'Obtenez à la fois le Permis Moto (A) et le Permis Voiture (B). Idéal pour une autonomie totale.',
      price: 185000,
      originalPrice: 205000,
      savings: '20 000 FCFA d\'économie',
      duration: '8 à 12 semaines',
      features: [
        'Code de la route inclus',
        'Formation moto pratique (Permis A)',
        'Formation voiture pratique (Permis B)',
        'Planning d\'apprentissage synchronisé',
        'Facilités de paiement en 4 fois',
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Tarifs et Forfaits"
        subtitle="Consultez nos grilles tarifaires transparentes. Aucun coût caché. Des facilités de paiement adaptées à votre budget."
        badge="Grille des Prix"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* 1. Promo Packs Section (Best Offers Highlighted) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Offres Spéciales</span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1 uppercase tracking-tight">
              Nos Forfaits Tout-Inclus
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Profitez de réductions exceptionnelles en choisissant nos formules groupées et complètes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {promoPacks.map((pack) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full border ${
                  pack.isPopular
                    ? 'bg-brand-black text-white border-neutral-800 shadow-xl scale-102 ring-2 ring-brand-red'
                    : 'bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-100 dark:border-neutral-800 shadow-sm'
                }`}
              >
                {/* Popular Ribbon */}
                {pack.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                    pack.isPopular ? 'bg-brand-red text-white' : 'bg-brand-yellow/20 text-brand-yellow'
                  }`}>
                    {pack.badge}
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-bold uppercase tracking-wide ${pack.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {pack.title}
                  </h3>
                  <p className="text-xs text-brand-yellow font-medium mt-1 font-mono uppercase">{pack.savings}</p>
                  <p className={`text-sm mt-3 leading-relaxed ${pack.isPopular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                    {pack.description}
                  </p>

                  {/* Pricing block */}
                  <div className="my-6">
                    <span className="text-xs line-through text-gray-500 block">
                      {pack.originalPrice.toLocaleString()} FCFA
                    </span>
                    <span className="text-3xl font-extrabold text-brand-red dark:text-brand-yellow">
                      {pack.price.toLocaleString()}
                    </span>
                    <span className={`text-xs ml-1 ${pack.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                      FCFA complet
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 border-t border-neutral-800/10 dark:border-neutral-800/50 pt-5 mt-5">
                    {pack.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check size={14} className="text-brand-red shrink-0 mt-0.5" />
                        <span className={pack.isPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to={`/inscription?pack=${pack.id}`}
                    className={`w-full block text-center py-3.5 rounded-2xl font-bold tracking-wide transition-all ${
                      pack.isPopular
                        ? 'bg-brand-red hover:bg-brand-red-dark text-white shadow-lg shadow-brand-red/10'
                        : 'bg-brand-black dark:bg-white dark:text-brand-black hover:bg-neutral-800 text-white'
                    }`}
                  >
                    Réserver ce forfait
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Detailed Tarifs Table */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Grille Tarifaire</span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1 uppercase tracking-tight">
              Toutes nos formules détaillées
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Comparez les tarifs de nos cours unitaires et de nos parcours de permis réglementés.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-neutral-950 border-b border-gray-100 dark:border-neutral-800/80">
                  <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Formation</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Description</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Durée estimée</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Tarif standard</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                {FORMATIONS.map((f) => (
                  <tr key={f.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-950/20 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wide">
                      {f.title}
                    </td>
                    <td className="py-5 px-6 text-xs text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                      {f.description}
                    </td>
                    <td className="py-5 px-6 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {f.duration}
                    </td>
                    <td className="py-5 px-6 text-base font-extrabold text-brand-red dark:text-brand-yellow">
                      {f.price.toLocaleString()} FCFA
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link
                        to={`/inscription?formation=${f.id}`}
                        className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider bg-brand-red hover:bg-brand-red-dark text-white rounded-lg transition-colors cursor-pointer"
                      >
                        Réserver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card-style Table Alternative */}
          <div className="grid grid-cols-1 md:hidden gap-6">
            {FORMATIONS.map((f) => (
              <div
                key={f.id}
                className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                      {f.title}
                    </h3>
                    <span className="text-xs bg-brand-yellow/15 text-brand-yellow-dark px-2 py-1 rounded font-bold uppercase">
                      {f.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {f.description}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-4">
                    Durée : <strong className="font-semibold">{f.duration}</strong>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Tarif</span>
                    <span className="text-lg font-bold text-brand-red dark:text-brand-yellow">
                      {f.price.toLocaleString()} FCFA
                    </span>
                  </div>
                  <Link
                    to={`/inscription?formation=${f.id}`}
                    className="px-4 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment options banner */}
        <div className="mt-16 bg-brand-black text-white rounded-3xl p-8 relative overflow-hidden border border-neutral-800">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-2xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-yellow/15 text-brand-yellow rounded-2xl shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide">Facilités de Paiement</h3>
                <p className="text-sm text-gray-400 mt-1 max-w-2xl leading-relaxed">
                  Pour que chacun puisse se former à son rythme, nous proposons un échelonnement de paiement en 2, 3 ou 4 fois sans aucun frais supplémentaire. Renseignez-vous auprès de notre bureau d'accueil.
                </p>
              </div>
            </div>
            <a
              href="tel:+221775191212"
              className="px-6 py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold text-sm tracking-wide rounded-xl shrink-0 transition-colors cursor-pointer"
            >
              Nous appeler : +221 77 519 12 12
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
