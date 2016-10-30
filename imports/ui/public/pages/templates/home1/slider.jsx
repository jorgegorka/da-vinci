import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import PublicHome1SliderImage from './slider_image.jsx'

class PublicHome1Slider extends Component {
  componentDidMount() {
    $("#homeSlider").show().revolution({
      sliderType:"standard",
      sliderLayout:"fullwidth",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        mouseScrollReverse:"default",
        onHoverStop:"on",
        touch: {
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style:"gyges",
          enable:true,
          hide_onmobile:false,
          hide_over:778,
          hide_onleave:false,
          tmp:'',
          left: {
            h_align:"right",
            v_align:"bottom",
            h_offset:40,
            v_offset:0
          },
          right: {
            h_align:"right",
            v_align:"bottom",
            h_offset:0,
            v_offset:0
          }
        },
        tabs: {
          style:"erinyen",
          enable:true,
          width:250,
          height:100,
          min_width:250,
          wrapper_padding:0,
          wrapper_color:"transparent",
          wrapper_opacity:"0",
          tmp:'<div class="tp-tab-title">{{title}}</div><div class="tp-tab-desc">{{description}}</div>',
          visibleAmount: 3,
          hide_onmobile: true,
          hide_under:778,
          hide_onleave:false,
          hide_delay:200,
          direction:"vertical",
          span:false,
          position:"inner",
          space:10,
          h_align:"right",
          v_align:"center",
          h_offset:30,
          v_offset:0
        }
      },
      viewPort: {
        enable:true,
        outof:"pause",
        visible_area:"80%",
        presize:false
      },
      responsiveLevels:[1240,1024,778,480],
      visibilityLevels:[1240,1024,778,480],
      gridwidth:[1240,1024,778,480],
      gridheight:[900,750,500,350],
      lazyType:"none",
      parallax: {
        type:"scroll",
        origo:"enterpoint",
        speed:400,
        levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
        type:"scroll",
      },
      shadow:0,
      spinner:"off",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }

  loadSliders() {
    return this.props.pageContents.map( (pageContent) => {
      return <PublicHome1SliderImage key={ pageContent._id } pageContent={ pageContent }/>
    });
  }

  render() {
    return(
      <div id="homeSlider_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="news-gallery36" data-source="gallery" style={ { margin: '0px auto', 'backgroundColor': '#ffffff', padding: '0px', 'marginTop': '0px', 'marginBottom': '0px' } }>
      	<div id="homeSlider" className="rev_slider fullwidthabanner" style={ { display: 'none' } } data-version="5.3.0.2">
          <ul>
            { this.loadSliders() }
    			</ul>
    		</div>
    	</div>
    );
  }
}

PublicHome1Slider.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'home-slider');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'home-slider' }, { $sort: { order: 0 }}).fetch(),
  };
}, PublicHome1Slider);
