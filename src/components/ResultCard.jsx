import React from 'react';
import CoffeeMap from './CoffeeMap';

const ResultCard = ({ result, onReset }) => {
    if (!result) return null;
    const { bean, brew } = result;

    return (
        <div className="result-container fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>
                Your Perfect Cup
            </h3>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--dark-color)' }}>
                {bean.name} <span style={{ opacity: 0.5, fontSize: '0.8em' }}>x</span> {brew.name}
            </h1>

            {/* Split Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>

                {/* Left: Bean & Map */}
                <div className="card" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <CoffeeMap result={bean} />
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--dark-color)' }}>{bean.vibe}</h2>
                    <p style={{ color: 'var(--text-color)', marginBottom: '20px' }}>{bean.description}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {bean.tags.slice(0, 4).map(tag => (
                            <span key={tag} style={{ background: '#FDFBF7', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', border: '1px solid #E5E5E5' }}>#{tag}</span>
                        ))}
                    </div>

                    <div style={{ padding: '15px', background: '#F9F9F9', borderRadius: '10px' }}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>Growing Region</h4>
                        <strong style={{ color: 'var(--accent-color)' }}>{bean.region}</strong>
                    </div>
                </div>

                {/* Right: Brew & Recipe */}
                <div className="card" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--dark-color)' }}>The Brew: {brew.name}</h2>
                    <p style={{ color: 'var(--text-color)', marginBottom: '20px' }}>{brew.description}</p>

                    <div style={{ background: '#FFF8F0', padding: '20px', borderRadius: '15px', border: '1px dashed var(--accent-color)' }}>
                        <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: 'var(--dark-color)' }}>📝 How to Make It</h3>
                        <ol style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-color)', lineHeight: '1.6' }}>
                            {brew.recipe.map((step, index) => (
                                <li key={index} style={{ marginBottom: '8px' }}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <button
                onClick={onReset}
                style={{
                    background: 'var(--dark-color)',
                    color: 'white',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
            >
                Start Over
            </button>
        </div>
    );
};

export default ResultCard;
