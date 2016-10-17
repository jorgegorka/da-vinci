import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger alert-dismissible">
          <h4><i className="icon fa fa-ban"></i> An error has occurred!</h4>
          <p>
            { this.props.errorMessage }
          </p>
        </div>
      );

    } else {
      return(null);
    }
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};
