import React from 'react'
import './restaurant-choosed.css'
import RestaurantDishCard from './RestaurantDishCard'
import DisH1 from '../../assets/restaurant-contents/dish-1.png'
import DisH2 from '../../assets/restaurant-contents/dish-2.png'
import DisH3 from '../../assets/restaurant-contents/dish-3.png'
import DisH4 from '../../assets/restaurant-contents/dish-4.png'
import DisH5 from '../../assets/restaurant-contents/dish-5.png'
import DisH6 from '../../assets/restaurant-contents/dish-6.png'

const RestaurantHeader = () => {
    return (
        <div className='resto'>
            <div className="resto-preview__bg">
                <div className="resto-preview__wrapper">
                    <div className="resto-preview">
                        <span className="resto-preview__title">Трактир «Пушкин»</span>
                        <div className="resto-preview__footer">
                            <span className="resto-preview__price">₽₽₽ • Европейская</span>
                            <span className="resto-preview__time">40 - 50 Min</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="resto-menu__nav">
                <ul className="resto-menu">
                    <li className="resto-menu__em">Закуски</li>
                    <li className="resto-menu__em">Салаты</li>
                    <li className="resto-menu__em">Супы</li>
                    <li className="resto-menu__em">Горячие блюда</li>
                    <li className="resto-menu__em">Гарниры</li>
                    <li className="resto-menu__em">Десерты</li>
                </ul>
            </nav>
            <div className='resto-dishes__wrapper'>
                <div className="resto-dishes">
                    <span className="resto-dish__type">Закуски</span>
                    <ul className="resto-dish__cards">
                        <RestaurantDishCard title="Сельдь на бородинском хлебе " description="С яйцом и огурцом" price="240 ₽" img={DisH1} />
                        <RestaurantDishCard title="Грибы маринованные" description="" price="300 ₽" img={DisH2} />
                        <RestaurantDishCard title="Соленья ассорти" description="" price="320 ₽" img={DisH3} />
                        <RestaurantDishCard title="Сало домашнее с горчицей" description="" price="320 ₽" img={DisH4} />
                        <RestaurantDishCard title="Малосольная семга" description="" price="390 ₽" img={DisH5} />
                        <RestaurantDishCard title="Язык говяжий с хреном" description="" price="350 ₽" img={DisH6} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantHeader