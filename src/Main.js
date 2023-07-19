import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import img1 from './icons_assets/restauranfood.jpg'
import img2 from './icons_assets/greek salad.jpg'
import img3 from './icons_assets/bruchetta.svg'
import img4 from './icons_assets/lemon dessert.jpg'
import abtimg from './icons_assets/Mario and Adrian A.jpg'
import customer1 from './icons_assets/customer1.jpg'
import customer2 from './icons_assets/customer2.jpg'
import customer3 from './icons_assets/customer3.jpg'
import customer4 from './icons_assets/customer4.jpg'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const priceStyle ={
  display: 'inline',
  color: '#EE9972',
  textAlign: 'right',
  paddingRight: '10pt',
}

const foodItem = {
  display: 'inline',
  textAlign: 'start',
}

function Main() {
  return (
    <main class="grid-container">


        <section class="main-sec">
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Reiciendis error consequuntur vero harum eum facilis quos quisquam eligendi sapiente, fugit, in atque delectus rerum totam libero quas repellat voluptas quo?
            </p>
            <Link className='link' to="/Bookingpage"> <button>Book a Table</button> </Link>
          </article>
          <img src={img1} alt='food'/>
        </section>


        <section class="first-sec">
          <h2>This Weeks Special!</h2>
           <Link className='link' to="/menu"><button id="button"> Online Menu </button></Link> 

          <article class="card">
            <img src={img2} alt='Salad'/>
            <h3 style={foodItem}>Greek Salad</h3> <p style={priceStyle}>$ 8.99</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
            <Link className='orderlink' to='/orderonline'> <h4>Order a Delivery <FontAwesomeIcon icon={faMotorcycle} /></h4> </Link> 
          </article>

          <article class='card'>
            <img src={img3} alt='Bruschetta'/>
            <h3 style={foodItem}>Bruschetta</h3>  <p style={priceStyle}>$ 6.99</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
            <Link className='orderlink' to='/orderonline'> <h4>Order a Delivery <FontAwesomeIcon icon={faMotorcycle} /></h4> </Link>
          </article>

          <article class='card'>
            <img src={img4} alt='Lemon Dessert'/>
            <h3 style={foodItem}>Lemon Dessert</h3>  <p style={priceStyle}>$ 11.99</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
            <Link className='orderlink' to='/orderonline'> <h4>Order a Delivery <FontAwesomeIcon icon={faMotorcycle} /></h4> </Link>
          </article>
        </section>


        <section class="second-sec">
          <h2>Customer Review</h2>

          <article class="card2">
            <img src={customer1} alt='customer'/>
            <h3>Maria Gonzalez</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>

          <article class="card2">
            <img src={customer2} alt='customer'/>
            <h3>Eric james</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>

          <article class="card2">
            <img src={customer3} alt='customer'/>
            <h3>Precious Johnson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>

          <article class="card2">
            <img src={customer4} alt='customer'/>
            <h3>Roger Wu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>

        </section>


        <section class="third-sec">
          <h2>About Restaurant</h2>
          <article>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa omnis quod totam, tempore, soluta minus distinctio odit eaque ducimus aliquam! Reiciendis suscipit molestias sit. Voluptatum voluptatibus vel suscipit unde.</p>
          </article>
          <img src={abtimg} alt='Little Lemon Logo'/>
        </section>
      </main>

  );
}

export default Main;