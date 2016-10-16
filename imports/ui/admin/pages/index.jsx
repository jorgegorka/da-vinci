import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../../lib/collections/pages.js';

import PageForm from './form.jsx';
import PageList from './list.jsx';


class PagesIndex extends Component {
  selectItems() {
    let allItems = this.props.pages.map((page) => (
      { value: page._id, title: page.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  countSubpages(page) {
    return Pages.find({ parentId: page._id }).count();
  }

  render() {
    return(
      <div className="content-wrapper">
        <page className="content-header">
          <h1>
            Pages
            <small>List of pages</small>
          </h1>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#page-form">New page</button>
        </page>
        <page className="content">
          <PageList key="top" parentId="top" pages={ Pages.find({ parentId: 'top' }).fetch() } />
          <PageForm selectItems={ this.selectItems() } methodName={ 'pages.addPage' } formTitle='Add new page' />
        </page>
      </div>
    );
  }
};

PagesIndex.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('pages');

  return {
    pages: Pages.find({}, { sort: { name: 0 }}).fetch(),
  };
}, PagesIndex);
