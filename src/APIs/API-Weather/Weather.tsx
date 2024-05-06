import React, { useState, useEffect } from 'react';
import axios from 'axios';
import module from '../API-Weather/Weather.module.css';

interface WeatherData {
  name?: string;
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather?: { main: string }[];
  wind?: { speed: number };
}

const Weather: React.FC = () => {

  const [data, setData] = useState<WeatherData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedWeatherData = localStorage.getItem('weatherData');
        if (storedWeatherData) {
          setData(JSON.parse(storedWeatherData));
        } else {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const locationResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=21e35559e35694a23a1d86db5ab07e71`);

              const cityName = formatCityName(locationResponse.data.name);

              const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=21e35559e35694a23a1d86db5ab07e71`);

              setData(weatherResponse.data);
              localStorage.setItem('weatherData', JSON.stringify(weatherResponse.data));
              console.log("Response...");
            });
          } else {
            console.log("Geolocation is not available...");
          }
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const fahrenheitToCelsius = (fahrenheit: number) => {
    return (fahrenheit - 32) * (5/9);
  };

  const formatCityName = (name: string) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className={module.ConteinerAPI}>
      {data.name &&
        <div className={module.Conteiner}>
          <div className={module.Top}>
            <div className={module.Location}>
              <p className={module.Bold}>{formatCityName(data.name)}</p>
            </div>
            <div className={module.Temp}>
              {data.main ? <h1 className={module.H}>{fahrenheitToCelsius(data.main.temp).toFixed()}°C</h1> : null}
            </div>
            <div className={module.Description}>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
            <div className={module.Bottom}>
              <div className={module.Feels}>
                {data.main ? <p className={module.Bold}>{fahrenheitToCelsius(data.main.feels_like).toFixed()}°C</p> : null}
                <p className={module.P}>FEELS</p>
              </div>
              <div className={module.Humidity}>
                {data.main ? <p className={module.Bold}>{data.main.humidity}%</p> : null}
                <p className={module.P}>HUMIDITY</p>
              </div>
              <div className={module.Wind}>
                {data.wind ? <p className={module.Bold}>{data.wind.speed.toFixed()} MPH</p> : null}
                <p className={module.P}>WIND</p>
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Weather;
