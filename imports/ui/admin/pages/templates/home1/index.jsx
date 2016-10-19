import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import HomeSlider from './slider.jsx';
import HomeMainContent from './main_content.jsx';
import HomeBottomContent from './bottom_content.jsx';

export default class Home1Template extends Component {
  render() {
    return(
      <div className="col-lg-12 col-xs-12 col-md-12">
        <HomeSlider page={ this.props.page } />
        <HomeMainContent page={ this.props.page } />
        <HomeBottomContent page={ this.props.page } />
      </div>
    );
  }
}


Home1Template.propTypes = {
  page: PropTypes.object.isRequired,
};
