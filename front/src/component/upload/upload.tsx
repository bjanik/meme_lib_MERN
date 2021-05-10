import React from 'react';
import "./upload.css";
import "../login_register/login.css";






function Upload() {
  
  return( 

    <div className="global_container">
    <div id='form_container'>

          <h2 className="title">Upload</h2>

      <form id="login_form" action="POST">
        <div className="form_group">
          <label htmlFor="upload">Upload</label>
          <input type="file" accept="image/jpg, image/png, image/gif, image/jpeg" title = "No file choose" name="upload" id="upload_input" className="custom-file-input" required/>
          <p className="upload_requirement">Accepted format are : JPG, PNG, GIF</p>
          <p className="upload_requirement">Max size: 5mb</p>
        </div>
        <div className="form_group">
          <label htmlFor="meme_name">Meme name</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{4,20}' placeholder="Enter name" type="text" name="meme_name" required />
        </div>
        <div className="form_group">
          <label htmlFor="meme_tag">Tag</label>
          <select className="form_input" defaultValue="" name="meme_tag" required>
          <option disabled  value="">- Select tag -</option>
            <option value="Fun">Fun</option>
            <option value="Sport">Sport</option>
            <option value="Animals">Animals</option>
            <option value="Gaming">Gaming</option>
            <option value="Food/Drink">Food/Drink</option>
            <option value="Anime">Anime</option>
          </select>
          
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