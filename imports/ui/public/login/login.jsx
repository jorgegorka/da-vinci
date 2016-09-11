import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import LoginForm from './login_form.jsx'
import RecoverPassword from './recover_password.jsx'

i18n.setLocale('en')

export default class Login extends Component {
  componentDidMount() {
    document.body.classList.add('login')
  }

  render() {
    return (
      <div>
        <a className="hiddenanchor" id="signin"></a>
        <a className="hiddenanchor" id="signup"></a>

        <div className="login_wrapper">
          <LoginForm />
          <RecoverPassword />
        </div>
      </div>
    )
  }
}
