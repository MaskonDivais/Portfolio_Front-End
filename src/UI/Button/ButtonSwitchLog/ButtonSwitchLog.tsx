import React from 'react'
import module from './ButtonSwitchLog.module.css';

interface Props {
  onClick: () => void;
  buttonText: string; 
}

const ButtonSwitchLog: React.FC<Props> = ({ onClick, buttonText }) => {
  return (
    <button className={module.Conteiner} onClick={onClick}>{buttonText}</button>
  )
}

export default ButtonSwitchLog;
