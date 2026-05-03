import React from "react"
import ReactDOM from "react-dom"
import "../components/styles/Feature.scss"


function Doctorlisting(props){
  const i = true;
    return(
        
     <div className="features">

        <div className="columns">
            <h3 className="doctor-image"></h3>
          
            <div className="column">
                <h3 className="column-name"> {props.name} </h3>
                <p className="column-qual">{props.qualification}</p>
                <p className="column-practice">{props.practice}</p>
            </div>
        </div>
    
    
    
    </div>

    )



}

export default Doctorlisting