import React from 'react'
import './restaurant.css'

const Restaurant = (props) => {
    return (
        <li>
            <a href="" className='card'>
                <img src={props.img} alt="" className='card__img'/>
                <span className='card__name'>{props.name}</span>
                <span className='card__cuisine'>{props.cuisine}</span>
                <span className='card__time'>{props.time}</span>
            </a>
        </li>
    )
}

export default Restaurant