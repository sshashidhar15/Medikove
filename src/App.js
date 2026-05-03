//import logo from './logo.svg';
import React from "react"
import './styles/App.scss';
import Header from "./components/Header"
import Main from "./components/Main"

import Feature from "./components/Feature"
import Process from "./components/Process"
import Clinic from "./components/Clinic"
import Footer from "./components/footer_new"
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
import Header_new from "./components/Header_new";
import ProcessNew from "./components/process_new";
import Testimonials from "./components/testimonials_new";
import MedicalTests from "./components/MedicalTests";
import Physiotherapy from "./components/Physiotherapy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms"

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
                  <ProcessNew />
                  {/* <Clinic /> */}
                  <Testimonials />
                  <Footer />
                  {/* <Header_new /> */}


        </Route>

         <Route path="/Medical-tests">
              <Header/>
              <MedicalTests />
                <Footer />
          </Route>

           <Route path="/Physiotherapy">
              <Header/>
              <Physiotherapy />
                <Footer />
          </Route>
              
              <Route path="/ContactUs">
              <Header/>
              <ContactUs/>
                <Footer />
          </Route>

          <Route path="/privacy-policy">
              <Header/>
              <PrivacyPolicy/>
                <Footer />
          </Route>

          <Route path="/terms-and-conditions">
              <Header/>
              <Terms/>
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
