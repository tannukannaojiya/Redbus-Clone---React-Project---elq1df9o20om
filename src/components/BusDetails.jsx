import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BusDetails = ({ filter, data, data2, setShow }) => {
  const navigate = useNavigate();
  const [result, setResult]=useState(filter);
  const [isLoading, setIsLoading]=useState(false);
  function sortByName (){
    setIsLoading(true);
    console.log(filter);
   // filter[1].busName="abc";
    filter.sort((a,b)=>{
      return a.busName < b.busName ? 1 :-1;
    })
    setIsLoading(false);
  }
  
  
  return (
    <div id="bus-details">
      <div id="sortby">
        <div id="sort-text">
          <h1>SORT BY: </h1>
        </div>
        <div id="details-of-sorting">
          <div id="schedule">
            <button className="sort-btn" onClick={sortByName}>Name</button>
          </div>
          <div id="schedule">
            <button className="sort-btn">Departure</button>
          </div>
          <div id="schedule">
            <button className="sort-btn">Arrival</button>
          </div>
          <div id="schedule">
            <button className="sort-btn">Price</button>
          </div>
        </div>
      </div>

      <div id="bus-layer">
        {!isLoading&&filter &&
          filter.map((user, index) => (
            <div
              id="bus-list"
              onClick={() => {
                setShow(user);
                navigate("BusCard");
              }}
              key={index}
            >
              <div id="bus-list-schedule">
                <h3>{user.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {user.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {user.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Price {user.ticketPrice}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};