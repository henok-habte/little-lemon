import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import img1 from './icons_assets/restauranfood.jpg'
import img2 from './icons_assets/greek salad.jpg'
import img3 from './icons_assets/bruchetta.svg'
import img4 from './icons_assets/lemon dessert.jpg'
import abtimg from './icons_assets/Mario and Adrian A.jpg'
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
            <button><Link className='link' to="/Bookingpage">Book a Table</Link></button>
          </article>
          <img src={img1}/>
        </section>
        <section class="first-sec">
          <h2>This Weeks Special!</h2>
          <button id="button">Online Menu</button>
          <article>
            <img src={img2}/>
            <h3>Greek Salad</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
          </article>
          <article>
            <img src={img3}/>
            <h3>Bruschetta</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
          </article>
          <article>
            <img src={img4}/>
            <h3>Lemon Dessert</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim quasi pariatur repellat eius tempore nemo, quo animi dolores quibusdam magni maiores molestias error in dolor magnam, exercitationem voluptates necessitatibus!</p>
          </article>
        </section>
        <section class="second-sec">
          <h2>Customer Review</h2>
          <article>
            <img src="./img/2.png"/>
            <h3>Ling Long</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>
          <article>
            <img src="./img/2.png"/>
            <h3>Betty Lee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>
          <article>
            <img src="./img/2.png"/>
            <h3>Jason Mamoa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae, dolorem consequatur veniam consectetur in eos excepturi laborum mollitia sequi, quod sint, quae eaque! Magnam eos mollitia numquam? Tenetur, sit!</p>
          </article>
          <article>
            <img src="./img/2.png"/>
            <h3>Ekram Mason</h3>
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
          <img src={abtimg}/>
        </section>
      </main>

  );
}

export default Main;