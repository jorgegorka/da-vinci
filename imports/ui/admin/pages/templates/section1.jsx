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
        <PageContentContainer pageId={ this.props.pageId } contentType='section-content' title={ i18n.__('home1.main_content.header') }  includeText={ true } multipleContents={ true } />
        <PageContentContainer pageId={ this.props.pageId } contentType='section-description' title={ i18n.__('admin.pages.templates.section1.description_header') }  includeText={ true } multipleContents={ false } />
      </ContentColumn>
    );
  }
}

Section1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
