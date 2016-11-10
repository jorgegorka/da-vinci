import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';
import PublicSection1Content2 from './content_2.jsx';

class PublicSection1Template extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="wrapper">
        <div className="content">
          <PublicSection1Content2 pageContents={ this.props.pageContents } />
        </div>
      </div>
    );
  }
}

PublicSection1Template.propTypes = {
  page: PropTypes.object.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.page._id, 'section-content');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'section-content' }, { $sort: { order: 0 } }).fetch(),
  };
}, PublicSection1Template);
