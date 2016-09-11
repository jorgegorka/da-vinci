import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

i18n.setLocale('en')

export default class DaVinciPublic extends Component {
  render() {
    return (
      <div className="container body">
        <div className="main_container">
          <h1>404 - Page not found</h1>
        </div>
      </div>
    )
  }
}
