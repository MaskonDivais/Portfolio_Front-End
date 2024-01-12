import React from 'react'
import module from '../Start/Start.module.css'
import VerticalSlider from './VerticalSlider/VerticalSlider'


const Start = () => {
  return (
    <div className={module.container}>
        <div className={module.fon}>
          <div className={module.content}>
            <h1 className={module.H1}>MASFLEX</h1>
            <p className={module.P1}>This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.</p>
          </div>
          <VerticalSlider/>

        </div>
    </div>
  )
}

export default Start