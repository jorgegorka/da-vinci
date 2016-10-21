import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import RichTextEditor from '../../../../utils/editors/rich_text.jsx';

export default class HomeBottomContent extends Component {
  constructor(props) {
    super(props)
  }

  onChange(content) {
    this.props.onChange(content);
  }

  render() {
    return(
      <ContentRow>
        <h2>Bottom content</h2>
        <ContentRow>
          <RichTextEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.page.content.content5 } editorName="bottomContent" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeBottomContent.propTypes = {
  page: PropTypes.object.isRequired,
};
