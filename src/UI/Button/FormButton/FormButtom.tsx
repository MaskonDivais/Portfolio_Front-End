import React from 'react';
import module from './FormButton.module.css';

interface FormButtonProps {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return (
    <button type="button" title="Send Form" className={module.FormButton}>
      <span className={module.Span}>{children}</span>
    </button>
  );
};

export default FormButton;
