import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';

import i18n from 'meteor/universe:i18n';

i18n.setLocale('en')

export default class DaVinciPublic extends Component {
  render() {
    return (
      <div className="container body">
        {this.props.children}
        <Alert stack={{ limit: 5 }} />
      </div>
    )
  }
}
