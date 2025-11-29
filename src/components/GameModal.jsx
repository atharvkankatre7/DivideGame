import React from 'react';

export default function GameModal({ open, score, bestScore, onRestart }) {
  if (!open) return null;
  return (
    <div style={{position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', zIndex: 50}}>
      <div style={{background: 'white', padding: '24px', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', textAlign: 'center', maxWidth: '20rem'}}>
        <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#dc2626'}}>Game Over!</h2>
        <p style={{marginTop: '8px'}}>Your grid is full.</p>
        <div style={{marginTop: '16px', fontWeight: 'bold'}}>Final Score: {score}</div>
        <div style={{marginTop: '8px'}}>Best Score: {bestScore}</div>
      </div>
    </div>
  );
}
