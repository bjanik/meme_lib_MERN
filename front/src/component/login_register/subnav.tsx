import React from 'react';
import './subnav.css';
import { Link } from 'react-router-dom';






function Subnav() {
  
  return( 
      
    <nav id="subnav">
                <Link className="btn link" to="/login">login</Link>
                <Link className="btn link" to="/register">register</Link>

                {/* <a href="#" className="btn">Hover to Shine</a> */}
               
    </nav>
           );
         
}


export default Subnav;