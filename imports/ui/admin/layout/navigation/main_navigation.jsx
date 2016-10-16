import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

// App component - represents the whole app
export default class MainNavigation extends Component {
  logoutUser(event) {
    event.preventDefault();
    return Meteor.logout(function(error) {
      window.location = '/';
      if (error) {
        return console.log(error.message);
      }
    });
  }

  render() {
    return (
      <ul className="sidebar-menu">
        <li className="header">Main menu</li>
        <li>
          <a href="/admin/pages">
            <i className="fa fa-th"></i> <span>Pages</span>
          </a>
        </li>
        <li>
          <a href="/admin/pages">
            <i className="fa fa-th"></i> <span>Page type</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={ this.logoutUser }>
            <i className="fa fa-th"></i> <span>Log out</span>
          </a>
        </li>
      </ul>
    );
  }
}

MainNavigation.propTypes = {
};
