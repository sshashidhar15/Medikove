//import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"

import Feature from "./components/Feature"
import Process from "./components/Process"
import Clinic from "./components/Clinic"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import Gear from "./components/Gear"
// import CardProductGrid from "./components/card/CardProductGrid"
import Expertise from "./components/Expertise"
import ContactUs from "./components/ContactUs"
import DoctorLogin from "./components/Auth/DoctorLogin"
import Login from "./components/Auth/Login"
import Dashboard from "./components/Dashboard"
import data from "./doctordata"
import {Switch,Route} from 'react-router-dom';
import {useState} from "react"


function App() {

  const doctor = data.map(item => {
    return(
       <Feature
       key = {item.id}
       {...item} />
    )
}) 

/* login functionality--*/


const [token,setToken] = useState();

/* cart functionality */
const [count,setCount] = React.useState(0)
const [number,setNumber] = React.useState(0)
const [Prod,setProd] = React.useState({})

function countCart(productData){
  // {console.log(count)}
  {console.log(productData)}
  // setNumber(count)
}

    

  return (
    <div className="App">
   
      <Switch>
        

        <Route exact path="/">
                  <Header number = {number}/>
                  <Main />
                  <Process />
                  <Clinic />
                  <Testimonial />
                  <Footer />
                  


        </Route>
              
        <Route path="/gear">
              <Header number = {number}/>
              <Gear countHandle={countCart}/>
                <Footer />
          </Route>

          <Route path="/Expertise">
              <Header />
                <Expertise />
                <Footer />
          </Route>
              
              
          <Route path="/doctorlogin">
                <Header />
                <DoctorLogin />
                <Login setToken={setToken}/>
                <Footer />
          </Route>

          <Route path="/dashboard">
          <Header />
          <Dashboard />
          <Footer />
        </Route>
         
        <Route path="/contactus">
         <Header />
          <ContactUs />
          <Footer />
        </Route>

      </Switch>
        
    </div>
  );
}

export default App;
