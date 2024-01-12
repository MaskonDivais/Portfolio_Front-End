import React, { useEffect, useState } from 'react';

interface HorizontalSliderProps {
  images: string[]; // Array of image URLs
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval as needed, or set to 0 to disable autoplay

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="mod_ext_horizontal_slider">
      <div className="horizontal-slider" style={{ position: 'relative', overflow: 'hidden' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, transition: 'transform 0.5s ease' }}>
          {images.map((imageUrl, index) => (
            <li
              key={index}
              style={{
                position: 'absolute',
                left: `${index * 100}%`,
                transition: 'left 0.5s ease',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={imageUrl}
                alt={`Slider Item ${index + 1}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
          ))}
        </ul>
        <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }}>
          Prev
        </button>
        <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
