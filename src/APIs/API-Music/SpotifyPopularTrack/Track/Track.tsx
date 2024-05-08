import React from 'react';
import module from './Track.module.css';

interface TrackProps {
  track: {
    id: string;
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
  };
}

const Track: React.FC<TrackProps> = ({ track }) => {
  return (
    <div className={module.Track}>
      <img className={module.StyleImg} src={track.album.images[0].url} alt="Album Cover" />
      <div className={module.Details}>
        <h3>{track.name}</h3>
        <p>Artists: {track.artists.map(artist => artist.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default Track;
