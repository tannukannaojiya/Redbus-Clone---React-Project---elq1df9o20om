import React from "react";
import { useNavigate } from "react-router-dom";
export const Booked = () => {
  const nav = useNavigate();
  const from = localStorage.getItem("From");
  const to = localStorage.getItem("To");
  const time = localStorage.getItem("Arrival");
  const seat = localStorage.getItem("seatNum");
  return (
    <div className="booking">
      {/* <Loader visible={true} /> */}
      <div className="seatNo">
        <h2>Total Number of seats: {seat}</h2>
      </div>

      <div className="total">
        <h2 className="msg animate__backInUp">
          Total Tickets Price: {localStorage.getItem("TotalPrice")}.00 INR
        </h2>
      </div>
      <div className="fromto">
        <h3>
          {from} &rarr; {to}
        </h3>
        <h3>Bus will depart at {time}.</h3>
      </div>
      <div className="thanksgiving">
        <h2>Thank You for choosing Red Bus.</h2>
      </div>
      <div className="notification">
        <h4>Your Tickets will be generated within 2 hours.</h4>
      </div>
      <div className="backbtn">
        <button onClick={() => nav("/")}>Back to home</button>
      </div>
    </div>
  );
};