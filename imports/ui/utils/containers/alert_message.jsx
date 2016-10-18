import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class AlertMessage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let btnClass = classNames(
      'alert-' + this.props.alertType,
      { 'alert alert-dismissible': true }
    );

    if (this.props.alertText) {
      return(
        <div className={ btnClass }>
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h4><i className="icon fa fa-ban"></i> { this.props.alertTitle }</h4>
          <p>
            { this.props.alertText }
          </p>
        </div>
      );

    } else {
      return(null);
    }
  }
}

AlertMessage.propTypes = {
  alertText: PropTypes.string,
  alertTitle: PropTypes.string,
  alertType: PropTypes.oneOf([ 'success', 'warning', 'danger', 'info' ]).isRequired,
};
