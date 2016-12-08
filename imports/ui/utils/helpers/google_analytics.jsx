import React, { Component, PropTypes } from 'react';
import ReactGA from 'react-ga'


export default class GoogleAnalytics extends Component {
  render() {
    if (!this.props.googleAnalyticsID) {
      return(null);
    }

    ReactGA.initialize(this.props.googleAnalyticsID);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    return(null);
  }
}

GoogleAnalytics.propTypes = {
  googleAnalyticsID: PropTypes.string.isRequired
};
