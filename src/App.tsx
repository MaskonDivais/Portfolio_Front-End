import React, { useState, useEffect } from 'react';
import './style.css';
import Start from './Components/Start/Start';
import Play from './Components/Play/Play';
import Ander from './Components/Ander/Ander';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleScroll = (event: WheelEvent) => {
    const delta = event.deltaY;

    if (delta > 0) {
      // Скролл вниз
      nextSlide();
    } else if (delta < 0) {
      // Скролл вверх
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []); // Обработчик события скролла будет добавлен при монтировании и удален при размонтировании компонента

  return (
    <div className="container">
      <div className="slides">
        {activeSlide === 0 && <Start />}
        {activeSlide === 1 && <Play />}
        {activeSlide === 2 && <Ander />}
      </div>

      <div className="navigation-buttons">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`navigation-diamond ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
