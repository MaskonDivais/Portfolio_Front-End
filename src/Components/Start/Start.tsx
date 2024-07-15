import React from 'react';
import module from '../Start/Start.module.css';
import { useTheme } from '../ThemeContext';
import SpotifyPopularAlbum from '../../APIs/API-Music/SpotifyPopularAlbum/SpotifyPopularAlbum';
import ButtonStart from '../../UI/Button/ButtonStart/ButtonStarm';

interface StartProps {
  setActiveSlide: (slide: number) => void;
}

const Start: React.FC<StartProps> = ({ setActiveSlide }) => {
  const { isDarkTheme } = useTheme();

  const fon = isDarkTheme ? 'startfon_w' : 'startfon_d';
  const container = isDarkTheme ? 'st_container_w' : 'st_container_d';

  return (
    <div className={container}>
      <div className={`${fon} ${module['startfon']}`}>
        <div className={module.content}>
          <h1 className={module.H1}>MASFLEX</h1>
          <p className={module.P1}>
            This application is an audio player designed for personal use and to provide information about the programming level and design abilities of the developer. All rights reserved. The content of this application is used for educational purposes only and cannot be used for commercial purposes.
          </p>
          
          <div className={module.buttons}>
            <ButtonStart onClick={() => setActiveSlide(0)}>Main Page</ButtonStart>
            <ButtonStart onClick={() => setActiveSlide(1)}>Player</ButtonStart>
            <ButtonStart onClick={() => setActiveSlide(2)}>Actual News</ButtonStart>
            <ButtonStart onClick={() => setActiveSlide(3)}>Technical Support</ButtonStart>
          </div>
          <div className={module.Pidps} />
        </div>

        <div className={module.ContainerPopularList}>
          <h1 className={module.H2}>Popular Albums</h1>
          <SpotifyPopularAlbum />
        </div>
      </div>
    </div>
  );
}

export default Start;
