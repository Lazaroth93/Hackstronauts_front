import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlanetIntro, Hero } from './components/sections';
import { Navbar } from './components/navigation/NavbarClean';
import { SimulationProvider } from './contexts/SimulationContext';
import './styles/monitor-styles.css';

const AppContent: React.FC = () => {
  return <Hero />;
};

export default function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    // Iniciar transición de fade cruzado
    setShowMainContent(true);
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-black">
      {/* Fondo de estrellas fijo para evitar pantalla blanca */}
      <div className="fixed inset-0 bg-black z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal - siempre renderizado */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: showMainContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ zIndex: showMainContent ? 20 : 10 }}
      >
        <SimulationProvider>
          <AppContent />
        </SimulationProvider>
      </motion.div>

      {/* Navbar - aparece solo después de la intro */}
      {showMainContent && <Navbar />}

      {/* Intro con planeta - fade out cuando se completa */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: showMainContent ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ zIndex: showMainContent ? 10 : 20 }}
      >
        <PlanetIntro onComplete={handleIntroComplete} />
      </motion.div>
    </div>
  );
}