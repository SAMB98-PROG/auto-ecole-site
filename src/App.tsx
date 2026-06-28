import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Page Imports
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Formations } from './pages/Formations';
import { Tarifs } from './pages/Tarifs';
import { Galerie } from './pages/Galerie';
import { Contact } from './pages/Contact';
import { Inscription } from './pages/Inscription';

// Reusable scroll to top helper on route change
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        {/* Scroll back to top on every page change */}
        <ScrollToTopOnRouteChange />

        {/* 1. Custom Initial Page Loader */}
        <Loader />

        {/* 2. Top Scroll reading progress bar */}
        <ScrollProgress />

        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-950 text-gray-950 dark:text-gray-100 transition-colors duration-300">
          {/* 3. Sticky Glassmorphism Header */}
          <Navbar />

          {/* 4. Dynamic Pages content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/inscription" element={<Inscription />} />
              
              {/* Fallback routing */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* 5. Complete Footer */}
          <Footer />

          {/* 6. Floating CTA actions */}
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
