import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PageForm from './form.jsx';
import PagesContentList from './content_list.jsx';

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

  deletePage() {
    if (!this.props.page) {
      return;
    }

    if (window.confirm("Are you sure?")) {
      Meteor.call('pages.destroy', this.props.page._id, function(error, result) {
        if (error) {
          that.setState({ errorMessage: error.message });
          return
        } else {
          browserHistory.push('/admin/pages');
          $('#page-form').modal('hide');
          return
        }
      });
    }
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="content-wrapper">
        <section className="content-header">
          <div className="row">
            <div className="col-md-10">
              <h1>
                { this.props.page.name }
                <small></small>
              </h1>
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-info" data-toggle="modal" data-target="#page-form">Edit</button>
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-danger" onClick={ this.deletePage.bind(this) }>Delete</button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <PagesContentList pageId={ this.props.page._id } />
            <PageForm selectParentPages={ this.selectParentPages() } selectPageTypes={ this.selectPageTypes() } methodName={ 'pages.update' } page={ this.props.page } formTitle='Edit page' />
          </div>
        </section>
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
    pages: Pages.find({}, { sort: { name: 0 }}).fetch(),
    pageTypes: PageTypes.find({}, { $sort: { name: 0 }}).fetch(),
  };
}, PagesShow);
