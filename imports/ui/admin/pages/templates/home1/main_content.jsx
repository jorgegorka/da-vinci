import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentColumn from '../../../../utils/containers/column.jsx';
import ContentRow from '../../../../utils/containers/row.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';
import ContentImageEditor from '../../../../utils/containers/image_editor.jsx';

export default class HomeMainContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Main content</h2>
        <ContentRow>
          <ContentRichTextEditor onChange={ this.props.onChange } pageId={ this.props.pageId } contentType="main-text" className="col-lg-6 col-xs-6 col-md-6" />
          <ContentImageEditor contentType="main-image" pageId={ this.props.pageId } className="col-lg-6 col-xs-6 col-md-6" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeMainContent.propTypes = {
  pageId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
