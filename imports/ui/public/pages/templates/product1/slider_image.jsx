import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
import classNames from 'classnames';


export default class PublicProduct1SliderImage extends Component {
  render() {
    let selectedClass = classNames(
      { 'item': true },
      { 'active': this.props.firstImage }
    );

    return(
      <div className={ selectedClass }>
        <img src={ this.props.pageContent.imagePath } alt={ this.props.pageContent.imageTitle } />
        <div className="carousel-caption">
          <h3>{ this.props.pageContent.imageTitle }</h3>
        </div>
      </div>
    );
  }
}

PublicProduct1SliderImage.propTypes = {
  pageContent: PropTypes.object.isRequired,
  firstImage: PropTypes.bool.isRequired
};
