import React from 'react'
import './restaurant-header.css'

const RestaurantHeader = () => {
    return (
        <div className='resto__header'>
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
        </div>
    )
}

export default RestaurantHeader