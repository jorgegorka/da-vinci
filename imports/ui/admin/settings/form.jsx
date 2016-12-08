import React, { Component, PropTypes } from 'react';

import FormTag from '../../utils/form/index';
import FormGroup from '../../utils/form/group';
import FormLabel from '../../utils/form/label';
import FormCheckBox from '../../utils/form/check_box';
import FormInput from '../../utils/form/input';
import FormTextArea from '../../utils/form/text_area';
import FormInputTag from '../../utils/form/tag';
import AlertMessage from '../../utils/containers/alert_message';

export default class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      siteName: props.settings.siteName || '',
      siteSlogan: props.settings.siteSlogan || '',
      publicEmail: props.settings.publicEmail || '',
      publicPhone: props.settings.publicPhone || '',
      googleAnalytics: props.settings.googleAnalytics || ''
    }
  }

  updateContent(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  submitEvent(event) {
    let that = this;
    let settings = {
      errorMessage: '',
      siteName: this.state.siteName || '',
      siteSlogan: this.state.siteSlogan || '',
      publicEmail: this.state.publicEmail || '',
      publicPhone: this.state.publicPhone || '',
      googleAnalytics: this.state.googleAnalytics || ''
    };

    Meteor.call('settings.update', settings, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        return
      } else {
        return
      }
    });
  }

  render() {
    return(
      <FormTag onSubmit={ this.submitEvent.bind(this) }>
        <AlertMessage alertText={ this.state.errorMessage } alertTitle={ i18n.__('admin.pages.form.error_occurred') } alertType="danger" />
        <FormGroup>
          <FormLabel text={ i18n.__('admin.settings.form.site_name') } htmlFor="name" />
          <FormInput defaultValue={ this.state.siteName } onChange={ this.updateContent.bind(this, 'siteName') } name="siteName" />
        </FormGroup>
        <FormGroup>
          <FormLabel text={ i18n.__('admin.settings.form.site_slogan') } htmlFor="siteSlogan" />
          <FormInput defaultValue={ this.state.siteSlogan } onChange={ this.updateContent.bind(this, 'siteSlogan') } name="siteSlogan" />
        </FormGroup>
        <FormGroup>
          <FormLabel text={ i18n.__('admin.settings.form.public_email') } htmlFor="publicEmail" />
          <FormInput defaultValue={ this.state.publicEmail } onChange={ this.updateContent.bind(this, 'publicEmail') } name="publicEmail" />
        </FormGroup>
        <FormGroup>
          <FormLabel text={ i18n.__('admin.settings.form.public_phone') } htmlFor="publicPhone" />
          <FormInput defaultValue={ this.state.publicPhone } onChange={ this.updateContent.bind(this, 'publicPhone') } name="publicPhone" />
        </FormGroup>
        <FormGroup>
          <FormLabel text={ i18n.__('admin.settings.form.google_analytics') } htmlFor="googleAnalytics" />
          <FormInput defaultValue={ this.state.googleAnalytics } onChange={ this.updateContent.bind(this, 'googleAnalytics') } name="googleAnalytics" />
        </FormGroup>
        <FormGroup>
          <button type="submit" className="btn btn-primary">{ i18n.__('admin.pages.form.save') }</button>
        </FormGroup>
      </FormTag>
    );
  }
}

SettingsForm.propTypes = {
  settings: PropTypes.object.isRequired,
};
