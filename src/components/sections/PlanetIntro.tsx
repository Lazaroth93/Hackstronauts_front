import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface PlanetIntroProps {
  onComplete: () => void;
}

export function PlanetIntro({ onComplete }: PlanetIntroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Scroll personalizado que no mueve la página
  useEffect(() => {
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      if (isComplete) return;
      
      e.preventDefault();
      
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(prev => {
            const newScroll = Math.max(0, Math.min(1000, prev + e.deltaY * 2));
            
            // Cuando el scroll llega al máximo, completamos la intro
            if (newScroll >= 999 && !isComplete) {
              setIsComplete(true);
              // Transición completamente instantánea
              onComplete();
            }
            
            return newScroll;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    if (!isComplete) {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto';
    };
  }, [isComplete, onComplete]);

  // Calcular valores actuales basados en el scroll
  const currentScale = Math.max(0, 1 - (scrollY / 1000));
  const currentOpacity = scrollY > 800 ? Math.max(0, 1 - ((scrollY - 800) / 200)) : 1;
  const currentTextOpacity = scrollY > 300 ? Math.max(0, 1 - ((scrollY - 300) / 300)) : 1;

  // No renderizar nada cuando esté completo para transición instantánea
  if (isComplete) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Fondo estrellado */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Planeta/Galaxia */}
      <div
        className="relative"
        style={{
          transform: `scale(${currentScale})`,
          opacity: isComplete ? 0 : currentOpacity,
          transition: 'opacity 0.8s ease-out'
        }}
      >
        {/* Galaxia principal - Ahora ocupa toda la pantalla */}
        <motion.div
          className="relative w-[100vmin] h-[100vmin]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Núcleo de la galaxia */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-80 blur-sm" />
          
          {/* Anillos de la galaxia */}
          <div className="absolute inset-4 rounded-full border-2 border-blue-400/30 opacity-60" />
          <div className="absolute inset-8 rounded-full border border-purple-400/20 opacity-40" />
          <div className="absolute inset-12 rounded-full border border-cyan-400/15 opacity-30" />
          
          {/* Brazos espirales */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/2 left-1/2 w-[40vmin] h-1 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-[40vmin] h-1 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-135" />
          </motion.div>

          {/* Partículas orbitales */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = 200 + Math.random() * 150;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                  top: `calc(50% + ${Math.sin(angle) * radius}px)`
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            );
          })}
        </motion.div>

        {/* Anillos externos giratorios */}
        <motion.div
          className="absolute inset-0 w-[100vmin] h-[100vmin]"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-blue-300/20" />
          <div className="absolute inset-[-20px] rounded-full border border-purple-300/15" />
        </motion.div>

        {/* Efecto de glow */}
        <div className="absolute inset-0 w-[100vmin] h-[100vmin] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      {/* Texto central */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: isComplete ? 0 : currentTextOpacity,
          transform: `scale(${1 - (scrollY / 1000) * 0.2})`,
          transition: 'opacity 0.8s ease-out'
        }}
      >
        <div className="text-center">
          {/* Logo de Saviors */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.8 }}
          >
            <img 
              src="https://uc4db6c18e38e9fa4dc16d5ee075.previews.dropboxusercontent.com/p/thumb/ACzHfEFLx4ZM7dC-qnm-EwSMinagOb7XseMRCJGjfWt4KHWSYx34qeBVKB9SzFLu2XGIdkm5ghGzHebv5RwgfFXjoMstUGYhgNOyXhc_wZK05Jqmvj1NlguvxEcHVAQRGCH1c06FxVbGl4oe_l3hMPp3_l3eaG2-oSOGl4dr94UWFroGddT7CqdoVraIfhhAc0ZmJ6SvPn5pvEOqzk55adViUtEA0_EoecP0qalvyp6BPWk_SP5gIawY5f7BjvYLGaGH2nHjSogwH2KNQSg9FW-kHSazsbgpY36s8lRr-TnziRF4YNRflXlrSA7fHdHJ13X-RZEwZxRUmWmFefxeyyR_y1qHbzcfsLqZh_BDewbc5ttw6GTahpM4FhWGTarcuTE/p.png?is_prewarmed=true" 
              alt="Saviors Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 opacity-80 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            Explorando el cosmos con inteligencia artificial
          </motion.p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        style={{ 
          opacity: isComplete ? 0 : currentTextOpacity,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        <motion.div
          className="text-blue-300 text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: 3
          }}
        >
          Desliza para continuar
        </motion.div>
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full mx-auto flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Progreso del scroll */}
      <div className="absolute bottom-4 right-4">
        <div className="w-1 h-20 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-t from-blue-400 to-purple-400 rounded-full transition-all duration-100"
            style={{ height: `${(scrollY / 1000) * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}