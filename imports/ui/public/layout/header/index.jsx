import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import TopNavigationBar from './top_navigation_bar.jsx'

export default class PublicHeader extends Component {
  render() {
    return(
      <header className="header affix" data-spy="affix">
      	<nav className="navbar container sf-js-enabled sf-arrows">
      		<a className="navbar-brand pull-left" href="/">
      			<img src="http://placehold.it/22x22" alt="Da Vinci - This is the public site" />
      			Da Vinci
      		</a>
          <TopNavigationBar />
      	</nav>
      </header>
    );
  }
}
