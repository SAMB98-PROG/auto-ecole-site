import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Menu, X, Sun, Moon, PhoneCall } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Formations', path: '/formations' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5 dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md shadow-brand-red/10 transition-transform duration-300 group-hover:scale-105">
              ND
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm leading-none tracking-tighter uppercase text-brand-black dark:text-white">
                Ndiouck - Dickel
              </span>
              <span className="text-[9px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.18em] leading-none mt-0.5">
                Auto-École Premium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-brand-red bg-red-50 dark:bg-neutral-900 font-semibold'
                      : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 dark:text-gray-300 dark:hover:text-brand-red dark:hover:bg-neutral-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 transition-all duration-200 cursor-pointer focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Inscription CTA */}
            <Link
              to="/inscription"
              className="bg-brand-red text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black dark:hover:bg-neutral-900 transition-all shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40"
            >
              S'INSCRIRE
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-gray-100 dark:border-neutral-900 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-brand-red bg-red-50 dark:bg-neutral-900 font-semibold'
                        : 'text-gray-800 hover:text-brand-red hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-neutral-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-gray-100 dark:border-neutral-900 flex flex-col gap-3">
                <Link
                  to="/inscription"
                  className="w-full text-center py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold transition-colors shadow-md"
                >
                  S'inscrire en ligne
                </Link>
                <a
                  href="tel:+221775191212"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-gray-800 dark:text-gray-200 font-medium transition-colors border border-gray-200 dark:border-neutral-800"
                >
                  <PhoneCall size={18} />
                  Appeler l'auto-école
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
