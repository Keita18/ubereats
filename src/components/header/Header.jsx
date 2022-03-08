import React from 'react'
import './header.css'
import Basket from '../../assets/header/basket.svg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <a href="" className="logo"></a>
        <div className="delivery-terms__container">
          <button className="btn delivery-terms__time">ASAP</button>
          <span className="delivery-terms__span">to</span>
          <label htmlFor="search" className="delivery-terms__label">
            <input type="text" className="delivery-terms__input" placeholder='Your Location' />
          </label>
        </div>
        <div className="authorization-options__container">
          <button className="btn authorization-options">Sign In</button>
          <button className="btn authorization-options--register">Register</button>
          <a href="">
            <img src={Basket} alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header