import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'meteor/universe:i18n';
import Alert from 'react-s-alert';
import { browserHistory } from 'react-router';

import LoginFooter from './login_footer.jsx'

i18n.setLocale('en')

export default class LoginForm extends Component {
  loginUser(e) {
    e.preventDefault();
    const userEmail    = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const userPassword = ReactDOM.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword(userEmail, userPassword, function(error) {
      if (error) {
        Alert.error(error.message, { position: 'top' });
      } else {
        browserHistory.push('/admin');
        Alert.info('Welcome back', { position: 'top' });
      }
    })
  }

  render() {
    return (
      <div className="animate form login_form">
        <section className="login_content">
          <form role="form" onSubmit={this.loginUser.bind(this)}>
            <h1>Login Form</h1>
            <div>
              <input type="email" ref="email" className="form-control" placeholder="Email" required="" />
            </div>
            <div>
              <input type="password" ref="password" className="form-control" placeholder="Password" required="" />
            </div>
            <div>
              <button className="reset_pass to_register" href="#signup">Access</button>
            </div>

            <div className="clearfix"></div>

            <div className="separator">
              <a className="reset_pass to_register" href="#signup">Lost your password?</a>

              <LoginFooter />
            </div>
          </form>
        </section>
      </div>
    )
  }
}
