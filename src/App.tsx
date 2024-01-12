import React, { useState, useEffect } from 'react';
import './style.css';
import Start from './Components/Start/Start';
import Play from './Components/Play/Play';
import Ander from './Components/Ander/Ander';
import Navigation from './UI/Navigation/Navigation';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

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
    const handleScrollWrapper = (event: Event) => {
      if (event instanceof WheelEvent) {
        handleScroll(event);
      }
    };

    window.addEventListener('wheel', handleScrollWrapper);

    return () => {
      window.removeEventListener('wheel', handleScrollWrapper);
    };
  }, []);

  return (
    <div className="container">
      <div className="slides">
        {activeSlide === 0 && <Start />}
        {activeSlide === 1 && <Play />}
        {activeSlide === 2 && <Ander />}
      </div>

      <Navigation activeSlide={activeSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

export default App;
