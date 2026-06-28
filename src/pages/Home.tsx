import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BENEFITS, STATS, FORMATIONS, TESTIMONIALS, HERO_IMAGE, CLASSROOM_IMAGE } from '../data';
import { ArrowRight, Star, Quote, ShieldCheck, Award, MapPin, Compass } from 'lucide-react';

export const Home: React.FC = () => {
  // Safe Icon renderer
  const renderIcon = (iconName: string, className = 'w-6 h-6 text-brand-red') => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Compass className={className} />;
  };

  // Only show Permis categories on Home
  const permisFormations = FORMATIONS.filter((f) => f.category === 'permis');

  return (
    <div className="pt-20">
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-[#111111] overflow-hidden py-16">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Auto-École Ndiouck - Dickel"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10 dark:from-neutral-950" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            {/* Senegal Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse inline-block" />
              Mbacké - Sénégal
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.9] uppercase"
            >
              Apprenez à conduire <br />
              <span className="text-brand-red">en toute confiance.</span>
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-sm mt-6 max-w-md leading-relaxed"
            >
              Formation d'excellence avec des moniteurs certifiés d'État pour une sécurité routière maîtrisée et l'obtention de vos permis de conduire A, B et C en face SEFACE à Mbacké.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            >
              <Link
                to="/inscription"
                className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-brand-red/20 text-center"
              >
                Commencer
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Car Outline Graphic from Sleek Interface Theme */}
        <div className="absolute bottom-12 right-12 opacity-20 pointer-events-none hidden lg:block">
          <svg width="240" height="80" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60C20 54.4772 24.4772 50 30 50H210C215.523 50 220 54.4772 220 60V70H20V60Z" stroke="white" stroke-width="2"/>
            <path d="M40 50L60 20H160L180 50" stroke="white" stroke-width="2"/>
            <circle cx="60" cy="65" r="10" stroke="white" stroke-width="2"/>
            <circle cx="180" cy="65" r="10" stroke="white" stroke-width="2"/>
          </svg>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 opacity-60">
          <span className="text-white text-[10px] tracking-widest uppercase font-mono">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-4 bg-brand-yellow rounded-full"
          />
        </div>
      </section>

      {/* 2. Presentation of the Auto-École */}
      <section id="presentation" className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Photo & Details Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-red/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-yellow/10 rounded-2xl -z-10" />
              <img
                src={CLASSROOM_IMAGE}
                alt="Cours théoriques et moniteurs Auto-École Ndiouck - Dickel"
                className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
                referrerPolicy="no-referrer"
              />
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 right-6 bg-brand-black text-white p-4 rounded-xl border border-neutral-800 shadow-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-red text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Agrément d'État</p>
                  <p className="text-sm font-bold text-brand-yellow">100% Conforme</p>
                </div>
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Qui Sommes-Nous ?</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight uppercase leading-tight">
                L'excellence de la conduite <br />
                <span className="text-brand-red">à Mbacké</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                Située idéalement **en face SEFACE dans le Département de Mbacké**, l'Auto-École **Ndiouck - Dickel** est le choix privilégié des futurs conducteurs de la région de Diourbel. Nous offrons des formations de haut niveau axées sur la sécurité routière, le respect du code et l'assurance au volant.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                Que vous soyez un jeune conducteur pour un **Permis B**, un passionné de moto pour un **Permis A**, ou que vous cherchiez une qualification professionnelle avec le **Permis C**, nos moniteurs d'État expérimentés s'engagent à vous accompagner pas à pas. Nous mettons l'accent sur une pédagogie moderne qui respecte le rythme de chaque élève.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <Award className="text-brand-yellow w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Label Qualité Certifié</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="text-brand-red w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Face SEFACE, Mbacké</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-bold transition-colors group cursor-pointer"
                >
                  Découvrir notre histoire et notre équipe
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Advantages / Benefits Section */}
      <section id="avantages" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Nos Atouts</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 uppercase tracking-tight">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-base">
              Nous réunissons les meilleures conditions pour faire de vous un conducteur responsable, sûr de lui et respectueux des autres usagers de la route.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-col items-center text-center h-full hover:border-brand-red/40 transition-colors"
              >
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm flex items-center justify-center mb-4 text-brand-red border border-gray-50 dark:border-neutral-700/50">
                  {renderIcon(benefit.iconName, 'w-6 h-6')}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Nos Permis Section */}
      <section id="permis" className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Nos Offres Phares</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 uppercase tracking-tight">
              Catégories de Permis
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-base">
              Des parcours d'apprentissage complets et professionnels pour chaque type de véhicule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {permisFormations.map((permis, index) => {
              // Extract letter for the badge: A, B or C
              const permitLetter = permis.id.includes('moto') ? 'A' : permis.id.includes('tourisme') ? 'B' : 'C';

              return (
                <motion.div
                  key={permis.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 dark:border-neutral-900/80 flex flex-col h-full group transition-all"
                >
                  {/* Image Section */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={permis.image}
                      alt={permis.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Sleek Theme Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#111111] dark:bg-neutral-900 text-white rounded-xl flex items-center justify-center font-black text-xl transition-colors duration-300 group-hover:bg-brand-red border border-white/10">
                      {permitLetter}
                    </div>

                    <span className="absolute bottom-4 right-4 text-white text-base font-black bg-brand-red px-4 py-1.5 rounded-full shadow-lg shadow-brand-red/20">
                      {permis.price.toLocaleString()} FCFA
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                        {permis.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed">
                        {permis.description}
                      </p>
                      
                      {/* Key points */}
                      <div className="mt-4 space-y-2">
                        <p className="text-[10px] font-black text-brand-red dark:text-brand-yellow uppercase tracking-widest">Conditions :</p>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                          {permis.conditions.slice(0, 3).map((cond, cIdx) => (
                            <li key={cIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-[11px]">{cond}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-neutral-900 mt-6 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Durée : <strong className="text-gray-900 dark:text-white font-black">{permis.duration}</strong>
                      </span>
                      <Link
                        to="/inscription"
                        className="inline-flex items-center gap-1 text-xs font-black uppercase text-brand-red hover:text-brand-red-dark transition-colors tracking-widest"
                      >
                        S'inscrire →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Animated Stats Section */}
      <section id="statistiques" className="py-20 bg-brand-black text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-yellow font-semibold text-xs tracking-widest uppercase">Notre Bilan</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase mt-2">
              L'Auto-École en quelques chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800"
              >
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red w-fit mx-auto mb-4">
                  {renderIcon(stat.iconName, 'w-6 h-6 text-brand-yellow')}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                  <span className="text-brand-red">{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="temoignages" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Témoignages</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 uppercase tracking-tight">
              Ce que disent nos élèves
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-base">
              La réussite de nos élèves est notre plus grande fierté. Découvrez leurs retours d'expérience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 flex flex-col justify-between h-full relative"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 text-brand-red/10">
                  <Quote size={40} />
                </div>

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-brand-yellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200/50 dark:border-neutral-800/50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-brand-red/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Gallery Peek Section */}
      <section id="galerie-peek" className="py-16 bg-gray-50 dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
            Découvrez l'ambiance de notre Auto-École
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            Explorez notre flotte de véhicules récents, notre salle de code moderne et nos remises officielles de permis de conduire.
          </p>
          <div className="mt-8">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-black hover:bg-neutral-900 text-white dark:bg-white dark:text-brand-black dark:hover:bg-neutral-100 text-sm font-bold tracking-wide rounded-xl shadow transition-colors cursor-pointer"
            >
              Voir la galerie photos complète
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
