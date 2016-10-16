import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../../../lib/collections/categories.js';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  countSubCategories(category) {
    return Categories.find({ parentId: category._id }).count();
  }

  findSubCategories(category) {
    return Categories.find({ parentId: category._id }).fetch();
  }

  render() {
    if (!this.props.categories) {
      return(null);
    };

    let allItems = this.props.categories.map((category, index) => (
      <li key={ this.props.parentId + index }>
        <a href={ '/admin/category/' + category._id } title="Show category">{ category.name }</a>
        { this.countSubCategories(category) > 0 ?
        <CategoryList key={ category._id } parentId={ category._id } categories={ this.findSubCategories(category) } /> : null }
      </li>
    ));

    return (
      <ul>
        { allItems.length > 0 ? allItems : null }
      </ul>
    );
  }
}

CategoryList.propTypes = {
  parentId: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};
