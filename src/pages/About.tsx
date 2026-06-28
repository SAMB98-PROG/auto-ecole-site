import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TEAM } from '../data';
import { motion } from 'motion/react';
import { History, Target, Compass, Sparkles, Award } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      id: 'history',
      title: 'Notre Histoire',
      description: 'Fondée à Mbacké avec l\'ambition d\'élever les standards de la formation routière, Auto-École Ndiouck - Dickel s\'est imposée en quelques années comme la référence absolue de la région de Diourbel grâce à son taux de réussite record et son équipe d\'enseignants certifiés.',
      icon: <History size={24} className="text-brand-red" />,
    },
    {
      id: 'mission',
      title: 'Notre Mission',
      description: 'Former des conducteurs compétents, courtois et pleinement conscients des enjeux de sécurité routière. Notre but va au-delà de l\'obtention du permis : nous préparons nos élèves à faire face sereinement à toutes les conditions de circulation au Sénégal.',
      icon: <Target size={24} className="text-brand-yellow" />,
    },
    {
      id: 'vision',
      title: 'Notre Vision',
      description: 'Devenir l\'auto-école la plus moderne et innovante du Sénégal en intégrant des outils pédagogiques interactifs et des cours adaptés à la transition écologique des transports.',
      icon: <Compass size={24} className="text-brand-red" />,
    },
    {
      id: 'values',
      title: 'Nos Valeurs',
      description: 'Patience absolue, rigueur pédagogique, transparence des tarifs et accompagnement bienveillant guident chacune de nos leçons de code ou de conduite.',
      icon: <Sparkles size={24} className="text-brand-yellow" />,
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="À Propos de Nous"
        subtitle="Découvrez notre histoire, nos valeurs d'excellence et l'équipe de moniteurs dévoués à votre réussite routière."
        badge="Notre Auto-École"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* 1. History & Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((val, index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col sm:flex-row gap-5 items-start card-hover"
            >
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-neutral-950 shrink-0 border border-gray-100 dark:border-neutral-800">
                {val.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Team section */}
        <div id="notre-equipe">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest">Équipe Pédagogique</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 uppercase tracking-tight">
              Nos Moniteurs d'État
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Des professionnels agréés par le Ministère des Transports, patients et passionnés par la sécurité routière.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-md transition-all duration-300 group text-center"
              >
                {/* Photo frame with zoom effect */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating experience tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 text-brand-yellow text-xs font-bold py-1.5 rounded-lg border border-neutral-800">
                    {member.experience}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-brand-red text-xs font-bold tracking-wider uppercase mt-1">
                    {member.role}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-neutral-800/60 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Spécialité :</p>
                    <p className="mt-1">{member.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
