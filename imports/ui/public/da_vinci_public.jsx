import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import MainHeader from './layout/header/main.jsx';

i18n.setLocale('en')

export default class DaVinciPublic extends Component {
  componentWillMount(){
    // Load resorces only used in public pages
    this.loadAdminCssResources();
    this.loadAdminJavascriptResources();
  }

  loadAdminCssResources() {
    let publicStyles = [
      '/public/css/style.css'
    ];

    publicStyles.forEach( function(cssStyle) {
      let publicStyle = document.createElement('link');
      publicStyle.setAttribute('rel', 'stylesheet');
      publicStyle.setAttribute('href', cssStyle);
      document.getElementsByTagName('head')[0].appendChild(publicStyle);
    });
  }

  loadAdminJavascriptResources() {
    let publicStyles = [
    ];

    publicStyles.forEach( function(jssStyle) {
      let publicStyle = document.createElement('script');
      publicStyle.setAttribute('src', jssStyle);
      document.getElementsByTagName('head')[0].appendChild(publicStyle);
    });
  }


  render() {
    return (
      <div>
        <div className="preloader" style={ { display: 'none' } }></div>
        <MainHeader />
        {this.props.children}
      </div>
    )
  }
}
