import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Pages } from '../../../../lib/collections/pages.js';
import { PageTypes } from '../../../../lib/collections/page_types.js';

import Loading from '../../utils/containers/loading.jsx';
import PublicRouteGenerator from '../../utils/helpers/public_route_generator.jsx';
import PageForm from './form.jsx';
import PagesContentList from './content_list.jsx';

class PagesShow extends Component {
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
                <small>{ i18n.__('admin.pages.show.public_link') }: <PublicRouteGenerator page={ this.props.page } /></small>
              </h1>
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-info" data-toggle="modal" data-target="#page-form">{ i18n.__('settings.edit') }</button>
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-danger" onClick={ this.deletePage.bind(this) }>{ i18n.__('settings.delete') }</button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <PagesContentList page={ this.props.page } />
            <PageForm pages={ this.props.pages } pageTypes={ this.props.pageTypes } methodName={ 'pages.update' } page={ this.props.page } formTitle={ i18n.__('admin.pages.show.edit_page') } />
          </div>
        </section>
      </div>
    )
  }
}

PagesShow.propTypes = {
};

export default createContainer((props) => {
  // TODO: we are subscribing to all pages. Improve this.
  let subPages = Meteor.subscribe('pages');
  let subPageTypes = Meteor.subscribe('pageTypes');

  return {
    page: Pages.findOne({ nameSlug: props.params.nameSlug }, {}),
    loading: (!subPages.ready() && !subPageTypes.ready()),
    pages: Pages.find({}, { sort: { name: 1 }}).fetch(),
    pageTypes: PageTypes.find({}, { sort: { name: 1 }}).fetch(),
  };
}, PagesShow);
