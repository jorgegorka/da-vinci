import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { Settings } from '../../../../lib/collections/settings.js';

import SettingsForm from './form';

class SettingsIndex extends Component {
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
        </section>
        <section className="content">
          <SettingsForm settings={ this.props.settings } />
        </section>
      </div>
    );
  }
}


SettingsIndex.propTypes = {
};

export default createContainer((props) => {
  let settings = Meteor.subscribe('defaultSettings');

  return {
    settings: Settings.findOne(),
    loading: !settings.ready()
  };
}, SettingsIndex);
