import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import CoffeeMap from './CoffeeMap';

const ResultCard = ({ result, onReset }) => {
    const { bean, brew } = result;
    const [activeIndex, setActiveIndex] = useState(0);
    const summaryRef = useRef(null);

    const handleNext = () => {
        if (activeIndex < cards.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handleBackToStart = () => {
        setActiveIndex(0);
    };

    const downloadSummary = async () => {
        if (summaryRef.current) {
            try {
                const canvas = await html2canvas(summaryRef.current, {
                    scale: 2,
                    backgroundColor: '#FAF9F6',
                    useCORS: true
                });
                const link = document.createElement('a');
                link.download = `CoffeeSoul_${bean.name.replace(/\s+/g, '_')}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            } catch (err) {
                console.error("Failed to download summary:", err);
            }
        }
    };

    const cards = [
        // Card 1: THE SOUL (Personality)
        {
            id: 'soul-card',
            content: (
                <>
                    <div className="card-header">
                        <span className="suit">♥</span>
                        <div className="personality-badge">THE SOUL</div>
                        <span className="suit">♥</span>
                    </div>

                    <div className="card-center">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'serif' }}>{bean.personalityHeadline}</h2>
                        <div className="divider"></div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontStyle: 'italic', color: '#555' }}>
                            "{bean.personalityDescription}"
                        </p>
                    </div>

                    <div className="card-footer">
                        <button className="btn-next" onClick={handleNext}>Reveal The Bean →</button>
                    </div>
                </>
            )
        },
        // Card 2: THE BEAN (Details)
        {
            id: 'bean-card',
            content: (
                <>
                    <div className="card-header">
                        <span className="suit">♦</span>
                        <div className="personality-badge">THE BEAN</div>
                        <span className="suit">♦</span>
                    </div>

                    <div className="card-center">
                        <img src={bean.image} alt={bean.name} className="bean-image-lg" />
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-color)', marginTop: '15px' }}>{bean.name}</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{bean.region}</p>

                        <div className="tags-row">
                            {bean.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn-next" onClick={handleNext}>See Origin →</button>
                    </div>
                </>
            )
        },
        // Card 3: THE ORIGIN (Map)
        {
            id: 'map-card',
            content: (
                <>
                    <div className="card-header">
                        <span className="suit">♣</span>
                        <div className="personality-badge">THE ORIGIN</div>
                        <span className="suit">♣</span>
                    </div>

                    <div className="card-center" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '100%', height: '300px', pointerEvents: 'none' }}>
                            <CoffeeMap result={bean} />
                        </div>
                        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                            Grown in <strong>{bean.region}</strong>
                        </p>
                    </div>

                    <div className="card-footer">
                        <button className="btn-next" onClick={handleNext}>How to Brew →</button>
                    </div>
                </>
            )
        },
        // Card 4: THE BREW (Recipe)
        {
            id: 'brew-card',
            content: (
                <>
                    <div className="card-header">
                        <span className="suit">♠</span>
                        <div className="personality-badge">THE BREW</div>
                        <span className="suit">♠</span>
                    </div>

                    <div className="card-center" style={{ alignItems: 'flex-start', textAlign: 'left', padding: '0 10px' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{brew.name}</h2>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>{brew.description}</p>

                        <div className="recipe-box">
                            {brew.recipe.map((step, i) => (
                                <div key={i} className="recipe-step">
                                    <span className="step-num">{i + 1}</span>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn-next" onClick={handleNext}>Your Passport →</button>
                    </div>
                </>
            )
        },
        // Card 5: SUMMARY (Passport)
        {
            id: 'summary-card',
            content: (
                <>
                    <div ref={summaryRef} className="passport-content">
                        <div className="passport-header">
                            <h2>COFFEE SOUL PASSPORT</h2>
                            <p className="date">{new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="passport-body">
                            <div className="passport-row">
                                <span className="label">SOUL TYPE</span>
                                <span className="value">{bean.personalityHeadline}</span>
                            </div>
                            <div className="passport-row">
                                <span className="label">BEAN</span>
                                <span className="value">{bean.name}</span>
                            </div>
                            <div className="passport-row">
                                <span className="label">METHOD</span>
                                <span className="value">{brew.name}</span>
                            </div>
                            <div className="passport-quote">
                                "{bean.personalityDescription.split('.')[0]}."
                            </div>
                        </div>

                        <div className="passport-stamp">
                            <div className="stamp-circle">
                                <span>VERIFIED</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer full-width">
                        <button className="btn-download" onClick={downloadSummary}>
                            Download Passport ↓
                        </button>
                        <button className="btn-reset" onClick={onReset}>
                            Start New Journey ↻
                        </button>
                        <button className="btn-link" onClick={handleBackToStart} style={{ fontSize: '0.8rem', marginTop: '10px', textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer' }}>
                            Review Journey (Back to Start)
                        </button>
                    </div>
                </>
            )
        }
    ];

    return (
        <div className="result-container fade-in">
            <div className="card-stack">
                {cards.map((card, index) => {
                    // Calculate visual order: 0 for active, 1 for next, etc.
                    const offset = (index - activeIndex + cards.length) % cards.length;

                    // Z-index: Active (0) highest, then decreasing
                    const zIndex = cards.length - offset;

                    // Scale: Active is 1, others slightly smaller to create depth
                    const scale = offset === 0 ? 1 : 0.95 - (offset * 0.01);

                    // TranslateY: Create a slight vertical stack effect
                    const translateY = offset === 0 ? 0 : offset * 2; // px

                    let className = 'card playing-card';
                    if (offset === 0) {
                        className += ' active';
                    } else {
                        className += ' next';
                    }

                    return (
                        <div
                            key={card.id}
                            className={className}
                            style={{
                                zIndex: zIndex,
                                transform: `scale(${scale}) translateY(${translateY}px)`,
                                transition: 'all 0.5s ease'
                            }}
                        >
                            {card.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultCard;
