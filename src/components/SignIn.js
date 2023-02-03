import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password, setPassword]=useState("");

   const handleSubmit = () =>{
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
   console.log(localStorage.getItem("email"))
   alert("You Are SignUp Sucessfully Please Login Now");
   
   }
  
    return (
    
      <div className="data-container">
    <div className="login-up-form">
    <h1>SignUp</h1>
    <form action="">
    <label htmlFor="name">Name</label>
    <input type="text" className="input-box" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <label htmlFor="email">Email</label>
    <input type="email" className="input-box"  placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label htmlFor="password">Password</label>
    <input type="password" className="input-box"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <p><span><input type="checkbox"/></span>I agree to the term of services</p>
    <button type="button" onClick={handleSubmit} className="login-btn">Submit</button>
    <div>Already have an account?<Link to="/login">Login Here</Link></div>

    </form>

     
      
    </div>
    
    </div>
  )
}

export default SignIn;
