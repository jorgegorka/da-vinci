import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import UserSettings from '../header/user_settings.jsx'

const T = i18n.createComponent();

// App component - represents the whole app
export default class TopNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top">
        <UserSettings currentUser={ this.props.currentUser } />
      </nav>

    );
  }
}

TopNavigation.propTypes = {
  currentUser: PropTypes.object,
};
