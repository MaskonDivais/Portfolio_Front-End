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
            <div className={module.Author}>
              <img className={module.ItemAuthor} src="/Images/Icon/iconauthor.png" alt="" />
            </div>
            <div className={module.FIcon}>
              <img className={module.ItemIcon1} src="/Images/Icon/iconid.png" alt="" />
              <img className={module.ItemIcon2} src="/Images/Icon/icongit.png" alt="" />
              <img className={module.ItemIcon3} src="/Images/Icon/iconinst.png" alt="" />
              <p className={module.fp3}>These social media links are provided for informational purposes to provide you with an opportunity to meet the creator.</p>
            </div>

            <div className={module.ContCopi}>
              <p className={module.fp1}>This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer.</p>
              <div className={module.FooterLogo}><img className={module.ItemLogo} src="/Images/Icon/Logo_vert_2.png" alt="" /></div>
              <p className={module.fp2}>All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Ander;
