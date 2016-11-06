import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

export default class PublicProduct1Description extends Component {
  render() {
    return(
      <div className="col-md-6">
        <h3>{ this.props.title }</h3>
        <div className="single-product-description" dangerouslySetInnerHTML={ { __html: this.props.description } } >
  			</div>
      </div>
    );
  }
}

PublicProduct1Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
