import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { useState } from 'react';

const WeekContainer = () => {
  const city = 'Moscow';
  const [data, setData] = useState([]);
  React.useEffect(() => {
    async function fetchWeather() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=3ac01cc58fb1a0851dd845d47e02307d`,
          )
          .then((elem) => {
            const oneWeather = elem.data.list.filter((elem) => elem.dt_txt.includes('18:00:00'));
            console.log(oneWeather);
            setData(oneWeather);
          });
      } catch (err) {
        console.log(`Произошла ошибка :( Код ошибки ${err}`);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <h1 className="title">{`Сity ​​weather forecast ${city}`}</h1>
      <div className="cart">
        {data.map((elem, key) => {
          console.log(elem.main.feels_like);
          return (
            <Card
              key={key}
              day={elem.dt_txt}
              feelsLike={Math.round(elem.main.feels_like)}
              weather={elem.weather[0].description}
   
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekContainer;
