import React, { useState } from 'react';
import './ButtonStyle.css';
import { useTheme } from '../../ThemeContext';

const ButtonSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <label className="switch-label" htmlFor="switchMode">
        <input
          id="switchMode"
          type="checkbox"
          name="checkbox"
          className="switch"
          onChange={toggleTheme}
        />
        <div className="switch-button"></div>
      </label>
    </div>
  );
};

export default ButtonSwitch;
