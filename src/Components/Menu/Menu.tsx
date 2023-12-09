import React from 'react';
import module from './Menu.module.css';

const Menu = () => {
  return (
    <div className={module.container}>
      <div className={module.logotip}>
        <img className={module.logotip_elem} src="./Images/Logotip.png" alt="Logotip"/>
      </div>
      <div className={module.element_list}>
        <div className={module.elem}>Main</div>
        <div className={module.elem}>Catalog</div>
        <div className={module.elem}>Сontacts</div>
        <div className={module.elem}>Forum</div>
        <div className={module.elem}>About Us</div>
      </div>
      <div className={module.authorization}>
        <img className={module.authorization_elem}src="./Images/Authorization.png" alt="Authorization"/>
      </div>
      <div className={module.basket}>
        <img className={module.basket_elem}src="./Images/Basket.png" alt="Basket"/>
      </div>
    </div>
  )
}

export default Menu