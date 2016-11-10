import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Card from './card.jsx';

export default class PublicSection1Content3 extends Component {
  loadContent() {
    return this.props.pageContents.map( (pageContent) => {
      return <PublicSection1Card key={ pageContent._id } pageContent={ pageContent } className="col-sm-4" />
    });
  }

  render() {
    return(
      <div className="container">
  			<div className="row irow-xs text-center cards cards-inside cards-images">
  				{ this.loadContent() }
  			</div>
  		</div>
    );
  }
}

PublicSection1Content3.propTypes = {
  pageContents: PropTypes.array.isRequired
};
