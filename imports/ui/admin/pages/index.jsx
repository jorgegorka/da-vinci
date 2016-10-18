import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PageForm from './form.jsx';
import PageList from './list.jsx';


class PagesIndex extends Component {
  selectParentPages() {
    let allItems = this.props.pages.map((page) => (
      { value: page._id, title: page.name }
    ));

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  selectPageTypes() {
    let allItems = this.props.pageTypes.map((pageType) => (
      { value: pageType._id, title: pageType.name }
    ));

    return allItems;
  }

  countSubpages(page) {
    return Pages.find({ parentId: page._id }).count();
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Pages
            <small>List of pages</small>
          </h1>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#page-form">New page</button>
        </section>
        <section className="content">
          <PageList key="top" parentId="top" pages={ Pages.find({ parentId: 'top' }).fetch() } />
          <PageForm selectParentPages={ this.selectParentPages() } selectPageTypes={ this.selectPageTypes() } methodName={ 'pages.create' } formTitle='Add new page' />
        </section>
      </div>
    );
  }
};

PagesIndex.propTypes = {
  pages: PropTypes.array.isRequired,
  pageTypes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('pages');
  let subscription = Meteor.subscribe('pageTypes');

  return {
    pages: Pages.find({}, { $sort: { name: 0 }}).fetch(),
    loading: !subscription.ready(),
    pageTypes: PageTypes.find({}, { $sort: { name: 0 }}).fetch(),
  };
}, PagesIndex);
