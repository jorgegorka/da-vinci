import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
import classNames from 'classnames';

import { Pages } from '../../../../../lib/collections/pages.js';
import PublicRouteGenerator from '../../../utils/helpers/public_route_generator.jsx';

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }

  countSubPages(page) {
    return Pages.find({ showInMenu: true, parentId: page._id }).count();
  }

  findSubPages(page) {
    return Pages.find({ showInMenu: true, parentId: page._id }, { sort: { order: 1 }}).fetch();
  }

  activeClassNames(page) {
    return(
      classNames({
        'active': false,
      })
    );
  }

  ulClassNames() {
    return(
      classNames({
        'nav navbar-nav sf-menu': this.props.mainHeader,
        'dropdown-menu sub-menu': !this.props.mainHeader,
      })
    );
  }

  menuSubHeader(page, index) {
    return(
      <li key={ this.props.parentId + index } className="dropdown">
        <a href="#" title="Subpages" className="dropdown-toggle" data-toggle="dropdown">{ page.name }</a>
        <HeaderMenu key={ page._id } parentId={ page._id } pages={ this.findSubPages(page) } mainHeader={ false } />
      </li>
    )
  }

  menuItem(page, index) {
    return(
      <li key={ this.props.parentId + index } className={ this.activeClassNames(page) }>
        <PublicRouteGenerator page={ page } />
      </li>
    )
  }

  generateMenu() {
    return this.props.pages.map((page, index) => (
      this.countSubPages(page) > 0 ? this.menuSubHeader(page, index) : this.menuItem(page, index)
    ));
  }

  render() {
    if (!this.props.pages) {
      return(null);
    };

    return (
      <ul className={ this.ulClassNames() }>
        { this.generateMenu() }
      </ul>
    );
  }
}

HeaderMenu.propTypes = {
  parentId: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  mainHeader: PropTypes.bool.isRequired,
};
