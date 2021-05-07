import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  
    return( 
        <nav id="nav">
                    <Link className="nav_link" to="/home"><img id="logo" src="giflogo.gif" alt="Home"/></Link>
                    <div className="nav_link_right">
                        <Link className="nav_link upload_link" to="/upload">Post Meme</Link>
                        <Link className="nav_link login_link" to="/login">Login</Link>
                    </div>     
        </nav>
    );
         
}


export default Nav;