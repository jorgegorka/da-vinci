import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'
import Alert from 'react-s-alert';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import MainHeader from './layout/header/main_header.jsx';
import LeftColumn from './layout/header/left_column.jsx';

import MainFooter from './layout/footer/main_footer.jsx';
import ControlSidebar from './layout/footer/control_sidebar.jsx';


i18n.setLocale('en');

class DaVinci extends Component {
  constructor(props){
    super(props);
    this.state  = this.getMeteorData();
  }

  getMeteorData() {
    return {
      isAuthenticated: Meteor.user() !== null,
    };
  }

  componentWillMount(){
    // Load resorces only used in admin pages
    this.loadAdminCssResources();
    this.loadAdminJavascriptResources();

    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  componentDidMount() {
    document.body.classList.add('sidebar-mini');
    document.body.classList.add('skin-black-light');
  }

  loadAdminCssResources() {
    let adminStyles = [
      '/admin/css/admin_lte_black_light.css',
      '/admin/css/quill.css',
      '/admin/css/s-alert-default.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css',
      'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.css'
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
      'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.js'
    ];

    adminStyles.forEach( function(jssStyle) {
      let adminStyle = document.createElement('script');
      adminStyle.setAttribute('src', jssStyle);
      document.getElementsByTagName('head')[0].appendChild(adminStyle);
    });
  }

  render() {
    return (
      <div id="main-app" className="wrapper">
        <MainHeader currentUser={ this.props.currentUser } />
        <LeftColumn />
        <Alert stack={{ limit: 5 }} />
        { this.props.children }
        <MainFooter />
        <ControlSidebar />
      </div>
    )
  }
}

DaVinci.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, DaVinci);
