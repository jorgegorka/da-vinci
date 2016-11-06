import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicHome1Slider from './slider.jsx'
import PublicHome1MainContent from './main_content.jsx'
import PublicHome1BottomContent from './bottom_content.jsx'

export default class PublicHome1Template extends Component {
  render() {
    return(
      <div className="wrapper">
        <PublicHome1Slider pageId={ this.props.page._id } />
        <PublicHome1MainContent pageId={ this.props.page._id } />
        <PublicHome1BottomContent pageId={ this.props.page._id } />
      </div>
    );
  }
}

PublicHome1Template.propTypes = {
  page: PropTypes.object.isRequired
};
