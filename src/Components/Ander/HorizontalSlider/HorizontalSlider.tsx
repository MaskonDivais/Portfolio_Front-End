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
  { id: 1, image: './Images/Albom/Dog_2.jpg', caption: 'Urban Echoes', names: 'Snoop Dogg'},
  { id: 2, image: './Images/Albom/PostMalone.jpg', caption: 'Midnight Serenade', names: 'Post Malone' },
  { id: 3, image: './Images/Albom/Timbrtlake_2.jpg', caption: 'Neon Dreamscape', names: 'Timberlake' },
  { id: 4, image: './Images/Albom/Wekend.jpg', caption: 'Rhythm of the City', names: 'The Weekend' },
  { id: 5, image: './Images/Albom/Shakira_2.jpg', caption: 'Soulful Skies', names: 'Shakira' },
  { id: 6, image: './Images/Albom/Eninem.jpg', caption: 'Jazz Horizons', names: 'Eminem' },
  { id: 7, image: './Images/Albom/Elvis_3.jpg', caption: 'Electric Reverie', names: 'Elvis Presley' },
  { id: 8, image: './Images/Albom/Drake.jpg', caption: 'Blue Velvet Groove', names: 'Drake' },
  { id: 9, image: './Images/Albom/Bili_2.jpg', caption: 'Northern Lights Harmonies', names: 'Billie Eilish' },
  { id: 10, image: './Images/Albom/50Cent.jpg', caption: 'Whiskey River Reflections ', names: '50 Cent' },
  { id: 11, image: './Images/Albom/PostMalone_2.jpg', caption: 'Golden Sunset Melodies', names: 'Post Malone' },
  { id: 12, image: './Images/Albom/Timbrtlake.jpg', caption: 'Southern Comfort Serenity', names: 'Timberlake ' },
  { id: 13, image: './Images/Albom/PostMalone_2.jpg', caption: 'Celestial Jazz Chronicles', names: 'Post Malone' },
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
      <button className={styles.prevBtn} onClick={handlePrev}>❮</button>
      <button className={styles.nextBtn} onClick={handleNext}>❯</button>
    </div>
  );
};

export default HorizontalSlider;