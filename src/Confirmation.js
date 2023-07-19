
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minHeight: '31.25rem',
    padding: '1.875rem 0 1.875rem 0',
    textAlign: 'center',
  
}

const textStyle = {
  color: '#495E57'
}

const ConfirmedBooking = () => {
  return (
    <div >
      <Nav/>
      <div style={style}>
      <FontAwesomeIcon icon={faCircleCheck} size="3x"  style={textStyle}/>
      <h2 style={textStyle}>Your reservation has been confirmed.</h2>
      <p style={textStyle}>You will receive an email with all the details.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ConfirmedBooking;

