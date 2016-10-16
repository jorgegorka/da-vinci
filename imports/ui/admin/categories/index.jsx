import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../../../lib/collections/categories.js';

import CategoryForm from './form.jsx';
import CategoryList from './list.jsx';


class CategoriesIndex extends Component {
  selectItems() {
    let allItems = this.props.categories.map((category) => (
      { value: category._id, title: category.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  countSubcategories(category) {
    return Categories.find({ parentId: category._id }).count();
  }

  render() {
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Categories
            <small>List of categories</small>
          </h1>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#category-form">New category</button>
        </section>
        <section className="content">
          <CategoryList key="top" parentId="top" categories={ Categories.find({ parentId: 'top' }).fetch() } />
          <CategoryForm selectItems={ this.selectItems() } methodName={ 'categories.addCategory' } />
        </section>
      </div>
    );
  }
};

CategoriesIndex.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('categories');

  return {
    categories: Categories.find({}, { sort: { name: 0 }}).fetch(),
  };
}, CategoriesIndex);
