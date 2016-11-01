import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';

class PublicHome1MainContent extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    let pageContent = this.props.pageContents[0];

    return(
    	<div className="container">
    		<div className="row irow-xs">
    			<div className="col-md-4 col-sm-4 text-wrap">
    				<h2>{ pageContent.imageTitle }</h2>
    				<div className="heading-divider"></div>
            <div dangerouslySetInnerHTML={ { __html: pageContent.text } } ></div>
    			</div>
    			<div className="col-md-7 col-sm-7 col-sm-offset-1 img-wrap img-wrap-right" style={ { height: '488px', position: 'relative' } }>
    				<img src={ pageContent.imagePath } data-animate="fadeInRight" alt="" className="animated fadeInRight" />
    			</div>
    		</div>
    	</div>
    );
  }
}

PublicHome1MainContent.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'main-content');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'main-content' }, { $sort: { order: 0 }}).fetch(),
  };
}, PublicHome1MainContent);
