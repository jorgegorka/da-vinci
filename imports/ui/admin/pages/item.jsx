import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

export default class PageItem extends Component {
  render() {
    let btnClass = classNames({
      'btn btn-danger': true,
      'disabled': this.props.subpages > 0,
    });

    return(
      <tr>
        <td>{ this.props.page.name }</td>
        <td>{ this.props.subpages }</td>
        <td>
          <button type="button" className="btn bg-purple margin">Edit</button>

          <button type="button" className={btnClass}>Delete</button>
        </td>
      </tr>
    );
  }
};
