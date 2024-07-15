import React from 'react';
import module from './ButtonStart.module.css';

interface ButtonStartProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonStart: React.FC<ButtonStartProps> = ({ children, onClick }) => {
  return (
    <button type="button" title="Send Form" className={module.ButtonStart} onClick={onClick}>
      <span className={module.Span}>{children}</span>
    </button>
  );
};

export default ButtonStart;
