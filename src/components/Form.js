import React from "react"
import "../components/styles/Main.scss"


function Form(props)
{

    const [formData,setFormData] = React.useState({
        fullName:"",
        mobileNumber:"",
        email:"",
        timeDate:""
    })

console.log(formData)

    function handleChange(event)
    { 
        const {name,value} = event.target

        setFormData( prevFormData => {
          return {
              ...prevFormData,
              [name]:value
                 }
        
        })
    }

    function handleSubmit(){
        console.log(formData)
    }
    
    return (

        <div className="main-right">
         <form onSubmit = {handleSubmit} action="https://formsubmit.co/s.shashidhar15@gmail.com" method="POST">       
            <h3 className="form-text"> Book your free consultation</h3>
            <input type="hidden" name="_next" value="http://localhost:3001/index.html"></input>
          
          <div className="form-container">
          <label>Your Full Name  
          
          <input type="text" 
            placeholder="Name" 
            className="form-input"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            ref={props.inputRef}/></label> 

          

          <label>Phone Number  
              
            <input type="text" 
            placeholder="Mobile number" 
            className="form-input" 
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}/> </label>
           
           
           <label>Email Address 
            
            <input type="email" 
            placeholder="Email Address" 
            className="form-input" 
            name="email"
            value={formData.email}
            onChange={handleChange}/> </label>
            
            <input type="hidden" 
            name="_autoresponse" 
            value="Hang on your consultation is booked and will get a call at the scheduled time please">
            </input>
            

            <label>Time Slot     
            <input type="datetime-local" 
            className="form-input"
            name="timeDate"
            value={formData.timeDate}
            onChange={handleChange}/></label>   
            
            <button className= "btn form-button"> Submit </button>
        </div>
         </form>

      </div>

    )
}

export default Form
         