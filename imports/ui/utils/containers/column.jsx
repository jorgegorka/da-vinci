import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class ContentColumn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    );
  }
}

ContentColumn.propTypes = {
  className: PropTypes.string.isRequired,
};
