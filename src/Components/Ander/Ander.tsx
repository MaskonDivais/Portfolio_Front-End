import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'
import AnderButton from '../../UI/Button/AnderButton';

import "../StyleGlobal/Dark.css"
import "../StyleGlobal/Light.css"

import { useTheme } from '../ThemeContext.js';
import TecnicalServise from '../../UI/Form/TechnicalService';
import Weather from '../../APIs/API-Weather/Weather';
import SpotifyPopularTrack from '../../APIs/API-Music/SpotifyPopularTrack/SpotifyPopularTrack';

const Ander: React.FC = () => {

  const { isDarkTheme } = useTheme();

  const paragraphClass = isDarkTheme ? 'fon_w' : 'fon_d';
  const stlAU = isDarkTheme ? 'ItemAuthor_w' : 'ItemAuthor_d';
  const stlIC_1 = isDarkTheme ? 'ItemIcon1_w' : 'ItemIcon1_d';
  const stlIC_2 = isDarkTheme ? 'ItemIcon2_w' : 'ItemIcon2_d';
  const stlIC_3 = isDarkTheme ? 'ItemIcon3_w' : 'ItemIcon3_d';
  const ItemLogo = isDarkTheme ? 'FooterLogo_w' : 'FooterLogo_d';
  const container = isDarkTheme ? 'container_w' : 'container_d';

  
  return (
    <div className={container}>
      <div className={paragraphClass}>
        
        <div className={module.ContMap}>
          <TecnicalServise/>
        </div>

        <div className={module.contfooter}><div className={module.footer}>
            <div className={module.Author}><div className={stlAU}/></div>
           
            <div className={module.Links}>
              <a className={module.A} href="https://www.linkedin.com/in/alexander-doroshkevich/" target="_blank" rel="noopener"><div className={module.ElemLinks}><div className={`${module['Icon']} ${module['IconLInked']}`}/><div className={module.A}>LinkedIn</div></div></a>
              <a className={module.A} href="https://github.com/MaskonDivais" target="_blank" rel="noopener"><div className={module.ElemLinks}><div className={`${module['Icon']} ${module['IconGit']}`}/><div className={module.A}>GitHub</div></div></a>
              <a className={module.A} href="https://leetcode.com/u/doroshkevichgraf/" target="_blank" rel="noopener"><div className={module.ElemLinks}><div className={`${module['Icon']} ${module['IconLeet']}`}/><div className={module.A}>LeetCode</div></div></a>
              <a className={module.A} href="https://www.instagram.com/alex_reasonable/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noopener"><div className={module.ElemLinks}><div className={`${module['Icon']} ${module['IconInst']}`}/><div className={module.A}>Instagram</div></div></a>
       
            </div>

            <div className={module.Navi}><Weather/></div>
            <div className={module.NewItem}>
              <SpotifyPopularTrack/>
            </div>

            <div className={module.ContCopi}>
              <p className={module.fp1}>&copy; MasFlex 2024 All rights reserved. This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
            </div>

        </div></div>


      </div>
    </div>
  );
};

export default Ander;
