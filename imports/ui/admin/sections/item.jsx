import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

export default class SectionItem extends Component {
  render() {
    let btnClass = classNames({
      'btn btn-danger': true,
      'disabled': this.props.subsections > 0,
    });

    return(
      <tr>
        <td>{ this.props.section.name }</td>
        <td>{ this.props.subsections }</td>
        <td>
          <button type="button" className="btn bg-purple margin">Edit</button>

          <button type="button" className={btnClass}>Delete</button>
        </td>
      </tr>
    );
  }
};
