// HorizontalSlider.tsx
import React, { useState } from 'react';
import styles from './HorizontalSlider.module.css';

interface SliderItem {
  id: number;
  image: string;
  names: string;
  caption: string;
}

const sliderItems: SliderItem[] = [
  { id: 1, image: 'image1.jpg', caption: 'Название 1', names: 'Название 1' },
  { id: 2, image: 'image2.jpg', caption: 'Название 2', names: 'Название 1' },
  { id: 3, image: 'image3.jpg', caption: 'Название 3', names: 'Название 1' },
  { id: 4, image: 'image4.jpg', caption: 'Название 4', names: 'Название 1' },
  { id: 5, image: 'image5.jpg', caption: 'Название 5', names: 'Название 1' },
  { id: 6, image: 'image6.jpg', caption: 'Название 6', names: 'Название 1' },
  { id: 7, image: 'image7.jpg', caption: 'Название 7', names: 'Название 1' },
  { id: 8, image: 'image8.jpg', caption: 'Название 8', names: 'Название 1' },
  { id: 9, image: 'image9.jpg', caption: 'Название 9', names: 'Название 1' },
  { id: 10, image: 'image10.jpg', caption: 'Название 10', names: 'Название 1' },
  { id: 11, image: 'image11.jpg', caption: 'Название 11', names: 'Название 1' },
  { id: 12, image: 'image12.jpg', caption: 'Название 12', names: 'Название 1' },
  { id: 13, image: 'image13.jpg', caption: 'Название 13', names: 'Название 1' },
  // Добавьте другие элементы по аналогии
];

const HorizontalSlider: React.FC = () => {
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
    <div className={styles.horizontalSliderContainer}>
      <div className={styles.horizontalSlider}>
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

export default HorizontalSlider;