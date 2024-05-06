import React from 'react'
import module from './Style/Button.module.css';

interface Props {
  buttonText: string; 
}

const ButtonLogForm: React.FC<Props> = ({buttonText }) => {
  return (
    <button className={module.button} type="submit"><p className={module.p}>{buttonText}</p></button>
  )
}

export default ButtonLogForm