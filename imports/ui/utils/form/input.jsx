import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormInput extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return(
      <input
        className="form-control"
        type={ this.props.inputType || 'text' }
        value={ this.props.defaultValue }
        onChange={ this.handleChange.bind(this) }
        required={ this.props.required }
        autoFocus={ this.props.autoFocus }
        name={ this.props.name }
      />
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoFocus: PropTypes.func,
};
