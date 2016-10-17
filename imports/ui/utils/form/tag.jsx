import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormTag extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return(
      <form role="form" onSubmit={ this.onSubmit.bind(this) }>
        { this.props.children }
      </form>
    )
  }
}

FormTag.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
