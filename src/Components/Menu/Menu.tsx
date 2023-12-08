import React from 'react';
import module from './Menu.module.css';

const Menu = () => {
  return (
    <div className={module.container}>
      <div className={module.logotip}>
        <img src="" alt="Logotip"/>
      </div>
      <div className={module.element_list}>
        <div className={module.elem}>Main</div>
        <div className={module.elem}>Catalog</div>
        <div className={module.elem}>Forum</div>
        <div className={module.elem}>About Us</div>
      </div>
      <div className={module.authorization}>
        <img src="" alt="Authorization"/>
      </div>
      <div className={module.basket}>
        <img src="" alt="Basket"/>
      </div>
    </div>
  )
}

export default Menu