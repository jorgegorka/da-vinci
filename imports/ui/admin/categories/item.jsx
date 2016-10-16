import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

export default class CategoryItem extends Component {
  render() {
    let btnClass = classNames({
      'btn btn-danger': true,
      'disabled': this.props.subcategories > 0,
    });

    return(
      <tr>
        <td>{ this.props.category.name }</td>
        <td>{ this.props.subcategories }</td>
        <td>
          <button type="button" className="btn bg-purple margin">Edit</button>

          <button type="button" className={btnClass}>Delete</button>
        </td>
      </tr>
    );
  }
};
