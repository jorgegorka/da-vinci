import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';


export default class PublicHome1SliderImage extends Component {
  render() {
    return(
      <li data-index={ 'rs-' + this.props.pageContent._id } data-transition="parallaxvertical" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="A STUDY ON HAPPINESS" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="Science says that Women are generally happier">
    		<img src={ this.props.pageContent.imagePath }  alt={ this.props.pageContent.imageTitle }  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
    	</li>
    );
  }
}

PublicHome1SliderImage.propTypes = {
  pageContent: PropTypes.object.isRequired
};
