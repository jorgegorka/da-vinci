import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import UserSettings from './user_settings.jsx'

const T = i18n.createComponent();

// App component - represents the whole app
export default class TopNavigation extends Component {
  render() {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="nav toggle">
              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>

            <ul className="nav navbar-nav navbar-right">
              <UserSettings currentUser={ this.props.currentUser } />

              <li role="presentation" className="dropdown">
                <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-envelope-o"></i>
                  <span className="badge bg-green">6</span>
                </a>
                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                  <li>
                    <a>
                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span></span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="text-center">
                      <a>
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

TopNavigation.propTypes = {
  currentUser: PropTypes.object,
};
