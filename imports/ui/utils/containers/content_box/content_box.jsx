import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class ContentBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="box">
        { this.props.children }
      </div>
    );
  }
}

ContentBox.propTypes = {
};
