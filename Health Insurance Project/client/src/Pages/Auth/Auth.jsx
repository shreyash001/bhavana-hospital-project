import React,{useState} from 'react'
import "./auth.css"

const Auth = () => {
    const [isSignup,setIsSignup] = useState(false);
  return (
    <div className='auth-container'>
        <div className='auth-box'>
        <form className='login-form'>
            {isSignup ? <h1>Login</h1>:<h1>SignUp</h1>}
            <input type="name" value="" placeholder='Your Full Name' />
            <input type="email" value="" placeholder='Your Email' />
            <input type="password" value="" placeholder='Your Password' />

            {!isSignup && (
                <><p><span><input type="checkbox"/></span>I agree to the terms of services</p>
                <button type="submit" className="signup-btn">Sign up</button></>
            )}
        </form>
        </div>
        
    </div>
  )
}

export default Auth
