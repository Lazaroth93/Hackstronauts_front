import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { neoService } from '../../services/neoService';

export const DebugNEOs: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['debug-neos'],
    queryFn: () => neoService.getNEOsList(0, 5),
    staleTime: 0, // Sin cache para debug
  });

  console.log('🐛 [DebugNEOs] Estado:', { data, isLoading, error });

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '20px', 
      borderRadius: '8px',
      maxWidth: '400px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <h3>🐛 Debug NEOs</h3>
      <div>
        <strong>Loading:</strong> {isLoading ? 'SÍ' : 'NO'}
      </div>
      <div>
        <strong>Error:</strong> {error ? String(error) : 'NO'}
      </div>
      <div>
        <strong>Data:</strong> {data ? `${data.neos?.length || 0} NEOs` : 'NO DATA'}
      </div>
      {data?.neos && (
        <div>
          <strong>Primer NEO:</strong>
          <pre style={{ fontSize: '10px', marginTop: '5px' }}>
            {JSON.stringify(data.neos[0], null, 2).substring(0, 200)}...
          </pre>
        </div>
      )}
    </div>
  );
};
