import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import Home1Template from './templates/home1/index.jsx';


class ShowPageTemplate extends Component {
  render() {
    let pageTemplate;

    if (this.props.loading) {
      return(<Loading />);
    };

    switch (this.props.pageType.name) {
      case 'Home 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Contact 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'About Us 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Section 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Product 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Blog 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Legal stuff 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      case 'Footer 1':
        pageTemplate = <Home1Template page={ this.props.page } />
        break;
      default:
        pageTemplate = <Home1Template page={ this.props.page } />
    }

    return pageTemplate;
  }
}


ShowPageTemplate.propTypes = {
  page: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pages');
  Meteor.subscribe('pageTypes');

  return {
    loading: !subscription.ready(),
    pageType: PageTypes.find({ _id: props.page.pageTypeId }).fetch(),
  };
}, ShowPageTemplate);