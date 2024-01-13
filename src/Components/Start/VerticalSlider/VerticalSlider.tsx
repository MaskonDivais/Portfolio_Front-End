// VerticalSlider.tsx
import React, { useState } from 'react';
import styles from './VerticalSlider.module.css';

interface SliderItem {
  id: number;
  image: string;
  names:string;
  caption: string;
}

const sliderItems: SliderItem[] = [
  { id: 1, image: './Images/Albom/Dog_2.jpg', caption: 'Название 1', names: 'Название 1'},
  { id: 2, image: './Images/Albom/PostMalone.jpg', caption: 'Название 2', names: 'Название 1' },
  { id: 3, image: './Images/Albom/Timbrtlake_2.jpg', caption: 'Название 3', names: 'Название 1' },
  { id: 4, image: './Images/Albom/Wekend.jpg', caption: 'Название 4', names: 'Название 1' },
  { id: 5, image: './Images/Albom/Shakira_2.jpg', caption: 'Название 5', names: 'Название 1' },
  { id: 6, image: './Images/Albom/Eninem.jpg', caption: 'Название 6', names: 'Название 1' },
  { id: 7, image: './Images/Albom/Elvis_3.jpg', caption: 'Название 7', names: 'Название 1' },
  { id: 8, image: './Images/Albom/Drake.jpg', caption: 'Название 8', names: 'Название 1' },
  { id: 9, image: './Images/Albom/Bili_2.jpg', caption: 'Название 9', names: 'Название 1' },
  { id: 10, image: './Images/Albom/50Cent.jpg', caption: 'Название 10', names: 'Название 1' },
  { id: 11, image: './Images/Albom/PostMalone_2.jpg', caption: 'Название 11', names: 'Название 1' },
  { id: 12, image: './Images/Albom/Timbrtlake.jpg', caption: 'Название 12', names: 'Название 1' },
  { id: 13, image: './Images/Albom/PostMalone_2.jpg', caption: 'Название 13', names: 'Название 1' },
 
];

const VerticalSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; // Количество видимых элементов

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < sliderItems.length - itemsToShow ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sliderItems.length - itemsToShow));
  };

  const getVisibleSliderItems = () => {
    return sliderItems.slice(currentIndex, currentIndex + itemsToShow);
  };

  return (
    <div className={styles.verticalSliderContainer}>
      <div className={styles.verticalSlider}>
        {getVisibleSliderItems().map((item) => (
          <div key={item.id} className={styles.sliderItem}>
            <img src={item.image} alt={`Изображение ${item.id}`} />
            <div className={styles.names}>{item.names}</div>
            <div className={styles.caption}>{item.caption}</div>
          </div>
        ))}
      </div>
      <button className={styles.prevBtn} onClick={handlePrev}>{'❮'}</button>
      <button className={styles.nextBtn} onClick={handleNext}>{'❯'}</button>
    </div>
  );
};

export default VerticalSlider;
