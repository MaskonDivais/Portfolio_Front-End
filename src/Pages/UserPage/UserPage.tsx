import React, { useState } from 'react'
import Menu from '../../Components/Menu/Menu'
import module from "../UserPage/UserPage.module.css"

const UserPage = () => {
  const slideTitles = [
    'Main Page',
    'Player',
    'Actual News',
    'Technical Support',
    'Personal Area'
  ];

  const [activeSlide, setActiveSlide] = useState<number>(4);

  return (
    <div className={module.Conteiner}>
      <Menu slideTitle={slideTitles[activeSlide]} />
      <div className={module.ConteinerElems}>

        <div className={module.RightElem}>
          <div className={module.MyInfo}></div>
          <div className={module.MyList}></div>
          <div className={module.MyLink}></div>
        </div>
        <div className={module.LeftElem}>
          <div className={module.MyAlbum}></div>
          <div className={module.MyTreack}></div>
          <div className={module.MyRecomended}></div>
        </div>
      </div>
    </div>
  )
}

export default UserPage