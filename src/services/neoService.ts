const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const nasaApiService = {
  // Obtener lista de NEOs de la NASA
  async getNEOsList(page = 0, size = 20) {
    try {
      if (!NASA_API_KEY) {
        throw new Error('NASA_API_KEY no está configurada');
      }

      const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_API_KEY}&page=${page}&size=${size}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      const transformedNeos = data.near_earth_objects.map((neo: any) => this.transformNASAData(neo));
      
      return {
        neos: transformedNeos,
        total: data.page.total_elements,
        page: data.page.number,
        size: data.page.size
      };
    } catch (error: any) {
      console.warn('NASA API falló, usando datos mock:', error?.message || error);
      const { mockNEOs } = await import('../data/mockNEOData');
      const slicedNeos = mockNEOs.slice(page * size, (page + 1) * size);
      return {
        neos: slicedNeos,
        total: mockNEOs.length,
        page,
        size
      };
    }
  },

  // Obtener detalles específicos de un NEO
  async getNEODetails(neoId: string) {
    try {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${neoId}?api_key=${NASA_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Error al obtener detalles del NEO');
      }
      
      const data = await response.json();
      return this.transformNASAData(data);
    } catch (error) {
      console.warn('NASA API limit reached, using mock data for NEO details:', error.message);
      // Fallback to mock data
      const { mockNEOs } = await import('../data/mockNEOData');
      return mockNEOs.find(neo => neo.id === neoId) || null;
    }
  },

  // Transformar datos de la NASA para las tarjetas
  transformNASAData(nasaData: any) {
    const closeApproach = nasaData.close_approach_data?.[0];
    const diameter = nasaData.estimated_diameter?.meters;
    const avgDiameter = diameter ? (diameter.estimated_diameter_min + diameter.estimated_diameter_max) / 2 : 0;
    
    return {
      // Campos requeridos por NEOCard
      neo_id: nasaData.id.toString(),
      name: nasaData.name.split('(')[0].trim(), // Limpiar nombre
      diameter_min_m: diameter?.estimated_diameter_min || 0,
      diameter_max_m: diameter?.estimated_diameter_max || 0,
      is_potentially_hazardous: nasaData.is_potentially_hazardous_asteroid,
      
      // Datos de acercamiento
      close_approach_date: closeApproach?.close_approach_date || null,
      miss_distance_km: closeApproach?.miss_distance?.kilometers ? 
        parseFloat(closeApproach.miss_distance.kilometers) : null,
      velocity_km_s: closeApproach?.relative_velocity?.kilometers_per_second ? 
        parseFloat(closeApproach.relative_velocity.kilometers_per_second) : null,
      
      // Datos de riesgo calculados
      risk_score: this.calculateRiskScore(nasaData),
      risk_category: this.getRiskCategory(nasaData),
      impact_energy_mt: this.calculateImpactEnergy(avgDiameter, closeApproach?.relative_velocity?.kilometers_per_second),
      crater_diameter_km: this.calculateCraterDiameter(avgDiameter),
      damage_radius_km: this.calculateDamageRadius(avgDiameter),
      
      // Campos adicionales para compatibilidad
      composition_estimate: this.getCompositionEstimate(nasaData.absolute_magnitude_h),
      impact_probability: nasaData.is_potentially_hazardous_asteroid ? 0.0001 : 0,
      
      // Campos legacy para compatibilidad con código existente
      id: nasaData.id.toString(),
      diameter: avgDiameter >= 1000 ? `${(avgDiameter/1000).toFixed(1)} km` : `${avgDiameter.toFixed(0)} m`,
      velocity: closeApproach?.relative_velocity?.kilometers_per_second ? 
        `${parseFloat(closeApproach.relative_velocity.kilometers_per_second).toFixed(1)} km/s` : 'N/A',
      density: this.estimateDensity(nasaData.absolute_magnitude_h),
      is_hazardous: nasaData.is_potentially_hazardous_asteroid,
      approach_date: closeApproach?.close_approach_date,
      miss_distance: closeApproach?.miss_distance?.kilometers ? 
        `${(parseFloat(closeApproach.miss_distance.kilometers)/1000).toFixed(1)}k km` : 'N/A',
      absolute_magnitude_h: nasaData.absolute_magnitude_h,
      orbital_data: nasaData.orbital_data,
      close_approach_data: nasaData.close_approach_data
    };
  },

  // Estimar densidad basada en magnitud absoluta
  estimateDensity(absoluteMagnitude: number) {
    if (absoluteMagnitude < 16) return '5000 kg/m³'; // Metálico
    if (absoluteMagnitude < 18) return '3000 kg/m³'; // Mixto
    if (absoluteMagnitude < 20) return '2500 kg/m³'; // Rocoso
    return '1500 kg/m³'; // Carbonáceo
  },

  // Calcular puntuación de riesgo
  calculateRiskScore(nasaData: any): number {
    const diameter = nasaData.estimated_diameter?.meters;
    const avgDiameter = diameter ? (diameter.estimated_diameter_min + diameter.estimated_diameter_max) / 2 : 0;
    const closeApproach = nasaData.close_approach_data?.[0];
    const velocity = closeApproach?.relative_velocity?.kilometers_per_second ? 
      parseFloat(closeApproach.relative_velocity.kilometers_per_second) : 0;
    const distance = closeApproach?.miss_distance?.kilometers ? 
      parseFloat(closeApproach.miss_distance.kilometers) : Infinity;
    
    // Fórmula de riesgo basada en tamaño, velocidad y distancia
    let riskScore = 0;
    
    // Factor de tamaño (0-40 puntos)
    riskScore += Math.min(avgDiameter / 100, 40);
    
    // Factor de velocidad (0-30 puntos)
    riskScore += Math.min(velocity / 2, 30);
    
    // Factor de distancia (0-30 puntos, inverso)
    riskScore += Math.max(0, 30 - (distance / 1000000));
    
    // Bonus por ser potencialmente peligroso
    if (nasaData.is_potentially_hazardous_asteroid) {
      riskScore += 20;
    }
    
    return Math.min(riskScore, 100);
  },

  // Obtener categoría de riesgo
  getRiskCategory(nasaData: any): string {
    const riskScore = this.calculateRiskScore(nasaData);
    
    if (riskScore >= 80) return 'Crítico';
    if (riskScore >= 60) return 'Alto';
    if (riskScore >= 30) return 'Moderado';
    return 'Bajo';
  },

  // Calcular energía de impacto en megatones
  calculateImpactEnergy(diameter: number, velocity: string | number | null): number {
    if (!velocity || !diameter) return 0;
    
    const vel = typeof velocity === 'string' ? parseFloat(velocity) : velocity;
    const mass = this.calculateMass(diameter);
    
    // E = 1/2 * m * v^2, convertido a megatones TNT
    const energyJoules = 0.5 * mass * Math.pow(vel * 1000, 2);
    const energyMegatons = energyJoules / (4.184e15); // 1 megatón = 4.184e15 J
    
    return energyMegatons;
  },

  // Calcular diámetro del cráter
  calculateCraterDiameter(diameter: number): number {
    if (!diameter) return 0;
    
    // Fórmula empírica: D_crater ≈ 20 * D_asteroid^0.8
    return 20 * Math.pow(diameter / 1000, 0.8); // Convertir a km
  },

  // Calcular radio de daño
  calculateDamageRadius(diameter: number): number {
    if (!diameter) return 0;
    
    // Radio de daño aproximadamente 3-5 veces el diámetro del cráter
    const craterDiameter = this.calculateCraterDiameter(diameter);
    return craterDiameter * 4;
  },

  // Calcular masa estimada
  calculateMass(diameter: number): number {
    if (!diameter) return 0;
    
    // Volumen de una esfera: V = (4/3) * π * r^3
    const radius = diameter / 2;
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Densidad promedio de asteroides: ~2500 kg/m³
    const density = 2500;
    
    return volume * density;
  },

  // Obtener estimación de composición
  getCompositionEstimate(absoluteMagnitude: number): string {
    if (absoluteMagnitude < 16) return 'Metálico (Hierro-Níquel)';
    if (absoluteMagnitude < 18) return 'Mixto (Rocoso-Metálico)';
    if (absoluteMagnitude < 20) return 'Rocoso (Silicatos)';
    return 'Carbonáceo (Materiales orgánicos)';
  }
};

// Mantener compatibilidad con el código existente
export const neoService = nasaApiService;