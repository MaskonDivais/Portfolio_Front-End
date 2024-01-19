import React, { useState } from 'react';
import '../StyleGlobal/Dark.css';
import '../StyleGlobal/Light.css';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <button className={isDarkTheme ? 'darkButton' : 'lightButton'} onClick={toggleTheme}>
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;