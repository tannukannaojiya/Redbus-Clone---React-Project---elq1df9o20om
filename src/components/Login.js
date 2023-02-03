
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login =() =>{
  const navigate = useNavigate();

  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 
 
 const handleSubmit = () =>{
  let semail = localStorage.getItem("email")
  let spassword = localStorage.getItem("password")
  
 console.log(localStorage.getItem("email"))
 if(email === semail && password === spassword){
  alert("Login");
  navigate("/");
 }else{
  alert("Invalid password");

 }
}
return (
    <div className="data-container">
    <div className="login-up-form">
    <h1>Login</h1>
    <form action="">
   
    <label htmlFor="email1">Email</label>
    <input type="email" className="input-box"  placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
   
  <label htmlFor="password1">Password</label>
    <input type="password" className="input-box"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <p><span><input type="checkbox"/></span>I agree to the term of services</p>
   
    <button type="button" onClick={handleSubmit} className="login-btn">Submit</button>
    <p>Not have an account?<Link to="/signIn">SignIn Here</Link>  </p>
    </form>
     </div>
    </div>
  )
}

export default Login;
