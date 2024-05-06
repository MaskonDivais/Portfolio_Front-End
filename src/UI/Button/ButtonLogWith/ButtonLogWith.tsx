import React from 'react'
import module from './ButtonLogWith.module.css';

interface Props {
  onClick: () => void;
  buttonText: string; 
}

const ButtonLogWith: React.FC<Props> = ({ onClick, buttonText }) => {
  return (
    <button className={module.Conteiner} onClick={onClick}>{buttonText}</button>
  )
}

export default ButtonLogWith;
