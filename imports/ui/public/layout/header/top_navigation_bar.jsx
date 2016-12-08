import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../../lib/collections/pages.js';

import Loading from '../../../utils/containers/loading.jsx';
import HeaderMenu from './menu.jsx';

class TopNavigationBar extends Component {
  componentDidUpdate() {
    $('ul.sf-menu').superfish();
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div id="navbar" className="navbar-collapse collapse pull-right">
        <ul className="nav navbar-nav">
          <HeaderMenu
            key="top"
            parentId="top"
            pages={ Pages.find({ showInMenu: true, parentId: 'top' }, { sort: { order: 1 }}).fetch() }
            mainHeader={ true }
            selectedPage={ this.props.selectedPage }
          />
        </ul>
      </div>
    );
  }
}

export default createContainer((props) => {
  let subscription = Meteor.subscribe('publicMenuPages');
  return {
    pages: Pages.find({ showInMenu: true }, { sort: { order: 1 }}).fetch(),
    loading: !subscription.ready()
  };
}, TopNavigationBar);
