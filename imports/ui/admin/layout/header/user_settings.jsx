import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

export default class UserSettings extends Component {
  userLogout(e) {
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/login');
  }

  render() {
    return (
      <li className="">
        <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src="images/img.jpg" alt="" />{ this.props.currentUser ? this.props.currentUser.profile.name : '' }
          <span className=" fa fa-angle-down"></span>
        </a>
        <ul className="dropdown-menu dropdown-usermenu pull-right">
          <li><a href="javascript:;"> Profile</a></li>
          <li>
            <a href="javascript:;">
              <span className="badge bg-red pull-right">50%</span>
              <span>Settings</span>
            </a>
          </li>
          <li><a href="javascript:;">Help</a></li>
          <li><a href="#" onClick={ this.userLogout }><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
        </ul>
      </li>
    )
  }
}
