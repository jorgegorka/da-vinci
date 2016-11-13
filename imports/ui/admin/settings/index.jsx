import React, { Component, PropTypes } from 'react';

import SettingsForm from './form.jsx';

export default class SettingsIndex extends Component {
  render() {
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Settings
            <small>Main configuration options</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="/admin"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Settings</li>
          </ol>
          <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#settings-form">Edit</button>
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
