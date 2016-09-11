import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

// App component - represents the whole app
export default class MainFooter extends Component {
  render() {
    return (
      <footer>
        <div className="pull-right">
          Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
        </div>
        <div className="clearfix"></div>
      </footer>
    );
  }
}
