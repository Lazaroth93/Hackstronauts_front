 # 🚀 The Saviors by Hackstronauts Minds - Asteroid Impact Simulator

## 🌟 Description

**The Saviors** is an interactive web application that simulates real-time asteroid impacts. Users can select locations on a 3D Earth globe, visualize impacts on a 2D map, and experience realistic visual effects including explosions, shockwaves, and craters.

## ✨ Key Features

### 🌍 **Interactive 3D Earth Globe**
- Rendered with **Three.js** for maximum performance
- Smooth rotation and zoom
- Precise geographic coordinate selection
- Automatic 3D to lat/lng coordinate conversion

### 🗺️ **Dynamic 2D Map**
- **Leaflet.js** integration for interactive maps
- Automatic centering on selected location
- Custom markers for impacts
- Precise geographic to pixel coordinate conversion

### 💥 **Realistic Impact Simulator**
- **Global screen flash** with double layer (white + yellow)
- **Multi-layer explosion** with 8-layer realistic color gradients
- **Concentric shockwaves** with staggered delays
- **Flying particles** with random movement
- **Permanent craters** with procedural textures
- **Visual sound effects** with shadows and glows


## 🛠️ Technologies Used

### **Frontend**
- **React 18.2.0** - Main framework
- **TypeScript 5.0.0** - Static typing
- **Vite 6.3.6** - Build tool and dev server
- **Tailwind CSS** - Styling framework

### **3D Graphics**
- **Three.js r150** - 3D Earth globe rendering
- **React Three Fiber** - React integration with Three.js

### **Maps**
- **Leaflet 1.9.4** - Interactive 2D maps
- **React Leaflet** - React components for Leaflet

### **Animations**
- **Framer Motion 11.0.0** - Fluid and realistic animations
- **CSS Keyframes** - Custom animations

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 🚀 Installation and Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/your-username/hackstronauts_front.git

# Navigate to directory
cd hackstronauts_front

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Build preview
npm run lint         # Code linting
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                    # 3D Components
│   │   ├── Earth3DGlobe.tsx   # 3D Earth globe
│   │   └── Asteroid3D.tsx     # 3D Asteroid model
│   ├── features/
│   │   ├── maps/              # Map components
│   │   │   └── LeafletMapComponent.tsx
│   │   └── neo/               # NEO components
│   ├── monitoring/            # Monitoring panels
│   ├── sections/              # App sections
│   ├── simulation/            # Asteroid simulator
│   │   ├── AsteroidLauncher.tsx
│   │   └── IntegratedAsteroidSimulator.tsx
│   └── ui/                    # UI components
├── contexts/
│   └── SimulationContext.tsx   # Global context
├── App.tsx                     # Main component
├── main.tsx                    # Entry point
└── index.css                  # Global styles
```

## 🎯 Using the Simulator

### **1. Location Selection**
- Click anywhere on the 3D Earth globe
- The system automatically converts 3D coordinates to lat/lng
- A 2D map opens centered on the selected location

### **2. Asteroid Launch**
- Click on the 2D map to launch the meteorite
- Select asteroid material (iron, stone, ice, gold, diamond)
- Watch the complete sequence of visual effects

### **3. Visual Effects**
- **Global flash** (0.0s) - Full screen illumination
- **Main explosion** (0.0s) - Blast with realistic gradients
- **Shockwaves** (0.0s, 0.2s, 0.4s) - Concentric circles
- **Particles** (0.0s) - Trail effects
- **Crater** (0.8s) - Permanent crater formation


## 📦 Production Build

```bash
# Create optimized build
npm run build

# Preview build
npm run preview
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

- **Luis Carlos Bravo** - *Frontend - Backend developer* - [GitHub](https://github.com/LuisCar09)
- **Barbara Sanchez Urbano** - *Frontend - Backend developer* - [GitHub](https://github.com/Barbarasanchez11)
- **Andres Lazaro** - *Frontend developer - Backend developer* - [GitHub](https://github.com/Lazaroth93)
- **Anthony Caceda** - *Frontend developer - Backend developer* - [GitHub](https://github.com/Anthonycpcode)

- Made with ❤️ by the Hackstronauts Minds team
- ⭐ If you like the project, give it a star!   
