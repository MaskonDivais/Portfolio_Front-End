import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'
import AnderButton from './Button/AnderButton';

import "../StyleGlobal/Dark.css"
import "../StyleGlobal/Light.css"

import { useTheme } from '../ThemeContext.js';

const Ander: React.FC = () => {

  const { isDarkTheme } = useTheme();

  const paragraphClass = isDarkTheme ? 'fon_w' : 'fon_d';
  const stlAU = isDarkTheme ? 'ItemAuthor_w' : 'ItemAuthor_d';
  const stlIC_1 = isDarkTheme ? 'ItemIcon1_w' : 'ItemIcon1_d';
  const stlIC_2 = isDarkTheme ? 'ItemIcon2_w' : 'ItemIcon2_d';
  const stlIC_3 = isDarkTheme ? 'ItemIcon3_w' : 'ItemIcon3_d';
  const ItemLogo = isDarkTheme ? 'FooterLogo_w' : 'FooterLogo_d';

  return (
    <div className={module.container}>
      <div className={paragraphClass}>
        <div className={module.slider}><HorizontalSlider/></div>

        <div className={module.contfooter}>
          <div className={module.footer}>
            <div className={module.ContButton}><AnderButton/></div>
            <div className={module.Author}>
              <div className={stlAU}></div>
            </div>
            <div className={module.FIcon}>
              <div className={stlIC_1}></div>
              <div className={stlIC_2}></div>
              <div className={stlIC_3}></div>
              <p className={module.fp3}>These social media links are provided for informational purposes to provide you with an opportunity to meet the creator.</p>
            </div>

            <div className={module.ContCopi}>
              <p className={module.fp1}>This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer.</p>
              <div className={module.FooterLogo}><div className={ItemLogo}></div></div>
              <p className={module.fp2}>All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Ander;
