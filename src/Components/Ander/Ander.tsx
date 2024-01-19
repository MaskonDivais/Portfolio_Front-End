import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'
import AnderButton from './UI/Button/AnderButton';

const Ander: React.FC = () => {

  return (
    <div className={module.container}>
      <div className={module.fon}>

        <div className={module.slider}><HorizontalSlider/></div>

        <div className={module.contfooter}>
          <div className={module.footer}>
            <div className={module.ContButton}><AnderButton/></div>
            <div className={module.Author}></div>
            <div className={module.FIcon}></div>

            <p className={module.fp1}>This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer.</p>
            <div className={module.FooterLogo}></div>
            <p className={module.fp2}>All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Ander;
