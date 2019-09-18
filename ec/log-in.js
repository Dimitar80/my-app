import React from 'react'
// import './style.css'

// Function //
const Login = () => {
    return (
        <div id='login'>
<div className='box-container'>
            <form>
                <p className='input-container'>
                    <label className="text-field-input" for="">E-mail</label>
                    <input type="text" className="text-field" />
                </p>
                <p className='input-container'>
                        <label className="text-field-input" for="">Password</label>
                        <input type="text" className="text-field"/>
               </p>
              <button className='primary-button'>LOGIN</button>
             </form>
        </div>
        <div className='additional-info'>
           <p>Or if you don't have an account,<a href="#">Register.</a></p>
        </div>
        </div>
        
    )
}

export default Login