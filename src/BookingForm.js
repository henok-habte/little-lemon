import { useState } from "react";
import {validateEmail} from "./utils";
import "./bookingForm.css"
import { Link } from "react-router-dom";


export default function ReservationForm(props) {
  const [fName, setFName] = useState({value:"" , isTouched:false});
  const [lName, setLName] = useState({value:"" , isTouched:false});
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState({value:"" , isTouched:false});
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  

  const ErrorMessage = () => {
    return (
      <p className="FieldError">This field should have at least 2 characters</p>
    );
   };

   const TelErrorMessage = () => {
    return (
      <p className="FieldError">Telephone number should have at least 10 numbers</p>
    ); 
   };

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const getIsFormValid = () => {
    return (
      fName &&
      validateEmail(email)
    );
  };

  const clearForm = () => {
    setFName({value:"", isTouched:false});
    setLName({value:"", isTouched:false});
    setEmail("");
    setTel({value:"", isTouched:false});
    setPeople(1);
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="contain">
      <div className="head">
        <h1>Make a Reservation </h1>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fName">First Name <sup>*</sup> </label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName.value}
          onChange={(e) => setFName({...fName, value: e.target.value})}
          onBlur={() => {
            setFName({ ...fName, isTouched: true });
          }}
        ></input>
        {fName.isTouched && fName.value.length < 2? (
             <ErrorMessage />
           ) : null}
      </div>

      <div>
        <label htmlFor="lName">Last Name <sup>*</sup> </label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          required
          minLength={2}
          maxLength={50}
          value={lName.value}
          onChange={(e) => setLName({...lName, value:e.target.value})}
          onBlur={() => {
            setLName({ ...lName, isTouched: true });
          }}
        ></input>
        {lName.isTouched && lName.value.length < 2? (
             <ErrorMessage />
           ) : null}
      </div>

      <div>
        <label htmlFor="email">Email <sup>*</sup> </label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number <sup>*</sup> </label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel.value}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel({...tel, value:e.target.value})}
          onBlur={() => {
            setTel({ ...tel, isTouched: true });
          }}
        ></input>
        {tel.isTouched && tel.value.length < 10 ? (
             <TelErrorMessage/>
           ) : null}
      </div>

      <div>
        <label htmlFor="people">Number of People <sup>*</sup> </label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={25}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date <sup>*</sup> </label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time <sup>*</sup> </label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
        <br></br>
        <small>
          <p className="notice">
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
          <Link to="/Confirmation"><button className="bookingButton" type="submit" disabled={!getIsFormValid()}>
             Book a Table
             </button>
          </Link>

    </form>
    </div>

  );
}
