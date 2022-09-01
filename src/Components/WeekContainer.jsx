import React from 'react';
import axios from 'axios';
import Card from './Card';

const WeekContainer = () => {
  axios
    .get(
      'https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&units=metric&APPID=962b73ad890b3c8ecb33b4d8a002d014',
    )
    .then((data) => data.data.list)
    .then((item) => {
     const oneWeather = item.filter((elem) => elem.dt_txt.includes('18:00:00'));
      console.log(oneWeather);
    });

  return <div>
  ]
  </div>;
};

export default WeekContainer;
