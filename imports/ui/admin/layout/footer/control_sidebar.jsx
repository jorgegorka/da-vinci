import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

// App component - represents the whole app
export default class ControlSidebar extends Component {
  render() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
      </aside>
    );
  }
}
