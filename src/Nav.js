import React, { useState } from 'react'
import branch from '../src/icons_assets/logo.png'
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = ()=>{
    setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <div>
      <nav className='nav'>
        <ul className='hamburgerExp'>
            <li><img src={branch} /></li>
            <li><NavLink aria-label='home' className='link-nav' to="/">Home</NavLink></li>
            <li><NavLink aria-label='about' className='link-nav' to="/about">About</NavLink></li>
            <li><NavLink aria-label='menu' className='link-nav'to="/menu">Menu</NavLink></li>
            <li><NavLink aria-label='bookingpae' className='link-nav' to="/Bookingpage">Reservations</NavLink></li>
            <li><NavLink aria-label='orderonline' className='link-nav' to="/orderonline">Order Online</NavLink></li>
            <li><NavLink aria-aria-label='login' className='link-nav' to="/login">Login</NavLink></li>
        </ul>
        <div className='hamburger' onClick={toggleHamburger}>
        <HamburgerMenu isOpen={hamburgerOpen}/>
        </div>
    </nav>
    <style jsx>
      {`
      .nav{
        background-color:#edefee;
        font-family: "Marakazi Text";
        font-size: 20pt;
    }
    .hamburger{
      display: none;
    }
    .nav ul{
        display: flex;
        /* grid-template-columns: repeat(7, 1fr); */
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        margin: 0 auto;
        list-style-type: none;
        padding-top: 12px;
        text-decoration: none;

    }
    .link-nav{
        color: #495e57;
        text-decoration: none;
    }
    .link-nav:hover{
        color:#f4ce14 ;
    }
    .active{
        color:#f4ce14;
    }
    .nav ul li{
        justify-self: center;
        align-self: center;
    }

    .nav img{
        grid-column: 1/3;
        line-height: 0;
        justify-self: start;
        align-self: center;
        max-width: 15.625rem;
    }


    @media screen and (max-width: 980px){
      .hamburger{
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 10;
    }
        .nav ul{
          display: ${hamburgerOpen?'inline': 'none'};
          background-color: #edefee;
          papdding-top: 10pt;
          height: 50vh;
          width: 50vw;
          margin-top: 10px;
          position: absolute;
        }

    }
      `}
    </style>
    </div>
    
  )
}

export default Nav;