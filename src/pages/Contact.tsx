import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useForm } from 'react-hook-form';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  licenseCategory: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Standard react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Contact form data:', data);
    
    // Save contact query to localStorage so we can simulate actual query history if needed!
    const existingQueries = JSON.parse(localStorage.getItem('contact_queries') || '[]');
    existingQueries.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('contact_queries', JSON.stringify(existingQueries));

    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="Contactez-Nous"
        subtitle="Une question ? Un besoin d'information supplémentaire ? Nos conseillers vous répondent dans les plus brefs délais."
        badge="Contact & Plan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 1. Contact Details & Maps (Lg: 5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest">Coordonnées</span>
              <h2 className="text-2xl font-bold uppercase text-gray-900 dark:text-white mt-1">
                Auto-École Ndiouck - Dickel
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed">
                N'hésitez pas à nous rendre visite directement à notre bureau d'accueil ou à nous écrire par email / WhatsApp.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0 h-fit">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Adresse Complète</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Mbacké en face SEFACE, Département de Mbacké, Région de Diourbel, Sénégal
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div className="p-3 bg-brand-yellow/15 text-brand-yellow rounded-xl shrink-0 h-fit">
                  <Phone size={22} className="text-brand-yellow-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Téléphone & WhatsApp</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Appels : <a href="tel:+221775191212" className="font-semibold text-brand-red hover:underline">+221 77 519 12 12</a>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    WhatsApp : <a href="https://wa.me/221775191212" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-500 hover:underline">+221 77 519 12 12</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0 h-fit">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Messagerie</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <a href="mailto:contact@ndiouck-dickel.sn" className="hover:underline text-brand-red font-medium">
                      contact@ndiouck-dickel.sn
                    </a>
                  </p>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div className="p-3 bg-brand-yellow/15 text-brand-yellow rounded-xl shrink-0 h-fit">
                  <Clock size={22} className="text-brand-yellow-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Horaires de Bureau</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Lundi - Vendredi : 8h00 - 19h00
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Samedi : 8h00 - 16h00
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 text-brand-red font-medium">
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Contact Form & Maps Integration (Lg: 7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Form card */}
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-1">Formulaire</span>
              <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white mb-6">
                Envoyer un message
              </h3>

              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full mb-4">
                    <CheckCircle size={44} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase">Message envoyé avec succès !</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
                    Merci d'avoir contacté l'Auto-École Ndiouck - Dickel. Un conseiller pédagogique vous répondra dans les plus brefs délais par téléphone ou par email.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-brand-red text-white text-xs font-bold uppercase rounded-xl hover:bg-brand-red-dark transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nom */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Nom <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Votre nom est requis' })}
                        placeholder="Ex: Diop"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                      />
                      {errors.lastName && (
                        <p className="text-brand-red text-xs mt-1 font-semibold">{errors.lastName.message}</p>
                      )}
                    </div>

                    {/* Prénom */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Prénom <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'Votre prénom est requis' })}
                        placeholder="Ex: Fatou"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                      />
                      {errors.firstName && (
                        <p className="text-brand-red text-xs mt-1 font-semibold">{errors.firstName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Téléphone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Téléphone <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register('phone', {
                          required: 'Votre numéro de téléphone est requis',
                          pattern: {
                            value: /^(77|78|76|70|33)[0-9]{7}$/,
                            message: 'Veuillez saisir un numéro sénégalais valide (ex: 771234567)',
                          },
                        })}
                        placeholder="Ex: 771234567"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                      />
                      {errors.phone && (
                        <p className="text-brand-red text-xs mt-1 font-semibold">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Votre adresse email est requise',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Veuillez saisir une adresse email valide',
                          },
                        })}
                        placeholder="Ex: fatou@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                      />
                      {errors.email && (
                        <p className="text-brand-red text-xs mt-1 font-semibold">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Catégorie de Permis */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Catégorie de Permis / Formation souhaitée
                    </label>
                    <select
                      {...register('licenseCategory')}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-800 dark:text-gray-200"
                    >
                      <option value="Non spécifié">-- Choisir une formation --</option>
                      <option value="Permis A">Permis A (Moto & Scooter)</option>
                      <option value="Permis B">Permis B (Véhicules Légers)</option>
                      <option value="Permis C">Permis C (Poids Lourds)</option>
                      <option value="Cours de Code">Cours de Code de la route</option>
                      <option value="Perfectionnement">Séance de Perfectionnement</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Votre Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      rows={4}
                      {...register('message', { required: 'Votre message est requis' })}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.message && (
                      <p className="text-brand-red text-xs mt-1 font-semibold">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-dark disabled:bg-neutral-400 text-white font-bold text-center text-sm shadow transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps / OSM Map Iframe container */}
            <div className="bg-white dark:bg-neutral-900 p-4 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden h-80 relative">
              {/* Custom High-Quality Google Map embed of Mbacké, Senegal */}
              <iframe
                title="Localisation Auto-École Ndiouck - Dickel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.656515865516!2d-15.91263012488827!3d14.816049985702213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xedfe0dfafcf2767%3A0xe949a2a786221c54!2sMbacke%2C%20Senegal!5e0!3m2!1sen!2s!4v1782674200000!5m2!1sen!2s"
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
