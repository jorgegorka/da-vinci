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
      <div>
        <div className="page-title">
          <div>
            <h3>Tables <small>Some examples to get you started</small></h3>
          </div>
        </div>
        <div class="clearfix"></div>
        <div className="row">
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
        </div>
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
