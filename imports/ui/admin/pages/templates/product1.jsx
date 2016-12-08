import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PageContentContainer from '../../../utils/containers/page_content.jsx';
import ContentColumn from '../../../utils/containers/column.jsx';

export default class Product1Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ContentColumn className="col-lg-12 col-xs-12 col-md-12">
        <PageContentContainer pageId={ this.props.pageId } contentType='product-image' title={ i18n.__('product1.images.header') }  includeText={ false } multipleContents={ true } />
        <PageContentContainer pageId={ this.props.pageId } contentType='product-description' title={ i18n.__('product1.content.header') }  includeText={ true } multipleContents={ false } />
        <PageContentContainer pageId={ this.props.pageId } contentType='product-attachment' title={ i18n.__('product1.attachments.header') }  includeText={ false } multipleContents={ true } />
      </ContentColumn>
    );
  }
}

Product1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
