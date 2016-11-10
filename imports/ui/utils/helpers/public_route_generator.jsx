import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';

class PublicRouteGenerator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return(null);
    };

    if (this.props.parentPage) {
      console.log(this.props.parentPage.nameSlug );
      console.log('-------------');
      console.log(this.props.page.nameSlug);
      return(
        <a href={ '/' + this.props.parentPage.nameSlug + '/' + this.props.page.nameSlug }>
          { this.props.page.name }
        </a>
      );
    } else {
      return(
        <a href={ '/' + this.props.page.nameSlug } title={ this.props.page.name }>
          { this.props.page.name }
        </a>
      );
    }
  }
}

PublicRouteGenerator.propTypes = {
  page: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('showPage', props.page.parentId);

  return {
    parentPage: Pages.findOne({ _id: props.page.parentId }, {}),
    loading: !subscription.ready(),
  };
}, PublicRouteGenerator);
