import React from 'react'
import module from './Menu.module.css';
import AnderButton from '../../UI/Button/AnderButton';
import ButtonLogInLogIn from '../../UI/Button/ButtonLogIn';
import { useTheme } from '../../Components/ThemeContext';
import "../../Components/StyleGlobal/Light.css";
import "../../Components/StyleGlobal/Dark.css";

interface MenuProps {
  slideTitle: string;
}

const Menu: React.FC<MenuProps> = ({ slideTitle }) => {
  const { isDarkTheme } = useTheme();
  const lin = isDarkTheme ? 'linked_w' : 'linked_d';
  const git = isDarkTheme ? 'github_w' : 'github_d';
  const ins = isDarkTheme ? 'instag_w' : 'instag_d';



  return (
    <div className={module.conteiner}>
      <div className={module.Logo} />
      <div className={module.lineV2} />
      <AnderButton />
      <div className={module.lineV2} />

      <div className={module.ConteinerForm}>
        <form className={module.Form} action="search_results.html" method="GET">
          <input className={module.InputSearch} type="text" name="q" placeholder="Search..."></input>
          <div className={module.OutB}><button className={module.ButtonSearch} type="submit" /></div>
        </form>
      </div>

      <div className={module.ContTitleSlide}>
        <div className={module.Line} />
        <div className={module.TitleSlide}>{slideTitle}</div>
        <div className={module.Line} />
      </div>

      <div className={module.IconList}>
        <a href='https://github.com/MaskonDivais' target="_blank" rel="noopener"><div className={module.Out}><div className={`${git} ${module['icon']}`}/></div></a>
        <a href='https://www.linkedin.com/in/alexander-doroshkevich/' target="_blank" rel="noopener"><div className={module.Out}><div className={`${lin} ${module['icon']}`}/></div></a>
        <a href='https://www.instagram.com/alex_reasonable/?igshid=ZDdkNTZiNTM%3D' target="_blank" rel="noopener"><div className={module.Out}><div className={`${ins} ${module['icon']}`}/></div></a>
      </div>

      <div className={module.lineV2} />

      <ButtonLogInLogIn />
    </div>
  )
}

export default Menu