import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormTextArea extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return(
      <textarea className="form-control" rows={ this.props.rows } cols={ this.props.cols } value={ this.props.defaultValue } onChange={ this.handleChange.bind(this) } name={ this.props.name } id={ this.props.name }>
      </textarea>
    );
  }
}

FormTextArea.propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
};
