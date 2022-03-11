import React from 'react'
import './restaurant-card.css'
import { Link } from "react-router-dom"

const Restaurant = (props) => {
    return (
        <li>
            <Link to="/restaurant">
                <a href="" className='card'>
                    <img src={props.img} alt="" className='card__img' />
                    <span className='card__name'>{props.name}</span>
                    <span className='card__cuisine'>{props.cuisine}</span>
                    <span className='card__time'>{props.time}</span>
                </a>
            </Link>
        </li>
    )
}

export default Restaurant