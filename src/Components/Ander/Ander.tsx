import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'

const Ander: React.FC = () => {

  return (
    <div className={module.container}>
      <div className={module.fon}>
        <div className={module.slider}><HorizontalSlider/></div>
        <div className={module.footer}></div>
        
      </div>
    </div>
  );
};

export default Ander;
