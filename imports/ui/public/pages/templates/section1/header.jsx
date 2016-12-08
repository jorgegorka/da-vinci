import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents';

import Loading from '../../../../utils/containers/loading';

class PublicSection1Header extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="row">
        <article className="text-center">
          <h1>{ this.props.pageContent.imageTitle }</h1>
          <div className="single-product-description" dangerouslySetInnerHTML={ { __html: this.props.pageContent.text } } >
          </div>
  			</article>
        <hr className="hr-nobg" />
      </div>
    );
  }
}

PublicSection1Header.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'section-description');

  return {
    loading: !subscription.ready(),
    pageContent: PageContents.findOne({ contentType: 'section-description' }, { sort: { order: 1 } }),
  };
}, PublicSection1Header);
