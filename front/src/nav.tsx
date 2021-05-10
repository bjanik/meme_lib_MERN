import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


function Nav() {
    const isLoggedIn = localStorage.token;
    console.log(localStorage.token)

    function logout(){
        localStorage.removeItem("token")
        window.location.reload();
    }

    return( 
        <nav id="nav">
                    <Link className="nav_link" to="/home"><img id="logo" src="giflogo.gif" alt="Home"/></Link>
                    <div className="nav_link_right">
                        <Link className="nav_link upload_link" to="/upload">Post Meme</Link>
                        {isLoggedIn
                        ?   <ul className="nav_link border_left">
                                <li className="deroulant nav_link "><p id="menu" >Dashboard</p>
                                <ul className="sous">
                                    <li><Link className="submenu" to="/update_password">Modify password</Link></li>
                                    <li><Link className="submenu" to="/upload">Post Meme</Link></li>
                                    <li><Link className="submenu" to="/:id/library">My memes</Link></li>
                                    <li><a className="submenu" onClick={logout} href="/home" >Logout</a></li>
                                </ul>
                                </li>
                            </ul>
                        : <Link className="nav_link login_link" to="/login">Login</Link>
                        }
                       
                    </div>     
        </nav>
    );
         
}


export default Nav;