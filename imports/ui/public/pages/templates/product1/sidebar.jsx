import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';
import PublicProduct1SidebarContent from './sidebar_content.jsx';


class PublicProduct1Sidebar extends Component {
  loadContent() {
    return this.props.pageContents.map( (pageContent) => {
      return <PublicProduct1SidebarContent key={ pageContent._id } pageContent={ pageContent } />
    });
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="widget widget_about">
      	<h2 className="widget-title">About Shop</h2>
      	<ul className="widget_contact_list">
          { this.loadContent() }
      	</ul>
      </div>
    );
  }
}

PublicProduct1Sidebar.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'product-attachment');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: 'product-attachment' }, { sort: { order: 1 }}).fetch(),
  };
}, PublicProduct1Sidebar);
