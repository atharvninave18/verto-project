import React from 'react';

const Spinner = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const spinnerStyle = {
    width: '60px',
    height: '60px',
    border: '6px solid #f3f3f3', 
    borderTop: '6px solid #3498db', 
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    boxShadow: '0 0 10px #3498db, 0 0 20px #3498db',
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
