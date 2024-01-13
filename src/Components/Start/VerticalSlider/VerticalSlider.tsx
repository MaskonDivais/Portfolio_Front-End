// VerticalSlider.tsx
import React, { useState } from 'react';
import styles from './VerticalSlider.module.css';

interface SliderItem {
  image: string;
  caption: string;
}

const sliderItems: SliderItem[] = [
  { image: 'image1.jpg', caption: 'Название 1' },
  { image: 'image2.jpg', caption: 'Название 2' },
  { image: 'image2.jpg', caption: 'Название 2' },
  { image: 'image2.jpg', caption: 'Название 2' },
  { image: 'image2.jpg', caption: 'Название 2' },
  // Добавьте другие элементы по аналогии
];

const VerticalSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1));
  };

  return (
    <div className={styles.verticalSliderContainer}>
      <div className={styles.verticalSlider} style={{ transform: `translateY(-${currentIndex * 20}%)` }}>
        {sliderItems.map((item, index) => (
          <div key={index} className={styles.sliderItem}>
            <img src={item.image} alt={`Изображение ${index + 1}`} />
            <div className={styles.caption}>{item.caption}</div>
          </div>
        ))}
      </div>
      <button className={styles.prevBtn} onClick={handlePrev}>&#8743;</button>
      <button className={styles.nextBtn} onClick={handleNext}>&#8744;</button>
    </div>
  );
};

export default VerticalSlider;
