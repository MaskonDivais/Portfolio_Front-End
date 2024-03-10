import React from 'react'
import module from './Style/Button.module.css';

const ButtonLogForm = () => {
  return (
    <button className={module.button} type="submit"><p className={module.p}>Send</p></button>
  )
}

export default ButtonLogForm