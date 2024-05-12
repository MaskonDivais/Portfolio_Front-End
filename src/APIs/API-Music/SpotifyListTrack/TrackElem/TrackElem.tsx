import React from 'react';
import module from './TrackElem.module.css';

interface TrackProps {
  track: {
    id: string;
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
    duration_ms?: number; // Making duration_ms optional
  };
}

const TrackElem: React.FC<TrackProps> = ({ track }) => {
  // Function to convert milliseconds to minutes and seconds format
  const formatDuration = (duration_ms: number): string => {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  };

  // Function to truncate text if it exceeds a certain length
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  // Checking if track.duration_ms is defined, if not, default to 0
  const duration_ms = track.duration_ms || 0;

  return (
    <div className={module.Track}>
      <img className={module.StyleImg} src={track.album.images[0].url} alt="Album Cover" />
      <div className={module.Details}>
        <h3 className={module.StyleH3}>{truncateText(track.name, 20)}</h3>
        <p className={module.StyleP}>{track.artists.map(artist => truncateText(artist.name, 20)).join(', ')}</p>
        <p className={module.Duration}>{formatDuration(duration_ms)}</p>
      </div>
    </div>
  );
};

export default TrackElem;
