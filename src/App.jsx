import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ResultCard from './components/ResultCard';
import { beans, brewMethods } from './data/coffeeData';

function App() {
  const [gameState, setGameState] = useState('home'); // home, quiz, result
  const [result, setResult] = useState(null);

  const startQuiz = () => {
    setGameState('quiz');
  };

  const calculateResult = (answers) => {
    const answerValues = Object.values(answers);

    // 1. Calculate Best Bean
    const beanScores = beans.map(bean => {
      let score = 0;
      answerValues.forEach(val => {
        if (bean.tags.includes(val)) score += 2;
      });
      return { ...bean, score };
    });
    beanScores.sort((a, b) => b.score - a.score);
    const bestBean = beanScores[0];

    // 2. Calculate Best Brew Method
    const brewScores = brewMethods.map(method => {
      let score = 0;
      answerValues.forEach(val => {
        if (method.tags.includes(val)) score += 2;
      });
      return { ...method, score };
    });
    brewScores.sort((a, b) => b.score - a.score);
    const bestBrew = brewScores[0];

    return { bean: bestBean, brew: bestBrew };
  };

  const handleQuizComplete = (answers) => {
    const recommendedCoffee = calculateResult(answers);
    setResult(recommendedCoffee);
    setGameState('result');
  };

  const resetQuiz = () => {
    setGameState('home');
    setResult(null);
  };

  return (
    <div className="app-container">
      <nav style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', letterSpacing: '-1px' }}>CoffeeSoul</h1>
      </nav>

      <main className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {gameState === 'home' && (
          <div className="hero fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '20px' }}>
              What coffee are you today?
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '40px' }}>
              Not just a drink. It's a mood. A vibe. A tiny dose of therapy.
              <br />Let's find your perfect brew match.
            </p>
            <button
              onClick={startQuiz}
              style={{
                background: 'var(--dark-color)',
                color: 'white',
                padding: '20px 50px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(35, 27, 24, 0.2)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Find My Brew
            </button>
          </div>
        )}

        {gameState === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {gameState === 'result' && (
          <ResultCard result={result} onReset={resetQuiz} />
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '0.9rem' }}>
        <p>&copy; 2024 CoffeeSoul. Made with caffeine & code.</p>
      </footer>
    </div>
  );
}

export default App;
