import React from 'react'
import { Link} from 'react-router-dom'

import '../assets/styles/containers/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Login =()=>(
    <section className="login">
    <section className="login__container">
      <h2>Login</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo"/>
        <input className="input" type="password" placeholder="Contraseña"/>
        <button className="button">Login</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/>Remember me
          </label>
          <Link to="/register">
          Forgot your password?
          </Link>
        </div>
      </form>
      <section className="login__container--social-media">
        <div><img src={googleIcon}/> Login with Google</div>
        <div><img src={twitterIcon}/> Login with Twitter</div>
      </section>
      <p className="login__container--register">Not account? 
        <Link to="/register">
          Sign Up!
        </Link>
      </p>
    </section>
  </section>
)

export default Login