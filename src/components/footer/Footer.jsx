import React from 'react'
import './footer.css'
import BtnUp from '../../assets/footer/btn-up.png'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__wrapper">
                <a href="" className="footer__logo"></a>
                <div className="footer__nav">
                    <div className="footer__em">
                        <h1>Bonjour</h1>
                    </div>
                    <ul className="footer__em">
                        <li><a href="">About UberEats</a></li>
                        <li><a href="">Become a Delivery Partner</a></li>
                        <li><a href="">Become a Restaurant Partner</a></li>
                    </ul>
                    <ul className="footer__em">
                        <li><a href="">See all cities</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </div>
                <div className="store__apps">
                    <a href="" className='app__store'></a>
                    <a href="" className='play__store'></a>
                </div>
                <div className="footer__rules">
                    <span>© 2017 Uber Technologies Inc.</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer