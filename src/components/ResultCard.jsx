import React, { useState } from 'react';

const ResultCard = ({ result, onReset }) => {
    const { bean, brew } = result;
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        // Card 1: The Bean & Personality
        {
            id: 'bean-card',
            content: (
                <>
                    <div className="personality-badge">YOUR COFFEE SOUL</div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{bean.personalityHeadline}</h2>

                    {/* Bean Image */}
                    <img src={bean.image} alt={bean.name} className="bean-image" />

                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '5px' }}>{bean.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>{bean.region}</p>

                    <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px' }}>
                        {bean.personalityDescription}
                    </p>

                    <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
                        {bean.tags.slice(0, 5).map(tag => (
                            <span key={tag} style={{ background: '#F5F5F5', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', color: '#666' }}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <button
                        className="btn-primary"
                        onClick={() => setActiveIndex((prev) => (prev + 1) % 2)}
                        style={{
                            marginTop: 'auto',
                            background: 'var(--dark-color)',
                            color: 'white',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            margin: '0 auto'
                        }}
                    >
                        Reveal Your Brew <span>→</span>
                    </button>
                </>
            )
        },
        // Card 2: The Brew Method
        {
            id: 'brew-card',
            content: (
                <>
                    <div className="personality-badge" style={{ background: 'var(--secondary-color)' }}>PERFECT PAIRING</div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{brew.name}</h2>

                    <p style={{ marginBottom: '20px', color: '#555' }}>
                        {brew.description}
                    </p>

                    <div style={{ textAlign: 'left', background: '#FFF8F0', padding: '20px', borderRadius: '15px', width: '100%', marginBottom: '20px' }}>
                        <h4 style={{ marginBottom: '15px', color: 'var(--dark-color)' }}>📝 How to brew:</h4>
                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                            {brew.recipe.map((step, i) => (
                                <li key={i} style={{ marginBottom: '10px', color: '#444' }}>{step}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', justifyContent: 'center', width: '100%' }}>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % 2)}
                            style={{
                                background: 'var(--dark-color)',
                                color: 'white',
                                padding: '12px 25px',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '1rem',
                                cursor: 'pointer'
                            }}
                        >
                            See Bean Again <span>↩</span>
                        </button>
                        <button
                            onClick={onReset}
                            style={{
                                background: 'transparent',
                                color: 'var(--dark-color)',
                                padding: '12px 25px',
                                borderRadius: '50px',
                                border: '2px solid var(--dark-color)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Start Over <span>↻</span>
                        </button>
                    </div>
                </>
            )
        }
    ];

    return (
        <div className="result-container fade-in" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <div className="card-stack">
                {cards.map((card, index) => {
                    let className = 'card';
                    const isCardActive = index === activeIndex;

                    if (isCardActive) {
                        className += ' active';
                    } else {
                        className += ' next';
                    }

                    return (
                        <div key={card.id} className={className}>
                            {card.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultCard;
