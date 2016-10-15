import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CategoryItem from './item.jsx';
import { Categories } from '../../../../lib/collections/categories.js';

class CategoriesIndex extends Component {

  renderCategories() {
    return this.props.categories.map((category) => (
      <CategoryItem key={category._id} category={category} />
    ));
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          { this.renderCategories() }
        </tbody>
      </table>
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
