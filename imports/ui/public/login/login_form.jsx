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
      <form role="form" onSubmit={ this.loginUser.bind(this) }>
        <div className="form-group has-feedback">
          <input className="form-control" placeholder="Email" ref="email" type="email" />
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input className="form-control" placeholder="Password" ref="password" type="password" />
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
          <div className="col-xs-8">
          </div>
          <div className="col-xs-4">
            <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
        </div>
      </form>
    )
  }
}
