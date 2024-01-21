import React from 'react'
import module from '../Play/Play.module.css'
import ListTrek from '../Play/ListTrek/ListTrek'
import { useTheme } from '../ThemeContext';
import "../StyleGlobal/Dark.css"
import "../StyleGlobal/Light.css"

const Play = () => {
  const { isDarkTheme } = useTheme();


  const container = isDarkTheme ? 'st_container_w' : 'st_container_d';

  return (
    <div className={container}>
        <div className={module.fon}>
        <ListTrek/>
        </div>
    </div>
  )
}

export default Play