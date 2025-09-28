// components/ProductSkeleton.jsx
import React from 'react';

const ProductSkeleton = () => {
  const skeletonStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '250px', // optional fixed width to match ProductCard
    animation: 'pulse 1.5s infinite',
  };

  const pulseKeyframes = `
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.4; }
      100% { opacity: 1; }
    }
  `;

  return (
    <>
      <style>{pulseKeyframes}</style>
      <div style={skeletonStyle}>
       
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            marginBottom: '12px',
          }}
        ></div>

        
        <div
          style={{
            width: '70%',
            height: '20px',
            backgroundColor: '#e0e0e0',
            marginBottom: '8px',
            borderRadius: '4px',
          }}
        ></div>

       
        <div
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: '#e0e0e0',
            marginBottom: '12px',
            borderRadius: '4px',
          }}
        ></div>

  
        <div
          style={{
            width: '40%',
            height: '20px',
            backgroundColor: '#e0e0e0',
            marginBottom: '12px',
            borderRadius: '4px',
          }}
        ></div>

     
        <div
          style={{
            width: '100%',
            height: '36px',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
          }}
        ></div>
      </div>
    </>
  );
};

export default ProductSkeleton;
