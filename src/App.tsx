import React, { useState, useEffect } from 'react';
import './style.css';
import Start from './Components/Start/Start';
import Play from './Components/Play/Play';
import Ander from './Components/Ander/Ander';
import Navigation from './UI/Navigation/Navigation';
import Login from './Components/LogIn/Login';
import { ThemeProvider } from './Components/ThemeContext';
import Menu from './Components/Menu/Menu';
import AnderButton from './UI/Button/AnderButton';
import News from './Components/News/News';

const App: React.FC = () => {
// Start Scroll
  const nextSlide = () => { setActiveSlide((prevSlide) => (prevSlide + 1) % 4); };
  const prevSlide = () => { setActiveSlide((prevSlide) => (prevSlide - 1 + 4) % 4); };

  const handleScroll = (event: WheelEvent) => {
    const delta = event.deltaY;
    if (delta > 0) { nextSlide(); }
    else if (delta < 0) { prevSlide(); }
  };

  useEffect(() => {
    const handleScrollWrapper = (event: Event) => {
      if (event instanceof WheelEvent) { handleScroll(event); }
    };
    window.addEventListener('wheel', handleScrollWrapper);
    return () => { window.removeEventListener('wheel', handleScrollWrapper); };
  }, []);
// End Scroll

// Start isLoading
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []); 
// End isLoading


// Start Animation Load
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [lettersVisible, setLettersVisible] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLettersVisible((prevLettersVisible) => prevLettersVisible + 1);
    }, 200); 
    return () => clearTimeout(timer);
  }, [lettersVisible]);

  const word = 'MASFLEX'; 

  if (isLoading) {
    return ( <div className="loadingAnimation">
        {word.split('').map((letter, index) => (
        <span key={index} className="loadingText" style={{ visibility: index < lettersVisible ? 'visible' : 'hidden' }}>
          {letter}
        </span>
        ))}
    </div>);
  }
// End Animation Load

const yourItemsArray = ['Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3']; // Замените этот массив на ваш фактический массив элементов


  return (
    <ThemeProvider><div className="container">

         <Login /> 
        <div className="slides">
          {activeSlide === 0 && <Start />}
          {activeSlide === 1 && <Play />}
          {activeSlide === 2 && <News items={yourItemsArray} count={8} />}
          {activeSlide === 3 && <Ander />}
        </div>

        <Navigation activeSlide={activeSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
        <AnderButton />
        <Menu />

    </div></ThemeProvider>
  );
};

export default App;