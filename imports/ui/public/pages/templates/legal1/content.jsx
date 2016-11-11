import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';

class Legal1Content extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    let pageContent = this.props.pageContents[0];

    return(
    	<div className="container main_content">
    		<h1>{ pageContent.imageTitle }</h1>
        <div dangerouslySetInnerHTML={ { __html: pageContent.text } } ></div>
    	</div>
    );
  }
}

Legal1Content.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'legal-content');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'legal-content' }, { $sort: { order: 0 }}).fetch(),
  };
}, Legal1Content);
