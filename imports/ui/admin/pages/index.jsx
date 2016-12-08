import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PageForm from './form.jsx';
import PageList from './list.jsx';

class PagesIndex extends Component {
  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            { i18n.__('admin.pages.index.pages') }
            <small>{ i18n.__('admin.pages.index.list_pages') }</small>
          </h1>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#page-form">{ i18n.__('admin.pages.index.new_page') }</button>
        </section>
        <section className="content">
          <PageList key="top" parentId="top" pages={ Pages.find({ parentId: 'top' }, { sort: { order: 1 }}).fetch() } />
          <PageForm pages={ this.props.pages } pageTypes={ this.props.pageTypes } methodName={ 'pages.create' } formTitle={ i18n.__('admin.pages.index.form_title') } />
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
  let subPages = Meteor.subscribe('pages');
  let subPageTypes = Meteor.subscribe('pageTypes');

  return {
    pages: Pages.find({}, { sort: { order: 1 }}).fetch(),
    loading: (!subPages.ready() && !subPageTypes.ready()),
    pageTypes: PageTypes.find({}, { sort: { name: 1 }}).fetch(),
  };
}, PagesIndex);
