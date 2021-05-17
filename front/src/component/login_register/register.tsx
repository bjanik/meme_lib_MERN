import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';






function Register() {
  
  const [user, setUser] = useState({ email :'', nickname:'', password:'', confirmPassword:""});
  console.log(user)


    function handleChange(event) {
      const value = event.target.value;
      setUser({
          ...user,
          [event.target.name]: value
        });
      }

    function handleSubmit(event) {
      console.log(user);
      event.preventDefault();
      if (user.password === user.confirmPassword) {
        axios.post('https://api-bameme.azurewebsites.net/register', user)
          .then(response => console.log(response));
      } else {
        alert("password not matching !");
      }
      
    }
  
  return( 
    <div className="global_container">
    <div id='form_container'>

          <h2 className="title">Register</h2>

      <form id="login_form" onSubmit={handleSubmit} action="POST">
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input className="form_input" type="email" name="email" onChange={handleChange}    placeholder="Enter your email" required/>
        </div>
        <div className="form_group">
          <label htmlFor="nickname">Nickname</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{4,20}' type="text" onChange={handleChange}  name="nickname" placeholder="Enter your nickname" required />
        </div>
        <div className="form_group">
        <label htmlFor="password">Password</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{10,32}' type="password" onChange={handleChange} placeholder="Enter your password" name="password" required/>
        </div>
        <div className="form_group">
        <label htmlFor="confirm_password">Confirm password</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{10,32}' type="password" onChange={handleChange} placeholder="Re-enter your password" name="confirmPassword" required/>
        </div>
        <div className="form_group">
          <input className="form_input" type="submit" value="+1"/>
        </div>

        <p className="form_link">Already registered ? <Link className="" to="/login">Login !</Link></p>
      </form>
    </div>
  </div>
           );
         
}


export default Register;