import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../../lib/collections/pages.js';

import Loading from '../../../utils/containers/loading.jsx';
import PublicRouteGenerator from '../../../utils/helpers/public_route_generator.jsx';

class PublicFooter extends Component {
  topMenuItems() {
    return this.props.pages.map( function(page, index){
      return(
        <PublicRouteGenerator key={ index } page={ page } />
      );
    });
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <footer className="footer footer-dark">
        <div className="footer-extra">
      		<div className="container">
      			<nav className="contact-info pull-left">
      				<a href={ 'tel:' + this.props.settings.publicPhone } className="phone"><i className="fa fa-phone"></i> { this.props.settings.publicPhone }</a>
      				<a href={ 'mailto:' + this.props.settings.publicEmail } className="email"><i className="fa fa-envelope-o"></i> { this.props.settings.publicEmail }</a>
      			</nav>
      			<nav className="extra-menu pull-right">
      				{ this.topMenuItems() }
      			</nav>
      		</div>
      	</div>
      </footer>
    );
  }
}

PublicFooter.propTypes = {
  settings: PropTypes.object.isRequired
};

export default createContainer(() => {
  let subscription = Meteor.subscribe('parentPages', 'top');

  return {
    pages: Pages.find({ parentId: 'top' }, { $sort: { order: 0 }}).fetch(),
    loading: !subscription.ready()
  };
}, PublicFooter);
