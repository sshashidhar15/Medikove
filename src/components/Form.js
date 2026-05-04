// import React from "react"
// import "../components/styles/Main.scss"


// function Form(props)
// {

//     const [formData,setFormData] = React.useState({
//         fullName:"",
//         mobileNumber:"",
//         email:"",
//         timeDate:""
//     })

// console.log(formData)

//     function handleChange(event)
//     { 
//         const {name,value} = event.target

//         setFormData( prevFormData => {
//           return {
//               ...prevFormData,
//               [name]:value
//                  }
        
//         })
//     }

//     function handleSubmit(){
//         console.log(formData)
//     }
    
//     return (

//         <div className="main-right">
//          <form onSubmit = {handleSubmit} action="https://formsubmit.co/s.shashidhar15@gmail.com" method="POST">       
//             <h3 className="form-text"> Book your free consultation</h3>
//             <input type="hidden" name="_next" value="http://localhost:3001/index.html"></input>
          
//           <div className="form-container">
//           <label>Your Full Name  
          
//           <input type="text" 
//             placeholder="Name" 
//             className="form-input"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             ref={props.inputRef}/></label> 

          

//           <label>Phone Number  
              
//             <input type="text" 
//             placeholder="Mobile number" 
//             className="form-input" 
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}/> </label>
           
           
//            <label>Email Address 
            
//             <input type="email" 
//             placeholder="Email Address" 
//             className="form-input" 
//             name="email"
//             value={formData.email}
//             onChange={handleChange}/> </label>
            
//             <input type="hidden" 
//             name="_autoresponse" 
//             value="Hang on your consultation is booked and will get a call at the scheduled time please">
//             </input>
            

//             <label>Time Slot     
//             <input type="datetime-local" 
//             className="form-input"
//             name="timeDate"
//             value={formData.timeDate}
//             onChange={handleChange}/></label>   
            
//             <button className= "btn form-button"> Submit </button>
//         </div>
//          </form>

//       </div>

//     )
// }

// export default Form
         

import React from "react";
import "../components/styles/Main.scss";

function Form(props) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    preferredDate: "",
    preferredTimeSlot: ""
  });

  const [showToast, setShowToast] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("https://formsubmit.co/ajax/shashi@kalbridge.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        preferredDate: formData.preferredDate,
        preferredTimeSlot: formData.preferredTimeSlot,
        _subject: "New consultation request from Kalbridge website",
        _captcha: "false"
      })
    });

    if (response.ok) {
      setShowToast(true);

      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        preferredDate: "",
        preferredTimeSlot: ""
      });

      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 2000);
    }
  }

  return (
    <div className="main-right">
      <form onSubmit={handleSubmit}>
        <h3 className="form-text">Book your free consultation</h3>

        <div className="form-container">
          <label>
            Your Full Name
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              ref={props.inputRef}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="text"
              placeholder="Mobile number"
              className="form-input"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Preferred Date
            <input
              type="date"
              className="form-input"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Preferred Time Slot
            <select
              className="form-input"
              name="preferredTimeSlot"
              value={formData.preferredTimeSlot}
              onChange={handleChange}
              required
            >
              <option value="">Select time slot</option>
              <option value="10 AM - 12 PM">10 AM - 12 PM</option>
              <option value="12 PM - 2 PM">12 PM - 2 PM</option>
              <option value="2 PM - 4 PM">2 PM - 4 PM</option>
              <option value="4 PM - 6 PM">4 PM - 6 PM</option>
            </select>
          </label>

          <button className="btn form-button">Submit</button>
        </div>
      </form>

      {showToast && (
        <div className="toast-message">
          We will contact you shortly
        </div>
      )}
    </div>
  );
}

export default Form;