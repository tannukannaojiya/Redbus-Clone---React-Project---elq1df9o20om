import React from "react";
import "../styles/App.css";

export default function Destination(props) {
  const handleChange = (e) => {
    props.setToMessage(e.target.value);
  };
  return (
    <div id="to">
      <label htmlFor="to">To</label>
      <br />
      <input
        type="text"
        id="destination" className="dropdown"
        onChange={handleChange}
        value={props.toMessage}
        placeholder="Enter Destination"
        // defaultValue={"bhubaneswar"}
      />
      <div className="dropdown-content">
        <p>delhi</p>
      </div>
    </div>
  );
}