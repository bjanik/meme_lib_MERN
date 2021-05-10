import React from 'react';
import '../login_register/login.css';


function Update_password() {
  
  return( 
    <div className="global_container">
      <div id='form_container'>

            <h2 className="title">Change password</h2>

        <form id="login_form" action="POST">
          <div className="form_group">
          <label htmlFor="password">Current password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" type="password" placeholder="Enter your current password" name="current_password" required />
          </div>
          <div className="form_group">
          <label htmlFor="new_password">New password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" type="password" placeholder="Enter your new password" name="new_password" required />
          </div>
          <div className="form_group">
          <label htmlFor="password">Confirm new password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" type="password" placeholder="Confirm your new password" name="confirm_new_password" required />
          </div>
          <div className="form_group">
            <input className="form_input" type="submit" value="Change password"/>
          </div>
        </form>
      </div>
    </div>
           );
         
}


export default Update_password;