import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { neoService } from '../../../services/neoService';
import { NEOCard } from '../../ui/cards/NEOCard';
import { NEODetailModal } from '../../ui/modals/NEODetailModal';
import { Carousel } from '../carousel/Carousel';
import { useSimulation } from '../../../contexts/SimulationContext';
import type { NEO } from '../../../types/api.types';
import { Earth } from 'lucide-react';

export const NEOList: React.FC = () => {
  const [selectedNEO, setSelectedNEO] = useState<NEO | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedAsteroid, setIsSimulationActive, setSimulationStep } = useSimulation();

  // Usar React Query para obtener los datos de la NASA API
  const { data, isLoading, error } = useQuery({
    queryKey: ['neos', 0, 20],
    queryFn: () => neoService.getNEOsList(0, 20),
    staleTime: 5 * 60 * 1000,
  });

  const handleNEOClick = (neo: NEO) => {
    setSelectedNEO(neo);
    setIsModalOpen(true);
    // También alimentar los monitores inmediatamente
    setSelectedAsteroid({
      id: neo.neo_id || neo.id || 'unknown',
      name: neo.name || 'Unknown',
      diameter: (() => {
        const avg = (neo.diameter_min_m ?? 0) && (neo.diameter_max_m ?? 0)
          ? ((neo.diameter_min_m as number) + (neo.diameter_max_m as number)) / 2
          : 0;
        return avg >= 1000 ? `${(avg/1000).toFixed(1)} km` : `${avg.toFixed(0)} m`;
      })(),
      velocity: neo.velocity_km_s != null ? `${neo.velocity_km_s.toFixed(1)} km/s` : 'N/A',
      is_hazardous: neo.is_potentially_hazardous ?? neo.is_hazardous ?? false,
      approach_date: neo.close_approach_date || neo.approach_date,
      miss_distance: neo.miss_distance_km != null ? `${(neo.miss_distance_km/1000).toFixed(1)} km` : neo.miss_distance
    });
    setSimulationStep('selection');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNEO(null);
  };

  const handleSimulateImpact = (neo: NEO) => {
    console.log('Asteroide seleccionado:', neo); // Debug
    
    // Guardar el asteroide seleccionado en el contexto
    setSelectedAsteroid({
      id: neo.id || neo.neo_id || 'unknown',
      name: neo.name || 'Unknown',
      diameter: neo.diameter || 'N/A',
      velocity: neo.velocity || 'N/A',
      is_hazardous: neo.is_hazardous || neo.is_potentially_hazardous || false,
      approach_date: neo.approach_date,
      miss_distance: neo.miss_distance
    });
    
    // Activar la simulación
    setIsSimulationActive(true);
    setSimulationStep('impact');
    
    // Scroll hacia el simulador 3D
    setTimeout(() => {
      document.getElementById('simulator-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };


  if (isLoading) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p className="mt-4 text-white/60">Cargando asteroides...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <h3 className="text-xl text-white mb-2">Error al cargar datos</h3>
            <p className="text-white/60">No se pudieron obtener los asteroides del backend</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.neos || data.neos.length === 0) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-white/40 text-4xl mb-4">🌌</div>
            <h3 className="text-xl text-white mb-2">No hay asteroides disponibles</h3>
            <p className="text-white/60">No se encontraron asteroides en el sistema</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Section header */}
      <div className="text-center mb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontSize: '44px' }}>
            Near Earth Objects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontSize: '24px' }}>
            Near-Earth asteroids monitored in real-time by our AI system
          </p>
          <div className="mt-4 text-sm text-white/40">
            Showing {data?.neos?.length || 0} asteroids
          </div>
          
        </div>
      </div>

      {/* Asteroid carousel - No width restriction */}
      <Carousel<NEO>
        items={data?.neos ?? ([] as NEO[])}
        renderItem={(neo, index, _isActive) => (
          <NEOCard
            key={neo.neo_id}
            neo={neo}
            onClick={() => handleNEOClick(neo)}
            onSimulate={handleSimulateImpact}
          />
        )}
        keyExtractor={(neo: NEO) => neo.neo_id}
        autoPlay={false}
        showIndicators={true}
        showNavigation={true}
      />


      {/* Details modal */}
      {selectedNEO && (
        <NEODetailModal
          neo={selectedNEO}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
