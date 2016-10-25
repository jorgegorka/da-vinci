import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import ContentColumn from '../../../../utils/containers/column.jsx';
import RichTextEditor from '../../../../utils/editors/rich_text.jsx';

export default class HomeBottomContent extends Component {
  constructor(props) {
    super(props)
  }

  onChange(content) {
    this.props.onChange('content5', content)
  }

  render() {
    return(
      <ContentRow>
        <ContentColumn className="col-lg-11 col-xs-12 col-md-11">
          <h2>Bottom content</h2>
          <ContentRow>
            <RichTextEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.content.content5 } editorName="bottomContent" />
          </ContentRow>
        </ContentColumn>
      </ContentRow>
    );
  }
}

HomeBottomContent.propTypes = {
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
