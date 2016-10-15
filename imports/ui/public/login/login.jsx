import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import LoginForm from './login_form.jsx'
import RecoverPassword from './recover_password.jsx'

i18n.setLocale('en')

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loginForm: true };
  }

  showRecovery() {
    this.setState({ loginForm: !this.state.loginForm });
  }

  componentDidMount() {
    document.body.classList.add('login-page')
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="/"><b>Da</b>Vinci</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">
            { this.state.loginForm ? 'Sign in to start your session' : 'Enter your email and we will send you a message explaining how to change your password.' }
          </p>
          { this.state.loginForm ? <LoginForm /> : <RecoverPassword /> }
          <a href="#" onClick={ this.showRecovery.bind(this) }>
            { this.state.loginForm ? 'I forgot my password' : 'Go back to login page' }
          </a>
        </div>
      </div>
    )
  }
}
