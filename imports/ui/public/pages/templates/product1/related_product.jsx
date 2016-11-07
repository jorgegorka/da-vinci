import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

export default class PublicProduct1RelatedProduct extends Component {
  setSize() {
    if (this.props.totalProducts > 2) {
      return 'col-sm-4 col-lg-4 col-xs-6';
    } else {
      return 'col-sm-6 col-lg-6 col-xs-12';
    }
  }
  render() {
    return(
      <div className={ this.setSize() }>
        <div className="card card-image">
          <div className="figure">
            <a href="">
              <img src={ this.props.relatedProduct.imagePath } alt={ this.props.relatedProduct.title } />
            </a>
          </div>
          <div className="figure-info">
            <h4><a href={ '/page/' + this.props.relatedProduct._id }>{ this.props.relatedProduct.title }</a></h4>
            <div className="heading-divider"></div>
            <p>{ this.props.relatedProduct.info }</p>
          </div>
        </div>
      </div>
    );
  }
}

PublicProduct1RelatedProduct.propTypes = {
  relatedProduct: PropTypes.object.isRequired,
  totalProducts: PropTypes.number.isRequired
};
