import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLiveMetrics } from '../../hooks/useLiveMetrics';

// Define types for our components
interface MonitorProps {
  agentName: string;
  status: 'online' | 'processing' | 'standby';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  isClickable?: boolean;
}

// Agent detail interface
interface AgentDetail {
  name: string;
  description: string;
  capabilities: string[];
  currentTask: string;
  performance: number;
}

// Agent details data
const agentDetails: Record<string, AgentDetail> = {
  "DRA. ORBITAL": {
    name: "DRA. ORBITAL",
    description: "Especialista en mecánica celeste y trayectorias orbitales",
    capabilities: ["Cálculo de órbitas", "Predicción de trayectorias", "Análisis gravitacional", "Detección de aproximaciones"],
    currentTask: "Monitoreando 15,847 objetos cercanos a la Tierra",
    performance: 98.2
  },
  "DRA. MITIGATION": {
    name: "DRA. MITIGATION",
    description: "Experta en estrategias de deflexión y mitigación de riesgos",
    capabilities: ["Estrategias de deflexión", "Análisis de riesgos", "Optimización de misiones", "Planificación de contingencias"],
    currentTask: "Evaluando 4 estrategias de deflexión activas",
    performance: 95.7
  },
  "DR. IMPACT": {
    name: "DR. IMPACT",
    description: "Especialista en análisis de impacto y evaluación de daños",
    capabilities: ["Cálculo de energía", "Estimación de cráteres", "Análisis sísmico", "Evaluación de tsunamis"],
    currentTask: "Analizando potencial de impacto en zona costera",
    performance: 97.1
  },
  "DRA. ML": {
    name: "DRA. ML",
    description: "Experta en machine learning y predicciones avanzadas",
    capabilities: ["Redes neuronales", "Predicción temporal", "Análisis de patrones", "Aprendizaje adaptativo"],
    currentTask: "Entrenando modelo predictivo con 2.3M datos",
    performance: 94.8
  },
  "DR. DATA": {
    name: "DR. DATA",
    description: "Especialista en recolección y análisis de datos espaciales",
    capabilities: ["Integración APIs", "Validación de datos", "Minería de datos", "Análisis en tiempo real"],
    currentTask: "Procesando feeds de 12 fuentes espaciales",
    performance: 99.1
  },
  "DR. VISUALIZATION": {
    name: "DR. VISUALIZATION",
    description: "Experto en visualización científica y renderizado 3D",
    capabilities: ["Renderizado 3D", "Mapas interactivos", "Visualización de datos", "Simulaciones visuales"],
    currentTask: "Generando visualización 3D de trayectoria",
    performance: 96.3
  },
  "DR. EXPLAINER": {
    name: "DR. EXPLAINER",
    description: "Especialista en comunicación científica y explicaciones",
    capabilities: ["Traducción técnica", "Comunicación clara", "Adaptación de audiencia", "Narrativas científicas"],
    currentTask: "Generando reporte para público general",
    performance: 98.9
  }
};

