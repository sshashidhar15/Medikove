import React from "react"
import ReactDOM from "react-dom"
import "../components/styles/Main.scss"
import ucchvas from "./images/ucchvas.png"
import {Link, Switch, Route} from "react-router-dom"


function Clinic(){
    return(

        <div className="clinics-container">

            <h2 className="clinic-text"> Clinics Associated</h2>
            <h3 className="clinic-sub-text"> The best in your city</h3>
       

            <div className="container-logos">
                <div class="row mt-0 m-5 p-0" >
                        <div  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center p-0" >
                            <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img></div>
                        <div  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center p-0"  >
                        <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img>
                        </div>
                        <div className="container-grid"  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center">
                        <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img>
                        </div>
                    
                        <div  className="container-grid"  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center">
                        <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img>
                        </div>
                        <div className="container-grid"  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center">
                        <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img>
                        </div>
                        <div className="container-grid"  class="col-md-4 border border-5 border-light rounded d-flex justify-content-center">
                        <img src={ucchvas} alt="uchvaas" class="img-thumbnail"> 
                            </img>
                        </div>
                        <li> <Link to ="/doctorlogin" className="consultation-button"> Book your consultation </Link></li>
                </div>
            </div>
        </div>

       /* <div className="clinic-logos">
                <marquee behavior="alternate" direction="left">
                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>
                </marquee>

                <marquee behavior="sliding" direction="left">
                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>
                    </marquee>

                    <marquee behavior="sliding" direction="left">

                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>    

                    </marquee>
               
        </div>
    </div> */
 
)
}

export default Clinic
  