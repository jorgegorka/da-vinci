import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'meteor/universe:i18n';
import Alert from 'react-s-alert';

import LoginFooter from './login_footer.jsx'

i18n.setLocale('en')

export default class RecoverPassword extends Component {
  recoverPassword(e) {
    e.preventDefault();
    const userEmail = ReactDOM.findDOMNode(this.refs.userEmail).value.trim();
    if (userEmail.length < 3) {
      Alert.warning('Please add a valid email.', { position: 'top' });
    } else {
      Meteor.call('users.recoverPassword', userEmail);
      Alert.info('We have send you an email with instructions.', { position: 'top' });
    }
  }

  render() {
    return (
      <div id="register" className="animate form registration_form">
        <section className="login_content">
          <form role="form" onSubmit={ this.recoverPassword.bind(this) }>
            <h1>Password recovery</h1>
            <div>
              <label htmlFor="user-email">Enter your email:</label>
              <input type="email" ref="userEmail" name="user-email" className="form-control" placeholder="Email fdsa fdsafdsa" required="" />
            </div>
            <div>
              <button className="btn btn-default">Send email</button>
            </div>

            <div className="clearfix"></div>
            <p className="change_link">Already a member?
              <a href="#signin" className="to_register"> Log in </a>
            </p>

            <div className="separator">
              <LoginFooter />
            </div>
          </form>
        </section>
      </div>
    )
  }
}
