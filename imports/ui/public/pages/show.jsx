import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PublicHome1Template from './templates/home1/index.jsx';
import PublicProduct1Template from './templates/product1/index.jsx';


class PublicPagesShow extends Component {
  render() {
    let pageTemplate;

    if (this.props.loading) {
      return(<Loading />);
    };

    let pageType = PageTypes.findOne({ _id: this.props.page.pageTypeId });

    switch (pageType.name) {
      case 'Home 1':
        pageTemplate = <PublicHome1Template page={ this.props.page } />
        break;
      case 'Contact 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      case 'About Us 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      case 'Section 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      case 'Product 1':
        pageTemplate = <PublicProduct1Template page={ this.props.page } />
        break;
      case 'Blog 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      case 'Legal stuff 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      case 'Footer 1':
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
        break;
      default:
        pageTemplate = <PublicHome1Template page={ this.props.page._id } />
    }

    return pageTemplate;
  }
}

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageWithRelatedProducts', props.params.nameSlug);
  Meteor.subscribe('pageTypes');

  return {
    page: Pages.findOne({ nameSlug: props.params.nameSlug }, {}),
    loading: !subscription.ready(),
  };
}, PublicPagesShow);
