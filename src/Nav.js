import React from 'react'
import branch from '../src/icons_assets/Logo .svg'

function Nav() {
  return (
    <nav>
        <figure>
        <img src={branch} width={250} height={150}/>
        </figure>
        <ul>
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