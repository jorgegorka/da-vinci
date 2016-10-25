import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class ImageEditor extends Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    let file = event.currentTarget.files[0];
    this.props.onChange(file);
  }

  render() {
    return(
      <input type="file" id={ this.props.id } onChange={ this.onChange.bind(this) } />
    );
  }
}

ImageEditor.propTypes = {
  className: PropTypes.string,
  editorName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
