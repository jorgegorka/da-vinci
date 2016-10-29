import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentColumn from '../../../../utils/containers/column.jsx';
import ContentRow from '../../../../utils/containers/row.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';
import ContentImageEditor from '../../../../utils/containers/image_editor/index.jsx';

export default class HomeMainContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Main content</h2>
        <ContentRow>
          <ContentImageEditor includeText={ true } contentType="main-image" pageId={ this.props.pageId } className="col-lg-12 col-md-12 col-xs-12" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeMainContent.propTypes = {
  pageId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
