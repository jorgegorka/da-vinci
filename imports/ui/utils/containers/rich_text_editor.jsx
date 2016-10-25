import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import RichTextEditor from '../editors/rich_text.jsx';
import ContentColumn from './column.jsx';

export default class ContentRichTextEditor extends Component {
  constructor(props) {
    super(props)
  }

  onChange(content) {
    this.props.onChange(this.props.contentId, content);
  }

  render() {
    return(
      <ContentColumn className={ this.props.className }>
        <RichTextEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.content } editorName={ this.props.contentId } />
      </ContentColumn>
    );
  }
}

ContentRichTextEditor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contentId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
