import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';






function Register() {
  
  return( 
    <div className="global_container">
    <div id='form_container'>

          <h2 className="title">Register</h2>

      <form id="login_form" action="POST">
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input className="form_input" type="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div className="form_group">
          <label htmlFor="nickname">Nickname</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{4,20}' type="text" name="nickname" placeholder="Enter your nickname" required />
        </div>
        <div className="form_group">
        <label htmlFor="password">Password</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{10,32}' type="password" placeholder="Enter your password" name="password" required/>
        </div>
        <div className="form_group">
        <label htmlFor="confirm_password">Confirm password</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{10,32}' type="password" placeholder="Re-enter your password" name="confirm_password" required/>
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