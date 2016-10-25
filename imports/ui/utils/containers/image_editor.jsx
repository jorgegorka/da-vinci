import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ImageEditor from '../editors/image.jsx';
import ContentColumn from './column.jsx';

export default class ContentImageEditor extends Component {
  constructor(props) {
    super(props)
  }

  onChange(file) {
    this.props.onChange(this.props.contentId, file);
  }

  render() {
    let pageSrc = 'page_images/' + this.props.content;
    return(
      <ContentColumn className={ this.props.className }>
        <ImageEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.content } editorName={ this.props.contentId } />
        <img src={ pageSrc } alt="Slider image" width="500" />
      </ContentColumn>
    );
  }
}

ContentImageEditor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contentId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
