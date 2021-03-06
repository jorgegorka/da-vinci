import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';

export default class PageList extends Component {
  constructor(props) {
    super(props);
  }

  countSubPages(page) {
    return Pages.find({ parentId: page._id }).count();
  }

  findSubPages(page) {
    return Pages.find({ parentId: page._id }, { sort: { order: 1 }}).fetch();
  }

  render() {
    if (!this.props.pages) {
      return(null);
    };

    let allItems = this.props.pages.map((page, index) => (
      <li key={ this.props.parentId + index }>
        <a href={ '/admin/page/' + page.nameSlug } title={ i18n.__('admin.pages.list.show_page') }>{ page.name } { page.draft === true ? i18n.__('admin.pages.list.draft') : null }</a>
        { this.countSubPages(page) > 0 ?
        <PageList key={ page._id } parentId={ page._id } pages={ this.findSubPages(page) } /> : null }
      </li>
    ));

    return (
      <ul>
        { allItems.length > 0 ? allItems : null }
      </ul>
    );
  }
}

PageList.propTypes = {
  parentId: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
};
