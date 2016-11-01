import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import PublicHeader from './layout/header/index.jsx';
import PublicFooter from './layout/footer/index.jsx';

i18n.setLocale('en')

export default class DaVinciPublic extends Component {
  componentWillMount(){
    // Load resorces only used in public pages
    this.loadPublicCssResources();
    this.loadPublicJavascriptResources();
  }

  loadPublicCssResources() {
    let publicStyles = [
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css',
      '/public/css/style.css',
      '/public/css/settings.css',
      '/public/css/layers.css',
      '/public/css/navigation.css'
    ];

    publicStyles.forEach( function(cssStyle) {
      let publicStyle = document.createElement('link');
      publicStyle.setAttribute('rel', 'stylesheet');
      publicStyle.setAttribute('href', cssStyle);
      document.getElementsByTagName('head')[0].appendChild(publicStyle);
    });
  }

  loadPublicJavascriptResources() {
    let publicStyles = [
      '/public/js/jquery.themepunch.tools.min.js',
      '/public/js/jquery.themepunch.revolution.min.js'
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
        <PublicHeader />
        {this.props.children}
        <PublicFooter />
      </div>
    )
  }
}
