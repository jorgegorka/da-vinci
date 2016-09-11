import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import LeftColumn from './left_column.jsx'
import TopNavigation from './top_navigation.jsx'

const T = i18n.createComponent();

// App component - represents the whole app
export default class MainHeader extends Component {
  render() {
    return (
      <header>
        <LeftColumn />
        <TopNavigation />
      </header>
    );
  }
}
