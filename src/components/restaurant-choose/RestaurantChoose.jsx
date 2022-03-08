import React from 'react'
import './restaurant-choose.css'

const RestaurantChoose = () => {
  return (
    <div className="container restaurant-choose__container">
       <label htmlFor="search" className="search__label">
           <input type="text" className="search__input" placeholder='Search for restaurant or cuisine'/>
        </label>
        <ul className='restaurant-choose'>
            
        </ul>
    </div>
  )
}

export default RestaurantChoose