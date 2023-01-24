import React, {useState} from 'react'
import '../styles/App.css';
import Navbar from "../components/Navbar";
import Form from "../components/Form";
// import BusDetail from './BusDetail';



  const App = () => {
    const [response1, setResponse1] = useState([]);
  
    async function busData(data) {
      
      try {
        const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${data.source}&destination=${data.destination}&date=${data.date}`;
        const api = await fetch(url);
        const response = await api.json(); // [{},{},{},{}]
        if (response[0].id) {
          setResponse1(response);
          
        }
      } catch (err) {
        console.log(err);
       
      }
    }
  
    //handling form data
    function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      console.log("1", formData);
      const formJson = Object.fromEntries(formData.entries());
      busData(formJson);
      console.log(formJson);
    }

  return (
  <div id="main">
      <Navbar/> 
      <Form handle={handleSubmit} data={response1}/> 
    
  </div>
  
 )
}


export default App;
