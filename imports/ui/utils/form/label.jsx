import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormLabel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <label htmlFor={ this.props.htmlFor }>
        { this.props.text }
      </label>
    );
  }
}

FormLabel.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string.isRequired,
};
