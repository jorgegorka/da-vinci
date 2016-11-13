import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import TopNavigationBar from './top_navigation_bar.jsx'

export default class PublicHeader extends Component {
  siteSlogan() {
    return this.props.settings.siteName + ' - ' + this.props.settings.siteSlogan;
  }

  render() {
    return(
      <header className="header affix" data-spy="affix">
      	<nav className="navbar container sf-js-enabled sf-arrows">
      		<a className="navbar-brand pull-left" href="/">
      			<img src="/public/assets/logo.jpg" height="22" alt={ this.siteSlogan() } />
      			{ this.props.settings.siteName }
      		</a>
          <TopNavigationBar />
      	</nav>
      </header>
    );
  }
}

PublicHeader.propTypes = {
  settings: PropTypes.object.isRequired
};
