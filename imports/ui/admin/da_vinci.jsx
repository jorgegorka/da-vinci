import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';
//import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import MainHeader from './layout/header/main_header.jsx';
import MainFooter from './layout/footer/main_footer.jsx';

i18n.setLocale('en');

export default class DaVinci extends Component {
  componentDidMount() {
    document.body.classList.add('nav-md')
  }

  render() {
    return (
      <div id="main-app" className="container body">
        <div className="main_container">
          <MainHeader />
          <div className="right_col" role="main">
            { this.props.children }
          </div>
          <MainFooter />
        </div>
      </div>
    )
  }
}
