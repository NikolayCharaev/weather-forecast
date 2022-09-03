import React from 'react';

const Card = (props) => {
  return (
    <div className="cart__item">
      <p className="cart__item-day">{props.day}</p>
      <i>
        <img className={props.image} src={props.image} alt="" />
      </i>

      <p className="cart__item-temp">{props.feelsLike} ℃</p>
      <p className="cart__item-weather">{props.weather} </p>
    </div>
  );
};

export default Card;
