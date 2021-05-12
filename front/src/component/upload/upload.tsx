import React, { useState } from 'react';
import "./upload.css";
import "../login_register/login.css";
import axios from 'axios';


function Upload() {

  const [user, setUser] = useState({title:'', tags:''});
  const [postMeme, setFile] = useState(null);
  console.log(user)
  console.log(postMeme)

  function handleChange(event) {
    const value = event.target.value;
    setUser({
        ...user,
        [event.target.name]: value
      });
    }

    function handleChangeFile(event) {
      const value = event.target.files[0];
      setFile({
          postMeme: value
        });
      }

  function handleSubmit(event) {
    console.log(user)
    var formData = new FormData();
    formData.append("postMeme", postMeme);
    formData.append("title", user.title);
    formData.append("tags", user.tags);
    console.log("formdata=",formData);
    event.preventDefault();
      axios.post('https://api-bameme.azurewebsites.net/postMeme', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(response => console.log(response));
  }
  
  return( 

    <div className="global_container">
    <div id='form_container'>

          <h2 className="title">Upload</h2>

      <form id="login_form" onSubmit={handleSubmit}  action="POST">
        <div className="form_group">
          <label htmlFor="upload">Upload</label>
          <input type="file" accept="image/jpg, image/png, image/gif, image/jpeg" title = "No file choose" onChange={handleChangeFile} name="postMeme" id="upload_input" className="custom-file-input" required/>
          <p className="upload_requirement">Accepted format are : JPG, PNG, GIF</p>
          <p className="upload_requirement">Max size: 5mb</p>
        </div>
        <div className="form_group">
          <label htmlFor="meme_name">Meme name</label>
          <input className="form_input" pattern='[a-zA-Z0-9]{4,20}' placeholder="Enter name" type="text" onChange={handleChange} name="title" required />
        </div>
        <div className="form_group">
          <label htmlFor="meme_tag">Tag</label>
          <select className="form_input" defaultValue="" name="tags" onChange={handleChange} required>
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