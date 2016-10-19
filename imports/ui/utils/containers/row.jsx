import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class ContentRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row">
        { this.props.children }
      </div>
    );
  }
}

ContentRow.propTypes = {
};
