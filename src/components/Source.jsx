import React, { useState } from "react";
import "../styles/App.css";

export default function Source(props) {
  const handleChange = (e) => {
    props.setMessage(e.target.value);
  };
  return (
    <div id="from">
      <label htmlFor="from">From</label>
      <br />
      <input
        type="text"
        id="source" className="dropdown"
        onChange={handleChange}
        value={props.message}
        placeholder="Enter Source"
        // defaultValue={"kolkata"}
      />
      <div className="dropdown-content">
        <p>jaipur</p>
      </div>
    </div>
  );
}