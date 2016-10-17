import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormCheckBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="checkbox">
        <label htmlFor={ this.props.htmlFor }>
          <input type="checkbox" name={ this.props.htmlFor } ref={ this.props.htmlFor } />
          { this.props.text }
        </label>
      </div>
    );
  }
}

FormCheckBox.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string.isRequired,
};
