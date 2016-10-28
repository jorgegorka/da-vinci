import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import classNames from 'classnames';

import { Pages } from '../../../../../lib/collections/pages.js';

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }

  countSubPages(page) {
    return Pages.find({ parentId: page._id }).count();
  }

  findSubPages(page) {
    return Pages.find({ parentId: page._id }).fetch();
  }

  activeClassNames(page) {
    return(
      classNames({
        'active': false,
        'dropdown': (this.countSubPages(page) > 0)
      })
    );
  }

  render() {
    if (!this.props.pages) {
      return(null);
    };

    let allItems = this.props.pages.map((page, index) => (
      <li key={ this.props.parentId + index } className={ this.activeClassNames(page) }>
        { this.countSubPages(page) > 0 ?
          <span>
          <a href="#" title="Subpages" className="dropdown-toggle" data-toggle="dropdown">{ page.name }</a>
          <ul className="dropdown-menu sub-menu">
          <HeaderMenu key={ page._id } parentId={ page._id } pages={ this.findSubPages(page) } /> </ul>
          </span>
          : <a href={ '/page/' + page._id } title="Show page">{ page.name }</a>
        }
      </li>
    ));

    return (
      <ul className="nav navbar-nav">
        { allItems.length > 0 ? allItems : null }
      </ul>
    );
  }
}

HeaderMenu.propTypes = {
  parentId: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
};
