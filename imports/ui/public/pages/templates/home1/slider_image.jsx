import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
import classNames from 'classnames';

export default class PublicHome1SliderImage extends Component {
  render() {
    let selectedClass = classNames(
      { 'item': true },
      { 'active': this.props.firstImage }
    );

    return(
      <div className={ selectedClass }>
        <img src={ this.props.pageContent.imagePath } alt={ this.props.pageContent.imageTitle } />
        <div className="carousel-caption">
          <h3>
            <a href={ this.props.pageContent.targetLink } title={ this.props.pageContent.imageTitle }>
              { this.props.pageContent.imageTitle }
            </a>
          </h3>
          <div dangerouslySetInnerHTML={ { __html: this.props.pageContent.text } } ></div>
        </div>
      </div>
    );
  }
}

PublicHome1SliderImage.propTypes = {
  pageContent: PropTypes.object.isRequired,
  firstImage: PropTypes.bool.isRequired
};
