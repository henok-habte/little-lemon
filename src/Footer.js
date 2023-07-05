import React from 'react';
import './footer.css';
import img from './icons_assets/logo-white.png'

function Footer() {
  return (
    <footer className='container'>
      <div>
        <img src={img} alt='greenish logo'/>
      </div>
      <div>
        <h3>Doormat Navigation</h3>
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Reservations</p>
        <p>Order Online</p>
        <p>Login</p>
      </div>
      <div>
        <h3>Contact information</h3>
        <p>Address: 678 Pisa Ave, Chicago, IL 60611</p>
        <p>Phone Number: (312) 593-2744</p>
        <p>Email: customer@littlelemon.com</p>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <p>Facebook: </p>
        <p>Twitter: </p>
        <p>Instagram: </p>
      </div>
    </footer>
  )
}

export default Footer;