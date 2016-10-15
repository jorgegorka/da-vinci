import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class CategoryItem extends Component {
  render() {
    return(
      <tr>
        <td>{ this.props.category.name }</td>
        <td>{ moment(new Date(this.props.category.createdAt)).format('DD-MM-YYYY') }</td>
      </tr>
    );
  }
};
