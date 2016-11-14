import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';

class PublicHome1BottomContent extends Component {
  findBottomContent() {
    if (this.props.pageContents.length > 0) {
      return this.props.pageContents[0].text;
    } else {
      return '';
    }
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div dangerouslySetInnerHTML={ { __html: this.findBottomContent() } } ></div>
    );
  }
}

PublicHome1BottomContent.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'bottom-content');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'bottom-content' }, { sort: { order: 1 }}).fetch(),
  };
}, PublicHome1BottomContent);
