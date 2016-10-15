import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CategoryItem from './item.jsx';
import { Categories } from '../../../../lib/collections/categories.js';

class CategoriesIndex extends Component {

  renderCategories() {
    return this.props.categories.map((category) => (
      <CategoryItem key={ category._id } category={ category } />
    ));
  }

  render() {
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Categories
            <small>List of categories</small>
          </h1>
        </section>
        <section className="content">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              { this.renderCategories() }
            </tbody>
          </table>
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
