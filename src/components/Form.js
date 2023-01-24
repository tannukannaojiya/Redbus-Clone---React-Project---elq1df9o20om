import React from "react";
import axios from 'axios';
import {BsArrowLeftRight} from "react-icons/bs";
import "./form.css";


const Form = (props) => {


 return (
    <section className="main-container" >
      <form className="main-path" method="post" onSubmit={props.handle}>
      <input type="text" id="from" className="source" name="source" placeholder="From"/>
      <BsArrowLeftRight className="swap-icon"/>
      <input type="text" id="to" className="destination" name="destination" placeholder="To"/>
      <input type="date" name="date" className="date" id="bus-book-date" />
      <button type="button" className="search-btn">SEARCH BUSES</button>
    </form>
    </section>
    

  );
  };

export default Form;
