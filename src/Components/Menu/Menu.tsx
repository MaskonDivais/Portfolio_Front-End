import React from 'react'
import module from './Menu.module.css';
import AnderButton from '../../UI/Button/AnderButton';
import ButtonLogInLogIn from '../../UI/Button/ButtonLogIn';
import { useTheme } from '../../Components/ThemeContext';
import "../../Components/StyleGlobal/Light.css";
import "../../Components/StyleGlobal/Dark.css";

const Menu = () => {
    const { isDarkTheme } = useTheme();
    const git = isDarkTheme ? 'linked_w' : 'linked_d';
    const lin = isDarkTheme ? 'github_w' : 'github_d'; 
    const ins = isDarkTheme ? 'instag_w' : 'instag_d'; 
    const log = isDarkTheme ? 'logotip_w' : 'logotip_d';   

  return (
    <div className={module.conteiner}>
        <div className={`${log} ${module['logotip']}`}/>
        <AnderButton/>

        <div className={`${git} ${module['icon']}`}/>
        <div className={`${lin} ${module['icon']}`}/>
        <div className={`${ins} ${module['icon']}`}/>

        <ButtonLogInLogIn/>
    </div>
  )
}

export default Menu