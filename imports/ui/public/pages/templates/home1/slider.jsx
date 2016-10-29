import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import PublicHome1SliderImage from './slider_image.jsx'

export default class PublicHome1Slider extends Component {
  componentDidMount() {
    $("#homeSlider").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 9000,
      navigation: {
          arrows: { enable:true }
      },
      gridwidth: 1230,
      gridheight: 720
    });
  }
  render() {
    let sliderImages = []; // iterate over images
    return(
      <div className="bannercontainer">
    		<div className="rev_slider" data-fullscreen="on" id="homeSlider"  data-version="5.0">
    			<ul>
            { sliderImages }
    			</ul>
    		</div>
    	</div>
    );
  }
}

PublicHome1Slider.propTypes = {
  pageId: PropTypes.string.isRequired
};
