import React, { Component, PropTypes } from 'react';

import SettingsForm from './form.jsx';

export default class SettingsIndex extends Component {
  render() {
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            { i18n.__('admin.settings.index.header') }
            <small>{ i18n.__('admin.settings.index.options') }</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="/admin"><i className="fa fa-dashboard"></i> { i18n.__('admin.settings.index.home') }</a></li>
            <li className="active">{ i18n.__('admin.settings.index.header') }</li>
          </ol>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#settings-form">{ i18n.__('settings.edit') }</button>
        </section>
        <section className="content">
          {/* <SettingsForm formTitle='Edit settings' /> */}
        </section>
      </div>
    );
  }
}


SettingsIndex.propTypes = {
};
