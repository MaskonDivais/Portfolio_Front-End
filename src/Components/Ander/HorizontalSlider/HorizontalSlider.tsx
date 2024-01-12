import React, { useState } from 'react';
import module from './HorizontalSlider.module.css';

const slidesData = [
  { id: 1, imageUrl: 'url_1.jpg', title: 'Название 1' },
  { id: 2, imageUrl: 'url_2.jpg', title: 'Название 2' },
  { id: 3, imageUrl: 'url_3.jpg', title: 'Название 3' },
  { id: 4, imageUrl: 'url_4.jpg', title: 'Название 4' },
  { id: 5, imageUrl: 'url_5.jpg', title: 'Название 5' },
  { id: 6, imageUrl: 'url_6.jpg', title: 'Название 6' },
  { id: 7, imageUrl: 'url_7.jpg', title: 'Название 7' },
  { id: 8, imageUrl: 'url_8.jpg', title: 'Название 8' },
  { id: 9, imageUrl: 'url_9.jpg', title: 'Название 9' },
  { id: 10, imageUrl: 'url_10.jpg', title: 'Название 10' },
];

const itemsPerPage = 5;

const HorizontalSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setStartIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    } else if (direction === 'prev') {
      setStartIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    }
  };

  return (
    <div className={module.container}>
      <div className={module.wrapper}>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${module.slide} ${index >= startIndex && index < startIndex + itemsPerPage ? module.visible : ''}`}
          >
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            <p>{slide.title}</p>
          </div>
        ))}
      </div>
      <button className={module.arrow} onClick={() => handleArrowClick('prev')}>
        Назад
      </button>
      <button className={module.arrow} onClick={() => handleArrowClick('next')}>
        Вперед
      </button>
    </div>
  );
};

export default HorizontalSlider;