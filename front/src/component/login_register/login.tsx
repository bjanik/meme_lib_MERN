import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';







function Login() {
  
  return( 
    <div className="global_container">
      <div id='login_container'>

            <h2 className="title">Login</h2>

        <form id="login_form" action="POST">
          <div className="form_group">
            <label htmlFor="nickname">Nickname</label>
            <input className="form_input" type="text" name="nickname" placeholder="Enter your nickname" id=""/>
          </div>
          <div className="form_group">
          <label htmlFor="password">Password</label>
            <input className="form_input" type="password" placeholder="Enter your password" name="password" id=""/>
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