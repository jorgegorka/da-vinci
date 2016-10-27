import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import Home1Template from './templates/home1/index.jsx';
import Product1Template from './templates/product1/index.jsx';


class ShowPageTemplate extends Component {
  render() {
    let pageTemplate;

    if (this.props.loading) {
      return(<Loading />);
    };

    switch (this.props.pageType.name) {
      case 'Home 1':
        pageTemplate = <Home1Template pageId={ this.props.page._id } />
        break;
      case 'Contact 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      case 'About Us 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      case 'Section 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      case 'Product 1':
        pageTemplate = <Product1Template pageId={ this.props.page._id } />
        break;
      case 'Blog 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      case 'Legal stuff 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      case 'Footer 1':
        pageTemplate = <Home1Template page={ this.props.page._id } />
        break;
      default:
        pageTemplate = <Home1Template page={ this.props.page._id } />
    }

    return pageTemplate;
  }
}


ShowPageTemplate.propTypes = {
  page: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageTypes');

  console.log(props.page.pageTypeId);
  return {
    loading: !subscription.ready(),
    pageType: PageTypes.findOne({ _id: props.page.pageTypeId }),
  };
}, ShowPageTemplate);
