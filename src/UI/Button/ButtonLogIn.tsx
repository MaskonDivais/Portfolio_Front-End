import React from 'react';
import module from './Style/Button.module.css';
import { useTheme } from '../../Components/ThemeContext';
import "../../Components/StyleGlobal/Light.css";
import "../../Components/StyleGlobal/Dark.css";
import { Link } from 'react-router-dom';

const LogIn = () => {
  const { isDarkTheme } = useTheme();
  const login = isDarkTheme ? 'login_w' : 'login_d';

  return (
    <Link to={'/user'}>
    <div className={module.Out}><div className={`${login} ${module['log']}`}/></div></Link>
  );
};

export default LogIn;
