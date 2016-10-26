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
          <ContentRichTextEditor onChange={ this.props.onChange } content={ this.props.page.content.content4 } contentId="content4" className="col-lg-6 col-xs-6 col-md-6" />
          <ContentImageEditor imageContent={ this.props.page.content.image4 } contentId="image4" pageId={ this.props.page._id } className="col-lg-6 col-xs-6 col-md-6" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeMainContent.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
