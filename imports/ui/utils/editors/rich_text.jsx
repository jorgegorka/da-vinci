import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#'+this.props.editorName).summernote();
    $('#'+this.props.editorName).summernote().on('summernote.change', this.updateContents.bind(this) );
  }

  componentWillUnmount() {
    $('#'+this.props.editorName).summernote().off('summernote.change', this.updateContents );
  }

  updateContents(component, content) {
    this.props.onChange(content);
  }

  render() {
    return(
      <div id={ this.props.editorName } className="col-lg-8" dangerouslySetInnerHTML={ { __html: this.props.defaultValue } } >
      </div>
    );
  }
}

RichTextEditor.propTypes = {
  defaultValue: PropTypes.string,
  editorName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
