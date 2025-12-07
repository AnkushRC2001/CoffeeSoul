import React, { useState } from 'react';
import { questions } from '../data/coffeeData';

const Quiz = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isExiting, setIsExiting] = useState(false);

    const handleOptionClick = (value) => {
        setIsExiting(true);
        setTimeout(() => {
            const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
            setAnswers(newAnswers);

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setIsExiting(false);
            } else {
                onComplete(newAnswers);
            }
        }, 300);
    };

    const question = questions[currentQuestion];

    return (
        <div className="quiz-container fade-in" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
            <div className="progress-bar" style={{ width: '100%', height: '4px', background: '#E0E0E0', marginBottom: '40px', borderRadius: '2px' }}>
                <div
                    style={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                        height: '100%',
                        background: 'var(--accent-color)',
                        transition: 'width 0.3s ease'
                    }}
                />
            </div>

            <div className={`question-card ${isExiting ? 'exiting' : ''}`} style={{ opacity: isExiting ? 0 : 1, transition: 'opacity 0.3s ease', transform: isExiting ? 'translateY(-10px)' : 'translateY(0)' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--dark-color)' }}>{question.text}</h2>

                <div className="options-grid" style={{ display: 'grid', gap: '15px' }}>
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option.value)}
                            style={{
                                padding: '20px',
                                background: 'white',
                                border: '1px solid #E5E5E5',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                textAlign: 'left',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                color: 'var(--text-color)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(212, 163, 115, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#E5E5E5';
                                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                            }}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
