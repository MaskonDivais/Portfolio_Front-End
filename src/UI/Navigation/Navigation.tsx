import React from 'react';

interface NavigationProps {
  activeSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSlide, nextSlide, prevSlide }) => {
  return (
    <ul className="navigation-buttons">
      <li>
        <a href="#" data-tooltip="Slide 1" className={activeSlide === 0 ? 'active' : ''} onClick={() => nextSlide()}>
          
          <span className="custom-navigation-element"></span>
          <span className="gradient-element"></span>
        </a>
      </li>
      <li>
        <a href="#" data-tooltip="Slide 2" className={activeSlide === 1 ? 'active' : ''} onClick={() => nextSlide()}>
          <span className="custom-navigation-element"></span>
          <span className="gradient-element"></span>
        </a>
      </li>
      <li>
        <a href="#" data-tooltip="Slide 3" className={activeSlide === 2 ? 'active' : ''} onClick={() => nextSlide()}>
          <span className="custom-navigation-element"></span>
          <span className="gradient-element"></span>
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
