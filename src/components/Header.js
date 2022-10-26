import React from "react"

import "../components/css/Header.css"
import {Link, Switch, Route} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

function Header(props){
    return(
        <header>
           
          <nav  className="nav">
            <h2 ClassName="logo">Medikove</h2>

                <ul className="nav-items">
                
                 <li> <Link to ="/" className="current-page">Services </Link></li>
                    <li> <Link to ="/gear" className="current-page">Gear </Link></li> 
                    <li> <Link to ="/expertise" className="current-page">Expertise </Link></li> 
                    <li> <Link to ="/contactus" className="current-page">Contact</Link></li> 
                            <div className="position-relative d-inline me-3">
                                <Link to="/cart" className="btn btn-primary">
                                <IconCart3 Link to ="/Cart" className="i-va" />
                                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                                    {props.number}
                                </div>
                                </Link>
                            
                    </div>
                    <li> <Link to ="/doctorlogin" className="dr-login">  Doctors Login </Link></li>
                
                </ul>
                
           </nav>
    </header> 

   
    )
}

export default Header