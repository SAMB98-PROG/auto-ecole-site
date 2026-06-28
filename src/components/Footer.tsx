import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Send, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md">
                ND
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm leading-none tracking-tighter uppercase text-white">
                  Ndiouck - Dickel
                </span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.18em] leading-none mt-0.5">
                  Auto-École Premium
                </span>
              </div>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Votre partenaire de confiance à Mbacké pour l'apprentissage de la conduite. Une pédagogie moderne et un accompagnement complet vers votre réussite.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-brand-red text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-brand-red text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-brand-red text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="Suivez-nous sur YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">
              Liens Rapides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block">
                  À Propos de nous
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block">
                  Nos Formations
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block">
                  Tarifs & Offres
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block">
                  Galerie Photos
                </Link>
              </li>
              <li>
                <Link to="/inscription" className="hover:text-brand-red hover:translate-x-1 transition-all inline-block text-brand-yellow font-medium">
                  S'inscrire en ligne
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">
              Nos Coordonnées
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-neutral-400 leading-relaxed">
                  Mbacké en face SEFACE,<br />
                  Département de Mbacké,<br />
                  Région de Diourbel, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red w-4 h-4 shrink-0" />
                <a href="tel:+221775191212" className="text-neutral-400 hover:text-white transition-colors">
                  +221 77 519 12 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red w-4 h-4 shrink-0" />
                <a href="mailto:contact@ndiouck-dickel.sn" className="text-neutral-400 hover:text-white transition-colors break-all">
                  contact@ndiouck-dickel.sn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Workhours */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">
              Horaires d'Ouverture
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Clock className="text-brand-yellow w-4.5 h-4.5" />
                <span>Lundi - Vendredi : 8h00 - 19h00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="text-brand-yellow w-4.5 h-4.5" />
                <span>Samedi : 8h00 - 16h00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="text-brand-red w-4.5 h-4.5" />
                <span>Dimanche : Fermé</span>
              </li>
            </ul>

            <div className="pt-2">
              <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-2">Newsletter</h4>
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-2.5 rounded-lg text-xs">
                  <CheckCircle size={14} className="shrink-0" />
                  <span>Inscription réussie ! Merci.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse email"
                    className="bg-neutral-900 border border-neutral-800 text-white text-xs rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-brand-red"
                  />
                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red-dark text-white p-2 rounded-lg transition-colors cursor-pointer"
                    aria-label="S'abonner"
                  >
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {currentYear} Auto-École Ndiouck - Dickel. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
