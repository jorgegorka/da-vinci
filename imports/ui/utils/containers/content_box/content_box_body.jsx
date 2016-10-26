import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class ContentBoxBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="box-body no-padding">
        { this.props.children }
      </div>
    );
  }
}

ContentBoxBody.propTypes = {
};
