import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSliderText extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="col-lg-4 col-md-4 col-xs-6">
        <h3>Title</h3>
        <p>contentn area</p>
        <p>button text</p>
        <p>Button link</p>
      </div>
    );
  }
}

HomeSliderText.propTypes = {
};
