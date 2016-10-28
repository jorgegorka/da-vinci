import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../../lib/collections/pages.js';

import Loading from '../../../utils/containers/loading.jsx';
import HeaderMenu from './menu.jsx';

class TopNavigationBar extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div id="navbar" className="navbar-collapse collapse pull-right">
        <HeaderMenu key="top" parentId="top" pages={ Pages.find({ parentId: 'top' }).fetch() } />
      </div>
    );
  }
}

export default createContainer(() => {
  let subscription = Meteor.subscribe('publicMenuPages');

  return {
    pages: Pages.find({}, { $sort: { order: 0 }}).fetch(),
    loading: !subscription.ready()
  };
}, TopNavigationBar);
