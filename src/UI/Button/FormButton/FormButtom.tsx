import React from 'react'
import module from './FormButton.module.css'

const FormButtom = () => {
  return (
    <button type="button" title="Send Form" className={module.FormButton}><span className={module.Span}>Send</span></button>
  )
}

export default FormButtom