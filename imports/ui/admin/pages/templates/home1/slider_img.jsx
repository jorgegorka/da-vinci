import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSliderImg extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="col-lg-4 col-md-4 col-xs-6">
        <img src="/admin/placeholder_image.jpg" height="300" width="400" />
      </div>
    );
  }
}

HomeSliderImg.propTypes = {

};
