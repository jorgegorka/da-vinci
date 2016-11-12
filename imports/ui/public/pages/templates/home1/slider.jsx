import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import PublicHome1SliderImage from './slider_image.jsx'

class PublicHome1Slider extends Component {
  componentDidMount() {

  }

  loadSliders() {
    let firstImage = true;
    return this.props.pageContents.map( (pageContent) => {
      if (firstImage === true) {
        firstImage = false;
        return <PublicHome1SliderImage key={ pageContent._id } pageContent={ pageContent } firstImage={ true } />
      } else {
        return <PublicHome1SliderImage key={ pageContent._id } pageContent={ pageContent } firstImage={ false } />
      }
    });
  }

  loadThumbs() {
    let firstImage = true;
    return this.props.pageContents.map( (pageContent, index) => {
      if (firstImage === true) {
        firstImage = false;
        return <li key={ index } data-target="#homepage-carousel" data-slide-to="0" className="active"></li>
      } else {
        return <li key={ index } data-target="#homepage-carousel" data-slide-to={ index }></li>
      }
    });
  }

  render() {
    return(
      <div id="homepage-carousel" className="carousel slide" data-ride="carousel" data-interval="10000" data-pause="hover">
        <ol className="carousel-indicators">
          { this.loadThumbs() }
        </ol>
        <div className="carousel-inner" role="listbox">
          { this.loadSliders() }
        </div>
        <a className="left carousel-control" href="#homepage-carousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#homepage-carousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
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
