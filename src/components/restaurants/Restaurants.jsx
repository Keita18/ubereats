import React from 'react'
import './restaurants.css'
import Restaurant from './RestaurantCard'
import Macdo from '../../assets/restaurants/MCdonalds.png'
import DimSum from '../../assets/restaurants/Dimsum.png'
import DvizOk from '../../assets/restaurants/DvikOk.png'
import HaNha from '../../assets/restaurants/HaNha.png'
import Toshka from '../../assets/restaurants/Toshka.png'
import Cinnabon from '../../assets/restaurants/Cinnabon.png'
import Pizzelove from '../../assets/restaurants/Pizzelove.png'
import Zy from '../../assets/restaurants/Zy.png'
import Barbq from '../../assets/restaurants/Barbq.png'

const RestaurantChoose = () => {
    return (
        <div className="container restaurant-choose__container">
            <label htmlFor="search" className="search__label">
                <input type="text" className="search__input" placeholder='Search for restaurant or cuisine' />
            </label>
            <span className='restaurant-choose__city'>Moscow Restaurants</span>
            <ul className='restaurant-choose'>
                <Restaurant img={Macdo} name="Макдоналдс — Газетный" cuisine="₽₽ • Бургеры" time="25 - 35 Min"/>
                <Restaurant img={DimSum} name="DimSum & Co — ЦДМ" cuisine="₽ • Японская • Китайская • Азиатская" time="40 - 50 Min"/>
                <Restaurant img={DvizOk} name="ДвижОК — Манежная" cuisine="₽ • Американская • Европейская" time="35 - 45 Min"/>

                <Restaurant img={HaNha} name="НЯ — NHA" cuisine="₽₽ • Бургеры" time="25 - 35 Min"/>
                <Restaurant img={Toshka} name="Точка Дзы — Цветной" cuisine="₽ • Японская • Китайская • Азиатская" time="40 - 50 Min"/>
                <Restaurant img={Cinnabon} name="Cinnabon" cuisine="₽ • Американская • Европейская" time="35 - 45 Min"/>

                <Restaurant img={Pizzelove} name="PIZZELOVE" cuisine="₽₽ • Бургеры" time="25 - 35 Min"/>
                <Restaurant img={Zy} name="Zю кафе — Тверская" cuisine="₽ • Японская • Китайская • Азиатская" time="40 - 50 Min"/>
                <Restaurant img={Barbq} name="Bar BQ Cafe — Манежная" cuisine="₽ • Американская • Европейская" time="35 - 45 Min"/>
            </ul>
        </div>
    )
}

export default RestaurantChoose