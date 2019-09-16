import React from 'react'
import './style.css'

// const form = document.createElement('form');
const Form = () => {
    return (
        <div className='box'>
        <div className='formContainer'>
            <h2 className='title'>Personal Data</h2>
         <form>
              <p>
              <label>Name:</label>
              <input className='field' type='text' placeholder = 'name' required/>
              </p>
              <p>
              <label>Surname:</label>
              <input className='field' type='text' placeholder = 'surname'/>
              </p>
         </form>
         </div>
         </div>
    )
}

export default Form