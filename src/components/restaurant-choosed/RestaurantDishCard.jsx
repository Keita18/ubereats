import React from 'react'
import '../restaurants/restaurant-card.css'
import './restaurant-dish-card.css'

const RestaurantDishCard = (props) => {
    return (
        <li>
            <a href="" className='card card-dish'>
                <div className="card__content">
                    <div className='card-header__wrapper'>
                        <span className='card__name card__title'>{props.title}</span>
                        <span className=' card__cuisine card__descriptio'>{props.description}</span>
                    </div>
                    <span className='card__time card__price'>{props.price}</span>
                </div>
                <img src={props.img} alt="" className='card__img-dish' />
            </a>
        </li>
    )
}

export default RestaurantDishCard