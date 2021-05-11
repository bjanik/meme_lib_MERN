import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [status, setStatus] = useState(false);

  return (
    <div className="global_container">
    <div className="App">
      <header id="home_header">
        <h1>Welcome to</h1>
        <h4>MemeLord</h4> 
      </header>
      <section id="list_of_memes">
         <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
            <div className="meme_card">
                {status
                    ? <img src="star-solid.svg"  onClick={()=>setStatus(false)} className="icon_like" alt="like" />
                    : <img src="star-regular.svg" onClick={()=>setStatus(true)} className="icon_like" alt="like" /> 
                }
                {/* <img src="star-regular.svg" onClick={liked} className="icon_like" /> */}
                 
                <img className="myMeme" src="giflogo.gif" alt="test"/>
                <p className="myMeme_title">meme title</p>
            </div>
      </section>
    </div>
    </div>
  );
}

export default App;
