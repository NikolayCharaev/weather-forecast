import React from 'react'

const Card = (props) => {
  return (
    <div className='cart__item'>
        
        <p>{props.day}</p>
        <p>{props.feelsLike}</p>
        <p>{props.weather} </p>
    </div>
  )
}

export default Card
