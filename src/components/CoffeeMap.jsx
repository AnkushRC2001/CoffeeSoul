import React from 'react';
import indiaMap from '../assets/india_map.png';

const CoffeeMap = ({ result }) => {
    return (
        <div className="coffee-map" style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img
                    src={indiaMap}
                    alt="Map of India"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 5px 5px rgba(0,0,0,0.1))' }}
                />

                {/* Dynamic Pin Overlay */}
                {result && result.coordinates && (
                    <div style={{
                        position: 'absolute',
                        top: result.coordinates.top,
                        left: result.coordinates.left,
                        transform: 'translate(-50%, -100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        animation: 'bounce 1s infinite alternate'
                    }}>
                        <div style={{
                            background: 'var(--accent-color)',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            marginBottom: '5px'
                        }}>
                            {result.region}
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--dark-color)">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes bounce {
          from { transform: translate(-50%, -100%); }
          to { transform: translate(-50%, -110%); }
        }
      `}</style>
        </div>
    );
};

export default CoffeeMap;
