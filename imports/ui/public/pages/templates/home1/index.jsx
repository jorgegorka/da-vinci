import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import PublicHome1Slider from './slider.jsx'

export default class PublicHome1Template extends Component {
  render() {
    return(
      <div className="wrapper">
        <PublicHome1Slider pageId={ this.props.page._id } />
      </div>
    );
  }
}

PublicHome1Template.propTypes = {
  page: PropTypes.object.isRequired
};
