import React from 'react';
import module from './Style/Button.module.css';
import { useTheme } from '../../Components/ThemeContext';
import "../../Components/StyleGlobal/Light.css";
import "../../Components/StyleGlobal/Dark.css";

const LogIn = () => {
  const { isDarkTheme } = useTheme();
  const login = isDarkTheme ? 'login_w' : 'login_d';

  return (
    <div className={module.Out}><div className={`${login} ${module['log']}`}/></div>
  );
};

export default LogIn;
