import './login.scss';
import React from 'react';

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
          />
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="password" />
            <button type="button" className="loginButton">Sign In</button>
            <span>
              New to Netflix?
              {' '}
              <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
              {' '}
              <b>Learn more</b>
              .
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
