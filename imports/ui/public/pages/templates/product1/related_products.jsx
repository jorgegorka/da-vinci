import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicProduct1RelatedProduct from './related_product.jsx';

export default class PublicProduct1RelatedProducts extends Component {
  loadContent() {
    let totalProducts = this.props.relatedProducts.length;

    return this.props.relatedProducts.map( (relatedProduct) => {
      return <PublicProduct1RelatedProduct key={ relatedProduct._id } relatedProduct={ relatedProduct } totalProducts={ totalProducts } />
    });
  }

  render() {
    return(
      <div className="container-wrap">
        <div className="page-header text-center">
          <h2>Related Products</h2>
          <div className="heading-divider"></div>
        </div>
        <div className="row irow-xs text-center cards cards-inside cards-images">
          { this.loadContent() }
        </div>
      </div>
    );
  }
}

PublicProduct1RelatedProducts.propTypes = {
  relatedProducts: PropTypes.array.isRequired
};
