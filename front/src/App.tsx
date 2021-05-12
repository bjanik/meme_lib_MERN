import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
      getDataFetch();
  }, []);

  const getDataFetch = async () => {
    const response = await axios.get('https://api-bameme.azurewebsites.net/getAllMeme');
    if(response.data){
      setData(response.data);
      // console.log(response.data.results);
      console.log('userdata=',response.data)
    }
  };

  return (
    <div className="global_container">
    <div className="App">
      <header id="home_header">
        <h1>Welcome to</h1>
        <h4>MemeLord</h4> 
      </header>
      <section id="list_of_memes">
        {data.map(item => (
            <div key={item._id}  className="meme_card">
              {status
                  ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                  : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
              }
              <img className="myMeme" src={item.meme_link} alt="test"/>
              <p className="myMeme_title">{item.title}</p>
            </div>
        ))}

      </section>
    </div>
    </div>
  );
}

export default App;
