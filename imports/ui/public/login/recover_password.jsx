import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'meteor/universe:i18n';
import Alert from 'react-s-alert';

import LoginFooter from './login_footer.jsx'

i18n.setLocale('en')

export default class RecoverPassword extends Component {
  recoverPassword(event) {
    event.preventDefault();
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
      <form role="form" onSubmit={ this.recoverPassword.bind(this) }>
        <div className="form-group has-feedback">
          <input className="form-control" placeholder="Email" ref="userEmail" type="email" />
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="row">
          <div className="col-xs-4">
          </div>
          <div className="col-xs-8">
            <button type="submit" className="btn btn-primary btn-block btn-flat">Recover my password</button>
          </div>
        </div>
      </form>
    )
  }
}
