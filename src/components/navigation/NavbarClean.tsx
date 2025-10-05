import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Agentes', icon: '🤖' },
  { id: 'neo-list', label: 'Asteroides', icon: '☄️' },
  { id: 'simulation', label: 'Simulación', icon: '🎮' },
  { id: 'monitor', label: 'Monitor IA', icon: '📊' },
  { id: 'resources', label: 'Recursos', icon: '📚' }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '0',
      right: '0',
      zIndex: 999999,
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '16px',
      padding: '12px 16px',
      transition: 'all 0.3s ease',
      width: '100%',
      margin: '0 auto'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'cyan';
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.backdropFilter = 'blur(10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.backdropFilter = 'none';
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}