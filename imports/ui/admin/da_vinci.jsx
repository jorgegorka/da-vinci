import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'
//import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import MainHeader from './layout/header/main_header.jsx';
import MainFooter from './layout/footer/main_footer.jsx';

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
    document.body.classList.add('nav-md')
  }

  render() {
    return (
      <div id="main-app" className="container body">
        <div className="main_container">
          <MainHeader currentUser={ this.props.currentUser }/>
          <div className="right_col" role="main">
            { this.props.children }
          </div>
          <MainFooter />
        </div>
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
