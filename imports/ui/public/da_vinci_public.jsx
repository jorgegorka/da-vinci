import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';

import i18n from 'meteor/universe:i18n';

i18n.setLocale('en')

export default class DaVinciPublic extends Component {
  componentWillMount(){
    // Load resorces only used in public pages
    this.loadAdminCssResources();
    this.loadAdminJavascriptResources();
  }

  loadAdminCssResources() {
    let adminStyles = [
    ];

    adminStyles.forEach( function(cssStyle) {
      let adminStyle = document.createElement('link');
      adminStyle.setAttribute('rel', 'stylesheet');
      adminStyle.setAttribute('href', cssStyle);
      document.getElementsByTagName('head')[0].appendChild(adminStyle);
    });
  }

  loadAdminJavascriptResources() {
    let adminStyles = [
    ];

    adminStyles.forEach( function(jssStyle) {
      let adminStyle = document.createElement('script');
      adminStyle.setAttribute('src', jssStyle);
      document.getElementsByTagName('head')[0].appendChild(adminStyle);
    });
  }


  render() {
    return (
      <div className="container body">
        {this.props.children}
        <Alert stack={{ limit: 5 }} />
      </div>
    )
  }
}
