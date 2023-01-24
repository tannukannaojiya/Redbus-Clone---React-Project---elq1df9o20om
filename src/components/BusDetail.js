import React from 'react'
import "./busDetail.css"

const BusDetail = ({response1, setResponse1, response2, setResponse2 }) => {
  const handleShow =()=>{
    console.log(response1, response2);
  }
  return (
    <div className="bus-list">
      <div className="bus-details">
      {
        response1 && response1.map((user)=>(
            <div className="bus-data">
                <div>BusName- {user.busName}</div>
                <div>ArrivalTime- {user.arrivalTime}</div>
                <div>DepartureTime- {user.departureTime}</div>
                <div>Rating- 9/10</div>
                <div>Price- {user.ticketPrice}</div>
                 <div>
                 <button onClick={handleShow}>VIEW</button>
                 </div>
            </div>
        ))
      }
      
    </div>
    </div>
    
  )
}

export default BusDetail
