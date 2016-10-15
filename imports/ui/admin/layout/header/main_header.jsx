import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import TopNavigation from '../navigation/top_navigation.jsx'

const T = i18n.createComponent();

// App component - represents the whole app
export default class MainHeader extends Component {
  render() {
    return (
      <header  className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>
        <TopNavigation currentUser={ this.props.currentUser }/>
      </header>
    );
  }
}

MainHeader.propTypes = {
  currentUser: PropTypes.object,
};
