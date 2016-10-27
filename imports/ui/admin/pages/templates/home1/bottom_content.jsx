import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import ContentColumn from '../../../../utils/containers/column.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';

export default class HomeBottomContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <ContentColumn className="col-lg-11 col-xs-12 col-md-11">
          <h2>Bottom content</h2>
          <ContentRow>
            <ContentRichTextEditor pageId={ this.props.pageId } contentType="footer-text" onChange={ this.props.onChange } />
          </ContentRow>
        </ContentColumn>
      </ContentRow>
    );
  }
}

HomeBottomContent.propTypes = {
  pageId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
