import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

// App component - represents the whole app
export default class MainFooter extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.2.0
        </div>
        <strong>Copyright &copy; 2016 <a href="http://www.alvareznavarro.es">Jorge Alvarez</a>.</strong> MIT License
      </footer>
    );
  }
}
