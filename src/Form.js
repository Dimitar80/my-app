import React from 'react'
import './style.css'

// const form = document.createElement('form');
const Form = () => {
    return (
        <div className='box'>
        <div className='formContainer'>
            <h2 className='title'>Personal Data</h2>
         <form action='' method=''>
              <p>
              <label>Name:</label>
              <input className='field' type='text' placeholder = 'name' required/>
              </p>
              <p>
              <label>Surname:</label>
              <input className='field' type='text' placeholder = 'surname'/>
              </p>
              <p>
              <label>Email:</label>
              <input className='field' type='email' placeholder = 'email' required/>
              </p>
              
         </form>
         </div>
         </div>
    )
}

export default Form