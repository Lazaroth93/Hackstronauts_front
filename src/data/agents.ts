export interface Agent {
  id: number;
  name: string;
  role: string;
  specialty: string;
  description: string;
  bio: string;
  achievements: string[];
  image: string;
  color: string;
  abilityType: 'data' | 'trajectory' | 'impact' | 'mitigation' | 'visualization' | 'ml' | 'explainer';
  stats: {
    intelligence: number;
    innovation: number;
    leadership: number;
    impact: number;
  };
  yearsOfService?: number;
  missionsCompleted?: number;
  rank?: string;
  sciences: string[];
  responsibilities: string[];
  importance: string;
  // Nuevos campos épicos
  tagline: string;
  oneLiner: string;
  epicDescription: string;
  signatureAbility: {
    name: string;
    description: string;
  };
  quote: string;
  icon: string;
  confidence: 'ALTA' | 'MEDIA' | 'BAJA';
  lastMission?: string;
  cta: string;
}

export const agents: Agent[] = [
  {
    id: 1,
    name: "DR. DATA",
    role: "DATA COLLECTOR AGENT",
    specialty: "RECOLECCIÓN DE DATOS ESPACIALES",
    description: "Recolecta datos de asteroides de la NASA y otras fuentes",
    bio: "Especialista en recolección y validación de datos espaciales. Maneja la integración con APIs externas y proporciona la base de información para todos los demás agentes.",
    achievements: [
      "Integración con APIs de la NASA",
      "Validación de datos de asteroides",
      "Manejo de fuentes múltiples",
      "Base de datos espaciales completa"
    ],
    image: "https://uc5097cc3ce2ba0f6a92d46361a0.previews.dropboxusercontent.com/p/thumb/ACzOVWE4d-DSC5PCgP4PJg17zz_EHhdYXSyLOce3SP2I_KY8eEXdZvnUbp22QI_5m06bPa4f0CMoMGLZHLMbGuBNejNVt4Gk-ZFLa9wfSYUPlh84ss4z6FotJa2x4NCfUKfPnN7uNFSLlFMwzB3X1lfrU-pz42lMXzl_INmwulIacq2StmfNKSzUAB7ZmUlg0jn_z5oFfy1Kb6M2_yqo2GywHjz7KgoD6TWd5I37zRIDbr4WS_6QVEMay1zyydtUPu5eeo_gmHkQ3TXwBdo6MMO9tU3wpubZfgGlpuIJNOYyTaHjXqQQkfeJgjvSyvPwP4awBsfPoZUNQKoURRfFbiOP8fQ2fgvYBSyhRW2iW8_P9-ZiNSmvQJJ-LKmYpVk02V0/p.png?is_prewarmed=true",
    color: "#00D4FF",
    abilityType: "data",
    stats: {
      intelligence: 95,
      innovation: 88,
      leadership: 82,
      impact: 90
    },
    yearsOfService: 8,
    missionsCompleted: 156,
    rank: "SENIOR",
    sciences: ["Ciencia de Datos", "APIs", "Validación", "Integración"],
    responsibilities: [
      "Recolectar datos de asteroides",
      "Obtener información contextual",
      "Validar y limpiar datos",
      "Manejar APIs externas"
    ],
    importance: "Es el primer paso en toda la simulación. Sin datos buenos, todo lo demás falla.",
    // Campos épicos
    tagline: "DR. DATA — SENIOR · Recolector de datos espaciales. Base de verdad para la simulación.",
    oneLiner: "Extrae y valida feeds de la NASA y otras fuentes, limpia ruido y entrega el 'single source of truth' que el resto de agentes necesita.",
    epicDescription: "Arquitecto de la verdad numérica: convierte señales dispersas en la base inquebrantable de cada predicción. Sin él, toda la torre de decisión tiembla.",
    signatureAbility: {
      name: "Fusión de Feeds",
      description: "Integra APIs en tiempo real, valida y normaliza para producir una única fuente de confianza."
    },
    quote: "Los números no mienten; solo necesitan ser escuchados con cuidado.",
    icon: "🛰️",
    confidence: "ALTA",
    lastMission: "Última actualización: 2024-01-15 14:30 UTC",
    cta: "ANALIZAR DATOS"
  },
  {
    id: 2,
    name: "DRA. ORBITAL",
    role: "TRAJECTORY AGENT",
    specialty: "MECÁNICA CELESTE",
    description: "Calcula trayectorias orbitales usando mecánica celeste real",
    bio: "Experta en mecánica celeste y física orbital. Calcula aproximaciones cercanas a la Tierra y determina probabilidades de impacto basadas en física real.",
    achievements: [
      "Cálculos orbitales precisos",
      "Predicciones de aproximaciones",
      "Análisis de incertidumbre orbital",
      "Mecánica celeste avanzada"
    ],
    image: "https://ucc77e9aa572da781c65224c4bf8.previews.dropboxusercontent.com/p/thumb/ACz-VXJIDB5c0z-iQX7H6e5yBvxF_IJa144cHPivZ9s5v_9Qc_qJFylfWd_4dlIIAkAJbhNBSdkeg7fHPrsYkFpNJLDXXP6CbmNpamaSqQGE4xTBN-0vtq2dKIcE6iMYbdhKVZVrHvrTnmpfLmT33Xd6KBELEf6c5j-D3wLikl_lYQbgV1LR8Eq06-9jdq_kYKvs1tw1rPWupklnC3z2DQkXGH_zz4xpcaNV-6ah7bSp70PuYm4ncW9hrzYhkdpvkDJBZKG2AIqCme725xqLKxFiliqXhN--enCPcBCY2sqzfP0VD9Jc4s6rCqmVu9tnoUcfIvvpj2OJvJEC5tfGjP78ociV89FoNi29bnKjpBAlokDSSgVPc8PMLPm17TnDiiM/p.png?is_prewarmed=true",
    color: "#FF6B2C",
    abilityType: "trajectory",
    stats: {
      intelligence: 98,
      innovation: 92,
      leadership: 85,
      impact: 95
    },
    yearsOfService: 12,
    missionsCompleted: 89,
    rank: "EXPERT",
    sciences: ["Mecánica Celeste", "Física Orbital", "Matemáticas", "Cálculo Diferencial"],
    responsibilities: [
      "Calcular trayectorias orbitales",
      "Determinar aproximaciones cercanas",
      "Calcular probabilidades de impacto",
      "Analizar incertidumbre orbital"
    ],
    importance: "Proporciona la base científica para determinar si un asteroide impactará la Tierra.",
    // Campos épicos
    tagline: "DRA. ORBITAL — EXPERT · Mecánica celeste aplicada: determina si la roca besará la Tierra.",
    oneLiner: "Calcula trayectorias con física real para estimar aproximaciones y probabilidades de impacto. Maneja incertidumbre como herramienta.",
    epicDescription: "Cartógrafa del cielo: transforma ecuaciones en advertencias temporales. Si hay una trayectoria peligrosa, ella la encontrará.",
    signatureAbility: {
      name: "Vectoría Exacta",
      description: "Modelado orbital con análisis de incertidumbre; predice ventanas de aproximación."
    },
    quote: "Las órbitas hablan en ecuaciones; yo solo traduzco.",
    icon: "🪐",
    confidence: "ALTA",
    lastMission: "Análisis orbital: 2024-01-15 16:45 UTC",
    cta: "SIMULAR TRAYECTORIA"
  },
  {
    id: 3,
    name: "DRA. IMPACT",
    role: "IMPACT ANALYZER AGENT",
    specialty: "ANÁLISIS DE IMPACTO",
    description: "Calcula la energía del impacto y evalúa efectos sísmicos",
    bio: "Especialista en física de impactos y geología. Calcula la energía del impacto, estima el tamaño del cráter y evalúa efectos sísmicos y de tsunami.",
    achievements: [
      "Cálculos de energía de impacto",
      "Estimación de cráteres",
      "Análisis de efectos sísmicos",
      "Evaluación de tsunamis"
    ],
    image: "https://uc76a054613c3cc57a18d7db1e98.previews.dropboxusercontent.com/p/thumb/ACy8az566wTJVIQp-6tRg_lUoqQSr6qs_PtD8JBfZJygWN4Y8AhA77cvXNPaYF2lF_qAK2XIH8Iap0Rk0NJgEE2g5216Hlcyki7ut5vrPU9QMm0D1yhud-PnfxpE_sf_JqwD2DLgS1kj2_EVXV9qCh-0azQnkx1g4PegMFvi7WflgUzM_JyWVw2q78IA91QWmrTU2TfIt39ErRbnKMj5qnZJEl9Rta2rz2aAlj9uWER-loQ3D1rUQOed4WlLLnPv5tFqPqeKY2yPqVFqXjUQKj63nfUOs_739UFYa9kHb-sOdvjeaGuVFBaz6xXlWaPWE07pPsIF8t39YMbzRdpv9U5zlCHknCkCmV9CbtW_YwqRj3pZf2lLQgrgKvw7w1rvndI/p.png?is_prewarmed=true",
    color: "#00FF7F",
    abilityType: "impact",
    stats: {
      intelligence: 96,
      innovation: 90,
      leadership: 88,
      impact: 98
    },
    yearsOfService: 10,
    missionsCompleted: 67,
    rank: "EXPERT",
    sciences: ["Física de Impactos", "Geología", "Sismología", "Oceanografía"],
    responsibilities: [
      "Calcular energía del impacto",
      "Estimar tamaño del cráter",
      "Evaluar efectos sísmicos",
      "Analizar efectos de tsunami"
    ],
    importance: "Determina qué daños causaría un impacto y cuánta población se vería afectada.",
    // Campos épicos
    tagline: "DR. IMPACT — EXPERT · Calcula energía del impacto y daño potencial.",
    oneLiner: "Convierte masa y velocidad en consecuencias: energía, tamaño de cráter, sismicidad y riesgo de tsunami.",
    epicDescription: "Medidor del desastre: toma una roca y calcula su furia. ¿Cuánto temblará la Tierra? ¿Qué ciudades quedarán en la sombra? Él lo sabe.",
    signatureAbility: {
      name: "Cálculo de Energía",
      description: "E = ½mv² + modelado geofísico para estimar daños y población afectada."
    },
    quote: "No es catastrofismo, es cálculo — y el cálculo salva vidas.",
    icon: "💥",
    confidence: "ALTA",
    lastMission: "Análisis de impacto: 2024-01-15 18:20 UTC",
    cta: "CALCULAR DAÑOS"
  },
  {
    id: 4,
    name: "DR. MITIGATION",
    role: "MITIGATION AGENT",
    specialty: "ESTRATEGIAS DE DEFLEXIÓN",
    description: "Evalúa estrategias de deflexión y genera recomendaciones",
    bio: "Experta en ingeniería espacial y estrategias de deflexión. Evalúa 4 estrategias diferentes y calcula costos y efectividad de cada una.",
    achievements: [
      "Estrategias de deflexión",
      "Análisis de costos",
      "Optimización de misiones",
      "Recomendaciones científicas"
    ],
    image: "https://uc7d264a3d1225c3e941cec16cde.previews.dropboxusercontent.com/p/thumb/ACwtGGIKBuFON8icn4f7_eNjJdBVVnh3uzKCmYM7OtB5YHJIRT3u6ahBKE6VGw3YvNawiLBSYaTYA-Bcl2tpwcAKwaMMrCqgfaOD4f1T_9YQb6GgrGD0S7WO4WScWi3-d63XKFMpUtp88A_IX_OdFGrtf9MQC8n0tnqI8mn_3yDxrtBBGyrBT5o-WDa8Ls4ywXgY6d1JkwXdWTJdRXLrMA3qVgy3fOIwNfygE6Xfgolh-hJy7bPncnGpz7exVzmaI2Zw9ldKG6UYeJrXG7PrTdJcuNEsHBWpHXAkCGCszBlEVviV-_sCeFT56MZEDko2Bc-VeHiqmFmFkkngSvZASVtXpQjZ1OxtT89iV4sLAQsuoAcpGwojFGemL1JaRX-UjxU/p.png?is_prewarmed=true",
    color: "#B026FF",
    abilityType: "mitigation",
    stats: {
      intelligence: 94,
      innovation: 96,
      leadership: 92,
      impact: 93
    },
    yearsOfService: 9,
    missionsCompleted: 45,
    rank: "SENIOR",
    sciences: ["Ingeniería Espacial", "Mecánica Orbital", "Optimización", "Economía"],
    responsibilities: [
      "Evaluar estrategias de deflexión",
      "Calcular costos y efectividad",
      "Generar recomendaciones",
      "Optimizar misiones"
    ],
    importance: "Planifica cómo evitar el impacto y qué estrategias son más efectivas.",
    // Campos épicos
    tagline: "DRA. MITIGATION — SENIOR · Diseña estrategias para desviar amenazas.",
    oneLiner: "Evalúa Kinetic, Gravity Tractor, Nuclear y Ablation; calcula efectividad y coste para cada plan de acción.",
    epicDescription: "Planificadora de futuros: cuando el reloj corre, ella diseña la maniobra que cambie el destino del planeta.",
    signatureAbility: {
      name: "Plan Maestro",
      description: "Simula y compara estrategias de deflexión con métricas de coste/beneficio."
    },
    quote: "Hay más de una forma de desviar el problema; mi trabajo es encontrar la que menos duela al planeta.",
    icon: "🛡️",
    confidence: "ALTA",
    lastMission: "Plan de deflexión: 2024-01-15 20:10 UTC",
    cta: "DESPLEGAR ESTRATEGIA"
  },
  {
    id: 5,
    name: "DR. VISUALIZATION",
    role: "VISUALIZATION AGENT",
    specialty: "VISUALIZACIÓN CIENTÍFICA",
    description: "Crea gráficos de trayectorias orbitales y mapas de impacto",
    bio: "Especialista en visualización científica y gráficos 3D. Crea representaciones visuales de trayectorias orbitales y mapas de impacto con zonas de daño.",
    achievements: [
      "Gráficos orbitales 2D y 3D",
      "Mapas de impacto interactivos",
      "Visualizaciones de métricas",
      "Representaciones 3D"
    ],
    image: "https://uc85913efe2514ae071ac6871485.previews.dropboxusercontent.com/p/thumb/ACxzdnWqsSNXB0Y31-jfsFryfibEZMWRMzza-JwvhzCMgSzjxQpDkCiIVaOt3sXEuGszXQaV2nczQZ8ZAPfP8d4P7AzVLSXdFUIb2_TXFl5c3oEsjzru9jQMC0FO135lFPLJbmDE8VhnAVhLNa-hyI-EKeRAn5hjC9t3YrgRv93OsZZrMNhcVprjmGQd0YKr6ypkiAIQs3hUjJQE8FeXeNbrAbYnytXL00wr-_aaJcXTUOs-PC4JLrtRKcsa5gIQMXRATGuy9sbb1vRkbcDfcWUy2bBTs6_q48O7iSB-lYklyVrAYi9YcBxcdCHPKg1WYGrQ286Y5XMwB8TAno7QXAwCo2IMG78LcZMHRM0ra-A6eLTcdwdlezraDJJmSj-qPgM/p.png?is_prewarmed=true",
    color: "#FFD700",
    abilityType: "visualization",
    stats: {
      intelligence: 92,
      innovation: 98,
      leadership: 85,
      impact: 89
    },
    yearsOfService: 7,
    missionsCompleted: 78,
    rank: "SENIOR",
    sciences: ["Visualización Científica", "Geografía", "Informática Gráfica", "Algoritmos 3D"],
    responsibilities: [
      "Crear gráficos orbitales",
      "Generar mapas de impacto",
      "Visualizar métricas de confianza",
      "Producir diagramas de riesgo"
    ],
    importance: "Hace que los datos complejos sean comprensibles visualmente para todos.",
    // Campos épicos
    tagline: "DR. VISUALIZATION — SENIOR · Convierte datos en mapas y escenas 3D.",
    oneLiner: "Genera gráficos orbitales, mapas de impacto y diagramas de riesgo que hacen comprensible lo incomprensible.",
    epicDescription: "Cartógrafo de lo invisible: transforma ecuaciones y probabilidades en imágenes que cualquiera puede entender — desde ciudadanos hasta presidentes.",
    signatureAbility: {
      name: "Mapa de Daño",
      description: "Visualizaciones 2D/3D interactivas con capas de daño y confianza."
    },
    quote: "Si no puedes visualizarlo, no lo comprendes.",
    icon: "🎛️",
    confidence: "ALTA",
    lastMission: "Render 3D: 2024-01-15 22:30 UTC",
    cta: "ABRIR VISUALIZACIÓN"
  },
  {
    id: 6,
    name: "DRA. ML",
    role: "ML PREDICTOR AGENT",
    specialty: "MACHINE LEARNING",
    description: "Genera predicciones avanzadas usando machine learning",
    bio: "Experta en machine learning y ciencia de datos. Genera predicciones avanzadas de trayectorias futuras y evalúa la evolución del riesgo a lo largo del tiempo.",
    achievements: [
      "Predicciones de trayectorias futuras",
      "Análisis de patrones históricos",
      "Cálculos de probabilidades con ML",
      "Evaluación de evolución del riesgo"
    ],
    image: "https://uca1d1b44044eb813d4fae84de04.previews.dropboxusercontent.com/p/thumb/ACwJHLlWIIlwAAF5HAsLfaBpQTIcbTj5_4hRTEEJtUeWdchxRY9XXFZnPgLfU8nbUG-fcfCaenxwbVMKU9gn4-nUeFOQpZ5oHD-daqE3-buCz81ax4cpmyvbWeFCEOsaSXhot7cj1Z2_1K8PfjA8GimPlmoHwTUrwsgX6Bu-tlLf20r9hp2rTODtQNU-JGxYAOAP381UDkUhmMLqZamAo0FsQ3xHBebQ4xtQz7LwLBgmDOE1U6uCkFCp9Ho4YhAiBdWvs-nGvN8b9bOKhLIxrqCAzIt-qZ4B6NViUdSN2Ovr6dWA0LMmeXmfMBkVrcpUE7bGoSeFUKX9o72-tByr4pBLTwx1Mga4uJuZG5WcUz0nhyGnG5o16h9JYRlbdewU2gI/p.png?is_prewarmed=true",
    color: "#00FFFF",
    abilityType: "ml",
    stats: {
      intelligence: 99,
      innovation: 97,
      leadership: 90,
      impact: 94
    },
    yearsOfService: 6,
    missionsCompleted: 92,
    rank: "EXPERT",
    sciences: ["Machine Learning", "Estadística", "Ciencia de Datos", "Algoritmos de Predicción"],
    responsibilities: [
      "Generar predicciones avanzadas",
      "Predecir trayectorias futuras",
      "Evaluar evolución del riesgo",
      "Analizar patrones históricos"
    ],
    importance: "Mejora las predicciones usando inteligencia artificial y patrones históricos.",
    // Campos épicos
    tagline: "DRA. ML — EXPERT · Predice trayectorias y evolución del riesgo con ML.",
    oneLiner: "Entrena modelos sobre histórico, detecta patrones y proyecta trayectorias a futuro para anticipar cambios de riesgo.",
    epicDescription: "Oráculo entrenado: aprende del pasado para revelar futuros probables y ajustar la alarma con datos.",
    signatureAbility: {
      name: "Predicción Temporal",
      description: "Modelos que pronostican la evolución del riesgo hasta 10 años vista."
    },
    quote: "El pasado habla en patrones; mi trabajo es escucharlos y adelantar sus pasos.",
    icon: "🤖",
    confidence: "ALTA",
    lastMission: "Predicción ML: 2024-01-15 23:45 UTC",
    cta: "EJECUTAR PREDICCIÓN"
  },
  {
    id: 7,
    name: "DR. EXPLAINER",
    role: "EXPLAINER AGENT",
    specialty: "COMUNICACIÓN CIENTÍFICA",
    description: "Traduce datos técnicos a lenguaje simple y comprensible",
    bio: "Especialista en comunicación científica y educación. Traduce datos técnicos complejos a lenguaje simple y genera narrativas comprensibles para cualquier audiencia.",
    achievements: [
      "Traducción de datos técnicos",
      "Narrativas comprensibles",
      "Adaptación por audiencia",
      "Comunicación efectiva"
    ],
    image: "https://ucdd14e94d9beb9391bcf246f1ec.previews.dropboxusercontent.com/p/thumb/ACzuNb1cgkFw2UBnFi6xqdooy9tbPfhjxDXvNm6jcn5a9Ai2UP4_52ws-BA71-978tQCqsYS4GJmACIxKr-UB9JS1eeMib8oxL_7yWfc5qICQXPfGJ0oX-p0EPZU7YH8G5y9e1fs1UpJr9CBTGKwDyPVjR0MY-uMpyofpJQPzoPzpDKaKsqvVpt9ROytvflvJg7XyObL1u9T2QEhWEOoijIMx5eInT7Aesg1gBn753PV3_24afRznjwxQhC6DAqZMZVouusWiu8pAVyVnirr7cVzn8tEQJ1KRcGpAMe2qrssjUUhkiFRdqB5knAHWF-L3Sas4tW8gKuknm81BBA1Jhp-wgvvfz0gumeHjNZyw-_9DpCI7xOpec1m1_-5FNZlsZw/p.png?is_prewarmed=true",
    color: "#FF00FF",
    abilityType: "explainer",
    stats: {
      intelligence: 93,
      innovation: 89,
      leadership: 96,
      impact: 91
    },
    yearsOfService: 11,
    missionsCompleted: 134,
    rank: "SENIOR",
    sciences: ["Lingüística", "Psicología", "Educación", "Comunicación"],
    responsibilities: [
      "Traducir datos técnicos",
      "Explicar el riesgo",
      "Generar narrativas",
      "Adaptar contenido por audiencia"
    ],
    importance: "Hace que la información científica sea accesible para todos, desde niños hasta gobiernos.",
    // Campos épicos
    tagline: "DR. EXPLAINER — SENIOR · Traduce lo técnico a lenguaje humano.",
    oneLiner: "Toma análisis complejos y los convierte en narrativas simples, adaptadas al público: niños, prensa o gobierno.",
    epicDescription: "Embajador del entendimiento: comunica la ciencia de forma que la gente pueda decidir con cabeza (y sin pánico).",
    signatureAbility: {
      name: "Narrativa Clara",
      description: "Resumen accionable y adaptado por audiencia, con comparaciones históricas y pasos recomendados."
    },
    quote: "No es hablar bonito; es dar a la gente la información que necesita para actuar.",
    icon: "📣",
    confidence: "ALTA",
    lastMission: "Comunicado oficial: 2024-01-16 00:15 UTC",
    cta: "GENERAR REPORTE"
  }
];
