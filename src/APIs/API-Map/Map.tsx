import React, { useEffect, useState } from 'react';
import module from './Map.module.css';

interface MapProps {
  apiKey: string;
}

const Map: React.FC<MapProps> = ({ }) => {
  const apiKey = "AIzaSyBOiK2HxErNkqvJxLnU5hp-AlxcXLoMn0g";

  const [mapConfig, setMapConfig] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   // Проверяем, есть ли сохраненная конфигурация карты в локальном хранилище
  //   const storedMapConfig = localStorage.getItem('savedMapConfig');
  //   if (storedMapConfig) {
  //     // Если конфигурация найдена, устанавливаем ее и состояние загрузки
  //     setMapConfig(JSON.parse(storedMapConfig));
  //     setLoading(false);

  //   } else {
  //     console.log('Response...');
  //     // Если конфигурация не найдена, выполняем функционал для загрузки карты
  //     const loadMapScript = () => {
  //       const script = document.createElement('script');
  //       script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  //       script.async = true;
  //       script.defer = false;

  //       // Добавляем обратный вызов для загрузки карты после полной загрузки скрипта Google Maps
  //       script.onload = () => {
  //         initializeMap();
  //       };

  //       document.body.appendChild(script);
  //     };

  //     const initializeMap = () => {
  //       const defaultMapConfig = {
  //         center: { lat: -25.344, lng: 131.031 },
  //         zoom: 4,
  //         mapId: '761c4108ee43b5ff',
  //         disableDefaultUI: true,
  //         gestureHandling: 'none',
  //         clickableIcons: false,
  //         keyboardShortcuts: false,
  //       };
  //       // Сохраняем конфигурацию карты в локальное хранилище
  //       localStorage.setItem('savedMapConfig', JSON.stringify(defaultMapConfig));
  //       // Устанавливаем конфигурацию карты и состояние загрузки
  //       setMapConfig(defaultMapConfig);
  //       setLoading(false);
  //     };

  //     loadMapScript();
  //   }
  // }, []);

  // Возвращаем компонент с картой, используя div с id "map" для отображения карты
  return (
    <div className={module.Conteiner} id="map">
      {loading ? <p>Loading...</p> : null}
    </div>
  );
};

export default Map;
