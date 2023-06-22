import React from 'react'
import branch from '../src/icons_assets/Logo .svg'
import './nav.css';

function Nav() {
  return (
    <nav className='nav'>
        <ul>
            <li className='logo'><img src={branch} /></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav;