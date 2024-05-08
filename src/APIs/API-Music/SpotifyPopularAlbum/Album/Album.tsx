import React from 'react';
import module from './Album.module.css';

interface AlbumProps {
  album: {
    id: string;
    name: string;
    images: { url: string }[];
  };
}

const Album: React.FC<AlbumProps> = ({ album }) => {
  if (album.images.length === 0) {
    return null; 
  }

  return (
    <div className={module.Container}>
      
      <img className={module.StyleImg}src={album.images[0].url} alt={album.name} />
      <p className={module.StyleP}>{album.name}</p>
    </div>
  );
};

export default Album;
