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
        <PageContentContainer pageId={ this.props.pageId } contentType='section-content' title='Section content'  includeText={ true } multipleContents={ true } />
      </ContentColumn>
    );
  }
}

Section1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
