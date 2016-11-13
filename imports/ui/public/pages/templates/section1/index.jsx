import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';
import PublicSection1Content2 from './content_2.jsx';
import PublicSection1Content3 from './content_3.jsx';
import PublicSection1Content4 from './content_4.jsx';
import PublicSection1Content5 from './content_5.jsx';
import PublicSection1Content6 from './content_6.jsx';
import HeaderMetaTag from '../../../../utils/helpers/header_meta_tag.jsx';

class PublicSection1Template extends Component {
  selectContentView() {
    const content = {
      2: PublicSection1Content2,
      3: PublicSection1Content3,
      4: PublicSection1Content4,
      5: PublicSection1Content5,
      6: PublicSection1Content6
    };
    const SectionContent = content[this.props.pageContents.length];
    return <SectionContent pageContents={ this.props.pageContents } />
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="wrapper">
        <div className="content">
          { this.selectContentView() }
        </div>
        <HeaderMetaTag  metaInfo={ this.props.page.metaInfo } />
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
