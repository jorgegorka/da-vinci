import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import TopNavigation from '../navigation/top_navigation.jsx'

// App component - represents the whole app
export default class MainHeader extends Component {
  render() {
    return (
      <header  className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini">{ this.props.settings.siteName }</span>
          <span className="logo-lg"><b>{ this.props.settings.siteName }</b></span>
        </a>
        <TopNavigation currentUser={ this.props.currentUser }/>
      </header>
    );
  }
}

MainHeader.propTypes = {
  currentUser: PropTypes.object,
  settings: PropTypes.object.isRequired,
};
