import React, { Component, PropTypes } from 'react';

import ContentColumn from '../column.jsx';
import ImageEditor from '../../editors/image.jsx';
import RichTextEditor from '../../editors/rich_text.jsx';
import FormGroup from '../../form/group.jsx';
import FormLabel from '../../form/label.jsx';
import FormInput from '../../form/input.jsx';

export default class ContentImageEditorForm extends Component {
  render() {
    let editorName = 'rteId' + Math.floor(Math.random() * 1500);
    return(
      <ContentColumn className="col-lg-6 col-md-6 col-xs-12">
        <FormGroup>
          <FormLabel htmlFor="title" text="Add a title for the image (optional)" />
          <FormInput onChange={ this.props.onChange.bind(this, 'imageTitle') } defaultValue={ this.props.pageContent.imageTitle } name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="file" text="Select an image" />
          <ImageEditor onChange={ this.props.onChange.bind(this, 'file') } editorName={ this.props.pageContent.contentType } id="file" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="order" text="Image order in slider (optional)" />
          <FormInput onChange={ this.props.onChange.bind(this, 'order') } defaultValue={ this.props.pageContent.order.toString() } name="order" id="order" />
        </FormGroup>
        { this.props.includeText === true ?
          <FormGroup>
            <RichTextEditor onChange={ this.props.onChange.bind(this, 'text') } defaultValue={ this.props.pageContent.text } editorName={ editorName } />
          </FormGroup> : null
        }
        <FormGroup>
          <button type="button" onClick={ this.props.onSubmit.bind(this) } className="btn btn-primary">Upload image</button>
        </FormGroup>
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