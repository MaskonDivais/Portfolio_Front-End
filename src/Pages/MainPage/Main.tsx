import React, { useState, useEffect } from 'react';
import './style.css';
import { ThemeProvider } from '../../Components/ThemeContext';
import Start from '../../Components/Start/Start';
import Play from '../../Components/Play/Play';
import News from '../../Components/News/News';
import Menu from '../../Components/Menu/Menu';
import Ander from '../../Components/Ander/Ander';
import Navigation from '../../UI/Navigation/Navigation';
import Login from '../../Components/LogIn/Login';

const Main: React.FC = () => {
  const slideTitles = [
    'Main Page',
    'Player',
    'Actual News',
    'Technical Support'
  ];

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lettersVisible, setLettersVisible] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  // Start Scroll
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  const handleScroll = (event: WheelEvent) => {
    const delta = event.deltaY;
    if (delta > 0) {
      nextSlide();
    } else if (delta < 0) {
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
  // End Scroll

  // Start isLoading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // End isLoading

  // Start Animation Load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLettersVisible((prevLettersVisible) => prevLettersVisible + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [lettersVisible]);

  const word = 'MASFLEX';

  if (isLoading) {
    return (
      <div className="loadingAnimation">
        {word.split('').map((letter, index) => (
          <span key={index} className="loadingText" style={{ visibility: index < lettersVisible ? 'visible' : 'hidden' }}>
            {letter}
          </span>
        ))}
      </div>
    );
  }
  // End Animation Load

  return (
    <ThemeProvider>
      <div className="container">
        {isAuthenticated ? (
          <div className="slides">
            {activeSlide === 0 && <Start setActiveSlide={setActiveSlide} />}
            {activeSlide === 1 && <Play />}
            {activeSlide === 2 && <News />}
            {activeSlide === 3 && <Ander />}
          </div>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}

        <Navigation activeSlide={activeSlide} nextSlide={nextSlide} prevSlide={prevSlide} />

        <Menu slideTitle={slideTitles[activeSlide]} />
      </div>
    </ThemeProvider>
  );
};

export default Main;
