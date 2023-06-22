import React from 'react'
import branch from '../src/icons_assets/Logo .svg'
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
        <ul>
            <li className='logo'><img src={branch} /></li>
            <li><Link className='link-nav' to="/">Home</Link></li>
            <li><Link className='link-nav' to="/about">About</Link></li>
            <li><Link className='link-nav'to="/menu">Menu</Link></li>
            <li><Link className='link-nav' to="/reservation">Reservations</Link></li>
            <li><Link className='link-nav' to="/orderonline">Order Online</Link></li>
            <li><Link className='link-nav' to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;