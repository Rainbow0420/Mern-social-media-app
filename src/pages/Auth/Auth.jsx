import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1>MAAS Studios</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <Login />
      {/* <SignUp /> */}
    </div>
  )
}

function Login(){
  return(
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input type="text" className="infoInput" placeholder='Username' name='username'/>
        </div>
        <div>
          <input type="password" className="infoInput" placeholder='Password' name='password'/>
        </div>
        <div>
          <span style={{fontSize: '12px'}}>
            Don't have and account? <a href="/signup">Sign Up</a>
          </span>
          <button type="submit" className="infoButton button">Log In</button>
        </div>
      </form>
    </div>
  )
}

function SignUp(){
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Username"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="infoInput"
            placeholder="Confirm Password"
            name="confirmpassword"
          />
        </div>

        <div>
          <span style={{fontSize: '12px'}}>
            Already have an Account? <a href="/signin">Log In</a>
          </span>
        </div>
        <button type="submit" className="infoButton button">Sign Up</button>
      </form>
    </div>
  );
}

export default Auth