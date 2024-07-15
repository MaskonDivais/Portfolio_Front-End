import React from 'react';
import module from './Album.module.css';

interface AlbumProps {
  album: {
    id: string;
    name: string;
    artists: { name: string }[]; 
    images: { url: string }[];
  };
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const Album: React.FC<AlbumProps> = ({ album }) => {

  return (
    <div className={module.Container}>
      <img className={module.StyleImg} src={album.images[0].url} alt={album.name} />
      <p className={module.StyleP}>{truncateText(album.name, 20)}</p>
      <p className={module.StylePA}>{truncateText(album.artists[0].name, 20)}</p>
    </div>
  );
};

export default Album;
