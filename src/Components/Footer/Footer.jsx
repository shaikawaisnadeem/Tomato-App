import React, { use } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import ReactContext from '../../Context/Context'
const Footer = () => {
const {toggleTheme} = use(ReactContext)
  return (
    <div className={toggleTheme ? 'footerRight' : 'footer'} id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci! Perspiciatis suscipit voluptates ducimus, error quia harum voluptate! Sit blanditiis quibusdam, perspiciatis ab delectus vitae obcaecati nobis ipsa optio ad!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-345-678-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © Tomoto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer