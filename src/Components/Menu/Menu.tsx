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



  return (
    <div className={module.conteiner}>
      <AnderButton />

      
      <div className={module.ConteinerForm}>
        <form className={module.Form} action="search_results.html" method="GET">
          <input className={module.InputSearch} type="text" name="q" placeholder="Search"></input>
          <button className={module.ButtonSearch} type="submit"/>
        </form>
      </div>


      <div className={`${git} ${module['icon']}`} />
      <div className={`${lin} ${module['icon']}`} />
      <div className={`${ins} ${module['icon']}`} />

      <div className={module.lineV2} />

      <ButtonLogInLogIn />
    </div>
  )
}

export default Menu