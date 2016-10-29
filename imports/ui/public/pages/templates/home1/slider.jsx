import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';


export default class PublicHome1Slider extends Component {
  componentDidMount() {
    $("#homeSlider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      delay:9000,
      navigation: {
          arrows: { enable:true }
      },
      gridwidth:1230,
      gridheight:720
    });
  }
  render() {
    return(
      <div className="bannercontainer">
    		<div className="rev_slider" data-fullscreen="on" id="homeSlider"  data-version="5.0">
    			<ul>
    				<li data-thumb="http://placehold.it/1600x882" data-transition="fade" data-slotamount="7" data-saveperformance="on" className="background overlay overlay-light" style={{backgroundImage: 'url(http://placehold.it/1600x882)'}}>
    					<div className="tp-caption sft large_bold_white"  data-x="center" data-y="center" data-voffset="-85" data-speed="700" data-start="700" data-easing="easeOutBack">Welcome to Mexico</div>
    					<p className="tp-caption fade text-center" data-x="center" data-y="center" data-speed="500" data-start="900" data-easing="easeOutBack">Lorem ipsum dolor sit amet consectetur adipisicing elit seddo
    						<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Utondo enim ad minim veniam quis nostrud exercitation ullamco.</p>
    					<a href="" className="tp-caption sfb btn btn-primary btn-lg btn-wide" data-x="center" data-y="center" data-voffset="80" data-hoffset="-10" data-speed="300" data-start="1000">Read More</a>
    				</li>
    				<li data-thumb="http://placehold.it/1600x882" data-transition="fade" data-slotamount="7" data-saveperformance="on" className="background overlay overlay-light" style={{backgroundImage: 'url(http://placehold.it/1600x882)'}}>
    					<div className="tp-caption sft large_bold_white"  data-x="left" data-y="center" data-hoffset="100" data-voffset="-85" data-speed="700" data-start="700" data-easing="easeOutBack">Welcome to Mexico</div>
    					<p className="tp-caption fade" data-x="left" data-y="center" data-hoffset="100" data-speed="500" data-start="900" data-easing="easeOutBack">Lorem ipsum dolor sit amet consectetur adipisicing elit seddo
    						<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Utondo enim ad minim veniam quis nostrud exercitation ullamco.</p>
    					<a href="" className="tp-caption sfb btn btn-primary btn-lg btn-wide" data-x="left" data-y="center" data-voffset="80" data-hoffset="100" data-speed="300" data-start="1000">Read More</a>
    				</li>
    				<li data-thumb="http://placehold.it/1600x882" data-transition="fade" data-slotamount="7" data-saveperformance="on" className="background overlay overlay-light" style={{backgroundImage: 'url(http://placehold.it/1600x882)'}}>
    					<div className="tp-caption sft large_bold_white"  data-x="left" data-y="center" data-hoffset="500" data-voffset="-85" data-speed="700" data-start="700" data-easing="easeOutBack">Welcome to Mexico</div>
    					<p className="tp-caption fade" data-x="left" data-y="center" data-hoffset="500" data-speed="500" data-start="900" data-easing="easeOutBack">Lorem ipsum dolor sit amet consectetur adipisicing elit seddo
    						<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Utondo enim ad minim veniam quis nostrud exercitation ullamco.</p>
    					<a href="" className="tp-caption sfb btn btn-primary btn-lg btn-wide" data-x="left" data-y="center" data-voffset="80"  data-hoffset="500" data-speed="300" data-start="1000">Read More</a>
    				</li>
    			</ul>
    		</div>
    	</div>
    );
  }
}

PublicHome1Slider.propTypes = {
  pageId: PropTypes.string.isRequired
};
