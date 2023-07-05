import Nav from "./Nav"
import ReservationForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./bookingsAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Nav/>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
