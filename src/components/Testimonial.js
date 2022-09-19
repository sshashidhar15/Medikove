import React from "react"
import ReactDOM from "react-dom"
import "../components/css/Main.css"
import user1 from "./images/user1.png"
import user2 from "./images/user2.png"
import user3 from "./images/user3.png"
import user4 from "./images/user4.png"


function Testimonial(){
    return(
      <div>
  
        <section className="testimonial">

          <div className="testimonial-container">
             
             <h2 className="testimonial-text"> Patient Success Stories</h2>
             <h3 className="testimonial-sub-text"> Know about our patients who have successfully recovered</h3>
               
              <div class="row">

                  <div class="col-md-4">
                        <div className="profile">
                        <img src={user1} className="user" />
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item"> 90% recovery in 30 days </li>
                        </ul>
                        <p> I have a severe nerve compression in my neck </p>
                        <h4>Avanish Kr <span> Vice President at Cisco</span></h4>
                        </div>
                  </div>
                    
                    <div class="col-md-4">
                          <div className="profile">
                          <img src={user2} className="user" />
                          <ul class="list-group list-group-flush">
                           <li class="list-group-item"> 90% recovery in 30 days </li>
                        </ul>
                          <p> I have a severe nerve compression in my neck </p>
                          <h3>Kulkarni Malathi <span> House Wife</span></h3>
                          </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div className="profile">
                        <img src={user4} className="user" />
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item"> 90% recovery in 30 days </li>
                        </ul>
                        <p> I have a severe nerve compression in my neck </p>
                        <h3>Malavika <span> Co-founder at Pepperstone</span></h3>
                      </div>
                </div>           
          </div> 
      </div>
             

        </section>
      </div>
    )
}

export default Testimonial

