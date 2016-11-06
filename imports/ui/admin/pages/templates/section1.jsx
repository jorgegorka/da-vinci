import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PageContentContainer from '../../../utils/containers/page_content.jsx';
import ContentColumn from '../../../utils/containers/column.jsx';

export default class Section1Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ContentColumn className="col-lg-12 col-xs-12 col-md-12">
        <PageContentContainer pageId={ this.props.pageId } contentType='product-image' title='Product images'  includeText={ false } multipleContents={ false } />
        <PageContentContainer pageId={ this.props.pageId } contentType='product-description' title='Product description'  includeText={ true } multipleContents={ false } />
        <PageContentContainer pageId={ this.props.pageId } contentType='product-attachment' title='Attachments'  includeText={ false } multipleContents={ false } />
      </ContentColumn>
    );
  }
}

Section1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
