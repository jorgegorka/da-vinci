import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import { Settings } from '../../../lib/collections/settings.js';

import Loading from '../utils/containers/loading.jsx';
import GoogleAnalytics from '../utils/helpers/google_analytics';
import PublicHeader from './layout/header/index.jsx';
import PublicFooter from './layout/footer/index.jsx';

i18n.setLocale('es')

class DaVinciPublic extends Component {
  componentWillMount(){
    // Load resorces only used in public pages
    this.loadPublicCssResources();
    this.loadPublicJavascriptResources();
  }

  loadPublicCssResources() {
    let publicStyles = [
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,cyrillic',
      'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css',
      '/public/css/style.css',
      '/public/css/custom-style.css'
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
      '/public/js/superfish.min.js'
    ];

    publicStyles.forEach( function(jssStyle) {
      let publicStyle = document.createElement('script');
      publicStyle.setAttribute('src', jssStyle);
      document.getElementsByTagName('head')[0].appendChild(publicStyle);
    });
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return (
      <div>
        <GoogleAnalytics googleAnalyticsID={ this.props.settings.googleAnalytics } />
        <PublicHeader settings={ this.props.settings } selectedPage= { this.props.params.nameSlug } />
          { this.props.children }
        <PublicFooter settings={ this.props.settings } />
      </div>
    )
  }
}

export default createContainer(() => {
  let settings = Meteor.subscribe('defaultSettings');

  return {
    settings: Settings.findOne(),
    loading: !settings.ready()
  };
}, DaVinciPublic);
