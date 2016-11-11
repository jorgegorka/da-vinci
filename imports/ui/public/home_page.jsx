import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../lib/collections/pages.js';

import Loading from '../utils/containers/loading.jsx';
import PublicHome1Template from './pages/templates/home1/index.jsx';

class HomePage extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <PublicHome1Template page={ this.props.page } />
    )
  }
}

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageWithRelatedProducts', 'home');
  Meteor.subscribe('pageTypes');

  return {
    page: Pages.findOne({ isHomePage: true, draft: false }, {}),
    loading: !subscription.ready(),
  };
}, HomePage);
