import React, { useEffect, useState } from 'react';
import module from './SpotifyListTrack.module.css';
import Track from '../../../APIs/API-Music/SpotifyPopularTrack/Track/Track';
import TrackElem from './TrackElem/TrackElem';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string, images: { url: string }[] };
  duration_ms: number;
}

const CLIENT_ID = "955e45726e0a420cbf69c089775c0762";
const CLIENT_SECRET = "8a8d7cde24ab4f67ba15d588748fa26b";

const fetchPopularTracks = async (accessToken: string): Promise<Track[]> => {
  try {
    const response = await fetch('https://api.spotify.com/v1/recommendations?limit=100&seed_genres=pop', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    });
    const data = await response.json();
    console.log(data);
    return data.tracks.map((track: any) => ({
      id: track.id,
      name: track.name,
      artists: track.artists.map((artist: any) => ({ name: artist.name })),
      album: {
        name: track.album.name,
        images: track.album.images.map((image: any) => ({ url: image.url }))
      },
      duration_ms: track.duration_ms
    }));
  } catch (error) {
    console.error('Error fetching popular tracks:', error);
    return [];
  }
};

const SpotifyListTrack: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 18; // Количество треков для отображения за раз

  useEffect(() => {
    const storedTracks = sessionStorage.getItem('tracks');
    if (storedTracks) {
      setTracks(JSON.parse(storedTracks));
    } else {
      var authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      };

      fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => {
          const accessToken = data.access_token;
          fetchPopularTracks(accessToken).then(items => {
            setTracks(items);
            sessionStorage.setItem('tracks', JSON.stringify(items));
          });
        });
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < tracks.length - itemsToShow ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : tracks.length - itemsToShow));
  };

  const visibleTracks = tracks.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className={module.verticalSliderContainer}>
      <div className={module.verticalSlider}>
        {visibleTracks.map((track) => (
          <TrackElem key={track.id} track={track} />
        ))}
      </div>
      <button className={module.prevBtn} onClick={handlePrev}>{'❮'}</button>
      <button className={module.nextBtn} onClick={handleNext}>{'❯'}</button>
    </div>
  );
};

export default SpotifyListTrack;
