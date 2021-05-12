import React, { useState } from 'react';
import '../login_register/login.css';
import axios from 'axios';


function Update_password() {

  const [user, setUser] = useState({ password :'', newPassword:'', confirmNewPassword:''});
  console.log(user)

    function handleChange(event) {
      const value = event.target.value;
      setUser({
          ...user,
          [event.target.name]: value
        });
      }


    function handleSubmit(event) {
      // user.id = "609b895fe2722b001ef5440c"
      console.log(user);
      event.preventDefault();
          if (user.newPassword === user.confirmNewPassword) {
            axios.post('https://api-bameme.azurewebsites.net/resetPassword', user)
              .then(response => console.log(response));
          } else {
            alert("password not matching !");
          }
          
    };
      
  
  return( 
    <div className="global_container">
      <div id='form_container'>

            <h2 className="title">Change password</h2>

        <form id="login_form" onSubmit={handleSubmit} action="POST">
          <div className="form_group">
          <label htmlFor="password">Current password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" onChange={handleChange} type="password" placeholder="Enter your current password" name="password" required />
          </div>
          <div className="form_group">
          <label htmlFor="new_password">New password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" onChange={handleChange} type="password" placeholder="Enter your new password" name="newPassword" required />
          </div>
          <div className="form_group">
          <label htmlFor="password">Confirm new password</label>
            <input className="form_input" pattern="[a-zA-Z0-9]{10,32}" onChange={handleChange} type="password" placeholder="Confirm your new password" name="confirmNewPassword" required />
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