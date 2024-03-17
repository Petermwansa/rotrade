import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup__container'>
        <h1>Sign Up</h1>
        <div className='loginsignup__fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email address' />
          <input type='passoword' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup__login'>Already have an acount? <span>Login here</span></p>
        <div className='loginsignup__agree'>
          <input type='checkbox' name='' id=''/>
          <p>I agree to the terms and privacy polichy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
