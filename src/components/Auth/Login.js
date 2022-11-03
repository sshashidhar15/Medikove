/*import React from "react"
//import "./components/css/Main.css"

function Login() {
  
 return(
        
        <form className="login">

            <label>
                <p>Username</p>
                <input type="text" />
            </label>

            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            
            <div>
                <button type="submit">Submit</button>
            </div>

            <ul>
                <span>New here?</span>Create an account
            </ul>
            
        </form>
  )
}

export default Login*/

import React,{useState} from "react"
import "../../components/css/Main.css"
import PropTypes from 'prop-types';
import {Link, Switch, Route} from "react-router-dom";
import Dashboard from "../Dashboard"


var token =""
async function loginUser(credentials) {
    return fetch('http://localhost:8082/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   } 
   

function Login({ setToken }) {

    const [username, setUserName] = useState("user");
    const [password, setPassword] = useState("pwd");

    const handleSubmit = async e => {
          e.preventDefault();
          token = await loginUser({
          username,
          password
        });
        setToken(token);
        console.log(token)
        
      }
  
      if(!token){
      return(
        
        <div className="login-wrapper">
        
          {/*<h1>Please Log In</h1> */}
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
           <div>
              <button type="submit">Submit</button>
      </div>
            {/*<ul>
            <li> <Link to ="/Dasboard" onclick = className="dr-dashboard">  Doctors Login </Link></li>
      </ul>*/}
            
          </form>

        </div>

      )}
      else{
        return(
        <Dashboard />)
      }
    }
    

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login