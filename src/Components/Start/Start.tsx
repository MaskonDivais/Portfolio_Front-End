import React from 'react'
import module from '../Start/Start.module.css'
import VerticalSlider from './VerticalSlider/VerticalSlider'
import { useTheme } from '../ThemeContext';
import "../StyleGlobal/Dark.css"
import "../StyleGlobal/Light.css"
import HorizontalSlider from '../Ander/HorizontalSlider/HorizontalSlider';

const Start = () => {
  const { isDarkTheme } = useTheme();

  const fon = isDarkTheme ? 'startfon_w' : 'startfon_d';
  const container = isDarkTheme ? 'st_container_w' : 'st_container_d';

  return (
    <div className={container}>
        <div className={fon}>
          <div className={module.content}>
            <h1 className={module.H1}>MASFLEX</h1>
            <p className={module.P1}>This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
          </div>
          <HorizontalSlider/>

        </div>
    </div>
  )
}

export default Start