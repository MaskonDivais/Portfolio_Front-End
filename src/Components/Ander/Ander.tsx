import React from 'react'
import module from '../Ander/Andre.module.css'
import HorizontalSlider from './HorizontalSlider/HorizontalSlider'

const Ander: React.FC = () => {
  const images = [
    'cont_4_w.png',
    'cont_4_w.png',
    // Add more image paths as needed
  ];

  return (
    <div className={module.container}>
      <div className={module.fon}>
        <HorizontalSlider images={images} /> {/* Provide the images prop here */}
      </div>
    </div>
  );
};

export default Ander;
