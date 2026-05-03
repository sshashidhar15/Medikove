import React from "react"
import "../components/styles/Main.scss"
import process from "./images/process.png"

function Process(){
   
  return(

    <div className="process">
            
            <h2 className="process-text"> How does it work </h2>

            <div class="row" className="process-container">
                  <div class="col-xs-12 col-md-6" className="process-left-text">
                      <h3>Talk to your doctor and get a free consultation before the treatment itself </h3>
                      <br></br>
                      <button>
                        Book your consultation
                      </button>
                  </div>
           

            <div class="col-xs-12 col-md-6" className="process-right-flow">
                <div class="row">
                    <div class="title center">
                        <span>
                            <b>Medikove</b>
                        </span>
                         Recovery Process
                    </div>
                </div>
                <div class="row ms-50">
                    <div class="col-xs-12 col-md-6">
                        <div class="button left grey">
                          <span class="icon setup"></span>
                          Recovery
                        </div>
                        <div class="row mt-30">
                          <div class="subtitle">
                            <b>Consultation</b>
                          </div>
                        </div>
                    </div>
                    
                </div>
           </div>
        
        
        </div>
      </div>
    
  )
}
  export default Process

    
    


           /*<div class="col-md-6 col-md-6" className="process-right-flow">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="title center">
                        <span>
                            <b>Medikove</b>
                        </span>
                          Recovery Process
                    </div>
                  </div>
                  <div class=" row mt30">
                    <div class="col-xs-12 col-md-6"> 
                      <div class="button left grey">
                        <span class="icon setup"></span>
                          

                      </div>
                    </div>
                  </div>
                      
                </div>

                <img className="process-img" width="100%" height="100%" src= {process} /> 

    </div>
    )
        </div> 
        </div>
} */

