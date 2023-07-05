import React from 'react'
import branch from '../src/icons_assets/logo.png'
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
        <ul>
            <li><img src={branch} /></li>
            <li><Link className='link-nav' to="/">Home</Link></li>
            <li><Link className='link-nav' to="/about">About</Link></li>
            <li><Link className='link-nav'to="/menu">Menu</Link></li>
            <li><Link className='link-nav' to="/Bookingpage">Reservations</Link></li>
            <li><Link className='link-nav' to="/orderonline">Order Online</Link></li>
            <li><Link className='link-nav' to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;