import React from 'react';
import './footer.css';
import img from './icons_assets/logo-white.png'
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
  return (
    <footer className='container'>
      <div>
        <img src={img} alt='greenish logo'/>
      </div>
      <div className='doormat-link'>
        <h3>Doormat Navigation</h3>
        <p><Link aria-label='home' className='link-nav2' to="/">Home</Link></p>
        <p><Link aria-label='about' className='link-nav2' to="/about">About</Link></p>
        <p><Link aria-label='menu' className='link-nav2'to="/menu">Menu</Link></p>
        <p><Link aria-label='bookingpage' className='link-nav2' to="/Bookingpage">Reservations</Link></p>
        <p><Link aria-label='orderonline' className='link-nav2' to="/orderonline">Order Online</Link></p>
        <p><Link aria-label='login' className='link-nav2' to="/login">Login</Link></p>
      </div>
      <div>
        <h3>Contact information</h3>
        <p><FontAwesomeIcon className='icons' icon={faLocationDot} size='1x'/>: 678 Pisa Ave, Chicago, IL</p>
        <p><FontAwesomeIcon className='icons' icon={faPhone} size='1x'/>: (312) 593-2744</p>
        <p><FontAwesomeIcon className='icons' icon={faEnvelope} size='1x'/>: customer@littlelemon.com</p>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <p><a aria-label='facebook' href='www.facebook.com'> <FontAwesomeIcon className='icons' icon={faFacebook} size='2x'/> </a></p>
        <p><a aria-label='twitter' href='www.twitter.com'> <FontAwesomeIcon className='icons' icon={faTwitter} size='2x'/> </a></p>
        <p><a aria-label='instagram' href='www.instagram.com'> <FontAwesomeIcon className='icons' icon={faInstagram} size='2x'/> </a></p>
      </div>
    </footer>
  )
}

export default Footer;