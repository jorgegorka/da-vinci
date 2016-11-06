import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import PublicProduct1Description from './description.jsx';
import PublicProduct1Slider from './slider.jsx';
import Loading from '../../../../utils/containers/loading.jsx';

class PublicProduct1MainContent extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    let pageContent = this.props.pageContents[0];

    return(
    	<div className="container">
    		<div className="row irow-sm type-product">
    			<div className="col-md-6">
            <PublicProduct1Slider pageId={ this.props.pageId } />
    			</div>
          <PublicProduct1Description title={ this.props.title } description={ pageContent.text } />
    		</div>
    	</div>
    );
  }
}

PublicProduct1MainContent.propTypes = {
  pageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'product-description');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'product-description' }, {}).fetch(),
  };
}, PublicProduct1MainContent);
