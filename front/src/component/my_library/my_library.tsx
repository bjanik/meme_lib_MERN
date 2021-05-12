import React, { useEffect, useState } from 'react';
import "./my_library.css";
// import axios from 'axios';


function Library() {
    const [status, setStatus] = useState(false);

    // const [data, setData] = useState([]);
  
    useEffect(() => {
        // getDataFetch();
    }, []);
  
    // const getDataFetch = async () => {
    //   const response = await axios.get('https://api-bameme.azurewebsites.net/getMeme');
    //   if(response.data){
    //     setData(response.data);
    //     // console.log(response.data.results);
    //     console.log('userdata=',response.data)
    //   }
    // };

  return( 
    <div className="global_container">
      <h2 className="title">My Memes</h2>

        <div id="page_container">
            <div className="meme_card">
            {status
                ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
            }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                <img src="times-solid.svg" className="icon_delete" alt="cross"/>
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>

        </div>

    </div>
  );
         
}


export default Library;