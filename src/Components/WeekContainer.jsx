import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import debounce from 'lodash.debounce';
import { useState } from 'react';

const WeekContainer = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  const onChangeInput = debounce((event) => {
    setCity(event.target.value);
  }, 500);

  React.useEffect(() => {
    async function fetchWeather() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${
              city ? city : 'Moscow'
            }&lang=ru&units=metric&APPID=3ac01cc58fb1a0851dd845d47e02307d`,
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
  }, [city]);
  return (
    <div className="container">
      <div className="content__top">
        <h1 className="title">{`Прогноз погоды`}</h1>
        <form className="search__city" action="">
          <input
            className="search__city-input"
            type="text"
            placeholder="введите название города ( Москва по умолчанию )"
            onChange={onChangeInput}
          />
        </form>
      </div>

      <div className="cart">
        {data.map((elem, key) => {
          const ms = elem.dt * 1000;
          const weekdayName = new Date(ms).toLocaleString('ru', { weekday: 'long' });
          const imgURL = 'owf owf-' + elem.weather[0].id + ' owf-5x icon-style';

          return (
            <Card
              key={key}
              image={imgURL}
              day={weekdayName}
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