// VintageMonitor Component with native CSS
const VintageMonitor: React.FC<MonitorProps> = ({ agentName, status, size = 'medium', children, onClick, isClickable = false }) => {
  const sizeClasses = {
    small: { width: '16rem', height: '12rem' },
    medium: { width: '20rem', height: '16rem' },
    large: { width: '18rem', height: '16rem' }
  };
  
  const statusColors = {
    online: '#4ade80', // green-400
    processing: '#f59e0b', // yellow-400
    standby: '#3b82f6' // blue-400
  };
  
  const statusIndicators = {
    online: ['#4ade80', '#f59e0b', '#ef4444'],
    processing: ['#f59e0b', '#4ade80', '#ef4444'],
    standby: ['#3b82f6', '#4ade80', '#f59e0b']
  };
  
  return (
    <div 
      className={`relative ${isClickable ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
      onClick={onClick}
      style={{
        width: sizeClasses[size].width,
        height: sizeClasses[size].height,
        borderRadius: '0.5rem',
        boxShadow: isClickable ? '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(74, 222, 128, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        border: '2px solid #4b5563',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}
    >
      {/* Monitor frame */}
      <div 
        style={{
          backgroundColor: '#6b7280',
          padding: '0.5rem',
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #4b5563'
        }}
      >
        <div style={{ color: 'white', fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: 'bold' }}>
          {agentName}
        </div>
        <div 
          style={{
            width: '0.5rem',
            height: '0.5rem',
            borderRadius: '50%',
            backgroundColor: statusColors[status],
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)'
          }}
        ></div>
      </div>
      
      {/* Screen */}
      <div 
        style={{
          backgroundColor: 'black',
          padding: '0.75rem',
          borderLeft: '2px solid #4b5563',
          borderRight: '2px solid #4b5563',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          style={{
            backgroundColor: '#1f2937',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            flexGrow: 1,
            border: '1px solid #4b5563',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Scanlines effect */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                style={{
                  width: '100%',
                  height: '0.125rem',
                  backgroundColor: '#4ade80',
                  marginBottom: '0.25rem'
                }}
              ></div>
            ))}
          </div>
          {children}
        </div>
      </div>
      
      {/* Monitor base */}
      <div 
        style={{
          backgroundColor: '#6b7280',
          height: '1rem',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.25rem',
          marginTop: '0.25rem',
          border: '1px solid #4b5563'
        }}
      >
        {statusIndicators[status].map((color, index) => (
          <div 
            key={index} 
            style={{
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)'
            }}
          ></div>
        ))}
      </div>
      
      {/* Side buttons */}
      <div 
        style={{
          position: 'absolute',
          left: '0.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '0.5rem',
          height: '2rem',
          backgroundColor: '#4b5563',
          borderRadius: '0.5rem',
          border: '1px solid #6b7280'
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          right: '0.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '0.5rem',
          height: '2rem',
          backgroundColor: '#4b5563',
          borderRadius: '0.5rem',
          border: '1px solid #6b7280'
        }}
      ></div>
      
      {/* Corner lights - green dots */}
      <div 
        style={{
          position: 'absolute',
          top: '0.25rem',
          left: '0.25rem',
          width: '0.375rem',
          height: '0.375rem',
          backgroundColor: '#4ade80',
          borderRadius: '50%',
          boxShadow: '0 0 4px #4ade80',
          animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          top: '0.25rem',
          right: '0.25rem',
          width: '0.375rem',
          height: '0.375rem',
          backgroundColor: '#4ade80',
          borderRadius: '50%',
          boxShadow: '0 0 4px #4ade80',
          animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          bottom: '0.25rem',
          left: '0.25rem',
          width: '0.375rem',
          height: '0.375rem',
          backgroundColor: '#4ade80',
          borderRadius: '50%',
          boxShadow: '0 0 4px #4ade80',
          animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          bottom: '0.25rem',
          right: '0.25rem',
          width: '0.375rem',
          height: '0.375rem',
          backgroundColor: '#4ade80',
          borderRadius: '50%',
          boxShadow: '0 0 4px #4ade80',
          animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
    </div>
  );
};

// Dropdown component for agent details
const AgentDropdown: React.FC<{ agent: AgentDetail; onClose: () => void }> = ({ agent, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full mt-4"
      style={{
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.95) 100%)',
        borderRadius: '0.75rem',
        border: '2px solid rgba(74, 222, 128, 0.3)',
        boxShadow: '0 0 30px rgba(74, 222, 128, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated border effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.1), transparent)',
          animation: 'pulse 2s infinite'
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%234ade80' stroke-width='0.5'%3E%3Cpath d='M10 0v20M0 10h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ 
              color: '#4ade80', 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              fontFamily: 'monospace',
              textShadow: '0 0 10px rgba(74, 222, 128, 0.5)',
              margin: 0
            }}>
              {agent.name}
            </h3>
            <p style={{ 
              color: '#d1d5db', 
              fontSize: '0.875rem', 
              margin: '0.25rem 0 0 0',
              fontFamily: 'monospace'
            }}>
              {agent.description}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              borderRadius: '0.375rem',
              color: '#fca5a5',
              padding: '0.5rem',
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>
        </div>

        {/* Performance bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: '#9ca3af', fontSize: '0.75rem', fontFamily: 'monospace' }}>
              PERFORMANCE
            </span>
            <span style={{ color: '#4ade80', fontSize: '0.875rem', fontFamily: 'monospace', fontWeight: 'bold' }}>
              {agent.performance}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '0.5rem',
            background: 'rgba(31, 41, 55, 0.8)',
            borderRadius: '0.25rem',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${agent.performance}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #4ade80, #22c55e)',
                boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
              }}
            />
          </div>
        </div>

        {/* Current task */}
        <div className="mb-4">
          <h4 style={{ 
            color: '#f59e0b', 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            fontFamily: 'monospace',
            margin: '0 0 0.5rem 0',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            CURRENT TASK
          </h4>
          <p style={{ 
            color: '#e5e7eb', 
            fontSize: '0.875rem', 
            fontFamily: 'monospace',
            margin: 0,
            lineHeight: '1.4'
          }}>
            {agent.currentTask}
          </p>
        </div>

        {/* Capabilities */}
        <div>
          <h4 style={{ 
            color: '#8b5cf6', 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            fontFamily: 'monospace',
            margin: '0 0 0.75rem 0',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            CAPABILITIES
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
            {agent.capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#c4b5fd',
                  fontFamily: 'monospace',
                  textAlign: 'center'
                }}
              >
                • {capability}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Main Component
export function MonitorAgentes() {
  const metrics = useLiveMetrics();
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

  const handleMonitorClick = (agentName: string) => {
    setExpandedAgent(expandedAgent === agentName ? null : agentName);
  };
  
  return (
    <div 
      className="relative overflow-hidden" 
      style={{ 
        minHeight: '120vh',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(63, 41, 127, 0.2) 0%, transparent 0%), radial-gradient(circle at 75% 25%, rgba(63, 41, 127, 0.2) 0%, transparent 0%), linear-gradient(to bottom, rgba(63, 41, 127, 0.2) 0%, transparent 0%)', 
        backgroundSize: '100px 100px',
        backgroundColor: '#1e1b4b'
      }}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div 
        className="relative z-10 w-full h-full flex flex-col justify-center items-center"
        style={{
          padding: 'clamp(1rem, 2vw, 2rem)',
          minHeight: '100vh',
          gap: 'clamp(1rem, 2vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* AI AGENTS WORKSTATION Section */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2 font-mono">
              AI AGENTS WORKSTATION
            </h2>
            <p className="text-gray-400 text-sm">
              Real-time agent processing and analysis
            </p>
          </div>
          
          {/* Monitors Container */}
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4">
            {/* DRA. ORBITAL */}
            <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DRA. ORBITAL" 
                status="online" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DRA. ORBITAL")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>ORBITAL RECON</div>
                  <div>• TRACKING {metrics.trackingObjects}</div>
                  <div>• ALT AVG {metrics.averageAltitude.toLocaleString()}</div>
                  <div>• CURRENT {metrics.currentAltitude.toLocaleString()}</div>
                  <div>STATUS: ACTIVE</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DRA. MITIGATION */}
            <div style={{width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DRA. MITIGATION" 
                status="processing" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DRA. MITIGATION")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>RISK MITIGATION</div>
                  <div>• PROTOCOLS {metrics.containmentProtocols}</div>
                  <div>• DAMAGE REDUC {metrics.damageReduction}%</div>
                  <div>STATUS: ACTIVE</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DR. IMPACT */}
            <div style={{ width: '300px', minWidth: '250px', maxWidth: '250px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DR. IMPACT" 
                status="online" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DR. IMPACT")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>IMPACT ASSESSMENT</div>
                  <div>• COLLISION {(metrics.collisionProbability * 100).toFixed(2)}%</div>
                  <div>• LOCATION {metrics.impactLocation}</div>
                  <div>STATUS: MONITORING</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DRA. ML */}
            <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DRA. ML" 
                status="processing" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DRA. ML")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>MACHINE LEARNING</div>
                  <div>• TRAINING {metrics.trainingIterations.toLocaleString()}</div>
                  <div>• ACCURACY {metrics.modelAccuracy.toFixed(1)}%</div>
                  <div>STATUS: TRAINING</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DR. DATA */}
            <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DR. DATA" 
                status="online" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DR. DATA")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>NEURAL NETWORK</div>
                  <div>• PATTERN {metrics.patternRecognition.toFixed(0)}%</div>
                  <div>• DATA MINING {metrics.dataMiningActive ? 'YES' : 'NO'}</div>
                  <div>STATUS: ACTIVE</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DR. VISUALIZATION */}
            <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DR. VISUALIZATION" 
                status="processing" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DR. VISUALIZATION")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>3D RENDERING</div>
                  <div>• REAL TIME ACTIVE</div>
                  <div>• OBJECTS {metrics.renderedObjects}</div>
                  <div>• FPS {metrics.fps}</div>
                  <div>STATUS: RENDERING</div>
                </div>
              </VintageMonitor>
            </div>

            {/* DR. EXPLAINER */}
            <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px', height: '16rem', marginRight: '1rem' }}>
              <VintageMonitor 
                agentName="DR. EXPLAINER" 
                status="online" 
                size="small"
                isClickable={true}
                onClick={() => handleMonitorClick("DR. EXPLAINER")}
              >
                <div style={{ 
                  color: '#4ade80', 
                  fontFamily: 'monospace', 
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)', 
                  lineHeight: '1.2' 
                }}>
                  <div>AI INTERPRETATION</div>
                  <div>• NATURAL LANGUAGE</div>
                  <div>• QUERIES {metrics.processedQueries.toLocaleString()}</div>
                  <div>• RESPONSE {metrics.responseTime.toFixed(2)}s</div>
                  <div>STATUS: READY</div>
                </div>
              </VintageMonitor>
            </div>
            </div>
            
            {/* Single dropdown for all monitors */}
            <AnimatePresence>
              {expandedAgent && (
                <div style={{ width: '90%', maxWidth: '60rem', marginTop: '2rem' }}>
                  <AgentDropdown 
                    agent={agentDetails[expandedAgent]} 
                    onClose={() => setExpandedAgent(null)} 
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
