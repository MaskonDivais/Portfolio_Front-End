import React, { useState } from 'react'
import module from '../Play/Play.module.css'
import ListTrek from '../Play/ListTrek/ListTrek'
import { useTheme } from '../ThemeContext';
import "../StyleGlobal/Dark.css"
import "../StyleGlobal/Light.css"

const Play = () => {
  const { isDarkTheme } = useTheme();


  const container = isDarkTheme ? 'st_container_w' : 'st_container_d';



  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState('Track Name');
  const [trackImage, setTrackImage] = useState('/path/to/default/image.jpg');

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // Implement logic to play the next track
  };

  const prevTrack = () => {
    // Implement logic to play the previous track
  };

  return (
    <div className={container}>
        <div className={module.fon}>
          <div className={module.Track}>
            <img className={module.TrackImage} src={trackImage} alt="Track" />
            <h2>{trackName}</h2>
            <div>
              <button className={module.Previous} onClick={prevTrack}>Previous</button>
              <button className={module.PlayPause}onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
              <button  className={module.Next}onClick={nextTrack}>Next</button>
            </div>
          </div>
          <ListTrek/>
        </div>
    </div>
  )
}

export default Play