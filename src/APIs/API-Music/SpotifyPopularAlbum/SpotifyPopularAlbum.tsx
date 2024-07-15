import React, { useEffect, useState } from 'react';
import module from './SpotifyPopularAlbum.module.css';
import Album from './Album/Album';

interface AlbumInfo {
  id: string;
  name: string;
  artists: { name: string }[];
  images: { url: string }[];
}

const CLIENT_ID = "955e45726e0a420cbf69c089775c0762";
const CLIENT_SECRET = "8a8d7cde24ab4f67ba15d588748fa26b";

const getAlbumsFromStorage = (): AlbumInfo[] => {
  const albumsString = sessionStorage.getItem('albums');
  if (albumsString) {
    return JSON.parse(albumsString);
  } else {
    return [];
  }
};


const saveAlbumsToStorage = (albums: AlbumInfo[]) => {
  sessionStorage.setItem('albums', JSON.stringify(albums));
};

const fetchPopularAlbums = async (accessToken: string): Promise<AlbumInfo[]> => {
  try {
    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    });
    const data = await response.json();
    
    return data.albums.items;
    
  } catch (error) {
    console.error('Error fetching popular albums:', error);
    return [];
  }
};

const PopularAlbumSlider: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumInfo[]>(getAlbumsFromStorage());
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (!albums.length) {
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
          setAccessToken(accessToken);
          fetchPopularAlbums(accessToken).then(items => {
            setAlbums(items);
            saveAlbumsToStorage(items); // Save albums to session storage
          });
          console.log(data.result);
        });  
    }
  }, [albums]);

  return (
    <div className={module.Container}>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default PopularAlbumSlider;
