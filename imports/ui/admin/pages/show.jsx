import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../../lib/collections/pages.js';
import PageForm from './form.jsx';

class PagesShow extends Component {
  selectItems() {
    let allItems = this.props.pages.map((page) => (
      { value: page._id, title: page.name }
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
        <page className="content-header">
          <h1>
            { this.props.page.name }
          </h1>
          <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#page-form">Edit page</button>
        </page>
        <page className="content">
          <PageForm selectItems={ this.selectItems() } methodName={ 'pages.updatePage' } page={ this.props.page } formTitle='Edit page' />
        </page>
      </div>
    )
  }
}

PagesShow.propTypes = {
  // subPages: PropTypes.array.isRequired,
  // page: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pages');

  return {
    page: Pages.findOne({ _id: props.params.pageId }, {}),
    loading: !subscription.ready(),
    subPages: Pages.find({ parentId: props.params.pageId }, {}).fetch(),
    pages: Pages.find({}, { sort: { name: 0 }}).fetch(),
  };
}, PagesShow);
