import React from 'react';
import { format, parseISO } from 'date-fns';
import module from './Album.module.css';

interface AlbumProps {
  album: {
    id: string;
    name: string;
    release_date: string;
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

const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
};

const Album: React.FC<AlbumProps> = ({ album }) => {

  return (
    <div className={module.Container}>
      <img className={module.StyleImg} src={album.images[0].url} alt={album.name} />
      <p className={module.StyleP}>{truncateText(album.name, 20)}</p>
      <div className={module.StyleCont}>
        <p className={module.StylePA}>{truncateText(album.artists[0].name, 20)}</p>
        <p className={module.StylePD}>{formatDate(album.release_date)}</p>
      </div>

    </div>
  );
};

export default Album;
