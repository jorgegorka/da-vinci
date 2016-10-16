import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../../../lib/collections/categories.js';
import CategoryForm from './form.jsx';

class CategoriesShow extends Component {
  selectItems() {
    let allItems = this.props.categories.map((category) => (
      { value: category._id, title: category.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  render() {
    if (this.props.loading) {
      // show loading data info.
      return(null);
    };

    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            { this.props.category.name }
          </h1>
          <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#category-form">Edit category</button>
        </section>
        <section className="content">
          <CategoryForm selectItems={ this.selectItems() } methodName={ 'categories.updateCategory' } categoryId={ this.props.category._id } />
        </section>
      </div>
    )
  }
}

CategoriesShow.propTypes = {
  // subCategories: PropTypes.array.isRequired,
  // category: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('categories');

  return {
    category: Categories.findOne({ _id: props.params.categoryId }, {}),
    loading: !subscription.ready(),
    subCategories: Categories.find({ parentId: props.params.categoryId }, {}).fetch(),
    categories: Categories.find({}, { sort: { name: 0 }}).fetch(),
  };
}, CategoriesShow);
