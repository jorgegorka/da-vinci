import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../../../lib/collections/categories.js';

import CategoryItem from './item.jsx';
import CategoryForm from './form.jsx';


class CategoriesIndex extends Component {

  renderCategories() {
    return this.props.categories.map((category) => (
      <CategoryItem key={ category._id } category={ category } subcategories={ this.countSubcategories(category) }/>
    ));
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
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#category-form">New category</button>
        </section>
        <section className="content">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subcategories</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              { this.renderCategories() }
            </tbody>
          </table>
          <CategoryForm />
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
    categories: Categories.find({}, { sort: { createdAt: -1 }}).fetch(),
  };
}, CategoriesIndex);
