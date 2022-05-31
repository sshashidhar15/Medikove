import React from "react"
import ReactDOM from "react-dom"
import "../components/css/Feature.css"


function Doctorlisting(props){

    return(

        <div className="columns">

        <div className="column">
            <h3 className="column-name"> {props.name} </h3>
            <p className="column-qual">{props.qualification}</p>
            <p className="column-practice">{props.practice}</p>
        </div>

        </div>

    )



}

export default Doctorlisting