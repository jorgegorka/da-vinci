import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Sections } from '../../../../lib/collections/sections.js';
import SectionForm from './form.jsx';

class SectionsShow extends Component {
  selectItems() {
    let allItems = this.props.sections.map((section) => (
      { value: section._id, title: section.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  render() {
    if (this.props.loading) {
      // show loading data info.
      return(null);
    };

    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            { this.props.section.name }
          </h1>
          <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#section-form">Edit section</button>
        </section>
        <section className="content">
          <SectionForm selectItems={ this.selectItems() } methodName={ 'sections.updateSection' } section={ this.props.section } formTitle='Edit section' />
        </section>
      </div>
    )
  }
}

SectionsShow.propTypes = {
  // subSections: PropTypes.array.isRequired,
  // section: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('sections');

  return {
    section: Sections.findOne({ _id: props.params.sectionId }, {}),
    loading: !subscription.ready(),
    subSections: Sections.find({ parentId: props.params.sectionId }, {}).fetch(),
    sections: Sections.find({}, { sort: { name: 0 }}).fetch(),
  };
}, SectionsShow);
