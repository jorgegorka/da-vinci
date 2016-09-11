import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

i18n.setLocale('en')

export default class LoginFooter extends Component {
  render() {
    return (
      <div>
        <h1><i className="fa fa-paw"></i> Application name</h1>
        <p>2016 Jorge Alvarez.</p>
      </div>
    )
  }
}
