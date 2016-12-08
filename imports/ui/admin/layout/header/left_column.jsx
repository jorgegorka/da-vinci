import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import MainNavigation from '../navigation/main_navigation.jsx'

// App component - represents the whole app
export default class LeftColumn extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder={ i18n.__('admin.layout.header.left_column.search') } />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          <MainNavigation />
        </section>
      </aside>
    );
  }
}
