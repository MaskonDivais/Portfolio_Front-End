import React, { useState, useEffect } from 'react';
import './style.css';
import Start from './Components/Start/Start';
import Play from './Components/Play/Play';
import Ander from './Components/Ander/Ander';

const App = () => {
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
  }, []); 

  return (
    <div className="container">
      <div className="slides">
        {activeSlide === 0 && <Start />}
        {activeSlide === 1 && <Play />}
        {activeSlide === 2 && <Ander />}
      </div>

      <ul className="navigation-buttons">
        <li>
          <a href="#" data-tooltip="Slide 1" className={activeSlide === 0 ? 'active' : ''} onClick={() => setActiveSlide(0)}>
            <span className="custom-navigation-element"></span>
            <span className="gradient-element"></span>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Slide 2" className={activeSlide === 1 ? 'active' : ''} onClick={() => setActiveSlide(1)}>
            <span className="custom-navigation-element"></span>
            <span className="gradient-element"></span>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Slide 3" className={activeSlide === 2 ? 'active' : ''} onClick={() => setActiveSlide(2)}>
            <span className="custom-navigation-element"></span>
            <span className="gradient-element"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
