import React, { useEffect, useState, useRef } from 'react';
import module from './SpotifyPopularTrack.module.css';
import Track from './Track/Track';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string, images: { url: string }[] };
  duration_ms: number; // Ensure duration_ms is included
}

const CLIENT_ID = "955e45726e0a420cbf69c089775c0762";
const CLIENT_SECRET = "8a8d7cde24ab4f67ba15d588748fa26b";

const fetchPopularTracks = async (accessToken: string): Promise<Track[]> => {
  try {
    const response = await fetch('https://api.spotify.com/v1/recommendations?limit=20&seed_genres=pop', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    });
    const data = await response.json();
    console.log(data);
    return data.tracks.map((track: any) => ({
      id: track.id,
      name: track.name.length > 20 ? track.name.substring(0, 20) + '...' : track.name,
      artists: track.artists.map((artist: any) => ({
        name: artist.name.length > 20 ? artist.name.substring(0, 20) + '...' : artist.name
      })),
      album: {
        name: track.album.name,
        images: track.album.images.map((image: any) => ({ url: image.url }))
      },
      duration_ms: track.duration_ms // Ensure duration_ms is included
    }));
  } catch (error) {
    console.error('Error fetching popular tracks:', error);
    return [];
  }
};

const PopularTrackSlider: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

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
            sessionStorage.setItem('tracks', JSON.stringify(items)); // Save tracks to sessionStorage
          });
        });
    }
  }, []);

  return (
    <div className={`${module.Container} ${module.VerticalSlider}`} ref={containerRef}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default PopularTrackSlider;
