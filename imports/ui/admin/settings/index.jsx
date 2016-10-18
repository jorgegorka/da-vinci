import React, { Component, PropTypes } from 'react';

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
        </section>
        <section className="content">
        </section>
      </div>
    );
  }
}


SettingsIndex.propTypes = {
};
