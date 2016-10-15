import React, { Component, PropTypes } from 'react';

export default class CategoryItem extends Component {
  render() {
    return(
      <tr>
        <td>{ this.props.category.name }</td>
      </tr>
    );
  }
};
