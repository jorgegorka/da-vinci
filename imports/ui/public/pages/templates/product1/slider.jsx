import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';
import PublicProduct1SliderImage from './slider_image.jsx'

class PublicProduct1Slider extends Component {
  loadSliders() {
    let firstImage = true;
    return this.props.pageContents.map( (pageContent) => {
      if (firstImage === true) {
        firstImage = false;
        return <PublicProduct1SliderImage key={ pageContent._id } pageContent={ pageContent } firstImage={ true } />
      } else {
        return <PublicProduct1SliderImage key={ pageContent._id } pageContent={ pageContent } firstImage={ false } />
      }
    });
  }

  loadThumbs() {
    let firstImage = true;
    return this.props.pageContents.map( (pageContent, index) => {
      if (firstImage === true) {
        firstImage = false;
        return <li key={ index } data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
      } else {
        return <li key={ index } data-target="#carousel-example-generic" data-slide-to={ index }></li>
      }
    });
  }



  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          { this.loadThumbs() }
        </ol>
        <div className="carousel-inner" role="listbox">
          { this.loadSliders() }
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

PublicProduct1Slider.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'product-image');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'product-image' }, { $sort: { order: 0 }}).fetch(),
  };
}, PublicProduct1Slider);
