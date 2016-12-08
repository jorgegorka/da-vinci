import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

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
        <li className="header">{ i18n.__('admin.layout.navigation.main_navigation.main_menu') }</li>
        <li>
          <a href="/admin/pages" title={ i18n.__('admin.layout.navigation.main_navigation.manage_pages') }>
            <i className="fa fa-th"></i> <span>{ i18n.__('admin.layout.navigation.main_navigation.pages') }</span>
          </a>
        </li>
        <li>
          <a href="/admin/settings" title={ i18n.__('admin.layout.navigation.main_navigation.update_settings') }>
            <i className="fa fa-th"></i> <span>{ i18n.__('admin.layout.navigation.main_navigation.settings') }</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={ this.logoutUser }>
            <i className="fa fa-th"></i> <span>{ i18n.__('admin.layout.navigation.main_navigation.log_out') }</span>
          </a>
        </li>
      </ul>
    );
  }
}

MainNavigation.propTypes = {
};
