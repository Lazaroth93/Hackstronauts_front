import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 50%, #312e81 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '2rem',
          fontFamily: 'Orbitron, monospace'
        }}>
          🚀 Futuristic Landing Page
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#cbd5e1',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          Welcome to the future of web design! This is a React + TypeScript + Vite application
          with all the modern libraries you requested.
        </p>
        
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: 'white',
            marginBottom: '1rem',
            fontFamily: 'Orbitron, monospace'
          }}>
            Interactive Demo
          </h2>
          
          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'Orbitron, monospace',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1.05)'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1)'}
          >
            🎯 Count: {count}
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'Orbitron' }}>
              ⚡ Modern Stack
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              React 18, TypeScript, Vite
            </p>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'Orbitron' }}>
              🎨 Radix UI
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              All components ready
            </p>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'Orbitron' }}>
              🚀 Ready to Go
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Start building now!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App