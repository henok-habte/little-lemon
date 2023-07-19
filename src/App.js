import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import {Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Reservation from './Reservation';
import Login from './Login';
import OnlineOrder from './OnlineOrder';
import Confirmation from './Confirmation';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className='content' >
      <ScrollToTop/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Bookingpage' element={<BookingPage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/Bookingpage' element={<BookingPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orderonline' element={<OnlineOrder/>} />
      <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
