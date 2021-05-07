import React from 'react';
import "./upload.css";
import "../login_register/login.css";






function Upload() {
  
  return( 

    <div className="global_container">
    <div id='login_container'>

          <h2 className="title">Upload</h2>

      <form id="login_form" action="POST">
        <div className="form_group">
          <label htmlFor="upload">Upload</label>
          <input type="file" name="upload" id=""/>
          <p className="upload_requirement">Accepted format are : JPEG, PNG, GIF</p>
          <p className="upload_requirement">Max size: 5mb</p>
        </div>

        <div className="form_group">
          <input className="form_input" type="submit" value="Upload"/>
        </div>

      </form>
    </div>
  </div>
  );
         
}


export default Upload;