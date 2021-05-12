import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function Login() {
  
  const [user, setUser] = useState({ email :'', password:''});
  console.log(user)
  let history = useHistory();

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
      axios.post('https://api-bameme.azurewebsites.net/login', user)
        .then(response => {
          if(typeof(response.data) === 'object') {
            localStorage.setItem('token', response.data.token)
            history.push("/home");
            window.location.reload();
          }else {
            alert(response.data);
          }
        });
      };
  
  return( 
    <div className="global_container">
      <div id='form_container'>

            <h2 className="title">Login</h2>

        <form id="login_form" onSubmit={handleSubmit} action="POST">
          <div className="form_group">
            <label htmlFor="nickname">Email</label>
            <input className="form_input" onChange={handleChange} type="text" name="email" placeholder="Enter your nickname" required />
          </div>
          <div className="form_group">
          <label htmlFor="password">Password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" onChange={handleChange} type="password" placeholder="Enter your password" name="password" required />
          </div>
          <div className="form_group">
            <input className="form_input" type="submit" value="Login"/>
          </div>

          <p className="form_link">Don't Have An Account Yet? <Link className="" to="/register">Join us !</Link></p>
        </form>
      </div>
    </div>
           );
         
}


export default Login;