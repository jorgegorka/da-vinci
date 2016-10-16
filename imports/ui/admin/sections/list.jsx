import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Sections } from '../../../../lib/collections/sections.js';

export default class SectionList extends Component {
  constructor(props) {
    super(props);
  }

  countSubSections(section) {
    return Sections.find({ parentId: section._id }).count();
  }

  findSubSections(section) {
    return Sections.find({ parentId: section._id }).fetch();
  }

  render() {
    if (!this.props.sections) {
      return(null);
    };

    let allItems = this.props.sections.map((section, index) => (
      <li key={ this.props.parentId + index }>
        <a href={ '/admin/section/' + section._id } title="Show section">{ section.name }</a>
        { this.countSubSections(section) > 0 ?
        <SectionList key={ section._id } parentId={ section._id } sections={ this.findSubSections(section) } /> : null }
      </li>
    ));

    return (
      <ul>
        { allItems.length > 0 ? allItems : null }
      </ul>
    );
  }
}

SectionList.propTypes = {
  parentId: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
};
