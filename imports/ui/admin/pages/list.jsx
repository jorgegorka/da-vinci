import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../../lib/collections/pages.js';

export default class PageList extends Component {
  constructor(props) {
    super(props);
  }

  countSubPages(page) {
    return Pages.find({ parentId: page._id }).count();
  }

  findSubPages(page) {
    return Pages.find({ parentId: page._id }).fetch();
  }

  render() {
    if (!this.props.pages) {
      return(null);
    };

    let allItems = this.props.pages.map((page, index) => (
      <li key={ this.props.parentId + index }>
        <a href={ '/admin/page/' + page._id } title="Show page">{ page.name } { page.draft === true ? '(Draft)' : null }</a>
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
