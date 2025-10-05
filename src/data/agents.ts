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
    specialty: "SPACE DATA COLLECTION",
    description: "Collects asteroid data from NASA and other sources",
    bio: "Specialist in space data collection and validation. Handles integration with external APIs and provides the information foundation for all other agents.",
    achievements: [
      "NASA APIs integration",
      "Asteroid data validation",
      "Multiple sources handling",
      "Complete space database"
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
    sciences: ["Data Science", "APIs", "Validation", "Integration"],
    responsibilities: [
      "Collect asteroid data",
      "Obtain contextual information",
      "Validate and clean data",
      "Handle external APIs"
    ],
    importance: "It's the first step in the entire simulation. Without good data, everything else fails.",
    // Campos épicos
    tagline: "DR. DATA — SENIOR · Space data collector. Truth foundation for simulation.",
    oneLiner: "Extracts and validates NASA feeds and other sources, cleans noise and delivers the 'single source of truth' that other agents need.",
    epicDescription: "Architect of numerical truth: converts scattered signals into the unshakeable foundation of every prediction. Without him, the entire decision tower trembles.",
    signatureAbility: {
      name: "Feed Fusion",
      description: "Integrates real-time APIs, validates and normalizes to produce a single source of trust."
    },
    quote: "Numbers don't lie; they just need to be listened to carefully.",
    icon: "🛰️",
    confidence: "ALTA",
    lastMission: "Last update: 2024-01-15 14:30 UTC",
    cta: "ANALYZE DATA"
  },
  {
    id: 2,
    name: "DRA. ORBITAL",
    role: "TRAJECTORY AGENT",
    specialty: "CELESTIAL MECHANICS",
    description: "Calculates orbital trajectories using real celestial mechanics",
    bio: "Expert in celestial mechanics and orbital physics. Calculates close Earth approaches and determines impact probabilities based on real physics.",
    achievements: [
      "Precise orbital calculations",
      "Approach predictions",
      "Orbital uncertainty analysis",
      "Advanced celestial mechanics"
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
    sciences: ["Celestial Mechanics", "Orbital Physics", "Mathematics", "Differential Calculus"],
    responsibilities: [
      "Calculate orbital trajectories",
      "Determine close approaches",
      "Calculate impact probabilities",
      "Analyze orbital uncertainty"
    ],
    importance: "Provides the scientific foundation to determine if an asteroid will impact Earth.",
    // Campos épicos
    tagline: "DRA. ORBITAL — EXPERT · Applied celestial mechanics: determines if the rock will kiss Earth.",
    oneLiner: "Calculates trajectories with real physics to estimate approaches and impact probabilities. Handles uncertainty as a tool.",
    epicDescription: "Sky cartographer: transforms equations into temporal warnings. If there's a dangerous trajectory, she will find it.",
    signatureAbility: {
      name: "Exact Vectoring",
      description: "Orbital modeling with uncertainty analysis; predicts approach windows."
    },
    quote: "Orbits speak in equations; I just translate.",
    icon: "🪐",
    confidence: "ALTA",
    lastMission: "Orbital analysis: 2024-01-15 16:45 UTC",
    cta: "SIMULATE TRAJECTORY"
  },
  {
    id: 3,
    name: "DRA. IMPACT",
    role: "IMPACT ANALYZER AGENT",
    specialty: "IMPACT ANALYSIS",
    description: "Calculates impact energy and evaluates seismic effects",
    bio: "Specialist in impact physics and geology. Calculates impact energy, estimates crater size and evaluates seismic and tsunami effects.",
    achievements: [
      "Impact energy calculations",
      "Crater estimation",
      "Seismic effects analysis",
      "Tsunami evaluation"
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
    sciences: ["Impact Physics", "Geology", "Seismology", "Oceanography"],
    responsibilities: [
      "Calculate impact energy",
      "Estimate crater size",
      "Evaluate seismic effects",
      "Analyze tsunami effects"
    ],
    importance: "Determines what damage an impact would cause and how much population would be affected.",
    // Campos épicos
    tagline: "DR. IMPACT — EXPERT · Calculates impact energy and potential damage.",
    oneLiner: "Converts mass and velocity into consequences: energy, crater size, seismicity and tsunami risk.",
    epicDescription: "Disaster meter: takes a rock and calculates its fury. How much will Earth shake? Which cities will be in the shadow? He knows.",
    signatureAbility: {
      name: "Energy Calculation",
      description: "E = ½mv² + geophysical modeling to estimate damage and affected population."
    },
    quote: "It's not catastrophism, it's calculation — and calculation saves lives.",
    icon: "💥",
    confidence: "ALTA",
    lastMission: "Impact analysis: 2024-01-15 18:20 UTC",
    cta: "CALCULATE DAMAGE"
  },
  {
    id: 4,
    name: "DR. MITIGATION",
    role: "MITIGATION AGENT",
    specialty: "DEFLECTION STRATEGIES",
    description: "Evaluates deflection strategies and generates recommendations",
    bio: "Expert in space engineering and deflection strategies. Evaluates 4 different strategies and calculates costs and effectiveness of each one.",
    achievements: [
      "Deflection strategies",
      "Cost analysis",
      "Mission optimization",
      "Scientific recommendations"
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
    sciences: ["Space Engineering", "Orbital Mechanics", "Optimization", "Economics"],
    responsibilities: [
      "Evaluate deflection strategies",
      "Calculate costs and effectiveness",
      "Generate recommendations",
      "Optimize missions"
    ],
    importance: "Plans how to avoid impact and which strategies are most effective.",
    // Campos épicos
    tagline: "DRA. MITIGATION — SENIOR · Designs strategies to deflect threats.",
    oneLiner: "Evaluates Kinetic, Gravity Tractor, Nuclear and Ablation; calculates effectiveness and cost for each action plan.",
    epicDescription: "Future planner: when the clock is ticking, she designs the maneuver that changes the planet's destiny.",
    signatureAbility: {
      name: "Master Plan",
      description: "Simulates and compares deflection strategies with cost/benefit metrics."
    },
    quote: "There's more than one way to deflect the problem; my job is to find the one that hurts the planet least.",
    icon: "🛡️",
    confidence: "ALTA",
    lastMission: "Deflection plan: 2024-01-15 20:10 UTC",
    cta: "DEPLOY STRATEGY"
  },
  {
    id: 5,
    name: "DR. VISUALIZATION",
    role: "VISUALIZATION AGENT",
    specialty: "SCIENTIFIC VISUALIZATION",
    description: "Creates orbital trajectory graphics and impact maps",
    bio: "Specialist in scientific visualization and 3D graphics. Creates visual representations of orbital trajectories and impact maps with damage zones.",
    achievements: [
      "2D and 3D orbital graphics",
      "Interactive impact maps",
      "Metrics visualizations",
      "3D representations"
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
    sciences: ["Scientific Visualization", "Geography", "Computer Graphics", "3D Algorithms"],
    responsibilities: [
      "Create orbital graphics",
      "Generate impact maps",
      "Visualize confidence metrics",
      "Produce risk diagrams"
    ],
    importance: "Makes complex data visually understandable for everyone.",
    // Campos épicos
    tagline: "DR. VISUALIZATION — SENIOR · Converts data into maps and 3D scenes.",
    oneLiner: "Generates orbital graphics, impact maps and risk diagrams that make the incomprehensible understandable.",
    epicDescription: "Cartographer of the invisible: transforms equations and probabilities into images that anyone can understand — from citizens to presidents.",
    signatureAbility: {
      name: "Damage Map",
      description: "Interactive 2D/3D visualizations with damage and confidence layers."
    },
    quote: "If you can't visualize it, you don't understand it.",
    icon: "🎛️",
    confidence: "ALTA",
    lastMission: "3D Render: 2024-01-15 22:30 UTC",
    cta: "OPEN VISUALIZATION"
  },
  {
    id: 6,
    name: "DRA. ML",
    role: "ML PREDICTOR AGENT",
    specialty: "MACHINE LEARNING",
    description: "Generates advanced predictions using machine learning",
    bio: "Expert in machine learning and data science. Generates advanced predictions of future trajectories and evaluates risk evolution over time.",
    achievements: [
      "Future trajectory predictions",
      "Historical pattern analysis",
      "ML probability calculations",
      "Risk evolution evaluation"
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
    sciences: ["Machine Learning", "Statistics", "Data Science", "Prediction Algorithms"],
    responsibilities: [
      "Generate advanced predictions",
      "Predict future trajectories",
      "Evaluate risk evolution",
      "Analyze historical patterns"
    ],
    importance: "Improves predictions using artificial intelligence and historical patterns.",
    // Campos épicos
    tagline: "DRA. ML — EXPERT · Predicts trajectories and risk evolution with ML.",
    oneLiner: "Trains models on historical data, detects patterns and projects future trajectories to anticipate risk changes.",
    epicDescription: "Trained oracle: learns from the past to reveal probable futures and adjust the alarm with data.",
    signatureAbility: {
      name: "Temporal Prediction",
      description: "Models that forecast risk evolution up to 10 years ahead."
    },
    quote: "The past speaks in patterns; my job is to listen to them and anticipate their steps.",
    icon: "🤖",
    confidence: "ALTA",
    lastMission: "ML Prediction: 2024-01-15 23:45 UTC",
    cta: "EXECUTE PREDICTION"
  },
  {
    id: 7,
    name: "DR. EXPLAINER",
    role: "EXPLAINER AGENT",
    specialty: "SCIENTIFIC COMMUNICATION",
    description: "Translates technical data into simple and understandable language",
    bio: "Specialist in scientific communication and education. Translates complex technical data into simple language and generates understandable narratives for any audience.",
    achievements: [
      "Technical data translation",
      "Understandable narratives",
      "Audience adaptation",
      "Effective communication"
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
    sciences: ["Linguistics", "Psychology", "Education", "Communication"],
    responsibilities: [
      "Translate technical data",
      "Explain risk",
      "Generate narratives",
      "Adapt content by audience"
    ],
    importance: "Makes scientific information accessible to everyone, from children to governments.",
    // Campos épicos
    tagline: "DR. EXPLAINER — SENIOR · Translates technical to human language.",
    oneLiner: "Takes complex analysis and converts it into simple narratives, adapted to the audience: children, press or government.",
    epicDescription: "Ambassador of understanding: communicates science so people can decide with their heads (and without panic).",
    signatureAbility: {
      name: "Clear Narrative",
      description: "Actionable summary adapted by audience, with historical comparisons and recommended steps."
    },
    quote: "It's not about speaking nicely; it's about giving people the information they need to act.",
    icon: "📣",
    confidence: "ALTA",
    lastMission: "Official statement: 2024-01-16 00:15 UTC",
    cta: "GENERATE REPORT"
  }
];
