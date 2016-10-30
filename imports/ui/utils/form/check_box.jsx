import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormCheckBox extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(event) {
    this.props.onChange(event.target.checked);
  }

  render() {
    return(
      <div className="checkbox">
        <label htmlFor={ this.props.htmlFor }>
          <input
            type="checkbox"
            name={ this.props.htmlFor }
            ref={ this.props.htmlFor }
            id={ this.props.htmlFor }
            onChange={ this.handleChange.bind(this) }
            checked={ this.props.checked }
          />
          { this.props.text }
        </label>
      </div>
    );
  }
}

FormCheckBox.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
