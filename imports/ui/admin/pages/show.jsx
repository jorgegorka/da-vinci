import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PageForm from './form.jsx';

class PagesShow extends Component {
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

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="content-wrapper">
        <page className="content-header">
          <h1>
            { this.props.page.name }
          </h1>
          <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#page-form">Edit page</button>
        </page>
        <page className="content">
          <PageForm selectParentPages={ this.selectParentPages() } selectPageTypes={ this.selectPageTypes() } methodName={ 'pages.updatePage' } page={ this.props.page } formTitle='Edit page' />
        </page>
      </div>
    )
  }
}

PagesShow.propTypes = {
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pages');
  Meteor.subscribe('pageTypes');

  return {
    page: Pages.findOne({ _id: props.params.pageId }, {}),
    loading: !subscription.ready(),
    subPages: Pages.find({ parentId: props.params.pageId }, {}).fetch(),
    pages: Pages.find({}, { sort: { name: 0 }}).fetch(),
    pageTypes: PageTypes.find({}, { $sort: { name: 0 }}).fetch(),
  };
}, PagesShow);
