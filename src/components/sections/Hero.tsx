import React from 'react';
import { motion } from 'motion/react';
import { AnimatedBackground } from '../3d/AnimatedBackground';
import NASAScientistSelector from '../features/neo/NASAScientistSelector';
import { NEOList } from '../features/neo/NEOList';
import AsteroidSimulatorSection from '../simulation/AsteroidSimulatorSection';
import { ResourcesSection } from '../Resources/ResourcesSection';
import { MonitorAgentes } from '../monitoring/MonitorAgentes';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fondo animado con partículas */}
      <AnimatedBackground />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Sección 1: Selección de Científicos NASA */}
        <section className="relative w-full min-h-screen bg-black py-8 lg:py-20 ">
          <div>
            <motion.div 
              className="absolute top-16 left-0 right-0 text-center z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-xl md:text-xl lg:text-5xl font-black lg:mb-6 tracking-wider" style={{ fontFamily: 'Orbitron, monospace', marginTop: '20px' }}>
                <span className="text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.8)]" style={{ textShadow: '0 0 20px rgba(52,211,153,0.8), 0 0 40px rgba(52,211,153,0.6)' }}>
                  OUR SCIENTISTS
                </span>
                <br />
                <span className="text-orange-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" style={{ textShadow: '0 0 20px rgba(249,115,22,0.8), 0 0 40px rgba(249,115,22,0.6)' }}>
                  AGENTS
                </span>
              </h1>
              <div className="flex justify-center items-center gap-6">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.9)]"></div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>
                <span className="text-gray-300 opacity-50">
                  Elite AI-POWERED Research Team
                </span>
                <br />
                <span className="text-gray-300 opacity-50">
                  Asteroid Detection & Planetary Defense
                </span>
              </p>
            </motion.div>
            <NASAScientistSelector />
          </div>
        </section>
        
        {/* Sección 2: Visualización de Meteoritos/Asteroides */}
        <section id="neo-list" className="relative w-full min-h-screen overflow-hidden bg-black py-8 lg:py-20">
          <div>
            <motion.div 
              className="text-center mb-8 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

            </motion.div>
            <NEOList />
          </div>
        </section>
        
        {/* Sección 3: Simulación 3D */}
        <section 
          id="simulation"
          className="relative w-full min-h-screen overflow-hidden bg-black py-8 lg:py-20"
        >
          <div>
            <motion.div 
              className="text-center mb-8 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              3D Impact Simulation
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Visualize asteroid impacts in real time with advanced 3D technology
              </p>
            </motion.div>
            <AsteroidSimulatorSection />
          </div>
        </section>
        
        {/* Sección 4: Monitoreo de Agentes */}
        <section 
          id="monitor"
          className="relative w-full min-h-screen overflow-hidden bg-black py-8 lg:py-20"
        >
          <div>
            <motion.div 
              className="text-center mb-8 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI Agents Monitoring
                </span>
              </h2>

            </motion.div>
            <MonitorAgentes />
          </div>
        </section>
        
        {/* Sección 5: Resources & Blog */}
        <section 
          id="resources"
          className="relative w-full min-h-screen overflow-hidden bg-black"
        >
          <ResourcesSection />
        </section>
        
        
        
        {/* Footer minimalista */}
        <footer className="relative py-16 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Logo y descripción */}
              <div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-white mb-4">
                  NASA-LLM-GRAPH
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Exploring the universe through artificial intelligence and 
                  knowledge graphs.
                </p>
              </div>
              
              {/* Links de navegación */}
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                  Navigation
                </div>
                <div className="space-y-2">
                  {['Data', 'Models', 'Documentation', 'API'].map((link) => (
                    <a key={link} href="#" 
                       className="block text-sm text-white/60 hover:text-white/80 
                                  transition-colors duration-300">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Contacto */}
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                  Contact
                </div>
                <div className="space-y-2">
                  {['Investigation', 'Support', 'Collaborations'].map((link) => (
                    <a key={link} href="#" 
                       className="block text-sm text-white/60 hover:text-white/80 
                                  transition-colors duration-300">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                © 2025 NASA-LLM-Graph — Exploring the universe with AI
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
