import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <div className='content' >
      <div><Nav /></div>
      <div><Main /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
