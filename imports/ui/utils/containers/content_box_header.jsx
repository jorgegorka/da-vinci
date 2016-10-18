import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class ContentBoxHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="box-header">
        <h3 className="box-title">{ this.props.headerTitle }</h3>
      </div>
    );
  }
}

ContentBoxHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
