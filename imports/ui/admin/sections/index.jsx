import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Sections } from '../../../../lib/collections/sections.js';

import SectionForm from './form.jsx';
import SectionList from './list.jsx';


class SectionsIndex extends Component {
  selectItems() {
    let allItems = this.props.sections.map((section) => (
      { value: section._id, title: section.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  countSubsections(section) {
    return Sections.find({ parentId: section._id }).count();
  }

  render() {
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Sections
            <small>List of sections</small>
          </h1>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#section-form">New section</button>
        </section>
        <section className="content">
          <SectionList key="top" parentId="top" sections={ Sections.find({ parentId: 'top' }).fetch() } />
          <SectionForm selectItems={ this.selectItems() } methodName={ 'sections.addSection' } formTitle='Add new section' />
        </section>
      </div>
    );
  }
};

SectionsIndex.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('sections');

  return {
    sections: Sections.find({}, { sort: { name: 0 }}).fetch(),
  };
}, SectionsIndex);
