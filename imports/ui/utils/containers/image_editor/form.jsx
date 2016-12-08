import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import ContentColumn from '../column.jsx';
import ContentRow from '../row.jsx';
import ImageEditor from '../../editors/image.jsx';
import RichTextEditor from '../../editors/rich_text.jsx';
import FormGroup from '../../form/group.jsx';
import FormLabel from '../../form/label.jsx';
import FormInput from '../../form/input.jsx';

export default class ContentImageEditorForm extends Component {
  render() {
    let editorName = 'rteId' + Math.floor(Math.random() * 1500);
    return(
      <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
        <FormGroup>
          <FormLabel htmlFor="title" text={ i18n.__('utils.containers.image_editor.form.title') } />
          <FormInput onChange={ this.props.onChange.bind(this, 'imageTitle') } defaultValue={ this.props.pageContent.imageTitle } name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="file" text={ i18n.__('utils.containers.image_editor.form.file') } />
          <ImageEditor onChange={ this.props.onChange.bind(this, 'file') } editorName={ this.props.pageContent.contentType } id="file" />
        </FormGroup>
        <FormGroup>
          <ContentRow>
            <ContentColumn className="col-lg-3 col-md-3 col-xs-4">
              <FormLabel htmlFor="order" text={ i18n.__('utils.containers.image_editor.form.order') } />
              <FormInput onChange={ this.props.onChange.bind(this, 'order') } defaultValue={ this.props.pageContent.order.toString() } name="order" id="order" />
            </ContentColumn>
            <ContentColumn className="col-lg-9 col-md-9 col-xs-8">
              <FormLabel htmlFor="targetLink" text={ i18n.__('utils.containers.image_editor.form.target_link') } />
              <FormInput onChange={ this.props.onChange.bind(this, 'targetLink') } defaultValue={ this.props.pageContent.targetLink } name="targetLink" id="targetLink" />
            </ContentColumn>
          </ContentRow>
        </FormGroup>
        { this.props.includeText === true ?
          <FormGroup>
            <RichTextEditor onChange={ this.props.onChange.bind(this, 'text') } defaultValue={ this.props.pageContent.text } editorName={ editorName } />
          </FormGroup> : null
        }
      </ContentColumn>
    )
  }
}

ContentImageEditorForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pageContent: PropTypes.object.isRequired,
  includeText: PropTypes.bool.isRequired,
};
