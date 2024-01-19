import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'
import AnderButton from './UI/Button/AnderButton';

const Ander: React.FC = () => {

  return (
    <div className={module.container}>
      <div className={module.fon}>
        <div className={module.slider}><HorizontalSlider/></div>
        <div className={module.footer}>
          <div className={module.ContButton}><AnderButton/></div>
          <div className={module.Author}></div>
          <div className={module.FIcon}></div>

          <p className={module.fp1}></p>
          <div className={module.FooterLogo}></div>
          <p className={module.fp2}></p>
        </div>
      </div>
    </div>
  );
};

export default Ander;
