import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormGroup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="form-group">
        { this.props.children }
      </div>
    );
  }
}

FormGroup.propTypes = {

};
